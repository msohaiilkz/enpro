import { motion } from "framer-motion";
import { fadeUp, stagger, revealOnce } from "@/lib/motion";

// Icons supplied by the client, recoloured for the dark cards
import iconLeadership from "@/assets/icons/engineering-leadership.png";
import iconDelivery from "@/assets/icons/delivery-confidence.png";
import iconSustainable from "@/assets/icons/sustainable-solutions.png";
import iconIntegrity from "@/assets/icons/integrity-compliance.png";

const Services = () => {
  // Titles are split into two lines each so all four cards line up exactly.
  const features = [
    {
      number: "01",
      icon: iconLeadership,
      titleLines: ["Engineering", "Leadership"],
      description:
        "Delivering innovative, code-compliant engineering through advanced analysis, rigorous quality assurance, and international best practices.",
    },
    {
      number: "02",
      icon: iconDelivery,
      titleLines: ["Delivery", "Confidence"],
      description:
        "Applying disciplined project controls and transparent governance to deliver projects with certainty, efficiency, and accountability.",
    },
    {
      number: "03",
      icon: iconSustainable,
      titleLines: ["Sustainable", "Solutions"],
      description:
        "Creating resilient, future-ready infrastructure through practical engineering, environmental stewardship, and long-term value.",
    },
    {
      number: "04",
      icon: iconIntegrity,
      titleLines: ["Integrity &", "Compliance"],
      description:
        "Maintaining the highest standards of ethics, transparency, and regulatory compliance in every project we undertake.",
    },
  ];

  const scrollToNext = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center py-12 sm:py-14 lg:py-16 pb-24 sm:pb-28 bg-[#fbe5e7] overflow-hidden">
      {/* Soft brand blooms */}
      <div
        className="absolute -top-32 -left-24 w-[30rem] h-[30rem] rounded-full bg-[#bf1e2e]/10 blur-[130px] pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -right-24 w-[32rem] h-[32rem] rounded-full bg-white/60 blur-[130px] pointer-events-none"
        aria-hidden
      />
      {/* Fine dot grid, faded towards the edges */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(191,30,46,0.35) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 75% 60% at 50% 45%, #000 35%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 60% at 50% 45%, #000 35%, transparent 100%)",
        }}
        aria-hidden
      />

      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-8 sm:mb-10"
          variants={stagger(0.12)}
          {...revealOnce}
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-[#bf1e2e]/20 bg-white/70 px-4 py-1.5
                       text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#bf1e2e] backdrop-blur-sm shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#bf1e2e]" />
            Why Enpro
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-4 text-fluid-h2 font-bold text-[#1C1C1C]"
          >
            Why <span className="text-[#bf1e2e]">Enpro</span>
          </motion.h2>

          <motion.span
            variants={fadeUp}
            className="mt-4 block h-px w-20 mx-auto bg-gradient-to-r from-transparent via-[#bf1e2e] to-transparent"
          />
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7"
          variants={stagger()}
          {...revealOnce}
        >
          {features.map((feature) => (
            <motion.article
              key={feature.number}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl
                         bg-gradient-to-b from-[#232323] to-[#141414] border border-white/[0.06]
                         p-5 sm:p-6 lg:p-7 min-h-0 sm:min-h-[19rem] lg:min-h-[min(22rem,44vh)] shadow-lg shadow-[#bf1e2e]/5
                         hover:border-[#bf1e2e]/60 hover:shadow-2xl hover:shadow-[#bf1e2e]/20
                         transition-[border-color,box-shadow] duration-500"
            >
              {/* Top edge highlight */}
              <span
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
                aria-hidden
              />

              {/* Hover glow */}
              <span
                className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-[#bf1e2e]/30
                           blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden
              />

              {/* Index */}
              <span
                className="absolute top-5 right-6 sm:top-6 sm:right-7 text-4xl sm:text-5xl lg:text-6xl font-bold text-white/[0.07]
                           group-hover:text-[#bf1e2e]/30 transition-colors duration-500"
                aria-hidden
              >
                {feature.number}
              </span>

              {/* Icon tile */}
              <div
                className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl border border-white/10
                           bg-gradient-to-br from-[#bf1e2e]/30 to-transparent
                           flex items-center justify-center mb-4 sm:mb-5
                           group-hover:scale-105 transition-transform duration-500"
              >
                <img
                  src={feature.icon}
                  alt=""
                  aria-hidden="true"
                  className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 object-contain"
                />
              </div>

              {/* Two lines on every card, so headings and body text align */}
              <h3 className="relative text-fluid-h3 font-bold text-white mb-2 sm:mb-3">
                {feature.titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h3>

              {/* Justified so every line ends flush; hyphenation keeps the word
                  gaps tight, which is what usually ruins justified text in a
                  narrow column. */}
              <p className="relative text-gray-400 text-fluid-body text-justify hyphens-auto flex-grow">
                {feature.description}
              </p>

              {/* Bottom accent */}
              <span
                className="mt-4 block h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[#bf1e2e] to-transparent
                           transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden
              />
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center z-20">
        <button
          onClick={scrollToNext}
          className="animate-bounce cursor-pointer group"
          aria-label="Scroll to services"
        >
          <div className="w-6 h-10 border-2 border-black/20 group-hover:border-black/50 rounded-full flex items-start justify-center p-2 transition-colors">
            <div className="w-1 h-3 bg-black/40 rounded-full" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Services;
