import { useEffect } from "react";
import { useLocation } from "wouter";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import CallButton from "@/components/callbutton-whatsappbutton/callbutton";
import WhatsAppButton from "@/components/callbutton-whatsappbutton/whatsappbtn";

export function PageLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
      <CallButton />
      <WhatsAppButton />
    </div>
  );
}
