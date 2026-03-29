import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks, navbarTickerItems } from "@/content/site-content";

export function Navbar() {
  const [location, setLocation] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <div className="bg-accent text-white text-sm font-bold py-2 overflow-hidden w-full relative z-[60]">
        <div className="whitespace-nowrap flex animate-ticker">
          {navbarTickerItems.map((item, index) => (
            <span key={`${item}-${index}`} className="mx-4">
              {index === 0 ? `🎉 ${item}` : item}
            </span>
          ))}
        </div>
      </div>
      
      <header
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-sm py-3"
            : "bg-white py-4 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-primary text-white group-hover:bg-accent transition-colors">
              <BookOpen className="h-6 w-6" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-primary">
              BrightPath
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? "text-primary bg-primary/5"
                      : "text-gray-600 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button 
              onClick={() => setLocation("/contact")}
              className="rounded-md font-bold px-6 shadow-md hover:shadow-lg transition-all duration-300 bg-accent hover:bg-accent/90 text-white"
            >
              Enroll Now
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white pt-12 flex flex-col border-l border-gray-100">
                <nav className="flex flex-col gap-2 mt-8">
                  {navLinks.map((link) => {
                    const isActive = location === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`px-4 py-3 rounded-md text-lg font-bold transition-all ${
                          isActive
                            ? "bg-primary/5 text-primary"
                            : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
                <div className="mt-auto pb-8">
                  <Button 
                    onClick={() => {
                      setLocation("/contact");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full h-12 rounded-md bg-accent hover:bg-accent/90 text-white font-bold"
                  >
                    Enroll Now
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
