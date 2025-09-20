
Step	What we’ll build	Description
1. Booking API-route & persistence	app/api/bookings/route.ts backed by Prisma	Turn our mock POST into a real prisma.booking.create({ … }), saving dates, guest info, extras.
2. Manual Payment and Confirmation Integration
3. Confirmation page & (email - later)	/booking/[roomId]/confirmation page + transactional email	Show booking details, send an email confirmation via (Supabase Functions) - with Booking Reference No.
4. Dashboard “My Bookings”	List past & upcoming bookings under /dashboard	Fetch api/bookings?userId=…, render a table with modify/cancel actions.
-----------------------------------------
/	app/layout.tsx	Home / Landing
/rooms	Root layout	Room listing with filters
/rooms/[id]	Root layout	Room detail gallery, tabs, booking CTA
/services	Root layout	Services & Resorts overview
/about	Root layout	About Montrose branding & gallery
/contact	Root layout	Contact form + map
/faq	Root layout	FAQ accordion
/auth/signin	app/auth/layout.tsx	Email/password sign-in
/auth/signup	app/auth/layout.tsx	Registration
/auth/forgot-password	app/auth/layout.tsx	Request password reset
/auth/reset-password	app/auth/layout.tsx	Set new password via magic link
/booking/[roomId]	app/booking/layout.tsx	Multi-step booking form (dates → guest → extras → review)
/booking/[roomId]/payment	app/booking/layout.tsx	Paystack inline payment popup
/booking/[roomId]/confirmation	app/booking/layout.tsx	Booking confirmed page
/dashboard	app/dashboard/layout.tsx	“My Bookings” list
(future) /dashboard/profile	app/dashboard/layout.tsx	Profile settings (optional)
(future) /dashboard/bookings/[bookingId]	app/dashboard/layout.tsx	Booking detail / modify (optional)
Plus these API routes under app/api:


API Route	Method	Purpose
/api/rooms	GET	List rooms (mock or Prisma)
/api/rooms/[id]	GET	Single room detail
/api/bookings	POST	Create booking (persist via Prisma)
/api/bookings/[id]	DELETE	Cancel booking
/api/bookings/[id]	GET	(Optional) fetch one booking
/api/payments/init	POST	Init Paystack via external backend
/api/payments/verify	POST	Verify Paystack, mark booking paid
/api/auth/*	—	(NextAuth removed—Supabase Auth lives in middleware + utils)
Other “infrastructure” pages you’ll get for free or can customize:

app/not-found.tsx (404 page)

app/error.tsx (global error boundary)
