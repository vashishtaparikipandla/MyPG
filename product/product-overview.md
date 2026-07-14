# My PG — Product Overview

## Description

My PG is a full-stack hostel and paying-guest (PG) management platform built for the Indian market. It digitises the heavily unorganised PG sector by giving hostel owners a single command centre to manage rooms, tenants, payments, and expenses — while giving tenants a trusted portal to discover, join, and interact with their hostel.

## Problems & Solutions

### Problem 1: No single view of profitability for hostel owners
Hostel owners across India track rent, expenses, and occupancy in physical registers or informal WhatsApp groups with no way to see profit or loss.

**Solution:** A real-time owner dashboard showing revenue, payment dues, vacancies, raised issues, and a full P&L — all updated automatically as transactions and tenant events occur.

### Problem 2: No structured tenant onboarding or identity verification
Owners have no standardised way to collect tenant details, verify government ID, or document the rental agreement, creating legal and safety risk on both sides.

**Solution:** A guided tenant onboarding flow that captures personal details, emergency contacts, and government-issued ID (Aadhaar / PAN via UIDAI API), produces a verified digital profile, and introduces the tenant to the hostel through a visual walkthrough.

### Problem 3: Tenants have zero visibility into the hostel before or after joining
Prospective tenants rely on word-of-mouth or site visits to understand facilities, rules, and pricing. Existing tenants have no formal way to raise issues or access community updates.

**Solution:** A tenant-facing portal where the complete hostel profile — floor plan, facilities, rules, T&C, photos — is publicly accessible. After joining, tenants can raise issues, view payment reminders, chat with roommates, and access a digital onboarding walkthrough.

### Problem 4: Hostel onboarding is entirely manual and unscalable
Growing the platform across cities cannot rely on the founding team alone; there is no system to manage a distributed field sales workforce.

**Solution:** A field sales agent system where agents receive geo-tagged leads from the website, visit hostels, collect onboarding fees, and log progress — all tracked in a personal agent dashboard with targets and commission visibility.

## Key Features

- Owner dashboard with revenue, payment dues, vacancies, and unresolved issues at a glance
- Multi-hostel management under a single owner account
- Floor plan builder to define floors, rooms, beds, and shared amenities
- Room management with activate/deactivate to include or exclude rooms from revenue calculations
- Guided tenant onboarding via manual entry or QR code scan
- Government ID verification (Aadhaar / PAN) via UIDAI API for every tenant
- Monthly rent reminder notifications triggered on the tenant's join date
- Operational expense tracker (grocery, salaries, maintenance, fees, utilities)
- Profit and loss report per hostel per period
- Tenant issue raising with photo, status tracking, and owner resolution flow
- Roommate group chat and hostel-wide community channel with opt-in controls
- Bidirectional review system — owner reviews tenant, tenant reviews hostel on checkout
- Appointment scheduling for prospective tenants to visit a hostel before joining
- Sales agent dashboard with leads, targets, achievements, and commission tracking
- Super admin panel to manage agents, areas, and leads across cities
