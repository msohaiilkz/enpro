import { motion } from "framer-motion";
import heroImage from "@/assets/hero-construction.jpeg";
import { fadeUp, stagger } from "@/lib/motion";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-16 sm:py-20 pb-24 sm:pb-28">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 parallax"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-hero" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center text-white"
        variants={stagger(0.18, 0.15)}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={fadeUp}
          className="text-fluid-hero font-heading font-bold mb-4 sm:mb-6"
        >
          <span className="block mb-2 sm:mb-4">
            Engineering Complex Structures.
          </span>
          <span className="block">Delivering Certainty.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-fluid-lead mb-6 sm:mb-8 max-w-3xl mx-auto opacity-90 px-1"
        >
          Integrated structural engineering, project delivery, environmental &
          social advisory, and digital engineering for high-rise buildings,
          bridges, industrial facilities, and critical infrastructure.
        </motion.p>

        {/* Tagline, on a single line */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-5"
        >
          <span className="h-px w-6 xs:w-10 sm:w-14 md:w-20 bg-white/70 flex-shrink-0" />
          <span
            className="inline-block rounded-full border border-white/25 bg-white/10 backdrop-blur-md
                       px-3 xs:px-5 sm:px-7 py-1.5 xs:py-2 sm:py-2.5 shadow-lg shadow-black/20"
          >
            <span className="text-[9px] xs:text-[11px] sm:text-sm md:text-base font-bold uppercase tracking-[0.15em] xs:tracking-[0.2em] sm:tracking-[0.3em] whitespace-nowrap">
              Partners in Performance
            </span>
          </span>
          <span className="h-px w-6 xs:w-10 sm:w-14 md:w-20 bg-white/70 flex-shrink-0" />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Section Centered */}
      <motion.div
        className="absolute bottom-5 sm:bottom-8 inset-x-0 flex justify-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce cursor-pointer group"
          aria-label="Scroll to next section"
        >
          <div className="w-6 h-10 border-2 border-white/50 group-hover:border-white rounded-full flex items-start justify-center p-2 transition-colors">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
