import { useEffect, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { useLocation, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronLeft,
  ChevronRight, 
  Users, 
  BookOpen, 
  Trophy, 
  Target, 
  Star, 
  ArrowRight,
  CheckCircle2,
  BrainCircuit,
  Microscope,
  FileText,
  ChevronDown
} from "lucide-react";
import { useCourses, useResults, useTestimonials } from "@/hooks/use-coaching-data";
import { useRef } from "react";
import { homeContent } from "@/content/site-content";

// Counter Animation Component
const Counter = ({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const statIcons = {
  users: Users,
  trophy: Trophy,
  book: BookOpen,
  target: Target,
} as const;

const featureIcons = {
  users: Users,
  trophy: Trophy,
  file: FileText,
  target: Target,
  brain: BrainCircuit,
  microscope: Microscope,
} as const;

export default function Home() {
  const [, setLocation] = useLocation();
  const { data: courses } = useCourses();
  const { data: results } = useResults();
  const { data: testimonials } = useTestimonials();

  const testimonialsPerPage = homeContent.testimonials.perPage;
  const totalTestimonialPages = Math.max(
    1,
    Math.ceil((testimonials?.length ?? 0) / testimonialsPerPage),
  );
  const [testimonialPage, setTestimonialPage] = useState(0);

  const visibleTestimonials = (testimonials ?? []).slice(
    testimonialPage * testimonialsPerPage,
    testimonialPage * testimonialsPerPage + testimonialsPerPage,
  );

  const prevTestimonials = () => {
    setTestimonialPage((prev) =>
      prev === 0 ? totalTestimonialPages - 1 : prev - 1,
    );
  };

  const nextTestimonials = () => {
    setTestimonialPage((prev) =>
      prev === totalTestimonialPages - 1 ? 0 : prev + 1,
    );
  };

  useEffect(() => {
    setTestimonialPage((prev) => Math.min(prev, totalTestimonialPages - 1));
  }, [totalTestimonialPages]);

  useEffect(() => {
    if (totalTestimonialPages <= 1) return;

    const timer = window.setInterval(() => {
      setTestimonialPage((prev) =>
        prev === totalTestimonialPages - 1 ? 0 : prev + 1,
      );
    }, homeContent.testimonials.autoSlideMs);

    return () => window.clearInterval(timer);
  }, [totalTestimonialPages]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-primary">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Hero Background" 
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 flex-1 flex flex-col justify-center">
          <div className="max-w-4xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp}>
                <Badge className="bg-accent hover:bg-accent text-white px-3 py-1 text-sm font-bold rounded-sm tracking-wide">
                  {homeContent.hero.badge}
                </Badge>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.05]">
                {homeContent.hero.titleMain}<br />
                <span className="text-gradient">{homeContent.hero.titleAccent}</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-white/80 leading-relaxed max-w-2xl font-medium">
                {homeContent.hero.subtitle}
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-6">
                <Button 
                  onClick={() => setLocation("/contact")}
                  size="lg" 
                  className="rounded-md bg-accent hover:bg-accent/90 text-white h-14 px-8 text-lg font-bold shadow-[0_4px_14px_0_rgba(255,107,0,0.39)] transition-all hover:translate-y-[-2px]"
                >
                  {homeContent.hero.primaryCta}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  onClick={() => setLocation("/results")}
                  variant="outline" 
                  size="lg" 
                  className="rounded-md h-14 px-8 text-lg font-bold border-white/40 text-white hover:bg-white hover:text-primary transition-all"
                >
                  {homeContent.hero.secondaryCta}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-32 left-1/2 -translate-x-1/2 text-white/50 animate-bounce hidden md:block"
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </section>

      {/* Floating Stats Bar */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 md:-mt-10 mb-20 hidden md:block">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-4 gap-0 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden divide-x divide-gray-100"
        >
          {homeContent.floatingStats.map((stat, idx) => {
            const StatIcon = statIcons[stat.icon];
            return (
            <div key={idx} className="p-8 flex items-center gap-4 hover:bg-gray-50 transition-colors">
              <div className={`p-4 rounded-full ${stat.bg} ${stat.color}`}>
                <StatIcon className="h-8 w-8" />
              </div>
              <div>
                <h4 className="text-3xl font-display font-bold text-gray-900">
                  <Counter from={0} to={stat.value} />{stat.suffix}
                </h4>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">{stat.label}</p>
              </div>
            </div>
          )})}
        </motion.div>
      </div>

      {/* Featured Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-accent/10 text-accent hover:bg-accent/10 mb-4 font-bold px-3 py-1">{homeContent.featuredCourses.badge}</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">{homeContent.featuredCourses.title}</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto font-medium">{homeContent.featuredCourses.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses?.slice(0, 3).map((course, idx) => (
              <motion.div 
                key={course.id} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1, duration: 0.5 } }
                }}
                className="h-full"
              >
                <Card className="h-full flex flex-col border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group bg-white rounded-lg">
                  <div className="h-2 w-full bg-primary" />
                  <CardContent className="p-8 flex flex-col flex-1">
                    <div className="mb-6">
                      <Badge variant="outline" className="border-accent text-accent mb-4 font-bold">
                        {course.category}
                      </Badge>
                      <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-2">{course.title}</h3>
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">
                        {course.duration} • {course.mode}
                      </p>
                    </div>
                    
                    <p className="text-gray-600 mb-6 flex-1 font-medium">{course.description}</p>
                    
                    <ul className="space-y-3 mb-8 bg-gray-50 p-4 rounded-md border border-gray-100">
                      {course.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700 font-bold">
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <span className="text-primary font-bold">Know More</span>
                      <Button 
                        onClick={() => setLocation(`/contact?course=${course.id}`)}
                        className="rounded-md bg-primary hover:bg-primary/90 text-white font-bold"
                      >
                        Enroll Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/courses">
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-md">
                {homeContent.featuredCourses.viewAllCta} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Achievement Banner */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20 text-center">
            {homeContent.achievementStats.map((stat, idx) => (
              <motion.div key={stat.label} whileInView={{ scale: [0.9, 1] }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <div className="text-4xl md:text-6xl font-display font-bold text-accent mb-2">
                  <Counter from={0} to={stat.value} />{stat.suffix}
                </div>
                <div className="font-bold tracking-widest text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Toppers Section */}
      <section className="py-24 bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">{homeContent.toppers.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">{homeContent.toppers.subtitle}</p>
        </div>

        <div className="relative flex w-[200%] md:w-[150%]">
          {/* First Marquee Track */}
          <div className="flex animate-marquee gap-6 px-3 min-w-full">
            {[...(results || []), ...(results || [])].map((result, idx) => (
              <div key={idx} className="w-[300px] flex-shrink-0 bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
                <div className="relative mb-4">
                  <div className="absolute inset-0 rounded-full border-4 border-accent animate-pulse opacity-50 scale-110" />
                  <img src={result.imageUrl} alt={result.name} className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md relative z-10" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">{result.name}</h4>
                <Badge className="bg-accent/10 text-accent hover:bg-accent/10 text-lg mt-2 mb-2 px-4 py-1">{result.rank}</Badge>
                <p className="text-gray-500 font-bold text-sm uppercase tracking-wide">{result.exam} {result.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">{homeContent.whyChoose.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-medium">{homeContent.whyChoose.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeContent.whyChoose.features.map((feature, idx) => {
              const FeatureIcon = featureIcons[feature.icon];
              return (
              <motion.div 
                key={idx}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="relative overflow-hidden bg-white border border-gray-100 p-8 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" />
                <div className="h-14 w-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <FeatureIcon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 font-medium">{feature.desc}</p>
              </motion.div>
            )})}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">{homeContent.testimonials.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-medium">{homeContent.testimonials.subtitle}</p>
          </div>

          <div className="flex items-center justify-end gap-3 mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonials}
              className="rounded-full border-gray-300 hover:border-primary hover:text-primary"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonials}
              className="rounded-full border-gray-300 hover:border-primary hover:text-primary"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <motion.div
            key={testimonialPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {visibleTestimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full border border-gray-200 shadow-md bg-white rounded-lg relative hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-8 right-8 text-gray-200 opacity-50">
                    <svg width="45" height="36" viewBox="0 0 45 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.5 0C6.04416 0 0 6.04416 0 13.5V36H18V13.5H9C9 8.52942 13.0294 4.5 18 4.5V0H13.5ZM40.5 0C33.0442 0 27 6.04416 27 13.5V36H45V13.5H36C36 8.52942 40.0294 4.5 45 4.5V0H40.5Z"/>
                    </svg>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-6 text-accent">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 font-medium italic mb-8 min-h-[120px] relative z-10 text-lg">"{testimonial.text}"</p>
                    <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                      <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary" />
                      <div>
                        <h5 className="font-bold text-gray-900 text-lg">{testimonial.name}</h5>
                        <p className="text-sm font-bold text-gray-500 uppercase">{testimonial.course}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
