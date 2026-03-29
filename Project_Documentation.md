# Project Documentation (iteration3)

## 1. Project Summary

`iteration3` is a **frontend-only** React + Vite web app for a coaching institute website.

- No backend server
- No database
- Contact form integrates with Web3Forms API
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

- `src/main.tsx`: app bootstrap
- `src/App.tsx`: route configuration and layout mounting
- `src/index.css`: global styling and utility styles
- `src/components/layout/`: shared layout parts
  - `Navbar.tsx`
  - `Footer.tsx`
  - `PageLayout.tsx`
- `src/pages/`: all page views
  - `home.tsx`
  - `about.tsx`
  - `courses.tsx`
  - `results.tsx`
  - `faculty.tsx`
  - `contact.tsx`
  - `not-found.tsx`
- `src/hooks/use-coaching-data.ts`: all mock datasets + mock query/mutation hooks
- `public/images/`: static local hero/campus images

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

Form submit is handled directly in `contact.tsx` via Web3Forms.

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

From the project folder (`/home/akshat/Pictures/iteration3`):

- Install dependencies: `npm install`
- Dev: `npm run dev`
- Typecheck: `npm run typecheck`
- Build: `npm run build`
- Preview production build: `npm run serve`

## 9. Current Constraints

- Content is fragmented across multiple files (not fully centralized)
- No CMS or backend-driven content
- Contact submission depends on valid Web3Forms key and internet connectivity
- Contact form phone field enforces +91 country code with 10-digit numeric validation

## 10. Suggested Next Improvement

To simplify maintenance, move all editable content (stats, hero copy, timeline, footer info, filters, table rows, testimonials, etc.) into one or more centralized config/data files (for example `src/content/site-content.ts`) and keep pages purely presentational.

## 11. Recent UI/UX Enhancements (Iteration 2 & 3)

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

## 12. Contact Form Integration (Iteration 3 - Web3Forms)

### Overview
- **File**: `src/pages/contact.tsx`
- **Submission Method**: Direct POST to Web3Forms API
- **Status**: Fully functional with production-ready API key

### Form Fields & Validation

#### Name
- **Type**: Text input
- **Validation**: Minimum 2 characters required
- **Placeholder**: "John Doe"

#### Email
- **Type**: Email input
- **Validation**: Valid email format required
- **Placeholder**: "john@example.com"

#### Phone Number
- **Type**: Numeric input with country code prefix
- **Country Code**: Fixed +91 (India) - non-editable visual prefix
- **Input Restriction**: Exactly 10 digits, numeric only
- **Validation**: Regex pattern: `/^\d{10}$/`
- **Placeholder**: "9876543210"
- **Submission**: Sent as `+91XXXXXXXXXX` (country code + 10 digits)
- **UI Features**:
  - Fixed +91 prefix displayed in left side of input box
  - Input strips all non-numeric characters automatically
  - Enforces max 10 digits
  - Mobile-optimized with `inputMode="numeric"` and `type="tel"`

#### Interested Program
- **Type**: Dropdown select
- **Options**: 
  - JEE Main & Advanced
  - NEET UG
  - Foundation (Class 8-10)
  - Crash Course
- **Validation**: Selection required

#### Message / Questions
- **Type**: Textarea
- **Validation**: Minimum 10 characters required
- **Placeholder**: "Tell us about your current class, goals, and any specific queries..."
- **Size**: Minimum height 150px, non-resizable

### Web3Forms API Integration

#### Endpoint
- **URL**: `https://api.web3forms.com/submit`
- **Method**: POST
- **Content-Type**: application/json

#### API Key
- **Key**: `d25919e7-9351-4f9c-92f8-694b0eaf3597`
- **Location**: Hardcoded in `src/pages/contact.tsx` as `WEB3FORMS_ACCESS_KEY`
- **Recipient Email**: Configured in Web3Forms dashboard for this key

#### Payload Structure
```json
{
  "access_key": "d25919e7-9351-4f9c-92f8-694b0eaf3597",
  "subject": "New Contact Inquiry - BrightPath",
  "from_name": "BrightPath Website",
  "replyto": "[user-email]",
  "name": "[user-name]",
  "email": "[user-email]",
  "phone": "+91[10-digit-number]",
  "course": "[selected-program]",
  "message": "[user-message]",
  "botcheck": ""
}
```

