# KrashuVed Website

## Overview
KrashuVed is a responsive bilingual (Hindi/English) website for an agricultural technology company. The tagline is "Your Trust, Our Priority" (आपका विश्वास, हमारी प्राथमिकता).

## Architecture
- **Frontend**: React + TypeScript + Tailwind CSS + Shadcn UI
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Routing**: Wouter (frontend), Express (backend API)
- **State Management**: TanStack React Query

## Key Features
- Hindi/English language toggle across the entire site
- Responsive design for desktop, tablet, and mobile
- Password-protected admin panel at `/admin` (uses ADMIN_PASSWORD env secret)
- Auto-rotating banner/slider on homepage
- Products section with alternating image/description layout
- CSM, Mandi Mitra, Vyappar Vriddhi products are clickable with external links
- Testimonials section populated from database
- Inline edit functionality for banners and testimonials in admin
- Visitor tracking with analytics tab in admin (total page views + unique visitors today)
- Footer with navigation links and contact info (phone: +91 888 258 9392)

## Pages
- `/` - Home (banner slider, products, testimonials)
- `/products` - Products page
- `/about` - About Us (premium design with Vision & Mission, KrashuVed Difference pillars)
- `/contact` - Contact Us (contact cards + feedback form)
- `/admin` - Admin panel (password-protected) with Banners, Testimonials, Products, Feedback, Analytics tabs

## Database Tables
- `users` - User accounts (varchar UUID primary key)
- `banners` - Homepage slider banners (serial primary key)
- `testimonials` - Customer testimonials (serial primary key)
- `visitors` - Page visit tracking (serial primary key, ipAddress, userAgent, path, visitedAt)
- `feedback` - User feedback submissions (serial primary key, name, email, message, createdAt)
- `product_images` - Product image URLs (text primary key matching product ID, imageUrl)

## API Endpoints
- `GET /api/banners` - List active banners
- `POST /api/banners` - Create banner
- `PATCH /api/banners/:id` - Update banner
- `DELETE /api/banners/:id` - Delete banner
- `GET /api/testimonials` - List active testimonials
- `POST /api/testimonials` - Create testimonial
- `PATCH /api/testimonials/:id` - Update testimonial
- `DELETE /api/testimonials/:id` - Delete testimonial
- `POST /api/track` - Record a page visit
- `POST /api/admin/login` - Validate admin password
- `GET /api/admin/visitors` - Get visitor analytics (total + unique today)
- `POST /api/feedback` - Submit feedback (public)
- `GET /api/admin/feedback` - List all feedback
- `DELETE /api/admin/feedback/:id` - Delete feedback
- `GET /api/product-images` - List product image URLs
- `PATCH /api/admin/product-images/:id` - Update product image URL

## Environment Secrets
- `ADMIN_PASSWORD` - Password for admin panel access
- `SESSION_SECRET` - Session secret
- `DATABASE_URL` - PostgreSQL connection string

## File Structure
- `shared/schema.ts` - Database schema and TypeScript types
- `server/storage.ts` - Database storage layer (PostgreSQL)
- `server/routes.ts` - API routes
- `server/seed.ts` - Database seeding
- `client/src/lib/language-context.tsx` - Hindi/English language provider
- `client/src/components/navbar.tsx` - Navigation bar with language toggle
- `client/src/components/hero-banner.tsx` - Auto-rotating banner slider
- `client/src/components/products-section.tsx` - Products showcase (CSM/MM/VV clickable)
- `client/src/components/testimonials-section.tsx` - Customer testimonials
- `client/src/components/footer.tsx` - Site footer
- `client/src/pages/` - Page components (home, products, about, contact, admin)
- `client/public/images/` - Generated images for banners and products

## Brand
- Logo: `client/public/images/krashuved-logo.png`
- Colors: Krashu = #4CAF50 (green), Ved = #FF9800 (orange)
- Phone: +91 888 258 9392
- Email: info@krashuved.com
- Address: 172 Divya Vihar, Aurobindo, Jakhya, Bhawarasala, Sanwer, Indore, 453555
- Product links: csm.krashuved.com, mm.krashuved.com, vv.krashuved.com
