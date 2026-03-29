import type { Course, Faculty, Result, Testimonial } from "@/hooks/use-coaching-data";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Results", href: "/results" },
  { label: "Faculty", href: "/faculty" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const navbarTickerItems = [
  "Admissions Open 2025-26",
  "JEE Advanced Batch Results: 95 selections",
  "NEET Batch Results: 120 selections",
  // "Register for Scholarship Test Now!",
] as const;

export const footerContent = {
  brandName: "BrightPath",
  brandDescription:
    "India's premier coaching institute for JEE, NEET, and Foundation programs. We are committed to shaping the futures of dedicated students.",
  quickLinks: [
    { label: "About Us", href: "/about" },
    { label: "Our Faculty", href: "/faculty" },
    { label: "Past Results", href: "/results" },
    { label: "Contact Us", href: "/contact" },
    // { label: "Careers", href: "#" },
  ],
  programs: [
    { label: "JEE Main & Advanced", href: "/courses" },
    { label: "NEET UG Pre-Medical", href: "/courses" },
    { label: "Foundation (Class 8-10)", href: "/courses" },
    // { label: "Crash Courses", href: "/courses" },
    // { label: "Distance Learning", href: "/courses" },
  ],
  contact: {
    address: "123 Academic Block, Education Hub, New Delhi, India 110016",
    phone: "+91 1800-123-4568",
    email: "admissions@brightpath.edu",
  },
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
} as const;

export const homeContent = {
  hero: {
    badge: "INDIA'S PREMIER COACHING INSTITUTE",
    titleMain: "Empowering Minds.",
    titleAccent: "Shaping Futures.",
    subtitle:
      "Join the league of toppers. Unparalleled guidance for JEE Main & Advanced, NEET-UG, and Foundation courses.",
    primaryCta: "Start Your Journey",
    secondaryCta: "View Results",
  },
  floatingStats: [
    {
      label: "Students Enrolled",
      value: 50000,
      suffix: "+",
      color: "text-blue-600",
      bg: "bg-blue-50",
      icon: "users",
    },
    {
      label: "AIR Top 100",
      value: 500,
      suffix: "+",
      color: "text-accent",
      bg: "bg-orange-50",
      icon: "trophy",
    },
    {
      label: "Expert Faculty",
      value: 200,
      suffix: "+",
      color: "text-green-600",
      bg: "bg-green-50",
      icon: "book",
    },
    {
      label: "Years Legacy",
      value: 15,
      suffix: "+",
      color: "text-purple-600",
      bg: "bg-purple-50",
      icon: "target",
    },
  ],
  featuredCourses: {
    badge: "OUR PROGRAMS",
    title: "Discover Your Path",
    subtitle:
      "We offer scientifically designed, result-oriented courses tailored for various competitive exams.",
    viewAllCta: "View All Programs",
  },
  achievementStats: [
    { value: 50000, suffix: "+", label: "HAPPY STUDENTS" },
    { value: 500, suffix: "+", label: "IIT SELECTIONS" },
    { value: 1200, suffix: "+", label: "NEET SELECTIONS" },
    { value: 15, suffix: "+", label: "YEARS OF TRUST" },
  ],
  toppers: {
    title: "Our Pride. Our Stars.",
    subtitle: "Consistent track record of producing top ranks at national level.",
  },
  whyChoose: {
    title: "Why Choose BrightPath?",
    subtitle:
      "The perfect ecosystem designed specifically for competitive exam success.",
    features: [
      {
        title: "Expert Faculty",
        desc: "Learn from top educators and ex-IITians with decades of experience.",
        icon: "users",
      },
      {
        title: "Proven Results",
        desc: "A legacy of producing top ranks consistently year after year.",
        icon: "trophy",
      },
      {
        title: "Study Material",
        desc: "Comprehensive, up-to-date, and meticulously researched content.",
        icon: "file",
      },
      {
        title: "Small Batches",
        desc: "Personalized attention with optimized student-teacher ratio.",
        icon: "target",
      },
      {
        title: "Tech-Aided Learning",
        desc: "Smart classrooms, app access, and AI-driven performance analysis.",
        icon: "brain",
      },
      {
        title: "All India Test Series",
        desc: "Benchmark yourself against the best minds across the country.",
        icon: "microscope",
      },
    ],
  },
  testimonials: {
    title: "Words of Success",
    subtitle: "Real stories from students who achieved their dreams with us.",
    perPage: 3,
    autoSlideMs: 5000,
  },
} as const;

export const aboutContent = {
  hero: {
    badge: "ESTABLISHED 2005",
    titlePrefix: "The",
    titleAccent: "BrightPath",
    titleSuffix: "Story",
    subtitle:
      "Pioneering education, fostering academic excellence, and shaping careers for over a decade with uncompromised integrity.",
  },
  mission: {
    title: "Our Mission",
    text: "To provide the highest quality of education, empowering students to achieve their academic goals and nurturing them to become leaders of tomorrow through conceptual clarity and rigorous practice.",
  },
  vision: {
    title: "Our Vision",
    text: "To be the most trusted and globally recognized educational institution, known for innovation in teaching methodology, integrity in evaluation, and exceptional results year on year.",
  },
  journey: {
    title: "Journey of Excellence",
    subtitle: "Milestones that define our legacy.",
    timeline: [
      { year: "2005", title: "The Inception", desc: "Started with a small batch of 50 students in a single classroom." },
      { year: "2010", title: "First State Topper", desc: "Produced our first state rank 1 in engineering entrance exams." },
      { year: "2015", title: "Expansion", desc: "Opened 5 new centers across the state, expanding our reach." },
      { year: "2020", title: "Digital Revolution", desc: "Launched our proprietary online learning platform during the pandemic." },
      { year: "2024", title: "National Recognition", desc: "Achieved over 500+ IIT and 1200+ NEET selections nationally." },
    ],
  },
  facilities: {
    title: "Campus Facilities",
    subtitle: "A complete ecosystem for focused learning.",
    items: [
      { label: "AC Classrooms", icon: "building" },
      { label: "Vast Library", icon: "book" },
      { label: "Boys/Girls Hostel", icon: "map" },
      { label: "Modern Labs", icon: "beaker" },
      { label: "Cafeteria", icon: "coffee" },
      { label: "Transport", icon: "bus" },
    ],
  },
} as const;

export const coursesContent = {
  categories: ["All", "JEE", "NEET", "Foundation"],
  hero: {
    title: "Our Programs",
    subtitle:
      "Structured, comprehensive, and result-oriented courses meticulously designed by experts to maximize your potential.",
  },
} as const;

export const resultsContent = {
  exams: ["All", "JEE Advanced", "JEE Main", "NEET UG", "Foundation"],
  hero: {
    titlePrefix: "Hall of",
    titleAccent: "Fame",
    subtitle:
      "Celebrating the extraordinary achievements and relentless hard work of our top performers.",
  },
  selectionStats: [
    { value: "500+", label: "IIT Selections" },
    { value: "1200+", label: "NEET Selections" },
    { value: "50+", label: "State Toppers" },
  ],
  growthSection: {
    title: "Year-on-Year Growth",
    subtitle: "Consistent improvement in top selections",
    headers: ["Year", "JEE Adv (Top 1000)", "JEE Main (99+ %ile)", "NEET (650+ Score)"],
    rows: [
      ["2024", "124", "456", "342"],
      ["2023", "108", "398", "289"],
      ["2022", "92", "345", "210"],
      ["2022", "92", "345", "210"],
    ],
  },
} as const;

export const facultyContent = {
  hero: {
    title: "Our Expert Mentors",
    subtitle:
      "Learn from industry veterans, ex-IITians, and top doctors who are dedicated to carving your success story.",
  },
  subjectStyles: {
    physics: "bg-blue-100 text-blue-800 border-blue-200",
    chemistry: "bg-green-100 text-green-800 border-green-200",
    mathematics: "bg-purple-100 text-purple-800 border-purple-200",
    biology: "bg-rose-100 text-rose-800 border-rose-200",
    default: "bg-gray-100 text-gray-800 border-gray-200",
  },
  joinCta: {
    title: "Want to Join Our Team?",
    subtitle:
      "We are always looking for passionate educators to join our mission. If you have what it takes, we'd love to hear from you.",
    button: "Apply as Faculty",
  },
} as const;

export const contactContent = {
  hero: {
    title: "Get in Touch",
    subtitle:
      "Ready to start your preparation? Have questions about our programs? Our team is here to help you make the right choice.",
  },
  info: {
    title: "Contact Information",
    campus: {
      title: "Campus Address",
      lines: ["123 Academic Block, Education Hub", "New Delhi, India 110016"],
    },
    phone: {
      title: "Phone Number",
      lines: ["+91 1800-123-4567", "+91 98765-43210"],
    },
    email: {
      title: "Email Address",
      lines: ["admissions@brightpath.edu"],
    },
    hours: {
      title: "Working Hours",
      lines: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sun: 10:00 AM - 2:00 PM"],
    },
    mapPlaceholder: "Interactive Map Area",
  },
  form: {
    title: "Send an Inquiry",
    subtitle: "Fill out the form below and we will get back to you within 24 hours.",
    fields: {
      nameLabel: "Full Name",
      namePlaceholder: "John Doe",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+91 9876543210",
      emailLabel: "Email Address",
      emailPlaceholder: "john@example.com",
      programLabel: "Interested Program",
      programPlaceholder: "Select a program",
      messageLabel: "Message / Questions",
      messagePlaceholder: "Tell us about your current class, goals, and any specific queries...",
    },
    programs: [
      { value: "jee", label: "JEE Main & Advanced" },
      { value: "neet", label: "NEET UG" },
      { value: "foundation", label: "Foundation (Class 8-10)" },
      { value: "crash", label: "Crash Course" },
    ],
    submitLabel: "Submit Inquiry",
    submittingLabel: "Submitting...",
    successToastTitle: "Inquiry Submitted Successfully",
    successToastDescription: "Our admission counselor will contact you shortly.",
  },
} as const;

export const mockData = {
  courses: [
    {
      id: "c1",
      title: "JEE Advanced Target Batch",
      category: "JEE",
      duration: "1 Year",
      mode: "Offline / Hybrid",
      description: "Intensive 1-year program for Class 12 passed students aiming for top IITs.",
      features: ["Daily Practice Problems", "Weekly Mock Tests", "Personalized Mentorship", "Doubt Solving Counters"],
    },
    {
      id: "c2",
      title: "NEET Supreme Two-Year",
      category: "NEET",
      duration: "2 Years",
      mode: "Offline",
      description: "Comprehensive 2-year program for Class 11 students targeting top medical colleges.",
      features: ["NCERT Focused Curriculum", "Bi-weekly All India Tests", "Expert Medical Faculty", "Revision Modules"],
    },
    {
      id: "c3",
      title: "Olympiad Foundation",
      category: "Foundation",
      duration: "1 Year",
      mode: "Online",
      description: "Build a strong analytical foundation for Class 8-10 students preparing for future competitive exams.",
      features: ["Mental Ability Focus", "Interactive Live Classes", "Parent-Teacher Meetings", "Concept Building"],
    },
    {
      id: "c4",
      title: "JEE Main Crash Course",
      category: "JEE",
      duration: "3 Months",
      mode: "Online / Offline",
      description: "High-octane revision course covering the entire JEE Main syllabus with extensive problem solving.",
      features: ["Quick Revision Notes", "15 Full Syllabus Tests", "Past Year Analysis", "Time Management Strategies"],
    },
    {
      id: "c5",
      title: "NEET Dropper Batch",
      category: "NEET",
      duration: "1 Year",
      mode: "Offline",
      description: "Specialized batch for repeaters with a focused approach to maximizing score improvements.",
      features: ["Customized Study Plan", "Rigorous Testing", "Stress Management Sessions", "Hostel Facility Available"],
    },
  ] satisfies Course[],
  faculty: [
    {
      id: "f1",
      name: "Dr. Arvind Sharma",
      subject: "Physics",
      qualification: "Ph.D. from IIT Delhi",
      experience: "15+ Years",
      imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    },
    {
      id: "f2",
      name: "Meera Reddy",
      subject: "Chemistry",
      qualification: "M.Tech, NIT Warangal",
      experience: "12+ Years",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    },
    {
      id: "f3",
      name: "Vikram Singh",
      subject: "Mathematics",
      qualification: "B.Tech, IIT Bombay",
      experience: "18+ Years",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      id: "f4",
      name: "Dr. Sneha Patel",
      subject: "Biology",
      qualification: "MBBS, AIIMS Delhi",
      experience: "10+ Years",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    },
    {
      id: "f5",
      name: "Dr. Sumita Patel",
      subject: "Biology",
      qualification: "MBBS, AIIMS Delhi",
      experience: "10+ Years",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    },
  ] satisfies Faculty[],
  results: [
    {
      id: "r1",
      name: "Rohan Kumar",
      exam: "JEE Advanced",
      year: "2024",
      rank: "AIR 5",
      imageUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&fit=crop",
    },
    {
      id: "r2",
      name: "Priya Desai",
      exam: "NEET UG",
      year: "2024",
      rank: "AIR 12",
      imageUrl: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=400&h=400&fit=crop",
    },
    {
      id: "r3",
      name: "Amit Patel",
      exam: "JEE Main",
      year: "2024",
      rank: "AIR 45",
      imageUrl: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=400&fit=crop",
    },
    {
      id: "r4",
      name: "Neha Gupta",
      exam: "NEET UG",
      year: "2023",
      rank: "AIR 8",
      imageUrl: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=400&h=400&fit=crop",
    },
    {
      id: "r5",
      name: "Rahul Verma",
      exam: "JEE Advanced",
      year: "2023",
      rank: "AIR 21",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      id: "r6",
      name: "Kavya Singh",
      exam: "NTSE Stage 2",
      year: "2024",
      rank: "State Rank 1",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    },
  ] satisfies Result[],
  testimonials: [
    {
      id: "t1",
      name: "Siddharth Jain",
      course: "JEE Target Batch",
      text: "The faculty at BrightPath genuinely care about your success. The rigorous testing and doubt-clearing sessions were instrumental in my AIR 45 in JEE Main.",
      avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    },
    {
      id: "t2",
      name: "Ananya Sharma",
      course: "NEET Supreme Two-Year",
      text: "I couldn't have asked for a better environment. The study material is incredibly structured and the teachers simplify the most complex topics.",
      avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    },
    {
      id: "t3",
      name: "Karan Mehta",
      course: "Foundation Program",
      text: "Joining the foundation program in 9th grade gave me the analytical edge I needed. It made my transition to JEE prep incredibly smooth.",
      avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
    },
    {
      id: "t4",
      name: "Riya Malhotra",
      course: "JEE Advanced Target Batch",
      text: "The test series and feedback loop were game-changers. I improved from rank uncertainty to a confident AIR under 100.",
      avatarUrl: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=150&h=150&fit=crop",
    },
    {
      id: "t5",
      name: "Arjun Nair",
      course: "NEET Dropper Batch",
      text: "Every weak topic was tracked and fixed systematically. The faculty support and daily discipline helped me crack NEET with confidence.",
      avatarUrl: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=150&h=150&fit=crop",
    },
    {
      id: "t6",
      name: "Sneha Kulkarni",
      course: "Foundation Program",
      text: "Starting early gave me clarity and confidence. The concept-first approach made senior-level prep much easier later.",
      avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    },
  ] satisfies Testimonial[],
};
