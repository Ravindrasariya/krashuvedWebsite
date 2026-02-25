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
- Admin panel at `/admin` for managing banners and testimonials
- Auto-rotating banner/slider on homepage
- Products section with alternating image/description layout
- Testimonials section populated from database
- Footer with navigation links and contact info

## Pages
- `/` - Home (banner slider, products, testimonials)
- `/products` - Products page
- `/about` - About Us (placeholder)
- `/contact` - Contact Us (placeholder)
- `/admin` - Admin panel for banners and testimonials

## Database Tables
- `users` - User accounts (varchar UUID primary key)
- `banners` - Homepage slider banners (serial primary key)
- `testimonials` - Customer testimonials (serial primary key)

## API Endpoints
- `GET /api/banners` - List active banners
- `POST /api/banners` - Create banner
- `PATCH /api/banners/:id` - Update banner
- `DELETE /api/banners/:id` - Delete banner
- `GET /api/testimonials` - List active testimonials
- `POST /api/testimonials` - Create testimonial
- `PATCH /api/testimonials/:id` - Update testimonial
- `DELETE /api/testimonials/:id` - Delete testimonial

## File Structure
- `shared/schema.ts` - Database schema and TypeScript types
- `server/storage.ts` - Database storage layer (PostgreSQL)
- `server/routes.ts` - API routes
- `server/seed.ts` - Database seeding
- `client/src/lib/language-context.tsx` - Hindi/English language provider
- `client/src/components/navbar.tsx` - Navigation bar with language toggle
- `client/src/components/hero-banner.tsx` - Auto-rotating banner slider
- `client/src/components/products-section.tsx` - Products showcase
- `client/src/components/testimonials-section.tsx` - Customer testimonials
- `client/src/components/footer.tsx` - Site footer
- `client/src/pages/` - Page components (home, products, about, contact, admin)
- `client/public/images/` - Generated images for banners and products
