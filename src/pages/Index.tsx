import SidebarNav from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FeaturedServices from "@/components/Feature";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import React, { useEffect } from "react";
const Index = () => {
  // CRITICAL FIX: Effect to manually handle scrolling to the hash on load
  // This logic overrides the browser's default jump, preventing the scroll-to-hero-then-target issue.
  useEffect(() => {
    // Check if there is a hash in the URL (e.g., #about, #contact)
    if (window.location.hash) {
      const id = window.location.hash.substring(1);

      // Jump straight to the section: two animation frames give the layout a
      // chance to settle, and "auto" lands there instantly with no visible
      // scroll from the top of the page.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "auto", block: "start" });
          }
          window.history.replaceState(
            {},
            document.title,
            window.location.pathname,
          );
        });
      });
    }
  }, []); // Run only once on mount

  return (
    // snap-proximity, not snap-mandatory: a section that grows taller than the
    // viewport (e.g. Services once expanded) must stay freely scrollable instead
    // of being forced back to a snap point, which clipped its top.
    <div id="main-scroll-container" className="h-[100dvh] overflow-y-auto snap-y snap-proximity no-scrollbar">
      <SidebarNav />

      {/* Section order follows the sidebar flow agreed with the client:
          Home | About Us | Why Enpro | Services | Contact */}
      <main className="lg:ml-[280px]">
        <div id="home" className="snap-start">
          <Hero />
        </div>

        <div id="about" className="snap-start">
          <About />
        </div>

        <div id="why-enpro" className="snap-start">
          <Services />
        </div>

        <div id="services" className="snap-start">
          <FeaturedServices />
        </div>

        <div id="contact" className="snap-start">
          <Contact />
        </div>
      </main>

      <div className="lg:ml-[280px] snap-start">
        <Footer />
      </div>

      <ScrollToTop />
    </div>
  );
};

export default Index;
