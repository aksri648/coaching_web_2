import { Link } from "wouter";
import { BookOpen, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { footerContent } from "@/content/site-content";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t-[8px] border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-accent p-2 rounded text-white">
                <BookOpen className="h-6 w-6" />
              </div>
              <span className="font-display font-bold text-3xl tracking-tight">
                {footerContent.brandName}
              </span>
            </div>
            <p className="text-white/80 leading-relaxed text-sm">
              {footerContent.brandDescription}
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-3 font-semibold text-sm">
              {footerContent.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/80 hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent">›</span> {link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 relative inline-block">
              Programs
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-3 font-semibold text-sm">
              {footerContent.programs.map((program) => (
                <li key={program.label}>
                  <Link href={program.href} className="text-white/80 hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent">›</span> {program.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3 text-white/80">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>{footerContent.contact.address}</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>{footerContent.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>{footerContent.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60 font-medium">
          <p>© {new Date().getFullYear()} {footerContent.brandName} Academy. All rights reserved.</p>
          <div className="flex gap-6">
            {footerContent.legalLinks.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-white transition-colors">{item.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
