import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // The landing page scrolls inside its own container; the detail pages
    // scroll the window.
    const scrollContainer = document.getElementById("main-scroll-container");
    const target: HTMLElement | Window = scrollContainer ?? window;

    const handleScroll = () => {
      const scrollTotal = scrollContainer
        ? scrollContainer.scrollHeight - scrollContainer.clientHeight
        : document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = scrollContainer
        ? scrollContainer.scrollTop
        : window.scrollY;

      if (scrollTotal > 0) {
        setProgress((currentScroll / scrollTotal) * 100);
      }

      setIsVisible(currentScroll > 300);
    };

    target.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => target.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const scrollContainer = document.getElementById("main-scroll-container");
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // SVG Circle properties
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-20 right-8 z-[100] transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-50"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="relative flex items-center justify-center w-14 h-14 bg-[#1a1a1a] rounded-full shadow-2xl group transition-transform hover:scale-110 active:scale-95 border border-white/5"
        aria-label="Scroll to top"
      >
        {/* Progress Circle SVG */}
        <svg className="absolute w-full h-full -rotate-90 pointer-events-none">
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="3"
            fill="transparent"
            className="transition-all"
          />
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="#bf1e2e"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={circumference}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            className="transition-all duration-100"
          />
        </svg>

        {/* Icon */}
        <ArrowUp
          className="relative z-10 text-white group-hover:-translate-y-1 transition-transform duration-300"
          size={24}
        />
      </button>
    </div>
  );
};

export default ScrollToTop;
