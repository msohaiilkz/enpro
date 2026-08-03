import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import aboutImage from "@/assets/about-enpro.jpeg";
import { fadeUp, scaleIn, stagger, revealOnce } from "@/lib/motion";

const About = () => {
  const features = [
    {
      title: "Technical Excellence",
      description: "Precision-driven engineering and innovation.",
    },
    {
      title: "Delivery Confidence",
      description: "Reliable execution and disciplined delivery.",
    },
    {
      title: "Responsible Engineering",
      description: "Sustainable, compliant, and future-focused solutions.",
    },
  ];

  return (
    <section
      className="py-12 sm:py-14 lg:py-16 pb-24 sm:pb-28 bg-white relative overflow-hidden min-h-[100dvh] flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mx-auto">
          {/* Left Image - kept square so the full photo is visible, never stretched */}
          <motion.div className="order-2 lg:order-1" variants={scaleIn} {...revealOnce}>
            <img
              src={aboutImage}
              alt="Enpro engineers working on structural and infrastructure designs"
              className="w-full max-w-[430px] max-h-[42vh] lg:max-h-[56vh] mx-auto aspect-square object-cover object-center rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="px-0 sm:px-2 lg:px-4 order-1 lg:order-2"
            variants={stagger(0.1)}
            {...revealOnce}
          >
            {/* Heading */}
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="h-0.5 w-8 sm:w-10 bg-[#bf1e2e]" />
              <p className="text-[#bf1e2e] font-bold uppercase tracking-widest text-xs sm:text-sm">
                About Us
              </p>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-fluid-h2 font-bold text-[#1a1a1a] mb-3 sm:mb-4">
              Engineering That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf1e2e] to-[#9e1925]">
                Endures
              </span>
            </motion.h2>

            {/* Justified on desktop, left-aligned on mobile to avoid ragged word spacing */}
            <motion.p variants={fadeUp} className="text-gray-600 mb-4 sm:mb-6 text-fluid-lead text-justify hyphens-auto">
              We believe exceptional engineering goes beyond technical design.
              Every project is guided by precision, practicality, and a
              commitment to delivering resilient, efficient, and sustainable
              outcomes that stand the test of time.
            </motion.p>

            {/* Features List */}
            <motion.ul variants={stagger(0.1)} className="space-y-2.5 sm:space-y-3.5 mb-5 sm:mb-7">
              {features.map((feature) => (
                <motion.li
                  variants={fadeUp}
                  key={feature.title}
                  className="flex items-start gap-2 sm:gap-3 group"
                >
                  <div className="mt-1 p-1 rounded-full bg-[#bf1e2e]/10 group-hover:bg-[#bf1e2e]/20 transition-colors flex-shrink-0">
                    <CheckCircle className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#bf1e2e]" />
                  </div>
                  <div>
                    <p className="text-[#bf1e2e] font-semibold text-fluid-body sm:text-base">
                      {feature.title}
                    </p>
                    <p className="text-gray-600 text-fluid-body">
                      {feature.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp}>
            <Link
              to="/about-us"
              className="inline-flex items-center gap-2 bg-[#bf1e2e] hover:bg-[#961a27] text-white font-semibold rounded-xl px-6 sm:px-8 h-11 text-sm sm:text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Shape */}
        <div className="absolute bottom-10 right-10 hidden md:block opacity-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="90"
            height="90"
            viewBox="0 0 100 100"
            fill="none"
          >
            <rect
              x="20"
              y="20"
              width="60"
              height="60"
              stroke="#bf1e2e"
              strokeWidth="2"
            />
            <rect
              x="30"
              y="30"
              width="60"
              height="60"
              stroke="#bf1e2e"
              strokeWidth="2"
              fill="url(#pattern)"
            />
            <defs>
              <pattern
                id="pattern"
                patternUnits="userSpaceOnUse"
                width="6"
                height="6"
              >
                <path
                  d="M0 6L6 0"
                  stroke="#bf1e2e"
                  strokeWidth="0.5"
                  opacity="0.4"
                />
              </pattern>
            </defs>
          </svg>
        </div>
      </div>

      {/* Scroll Indicator - Section Centered */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center z-20">
        <button 
          onClick={() => {
            const element = document.getElementById("why-enpro");
            if (element) element.scrollIntoView({ behavior: "smooth" });
          }}
          className="animate-bounce cursor-pointer group"
        >
          <div className="w-6 h-10 border-2 border-black/20 group-hover:border-black/50 rounded-full flex items-start justify-center p-2 transition-colors">
            <div className="w-1 h-3 bg-black/40 rounded-full"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default About;
