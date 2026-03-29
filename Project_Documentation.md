# Project Documentation (iteration2)

## 1. Project Summary

`iteration2` is a **frontend-only** React + Vite web app for a coaching institute website.

- No backend server
- No database
- No API integration
- All content/data is currently hardcoded in frontend files

The app is a standalone frontend clone of the main coaching site with local mock data.

## 2. Tech Stack

- React 18
- Vite 7
- TypeScript
- Tailwind CSS (utility classes in JSX + app stylesheet)
- Radix UI components (`@radix-ui/*`)
- React Query (`@tanstack/react-query`) used with mock async hooks
- Wouter for routing
- Framer Motion for animations
- React Hook Form + Zod for contact form validation
- Lucide React icons

## 3. Folder Structure

- `iteration2/src/main.tsx`: app bootstrap
- `iteration2/src/App.tsx`: route configuration and layout mounting
- `iteration2/src/index.css`: global styling and utility styles
- `iteration2/src/components/layout/`: shared layout parts
  - `Navbar.tsx`
  - `Footer.tsx`
  - `PageLayout.tsx`
- `iteration2/src/pages/`: all page views
  - `home.tsx`
  - `about.tsx`
  - `courses.tsx`
  - `results.tsx`
  - `faculty.tsx`
  - `contact.tsx`
  - `not-found.tsx`
- `iteration2/src/hooks/use-coaching-data.ts`: all mock datasets + mock query/mutation hooks
- `iteration2/public/images/`: static local hero/campus images

## 4. Routing

Routes are defined in `src/App.tsx`:

- `/` -> Home
- `/courses` -> Courses
- `/results` -> Results
- `/faculty` -> Faculty
- `/about` -> About
- `/contact` -> Contact
- fallback -> Not Found

Routing is client-side via Wouter.

## 5. Data Layer (Hardcoded)

Primary hardcoded datasets are in:

- `src/hooks/use-coaching-data.ts`
  - `MOCK_COURSES`
  - `MOCK_FACULTY`
  - `MOCK_RESULTS`
  - `MOCK_TESTIMONIALS` (extended, used by home carousel)

The file also contains mock hooks:

- `useCourses()`
- `useFaculty()`
- `useResults()`
- `useTestimonials()`
- `useSubmitContact()`

These hooks return hardcoded arrays with artificial delay (`setTimeout`-style async) to simulate network calls.

## 6. Hardcoded Content Outside Data Hook

In addition to the mock datasets, several UI texts/stats are hardcoded directly in page/layout files.

### Home page
File: `src/pages/home.tsx`

Hardcoded in component:

- Hero heading/subheading text
- Floating stats labels and numbers (`50000+`, `500+`, `200+`, `15+`)
- Achievement banner counts and labels
- Why Choose Us cards (title/description/icon list)
- Testimonials section title/subtitle
- Testimonials carousel behavior:
  - shows 3 testimonials per slide
  - left/right arrow navigation
  - auto-slide every 5 seconds
  - hover animation on testimonial cards

### About page
File: `src/pages/about.tsx`

Hardcoded in component:

- Mission and Vision paragraphs
- Timeline milestone list
- Facilities list

### Courses page
File: `src/pages/courses.tsx`

Hardcoded in component:

- Category tabs (`All`, `JEE`, `NEET`, `Foundation`)
- Styling logic by category

### Results page
File: `src/pages/results.tsx`

Hardcoded in component:

- Exam filters
- Highlight numbers (`500+ IIT`, `1200+ NEET`, etc.)
- Year-on-year results table values

### Faculty page
File: `src/pages/faculty.tsx`

Hardcoded in component:

- Subject color mapping function
- CTA content for faculty application section

### Contact page
File: `src/pages/contact.tsx`

Hardcoded in component:

- Address, phone, email, working hours
- Program dropdown options
- Placeholder map area text

Form submit is mock-only via `useSubmitContact()` in `use-coaching-data.ts`.

### Navbar and Footer
Files:

- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`

Hardcoded in component:

- Announcement ticker text
- Nav link list
- Footer quick links/program list/contact info/social links

## 7. Static Assets

- `public/images/hero-bg.png`
- `public/images/campus.png`

These are local images used by Home/About hero sections.

## 8. Build and Run

From the project folder (`/home/akshat/Pictures/iteration2`):

- Install dependencies: `npm install`
- Dev: `npm run dev`
- Typecheck: `npm run typecheck`
- Build: `npm run build`
- Preview production build: `npm run serve`

## 9. Current Constraints

- Content is fragmented across multiple files (not fully centralized)
- No CMS or backend-driven content
- Contact submission is simulated only

## 10. Suggested Next Improvement

To simplify maintenance, move all editable content (stats, hero copy, timeline, footer info, filters, table rows, testimonials, etc.) into one or more centralized config/data files (for example `src/content/site-content.ts`) and keep pages purely presentational.

## 11. Recent UI/UX Enhancements (Iteration 2)

### Contact Page - Map Integration
- **File**: `src/pages/contact.tsx`
- **Change**: Replaced placeholder map area with functional `MapEmbed` component
- **Details**: 
  - Imports `MapEmbed` from `src/components/ui/mapembed.tsx`
  - Displays embedded Google Map of Austria Business Center
  - Responsive iframe with lazy loading and referrer policy

### Global Floating Action Buttons
- **File**: `src/components/layout/PageLayout.tsx`
- **Change**: Added call and WhatsApp buttons to global layout
- **Details**:
  - Call button: Fixed at `bottom-100px, right-30px` (navy blue with yellow border)
  - WhatsApp button: Fixed at `bottom-30px, right-30px` (green)
  - Both buttons appear on every page and persist on scroll
  - Responsive adjustments for mobile devices
  - Components: `src/components/callbutton-whatsappbutton/callbutton.jsx` and `whatsappbtn.jsx`

### Courses Page - Demo Pricing
- **File**: `src/pages/courses.tsx`
- **Change**: Added demo pricing display to course cards
- **Details**:
  - Shows bold rupee (₹) symbol with price centered above Enroll button
  - Pricing mapped by category:
    - JEE: ₹1,29,999
    - NEET: ₹1,19,999
    - Foundation: ₹79,999
  - Positioned at card bottom, text color primary

### Home Page - Why Choose Us Card Enhancements
- **File**: `src/pages/home.tsx`
- **Changes**:
  1. **Hover Animation**: Cards lift up 8px with 1.02x scale on hover
     - Spring transition for smooth, bouncy motion
  2. **Progress Bar**: 
     - Animated blue bar at top-edge of each card
     - Changed to orange (accent color)
     - Animation duration slowed to 700ms (from 300ms)
     - Expands left-to-right on hover
  3. **Shadow Enhancement**: 
     - Base shadow: `shadow-md` (upgraded from `shadow-sm`)
     - Hover shadow: `shadow-2xl` (upgraded from `shadow-xl`)
  4. **Icon Hover Effect**: 
     - Icon scales and rotates slightly on card hover
     - Transition duration 300ms

### About Page - Mission & Vision Cards
- **File**: `src/pages/about.tsx`
- **Changes**:
  1. **Background Color**:
     - Both cards now use light navy (`bg-slate-700`)
     - Previously: Mission was white, Vision was primary blue
     - Border color: `border-slate-600`
  2. **Text Colors**: 
     - All text now white/white with opacity for consistency
     - Icon circle background: `bg-white/10`
  3. **Hover Animation**:
     - Lift effect: -8px on Y-axis
     - Scale: 1.02x
     - Spring transition for smooth motion
     - Shadow upgrade on hover: `hover:shadow-2xl`
     - Cursor changes to pointer

## 12. Component Files Added/Modified

### New Components
- `src/components/callbutton-whatsappbutton/callbutton.jsx` - Call button component
- `src/components/callbutton-whatsappbutton/whatsappbtn.jsx` - WhatsApp button component
- `src/components/callbutton-whatsappbutton/callbutton.css` - Call button styles
- `src/components/callbutton-whatsappbutton/whatsappbtn.css` - WhatsApp button styles

### Modified Components
- `src/pages/contact.tsx` - Map integration
- `src/components/layout/PageLayout.tsx` - Global button mounting
- `src/pages/courses.tsx` - Pricing display
- `src/pages/home.tsx` - Why Choose Us animations and styling
- `src/pages/about.tsx` - Mission/Vision card styling and animations

## 13. Import Path Notes

- Uses path alias `@/` for imports (configured in `tsconfig.json`)
- All component imports follow the alias pattern for consistency
