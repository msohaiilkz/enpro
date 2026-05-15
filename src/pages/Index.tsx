import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Counters from "@/components/Counters";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FeaturedServices from "@/components/Feature";
import SidebarNav from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

import React, { useEffect } from "react";
const Index = () => {
  // CRITICAL FIX: Effect to manually handle scrolling to the hash on load
  // This logic overrides the browser's default jump, preventing the scroll-to-hero-then-target issue.
  useEffect(() => {
    // Check if there is a hash in the URL (e.g., #about, #contact)
    if (window.location.hash) {
      const id = window.location.hash.substring(1); // Get the ID without the '#'

      // Use a brief timeout to ensure all components have rendered and measured their dimensions
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          // Use scrollIntoView with smooth behavior
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        // Clear the hash from the URL after scrolling to prevent re-scrolling on subsequent actions
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname,
        );
      }, 100); // 100ms is usually enough to allow rendering

      return () => clearTimeout(timer); // Cleanup
    }
  }, []); // Run only once on mount

  return (
    <div id="main-scroll-container" className="h-screen overflow-y-auto snap-y-mandatory no-scrollbar">
      <SidebarNav />

      <main className="lg:ml-[280px]">
        {/* Make sure the first section has the 'home' ID */}
        <div id="home" className="snap-start min-h-screen">
          <Hero />
        </div>

        {/* 'features' ID matches the Services component */}
        <div id="features" className="snap-start min-h-screen">
          <Services />
        </div>

        <div id="about" className="snap-start min-h-screen">
          <About />
        </div>

        {/* 'service' ID matches the FeaturedServices component */}
        <div id="service" className="snap-start min-h-screen">
          <FeaturedServices />
        </div>

        <div id="contact" className="snap-start min-h-screen">
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
