# My PG — Data Shape

The core entities of the My PG platform and how they relate to each other. These are the "nouns" of the system — the things the product creates, stores, and operates on.

---

## Entities

### User
A person with a login on the platform. A user has a role that determines what they can see and do.

**Fields:** id, phoneNumber, name, email, profilePhoto, role (owner | tenant | agent | admin | superAdmin), governmentIdType, governmentIdNumber, governmentIdVerified, guardianName, guardianPhone, createdAt

**Notes:** Login is always via mobile OTP. Government ID verification is mandatory for tenants and strongly encouraged for owners.

---

### Hostel
A physical PG accommodation property managed by an owner.

**Fields:** id, ownerId, name, type (ladies | gents | co-ed), description, address, city, area, pincode, latitude, longitude, photos[], rules, termsAndConditions, facilities[], parkingAvailable, hygienePolicy, electricityPolicy, waterPolicy, status (active | inactive | pending), createdAt

**Notes:** One owner can manage multiple hostels. A hostel's public profile is visible to prospective tenants before they join.

---

### Floor
A physical floor within a hostel building.

**Fields:** id, hostelId, floorNumber, label, amenities[] (lift | stairs | washingMachine | geyser | refrigerator | parking | other)

**Notes:** Floors contain rooms. Amenities on a floor are shared by all rooms on that floor.

---

### Room
A rentable unit within a hostel floor.

**Fields:** id, hostelId, floorId, title, sharingType (single | double | triple | quadruple | dormitory), totalBeds, facilities[], status (active | inactive), notes, createdAt

**Notes:** Rooms can be deactivated so their beds are excluded from vacancy counts and revenue calculations without deleting the room.

---

### Bed
An individual sleeping unit within a room.

**Fields:** id, roomId, hostelId, label, status (occupied | vacant | reserved), currentTenantId, monthlyRent, createdAt

---

### Tenant
The occupancy record linking a User (with tenant role) to a specific bed in a hostel.

**Fields:** id, userId, hostelId, roomId, bedId, joinDate, leaveDate, status (active | departed), rentDueDay, communicationOptIn, onboardingCompleted, createdAt

**Notes:** A tenant is always tied to a single bed. On checkout the record is marked departed and a review can be submitted.

---

### PaymentReminder
A monthly rent-due notification sent to a tenant.

**Fields:** id, tenantId, hostelId, bedId, amount, dueDate, status (pending | sent | acknowledged | paid), sentAt, paidAt, notes

**Notes:** No payment gateway. The owner marks a reminder as paid after confirming receipt via their preferred payment method.

---

### Expense
An operational cost recorded by a hostel owner.

**Fields:** id, hostelId, ownerId, category (grocery | salary | registration | garbagePickup | maintenance | utilities | other), description, amount, date, receiptPhoto, createdAt

---

### Issue
A maintenance or service complaint raised by a tenant.

**Fields:** id, tenantId, hostelId, title, description, photo, status (open | inProgress | resolved | closed), priority (low | medium | high), assignedTo, raisedAt, resolvedAt

---

### Review
A structured review left at the end of a tenancy. Bidirectional — owner reviews tenant and tenant reviews hostel.

**Fields:** id, authorId, authorRole (owner | tenant), targetId, targetType (hostel | tenant), rating (1–5), comment, createdAt

---

### Community
A group chat space associated with a hostel. Contains channels.

**Fields:** id, hostelId, name, type (hostel-wide | room-group), memberIds[], createdAt

---

### Message
A single chat message within a community channel.

**Fields:** id, communityId, senderId, content, attachments[], sentAt

---

### Lead
A prospective hostel owner who has expressed interest in joining the platform.

**Fields:** id, name, phone, hostelName, city, area, source (website-form | agent-self-assigned | referral), status (new | assigned | contacted | visited | onboarded | lost), assignedAgentId, createdAt, updatedAt

---

### Agent
A sales representative employed to onboard hostels in a geographic area.

**Fields:** id, userId, areas[], monthlyTarget, totalOnboarded, totalCommissionEarned, status (active | inactive), createdAt

---

### Commission
A payment record for a successfully onboarded hostel by a sales agent.

**Fields:** id, agentId, hostelId, leadId, amount, status (pending | paid), onboardedAt, paidAt

---

### Appointment
A scheduled visit by a prospective tenant to view a hostel before joining.

**Fields:** id, prospectId (userId or anonymous), hostelId, requestedDate, confirmedDate, status (requested | confirmed | completed | cancelled), notes

---

## Relationships

| From | Relationship | To |
|------|-------------|-----|
| User (owner) | manages many | Hostel |
| Hostel | contains many | Floor |
| Floor | contains many | Room |
| Room | contains many | Bed |
| Bed | occupied by one | Tenant |
| Tenant | belongs to one | User |
| Tenant | receives many | PaymentReminder |
| Hostel | has many | Expense |
| Tenant | raises many | Issue |
| Hostel | has many | Issue |
| User | writes one | Review (on departure) |
| Hostel | has one | Community (hostel-wide) |
| Room | has one | Community (room-group) |
| Community | has many | Message |
| Lead | assigned to one | Agent |
| Agent | earns many | Commission |
| Commission | tied to one | Hostel |
| Hostel | linked to one | Appointment |

---

## Key Naming Conventions

- **Hostel** — always refers to the property (not "PG" in code, for generality)
- **Tenant** — the occupancy record; the person is a **User** with role `tenant`
- **Owner** — a **User** with role `owner`; may manage many hostels
- **Agent** — a **User** with role `agent`; has an extended Agent profile
- **Bed** — the atomic bookable unit; rent is set at bed level
- **Active/Inactive** — used for rooms and agents to soft-delete without data loss
