# Owner Dashboard Specification

## Overview
The Owner Dashboard is the primary mobile-first landing screen for PG owners. It provides an at-a-glance view of their business metrics, actionable alerts for dues and issues, and quick access to common daily tasks.

## Key Features & Requirements

### 1. Hostel Switcher
- A global dropdown/selector at the very top of the screen allowing the owner to switch contexts between "All Hostels" or individual properties (e.g., "PG A", "PG B"). All metrics and lists below update based on this selection.

### 2. Top-Level Metrics (Cards)
- **Total Revenue (This Month)**: Shows amount collected and a percentage comparison vs. last month.
- **Outstanding Dues**: Total amount pending.
- **Vacant Beds**: Simple count of currently empty beds across selected hostels.
- **Active Issues**: Count of unresolved tenant issues.

### 3. Payment Dues (Shortlist)
- A list of the top 3-5 tenants with the highest or most overdue pending payments.
- Each row shows: Tenant Name, Room Number, Amount Due.
- Actions: "Send Reminder" button (triggers notification) and a "Call" button for immediate follow-up.

### 4. Active Issues (Mini-Feed)
- A feed of recent unresolved issues.
- Each row shows: Issue Category (e.g., Plumbing, Electrical, Cleaning), Room Number, Urgency Level, and Tenant Name.
- Clicking an issue navigates to the detailed issue view (handled in the Issues & Community section).

### 5. Quick Actions
A horizontal scrolling row or grid of prominent buttons for high-frequency tasks:
- **Add Expense**: Quickly log a new operational cost.
- **View All Issues**: Navigate to the full issue tracker.
- **Add Tenant**: Jump to the onboarding flow.

## Mobile Layout Considerations
- **Header**: Hostel Switcher prominently displayed.
- **Metrics**: 2x2 grid of metric cards.
- **Quick Actions**: Horizontal scrolling row just below metrics.
- **Sections**: "Pending Dues" and "Recent Issues" stacked vertically as list views beneath quick actions.
