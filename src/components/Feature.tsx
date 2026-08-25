import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES } from "@/data/services";
import { fadeUp, stagger, revealOnce } from "@/lib/motion";

const INITIAL_VISIBLE = 3;

const FeaturedServices = () => {
  const [showAll, setShowAll] = useState(false);
  const services = SERVICES;

  const visibleServices = showAll
    ? services
    : services.slice(0, INITIAL_VISIBLE);

  return (
    <section
      className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12
                 bg-gradient-to-b from-[#fbe5e7] via-white to-white overflow-hidden"
    >
      {/* Diagonal hairlines - a different texture to the section above */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.5]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(191,30,46,0.06) 0px, rgba(191,30,46,0.06) 1px, transparent 1px, transparent 14px)",
          maskImage:
            "linear-gradient(to bottom, #000 0%, transparent 55%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, #000 0%, transparent 55%)",
        }}
        aria-hidden
      />

      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-6 sm:mb-8"
          variants={stagger(0.12)}
          {...revealOnce}
        >
          <div className="text-center lg:text-left">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#bf1e2e]"
            >
              <span className="h-px w-8 bg-[#bf1e2e]" />
              What We Offer
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-3 sm:mt-4 text-fluid-h2 font-bold text-[#1C1C1C]"
            >
              Our <span className="text-[#bf1e2e]">Services</span>
            </motion.h2>
          </div>
        </motion.div>

        {/* Service Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7"
          variants={stagger()}
          {...revealOnce}
        >
          <AnimatePresence mode="popLayout">
            {visibleServices.map((service) => (
              <motion.article
                key={service.slug}
                layout
                variants={fadeUp}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: 12 }}
                className="group relative flex flex-col rounded-[1.75rem] bg-white overflow-hidden
                           ring-1 ring-black/[0.06] shadow-[0_2px_20px_rgba(0,0,0,0.04)]
                           hover:shadow-[0_24px_50px_-18px_rgba(191,30,46,0.35)] hover:ring-[#bf1e2e]/25
                           transition-all duration-500"
              >
                {/* The title is printed along the bottom of the artwork, so the
                    crop is anchored there and never cuts it off. */}
                <Link
                  to={`/services/${service.slug}`}
                  className="relative block h-[clamp(150px,25vh,290px)] overflow-hidden"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-bottom transform group-hover:scale-[1.06] transition-transform duration-[900ms] ease-out"
                  />
                  {/* Brand wash on hover */}
                  <span
                    className="absolute inset-0 bg-[#bf1e2e]/0 group-hover:bg-[#bf1e2e]/15 transition-colors duration-500"
                    aria-hidden
                  />
                  {/* Arrow badge */}
                  <span
                    className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-white text-[#bf1e2e]
                               flex items-center justify-center shadow-lg
                               translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                               transition-all duration-500"
                    aria-hidden
                  >
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>

                <div className="flex flex-col flex-grow p-4 sm:p-5">
                  {/* Kept for search engines and screen readers only */}
                  <h3 className="sr-only">{service.title}</h3>

                  <p className="text-gray-500 text-fluid-body text-left flex-grow">
                    {service.description}
                  </p>

                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1C1C1C]
                               group-hover:text-[#bf1e2e] transition-colors duration-300"
                  >
                    Explore
                    <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-[#bf1e2e]/10 text-[#bf1e2e] transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>

                  {/* Bottom accent */}
                  <span
                    className="mt-4 block h-[2px] w-full origin-left scale-x-0 rounded-full
                               bg-gradient-to-r from-[#bf1e2e] to-transparent
                               transition-transform duration-500 group-hover:scale-x-100"
                    aria-hidden
                  />
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show more / less toggle */}
        {services.length > INITIAL_VISIBLE && (
          <div className="flex justify-center mt-6 sm:mt-8">
            <motion.button
              onClick={() => setShowAll((prev) => !prev)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 rounded-xl border border-[#bf1e2e]/25 bg-white/80 backdrop-blur-sm
                         px-8 h-12 text-sm sm:text-base font-semibold text-[#bf1e2e] shadow-sm
                         hover:bg-[#bf1e2e] hover:text-white hover:border-[#bf1e2e] hover:shadow-lg hover:shadow-[#bf1e2e]/25
                         transition-all duration-300"
            >
              {showAll ? "Show Less" : "Show More"}
              {showAll ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              )}
            </motion.button>
          </div>
        )}
      </div>

      {/* Scroll Indicator — in normal flow under the button, so it can never
          hang below the fold and get clipped on shorter screens */}
      <div className="relative flex justify-center mt-6 sm:mt-8">
        <button
          onClick={() => {
            const element = document.getElementById("contact");
            if (element) element.scrollIntoView({ behavior: "smooth" });
          }}
          className="animate-bounce cursor-pointer group"
          aria-label="Scroll to contact"
        >
          <div className="w-6 h-10 border-2 border-black/20 group-hover:border-black/50 rounded-full flex items-start justify-center p-2 transition-colors">
            <div className="w-1 h-3 bg-black/40 rounded-full" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default FeaturedServices;
