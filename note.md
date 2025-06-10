I'm working on a hotel service and booking web application for an hotel in Lekki, Nigeria named Montrose... It's a 5-star luxury hotel.  following industry best practices and using only the best technologies and approaches. I'm using Next, js, TailwindCss, Typescript, Shadcn, prisma, postgres, framer-motion

 {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < rating ? "" : "opacity-30"}>
              ⭐
            </span>
          ))}

Step	What we’ll build	Description
1. Booking API-route & persistence	app/api/bookings/route.ts backed by Prisma	Turn our mock POST into a real prisma.booking.create({ … }), saving dates, guest info, extras.
2. Payment integration	Paystack (or Stripe) in the booking flow	Add a payment step after “Review”—call Paystack via API-route, handle webhook or callback, update booking status.
3. Confirmation page & email	/booking/[roomId]/confirmation page + transactional email	Show booking details, send an email confirmation via Supabase Functions or a mail service.
4. Dashboard “My Bookings”	List past & upcoming bookings under /dashboard	Fetch api/bookings?userId=…, render a table with modify/cancel actions.
5. Polishing & tests	Cypress end-to-end test of full flow	Write a Cypress spec that goes through sign-in → select room → book → payment → confirmation.

URL (App-Router “page.tsx”)	Wrapped by Layout	Purpose
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
