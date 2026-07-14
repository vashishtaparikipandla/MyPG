# Tenant Discovery App Specification

## Overview
The Tenant Discovery section is the mobile-first interface for prospective tenants to browse available hostels, view details, and initiate booking or onboarding.

## Key Features & Requirements

### 1. Property List (Discovery)
- A feed of available hostels.
- Each card shows: Cover image, Name, Location, Rating, Key Amenities (as pill tags), and Price.
- Visual style: Highly rounded corners (e.g. `rounded-3xl`), soft shadows, clean white backgrounds.
- Search/Filter bar at the top with pill-shaped filter options (e.g., Sort, Filters, Map).

### 2. Property Detail View
- Large header image with back button and action icons (like, share).
- Hostel name, location, and rating.
- Horizontal scroll of amenities (Free WiFi, Breakfast, etc.).
- Highlight cards for trust signals (e.g., Sanitation Guidance, Award Winning).
- Sticky bottom bar with Price and a prominent "Choose room" or "Book" button.

### 3. Visual Styling Requirements
- **Primary Color**: Vibrant Orange (applied to main call-to-action buttons, active states).
- **Cards & Containers**: White with subtle borders/shadows, generous padding, and large border radii (`rounded-2xl` or `rounded-3xl`).
- **Typography**: Clean sans-serif, strong hierarchy between headings and secondary text.
