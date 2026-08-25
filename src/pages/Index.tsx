import SidebarNav from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FeaturedServices from "@/components/Feature";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import React, { useLayoutEffect } from "react";
import { settleArrival } from "@/lib/motion";

const Index = () => {
  // Arriving on /#section from another page: mount every reveal already
  // settled, so the target section does not slide in after the instant jump.
  // Runs during render, before the children mount and read their `initial`.
  if (typeof window !== "undefined" && window.location.hash) {
    settleArrival();
  }
  // Landing on /#section: jump BEFORE the browser paints the first frame, so
  // the visitor never glimpses the hero first (that flash read as a "double
  // jerk"). useLayoutEffect runs after layout but before paint - the page
  // simply appears already sitting on the target section.
  useLayoutEffect(() => {
    // The detail pages scroll the window; drop any leftover offset first so it
    // cannot combine with the section jump below into a visible double move.
    window.scrollTo(0, 0);
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "auto", block: "start" });
      }
      window.history.replaceState(
        {},
        document.title,
        window.location.pathname,
      );
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
