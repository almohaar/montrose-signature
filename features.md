## Montrose Hotel Booking Web App

### 1. Project Overview
- **Client:** Montrose Hotel (5-star International hotel with 2 branches in Lekki, Lagos)
- **Goal:** Build a top-rated, professional, high‑quality booking application to allow customers to:
  - Browse and filter rooms by various metrics (type, price, amenities, availability)
  - View detailed room information and image gallery
  - Select dates and make reservations
  - Complete secure online payments
  - Manage bookings via a user dashboard
  - Access essential pages: About, Services & Resorts, Contact, FAQ

### 2. Tech Stack
- **Framework:** Next.js v15 (App Router)
- **Language:** TypeScript
- **UI Library:** ShadCN/UI + Tailwind CSS v4
- **State Management:** Zustand
- **Form Handling & Validation:** React Hook Form
- **Animations:** Framer Motion
- **Payments:** Paystack (or Stripe) integration in API routes
- **Backend:** Next.js API routes (or headless CMS / external API)

### 3. Key Features
1. **Public Pages**
   - Landing / Home page: Hero banner, featured rooms, services overview
   - About page: Brand story, awards, gallery
   - Services & Resorts: List of premium services with booking links
   - FAQ page: Accordion-style common questions
   - Contact page: Professional form + embedded map
2. **Room Discovery**
   - Room listing with filters (price range, room type, capacity, amenities)
   - Date picker for availability
   - Paginated or infinite scroll layout
3. **Room Details**
   - Image carousel
   - Detailed description, amenities list
   - Pricing calendar
   - CTA to book
4. **Booking Flow**
   - Multi-step form: Dates → Guest info → Extras → Payment
   - Real-time availability validation
   - React Hook Form validation & error handling
5. **Payment Integration**
   - Secure integration with Paystack/Stripe
   - Payment confirmation & success callbacks
6. **User Dashboard**
   - Booking history & upcoming stays
   - Profile management
   - Option to modify/cancel bookings
7. **Authentication**
   - Sign-up, Sign-in, Forgot Password
   - Session handling & protected routes

### 4. Project Structure
```
/app
  /auth
    page.tsx       # Sign-in / Sign-up / Forgot password
  /booking
    [roomId]
      page.tsx      # Booking form flow
  /dashboard
    page.tsx       # User dashboard layout
  /rooms
    page.tsx       # Room listing
    /[id]
      page.tsx     # Room detail
  /about
    page.tsx
  /services
    page.tsx
  /faq
    page.tsx
  /contact
    page.tsx
  layout.tsx       # Root layout
  globals.css      # Tailwind base
/components
  RoomCard.tsx
  RoomFilter.tsx
  DatePicker.tsx
  BookingForm.tsx
  Navbar.tsx
  Footer.tsx
/lib
  api.ts           # Fetch wrappers
  zustand.ts       # Store definitions
/pages (API routes)
  /api
    /auth
    /rooms
    /bookings
    /payments

```

### 5. State & Data Flow
- **Zustand stores** for:
  - Filter criteria
  - Selected booking details
  - User session & profile
- **React Hook Form** to manage multi-step form data
- **Next.js API Routes** for server‑side operations (availability, booking, payment)

### 6. Styling & Animations
- **Tailwind CSS** for utility-first styling
- **ShadCN/UI** components for consistent design system
- **Framer Motion** for:
  - Page transitions
  - Hover & interactive effects
  - Carousel animations

### 7. Next Steps & Milestones
1. **Scaffold Project**: `npx create-next-app@latest --typescript`
2. **Install Dependencies**: ShadCN UI, Tailwind, Zustand, React Hook Form, Framer Motion, Paystack SDK
3. **Layout & Theme**: Set up root layout, global styles, design tokens
4. **Public Pages**: Build Home, About, Services, FAQ, Contact
5. **Room Listing & Filters**
6. **Room Detail & Booking Flow**
7. **Authentication & Dashboard**
8. **Payment Integration**
9. **Testing & QA**: Unit tests, end‑to‑end booking flow
10. **Deployment**: Vercel (or Render)

*Please review the outline and let me know if you'd like to adjust any features or priorities!*

