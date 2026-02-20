# Elepta Global Formation - Product Requirements Document

## Original Problem Statement
Create a company formation website providing services for United Kingdom, USA, India, Saudi Arabia, and Qatar. Highlight UK Fast Track formation service (3-4 days). Include WhatsApp floating button and ensure desktop/mobile responsiveness.

## Company Information
- **Name**: Elepta Global Formation
- **WhatsApp**: +447818974289
- **Services**: Company formation in 5 countries
- **USP**: UK Fast Track service (3-4 days vs normal 7-15 days)

## Tech Stack
- **Frontend**: React, Tailwind CSS, Shadcn UI
- **Backend**: FastAPI, Python (to be implemented)
- **Database**: MongoDB (to be implemented)

## User Personas
1. **International Entrepreneurs**: Need quick company setup in multiple jurisdictions
2. **UK Business Owners**: Looking for fast-track formation services
3. **Global Corporations**: Expanding to new markets

## Core Requirements (Static)
### Must Have (P0)
- ✅ Responsive landing page (desktop & mobile)
- ✅ Header with navigation
- ✅ Hero section with value proposition
- ✅ Services section showcasing 5 countries
- ✅ UK Fast Track service prominently highlighted
- ✅ Testimonials section with carousel
- ✅ Contact form
- ✅ Footer with company info
- ✅ WhatsApp floating button
- ✅ Professional color scheme (Navy blue & Amber)

### Service Details
1. **United Kingdom** (Featured - Fast Track)
   - Fast Track: 3-4 days
   - Normal: 7-15 days
   - Features: Companies House registration, Certificate of Incorporation, Registered office, Digital documents

2. **United States**
   - Timeline: 10-20 days
   - Features: State filing, EIN registration, Operating agreement, Compliance support

3. **India**
   - Timeline: 15-25 days
   - Features: ROC registration, PAN & TAN, GST registration, Digital signatures

4. **Saudi Arabia**
   - Timeline: 20-30 days
   - Features: Commercial registration, MISA licensing, Tax registration, Zakat setup

5. **Qatar**
   - Timeline: 15-25 days
   - Features: Ministry registration, Trade license, Tax registration, Chamber membership

## What's Been Implemented (December 2025)

### Frontend (Complete)
- ✅ **Header Component**: Sticky navigation with smooth scrolling, mobile menu
- ✅ **Hero Section**: Gradient background, value proposition, CTA buttons, key benefits
- ✅ **Services Section**: 5 country cards with Fast Track badge for UK, timeline comparison
- ✅ **Testimonials Component**: Carousel with 6 mock testimonials, responsive layout
- ✅ **Contact Form**: Full contact form with validation (mock submission)
- ✅ **Footer**: Comprehensive footer with links, social media, contact info
- ✅ **WhatsApp Button**: Floating button with pulse animation, opens WhatsApp chat
- ✅ **Responsive Design**: Mobile-first approach, works on all screen sizes
- ✅ **Mock Data**: All data in `/app/frontend/src/data/mock.js`

### Design System
- Colors: Navy Blue (#1e3a8a, #1e40af), Amber/Gold (#f59e0b, #d97706)
- Typography: Clean, professional fonts
- Icons: Lucide-react library (no emoji icons)
- Components: Shadcn UI (Card, Button, Input, Textarea, Badge)
- Animations: Smooth transitions, hover effects, carousel navigation

## Prioritized Backlog

### P0 Features (Next Phase - Backend)
- [ ] Contact form API endpoint
- [ ] Form submissions database schema
- [ ] Email notification system for new inquiries
- [ ] Admin dashboard to view submissions

### P1 Features (Enhancement)
- [ ] Service detail pages for each country
- [ ] Pricing information
- [ ] FAQ section
- [ ] Document upload functionality
- [ ] Payment integration (Stripe)
- [ ] User authentication for tracking application status

### P2 Features (Nice to Have)
- [ ] Live chat integration
- [ ] Multi-language support
- [ ] Blog/resources section
- [ ] Client portal for document management
- [ ] Automated timeline updates
- [ ] Email marketing integration

## Next Tasks
1. **Backend Development** (Primary)
   - Create contact form API endpoint (`POST /api/contact`)
   - MongoDB schema for inquiries
   - Email notification service integration
   - Connect frontend form to backend API

2. **Testing** (Post-Backend)
   - End-to-end testing with testing_agent_v3
   - Form submission validation
   - Email delivery verification

3. **Content Enhancement**
   - Add real testimonials (if available)
   - Service pricing structure
   - FAQ content

## API Contracts (To Be Implemented)

### Contact Form Submission
```
POST /api/contact
Request Body:
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "country": "string", // uk, usa, india, saudi, qatar
  "message": "string"
}

Response:
{
  "success": boolean,
  "message": "string",
  "inquiry_id": "string"
}
```

### Get Testimonials (Optional)
```
GET /api/testimonials
Response:
{
  "testimonials": [...]
}
```

## Current Status
✅ **Phase 1 Complete**: Frontend with mock data, fully responsive, professional design
⏳ **Phase 2 Pending**: Backend development and integration
⏳ **Phase 3 Pending**: Testing and deployment

## Notes
- All data currently mocked in `/app/frontend/src/data/mock.js`
- Form submission shows success toast but doesn't persist data
- WhatsApp number: +447818974289 (configured and working)
- Design follows professional standards with no prohibited gradients
- Mobile-responsive verified via screenshots
