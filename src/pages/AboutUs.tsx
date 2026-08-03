import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

import TopNavbar from "@/components/TopNavbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ScrollToTop from "@/components/ScrollToTop";
import bannerImage from "@/assets/banner-about-us.jpeg";
import officeImage from "@/assets/about-enpro.jpeg";
import ctaImage from "@/assets/contact-enpro.jpeg";
import { fadeUp, scaleIn, stagger, revealOnce } from "@/lib/motion";

const BUILT_TO_EVOLVE = [
  {
    number: "01",
    title: "Experience That Builds Forward",
    description:
      "Our experience is not simply a legacy to preserve. We share it, build upon it, and turn it into collective capability for what comes next.",
  },
  {
    number: "02",
    title: "Developing Those Who Lead Next",
    description:
      "We believe the future of Enpro lies in people. We create an environment where professionals grow, take ownership, and develop into the leaders who will shape what follows.",
  },
  {
    number: "03",
    title: "Growing Through Capability",
    description:
      "We are building a multidisciplinary platform that brings together expertise, partnerships, and new opportunities, creating the capacity to grow across disciplines, sectors, and markets.",
  },
];

const OUR_APPROACH = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding the project, its context, constraints, and what matters most to our clients.",
  },
  {
    number: "02",
    title: "Think",
    description:
      "We combine engineering judgment, practical thinking, and multidisciplinary insight to develop considered solutions.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "We stay focused on execution, responsiveness, quality, and delivering what we commit to.",
  },
  {
    number: "04",
    title: "Build Trust",
    description:
      "We value transparency, accountability, and relationships built to extend beyond individual projects.",
  },
];

const AboutUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <TopNavbar />

      <PageBanner
        image={bannerImage}
        alt="About Us — Enpro Consultants"
        crumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
      />

      <main className="w-full">
        {/* ================= 01 About Enpro ================= */}
        <section className="min-h-[100dvh] flex items-center py-14 sm:py-16 lg:py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Image with a brand accent behind it */}
              <motion.div
                className="relative order-2 lg:order-1"
                variants={scaleIn}
                {...revealOnce}
              >
                <span
                  className="absolute -top-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 rounded-tl-3xl border-t-4 border-l-4 border-[#bf1e2e]"
                  aria-hidden
                />
                <img
                  src={officeImage}
                  alt="Enpro engineers working on structural and infrastructure designs"
                  className="relative w-full max-w-[480px] max-h-[44vh] lg:max-h-[58vh] mx-auto aspect-square object-cover object-center rounded-3xl shadow-xl"
                />
                <span
                  className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 rounded-br-3xl border-b-4 border-r-4 border-[#bf1e2e]"
                  aria-hidden
                />
              </motion.div>

              {/* Copy */}
              <motion.div
                className="order-1 lg:order-2"
                variants={stagger(0.1)}
                {...revealOnce}
              >
                <motion.span
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 rounded-full border border-[#bf1e2e]/20 bg-[#fbe5e7] px-4 py-1.5
                             text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#bf1e2e]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf1e2e]" />
                  01 — About Enpro
                </motion.span>

                <motion.h1
                  variants={fadeUp}
                  className="mt-5 text-fluid-h2 font-bold text-[#1C1C1C]"
                >
                  About <span className="text-[#bf1e2e]">Enpro</span>
                </motion.h1>

                <motion.span
                  variants={fadeUp}
                  className="mt-5 mb-7 block h-[3px] w-16 bg-[#bf1e2e]"
                />

                <motion.div
                  variants={stagger(0.08)}
                  className="space-y-5 text-gray-600 text-fluid-lead text-justify hyphens-auto"
                >
                  <motion.p variants={fadeUp}>
                    Enpro Consultants was founded on more than two decades of
                    experience in structural and infrastructure engineering,
                    with an ambition to build beyond the conventional
                    consultancy.
                  </motion.p>
                  <motion.p variants={fadeUp}>
                    We established Enpro as a multidisciplinary engineering
                    platform where experience is shared, new leaders are
                    developed, and capabilities evolve with the changing demands
                    of the industry. From our foundation in structural and
                    infrastructure engineering, we are building towards broader
                    capabilities, new markets, and a stronger regional presence.
                  </motion.p>
                  <motion.p variants={fadeUp}>
                    Our focus remains simple: dedication in purpose, discipline
                    in delivery, and an uncompromising commitment to quality. We
                    are building not only an engineering practice, but a lasting
                    platform for people, partnerships, and the generations of
                    leaders who will take it forward.
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= 02 Built to Evolve ================= */}
        <section className="relative min-h-[100dvh] flex items-center py-14 sm:py-16 lg:py-20 bg-[#fbe5e7] overflow-hidden">
          {/* Soft bloom + dot texture, matching the landing page */}
          <div
            className="absolute -top-32 -right-24 w-[30rem] h-[30rem] rounded-full bg-[#bf1e2e]/10 blur-[130px] pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute inset-0 opacity-[0.3] pointer-events-none"
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
            <motion.div
              className="max-w-3xl mb-10 sm:mb-14"
              variants={stagger(0.1)}
              {...revealOnce}
            >
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-[#bf1e2e]/20 bg-white/70 px-4 py-1.5
                           text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#bf1e2e] backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf1e2e]" />
                02 — Built to Evolve
              </motion.span>

              <motion.h2
                variants={fadeUp}
                className="mt-5 text-fluid-h2 font-bold text-[#1C1C1C]"
              >
                Built to <span className="text-[#bf1e2e]">Evolve</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-4 text-[#1C1C1C] text-fluid-lead font-medium italic"
              >
                From experience to capability, from capability to leadership.
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
              variants={stagger()}
              {...revealOnce}
            >
              {BUILT_TO_EVOLVE.map((item) => (
                <motion.article
                  key={item.number}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="group relative flex flex-col overflow-hidden rounded-3xl bg-white
                             p-6 sm:p-8 shadow-[0_2px_20px_rgba(0,0,0,0.05)]
                             ring-1 ring-black/[0.04] hover:ring-[#bf1e2e]/30
                             hover:shadow-[0_24px_50px_-18px_rgba(191,30,46,0.3)]
                             transition-[box-shadow,--tw-ring-color] duration-500"
                >
                  <span
                    className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#bf1e2e] to-[#bf1e2e]/20"
                    aria-hidden
                  />
                  <span
                    className="text-4xl sm:text-5xl font-bold text-[#bf1e2e]/15 leading-none mb-4
                               group-hover:text-[#bf1e2e]/35 transition-colors duration-500"
                    aria-hidden
                  >
                    {item.number}
                  </span>
                  <h3 className="text-fluid-h3 font-bold text-[#1C1C1C] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-fluid-body text-justify hyphens-auto flex-grow">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= 03 Our Approach ================= */}
        <section className="relative min-h-[100dvh] flex items-center py-14 sm:py-16 lg:py-20 bg-[#0B0B0B] text-white overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.18] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                "radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)",
            }}
            aria-hidden
          />
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-[38rem] h-[24rem] rounded-full bg-[#bf1e2e]/25 blur-[140px] pointer-events-none"
            aria-hidden
          />

          <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-3xl mb-12 sm:mb-16"
              variants={stagger(0.1)}
              {...revealOnce}
            >
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5
                           text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-gray-300 backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf1e2e]" />
                03 — Our Approach
              </motion.span>

              <motion.h2
                variants={fadeUp}
                className="mt-5 text-fluid-h2 font-bold"
              >
                Our <span className="text-[#bf1e2e]">Approach</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-4 text-gray-300 text-fluid-lead font-medium italic"
              >
                Engineering with purpose. Delivery with accountability.
              </motion.p>
            </motion.div>

            <motion.ol
              className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-6"
              variants={stagger()}
              {...revealOnce}
            >
              {/* Connecting rail on desktop */}
              <span
                className="hidden lg:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                aria-hidden
              />

              {OUR_APPROACH.map((step) => (
                <motion.li
                  key={step.number}
                  variants={fadeUp}
                  className="group relative lg:pr-6"
                >
                  <div
                    className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#bf1e2e] to-[#9e1925]
                               text-white flex items-center justify-center font-bold text-sm mb-6
                               shadow-lg shadow-[#bf1e2e]/25
                               group-hover:scale-105 transition-transform duration-500"
                  >
                    {step.number}
                  </div>
                  <h3 className="text-fluid-h3 font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-fluid-body text-justify hyphens-auto">
                    {step.description}
                  </p>
                  <span
                    className="mt-5 block h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[#bf1e2e] to-transparent
                               transition-transform duration-500 group-hover:scale-x-100"
                    aria-hidden
                  />
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="relative py-14 sm:py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              {...revealOnce}
              className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] bg-[#0B0B0B]"
            >
              {/* Client photograph as the backdrop */}
              <img
                src={ctaImage}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-45"
              />
              {/* Readability + brand wash */}
              <span
                className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/85 to-[#0B0B0B]/30"
                aria-hidden
              />
              <span
                className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[#bf1e2e]/35 blur-[110px]"
                aria-hidden
              />

              <div className="relative grid lg:grid-cols-2 gap-8 p-7 sm:p-10 lg:p-14">
                <div className="max-w-xl">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5
                                   text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-gray-200 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf1e2e]" />
                    Let&apos;s Work Together
                  </span>

                  <h2 className="mt-5 text-fluid-h2 font-bold text-white">
                    Let&apos;s build something{" "}
                    <span className="text-[#bf1e2e]">that lasts.</span>
                  </h2>

                  <p className="mt-4 text-gray-300 text-fluid-body max-w-lg">
                    Talk to our team about your project, and we will help you
                    shape the right engineering approach from the very first
                    step.
                  </p>

                  <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate("/#contact")}
                      className="inline-flex items-center justify-center gap-2 bg-[#bf1e2e] hover:bg-[#961a27]
                                 text-white font-semibold rounded-xl px-7 sm:px-8 h-12 text-sm sm:text-base
                                 shadow-lg shadow-[#bf1e2e]/25 transition-colors duration-300"
                    >
                      Contact Us
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>

                    <a
                      href="mailto:info@enproconsultants.com"
                      className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/20
                                 px-6 h-12 text-sm sm:text-base font-semibold text-white
                                 hover:bg-white hover:text-[#1C1C1C] transition-colors duration-300"
                    >
                      <Mail className="w-4 h-4" />
                      info@enproconsultants.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AboutUs;