### Success State (5-Second Auto-Dismiss)

#### Visual Feedback
- **Card Background**: Light green (`bg-green-50`)
- **Border**: Light green (`border-green-200`)
- **Icon**: Green checkmark circle from Lucide React
- **Position**: Below submit button, full form width
- **Animation**: Slide-down entrance with fade-in (Framer Motion)

#### Content
- **Title**: "Inquiry submitted successfully" (bold green text)
- **Subtitle**: "We received your details and will contact you shortly." (smaller green text)

#### Progress Bar
- **Location**: Bottom edge of success card
- **Initial Width**: 100%
- **Final Width**: 0%
- **Duration**: 5000 milliseconds (5 seconds)
- **Color**: Green (`bg-green-500`)
- **Animation**: Smooth linear transition (`ease-linear`)
- **Trigger**: Auto-dismisses card when bar reaches 0%

#### Form Reset
- All form fields clear on successful submission
- User can immediately submit another inquiry if desired

### Error Handling
- **Toast Notification**: Destructive toast displayed on submission failure
- **Error Cases**:
  - Network errors
  - Invalid API key
  - Web3Forms API rejection
  - Missing/invalid response from server
- **Toast Content**: Server message or fallback: "Something went wrong. Please try again."
- **Button State**: Disabled during submission, re-enables on success/error

### Form State Management
- **isSubmitting**: Boolean flag for button disabled state
- **showSuccessCard**: Boolean flag for success card visibility
- **successProgress**: Numeric value (0-100) for progress bar width
- **Form Reset**: Handled via React Hook Form's `form.reset()` method

### Layout Improvements
- **Card Height**: Removed forced full-height constraint (`h-full`) to eliminate excess whitespace below button
- **Responsive Grid**: Form card naturally adjusts height to content
- **Spacing**: Form content area uses `space-y-6` for consistent field-to-field gaps
- **Button Size**: Full width, 56px height, prominent styling

## 13. Contact Page Enhancements Summary

### Web3Forms & Enhanced UX (Iteration 3)
- **File**: `src/pages/contact.tsx`
- **Changes**:
  1. **Web3Forms Integration**:
     - Replaced mock submission with live Web3Forms API call
     - Form data now delivered to configured inbox
     - API key: `d25919e7-9351-4f9c-92f8-694b0eaf3597`
  2. **Phone Field Enhancement**:
     - Fixed +91 country code prefix (non-editable)
     - 10-digit numeric input only
     - Automatic digit-only filtering
     - Mobile-optimized with proper `inputMode`
  3. **Success Card with Progress Bar**:
     - Green card appears below form on success
     - Animated green progress bar depletes over 5 seconds
     - Card auto-hides when bar reaches 0%
     - Form automatically resets
  4. **Error Handling**:
     - Destructive toast on submission failure
     - User-friendly error messages
  5. **Layout Fix**:
     - Removed forced full-height on card container
     - Eliminates excessive whitespace below submit button
     - Card now wraps content naturally

## 14. Component Files Added/Modified

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

## 15. Import Path Notes

- Uses path alias `@/` for imports (configured in `tsconfig.json`)
- All component imports follow the alias pattern for consistency

## 14. Contact Form Setup (Web3Forms)

### Integration Location
- File: `src/pages/contact.tsx`
- Form submission is implemented directly inside the page component.

### Endpoint
- `POST https://api.web3forms.com/submit`

### API Key Configuration
- The key is currently hardcoded in `contact.tsx` as:
  - `const WEB3FORMS_ACCESS_KEY = "DUMMY_WEB3FORMS_KEY_REPLACE_ME";`
- Replace this dummy value with your actual Web3Forms access key.

### Payload Fields Sent
- `access_key`
- `subject`
- `from_name`
- `replyto`
- `name`
- `email`
- `phone`
- `course`
- `message`
- `botcheck`

### Success UX
- On successful submission:
  - Form resets
  - A green success card appears below the form
  - A green progress bar at the bottom of the card animates from 100% to 0%
  - Card auto-hides after 5 seconds

### Error UX
- On failed submission:
  - A destructive toast is displayed with the server or fallback error message
