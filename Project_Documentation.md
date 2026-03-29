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
