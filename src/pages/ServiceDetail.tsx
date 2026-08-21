import { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Mail, Settings } from "lucide-react";
import { fadeUp, scaleIn, stagger, revealOnce } from "@/lib/motion";
import type { ServiceIcon } from "@/data/services";

/**
 * Each service supplies its own icons: either an artwork file from the client
 * or a lucide component.
 */
const ServiceIconMark = ({
  icon,
  className,
}: {
  icon: ServiceIcon;
  className?: string;
}) => {
  if (typeof icon === "string") {
    return <img src={icon} alt="" aria-hidden="true" className={className} />;
  }
  const Icon = icon;
  return <Icon className={className} strokeWidth={1.5} aria-hidden />;
};

import TopNavbar from "@/components/TopNavbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ScrollToTop from "@/components/ScrollToTop";
import bannerImage from "@/assets/banner-service-default.jpg";
import ctaImage from "@/assets/contact-enpro.jpeg";
import { SERVICES, getServiceBySlug } from "@/data/services";

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const crumbs = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/#services" },
    { label: service ? service.title : "Service" },
  ];

  // Six categories read best in three columns, four in two.
  const categoryCount = service?.detail?.whatWeDo.categories.length ?? 0;
  const categoryCols = categoryCount % 3 === 0 ? 3 : 2;

  // Accent theme: the environmental page runs green, everything else brand red.
  const accent = service?.accent ?? "#bf1e2e";
  const accentDark = service?.accentDark ?? "#961a27";
  const themeVars = {
    "--accent": accent,
    "--accent-dark": accentDark,
    "--accent-light": service?.accent ? accent : "#e03347",
    "--accent-10": accent + "1A",
    "--accent-15": accent + "26",
    "--accent-20": accent + "33",
    "--accent-25": accent + "40",
    "--accent-30": accent + "4D",
    "--accent-35": accent + "59",
    "--accent-40": accent + "66",
    "--accent-50": accent + "80",
    // The logo artwork carries the brand red baked into the PNG; on a themed
    // page a hue shift turns just those red strokes green (black/white stay).
    ...(service?.accent ? { "--logo-filter": "hue-rotate(105deg) saturate(0.8)" } : {}),
  } as React.CSSProperties;

  return (
    // keyed by slug: switching between services remounts the page cleanly,
    // so every section resets and animates in rather than carrying stale state
    <div
      key={slug}
      className="min-h-screen bg-white w-full overflow-x-hidden"
      style={themeVars}
    >
      <TopNavbar />

      <PageBanner
        image={service?.banner ?? bannerImage}
        alt={
          service
            ? `${service.title} — Enpro Consultants`
            : "Enpro Consultants services"
        }
        title={service ? service.title : "Services"}
        titleTone="dark"
        accent={accent}
        crumbs={crumbs}
      />

      <main className="w-full">
        {!service ? (
          <NotFoundState />
        ) : !service.detail ? (
          <ComingSoonState title={service.title} description={service.description} />
        ) : (
          <>
            {/* ================= 01 - What We Do ================= */}
            <section className="py-14 sm:py-18 lg:py-24 bg-white">
              <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <motion.div
                  className="mb-7 sm:mb-9"
                  variants={stagger(0.1)}
                  {...revealOnce}
                >
                                   <motion.h1
                    variants={fadeUp}
                    className="text-fluid-h2 font-bold text-[#1C1C1C]"
                  >
                    What We <span className="text-[color:var(--accent)]">Do</span>
                  </motion.h1>
                   <motion.span
                    variants={fadeUp}
                    className="block h-[3px] w-14 bg-[color:var(--accent)] mt-4 mb-4"
                  />
                  

                  {/* Tagline and intro read as one block, so they are set in
                      the same style rather than two disconnected lines */}
                  <div className="max-w-4xl space-y-3">
                    {service.detail.tagline && (
                      <motion.p
                        variants={fadeUp}
                        className="text-gray-600 text-fluid-body text-justify"
                      >
                        {service.detail.tagline}
                      </motion.p>
                    )}

                    {service.detail.whatWeDo.intro?.map((paragraph) => (
                      <motion.p
                        key={paragraph.slice(0, 40)}
                        variants={fadeUp}
                        className="text-gray-600 text-fluid-body text-justify"
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>

                {/* Category grid - three columns for six items, two for four */}
                <motion.div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-6 lg:gap-x-8 ${
                    categoryCols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
                  }`}
                  variants={stagger(0.08)}
                  {...revealOnce}
                >
                  {service.detail.whatWeDo.categories.map((category, index) => (
                    <motion.div
                      key={category.number}
                      variants={fadeUp}
                      className={`group flex gap-4 sm:gap-5 lg:pr-8 ${
                        (index + 1) % categoryCols !== 0
                          ? "lg:border-r lg:border-gray-200"
                          : ""
                      }`}
                    >
                      <div className="flex-shrink-0 flex items-start justify-center
                                      group-hover:scale-110 transition-transform duration-500">
                        <ServiceIconMark
                          icon={category.icon}
                          className="w-10 h-10 object-contain text-[color:var(--accent)]"
                        />
                      </div>
                      <div>
                        <h2 className="text-fluid-h3 font-bold text-[#1C1C1C] uppercase tracking-wide mb-2">
                          {category.title}
                        </h2>
                        {category.description && (
                          <p className="text-gray-500 text-fluid-body mb-3">
                            {category.description}
                          </p>
                        )}
                        <ul className="space-y-0.5">
                          {category.items.map((item) => (
                            <li
                              key={item}
                              className="flex gap-2 text-gray-600 text-fluid-body leading-snug"
                            >
                              <span
                                className="mt-[7px] w-1 h-1 rounded-full bg-[color:var(--accent)] flex-shrink-0"
                                aria-hidden
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

              </div>
            </section>

            {/* ---- Engineering capability: its own compact band ---- */}
            <section className="py-10 sm:py-12 bg-white">
              <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <motion.div
                  variants={fadeUp}
                  {...revealOnce}
                  className="relative rounded-3xl overflow-hidden
                             bg-gradient-to-br from-[#232323] to-[#111111] p-6 sm:p-8 lg:p-9"
                >
                  <span
                    className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-[color:var(--accent-25)] blur-3xl"
                    aria-hidden
                  />
                  {/* Label sits on top so the items get the full width and each
                      one stays on a single line */}
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6 sm:mb-7">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                        <Settings
                          className="w-7 h-7 text-[color:var(--accent)]"
                          strokeWidth={1.5}
                        />
                      </div>
                      <p className="text-white font-semibold uppercase tracking-widest text-[11px] sm:text-xs">
                        {service.detail.whatWeDo.capabilityLabel ??
                          "Our Engineering Capability"}
                      </p>
                    </div>

                    {/* Grid rows stretch, so every divider in a row is the same
                        height */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3">
                      {service.detail.whatWeDo.capability.map((item, index) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 border-l border-[color:var(--accent-50)] pl-4 min-h-[2.5rem]"
                        >
                          <span className="text-[color:var(--accent)] font-bold text-xs tracking-wider flex-shrink-0">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-gray-300 text-fluid-body leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* ================= 02 - How We Work ================= */}
            {/* Deliberately a different concept: dark band, sticky intro, numbered rows */}
            <section className="relative py-14 sm:py-18 lg:py-24 bg-[#0B0B0B] text-white overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.16] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                  backgroundSize: "64px 64px",
                  maskImage:
                    "radial-gradient(ellipse 70% 60% at 30% 40%, #000 35%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 70% 60% at 30% 40%, #000 35%, transparent 100%)",
                }}
                aria-hidden
              />
              <div
                className="absolute top-0 left-1/4 w-[34rem] h-[22rem] rounded-full bg-[color:var(--accent-20)] blur-[140px] pointer-events-none"
                aria-hidden
              />

              <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                  <motion.div
                    className="lg:col-span-5"
                    variants={stagger(0.1)}
                    {...revealOnce}
                  >
                    <div className="lg:sticky lg:top-28">
                      <motion.h2
                        variants={fadeUp}
                        className="text-fluid-h2 font-bold"
                      >
                        How We  <span className="text-[color:var(--accent)]">Work</span>
                      </motion.h2>

                      <motion.span
                        variants={fadeUp}
                        className="block h-[3px] w-16 bg-[color:var(--accent)] mt-5 mb-6"
                      />

                      {service.detail.howWeWork.intro.map((paragraph) => (
                        <motion.p
                          key={paragraph.slice(0, 40)}
                          variants={fadeUp}
                          className="text-gray-400 text-fluid-body mb-4 last:mb-0"
                        >
                          {paragraph}
                        </motion.p>
                      ))}

                      {/* The service's own photograph, under the copy */}
                      {service.detail.photo && (
                        <motion.div
                          variants={scaleIn}
                          className="relative mt-7 overflow-hidden rounded-2xl ring-1 ring-white/10"
                        >
                          <img
                            src={service.detail.photo}
                            alt={`${service.title} in practice`}
                            loading="lazy"
                            className="w-full h-[clamp(200px,32vh,360px)] object-cover object-center"
                          />
                          <span
                            className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/45 to-transparent"
                            aria-hidden
                          />
                        </motion.div>
                      )}

                    </div>
                  </motion.div>

                  <motion.div
                    className="lg:col-span-7"
                    variants={stagger(0.12)}
                    {...revealOnce}
                  >
                    {service.detail.howWeWork.points && (
                    <ul className="divide-y divide-white/10">
                      {service.detail.howWeWork.points.map((point) => (
                        <motion.li
                          key={point.title}
                          variants={fadeUp}
                          className="group relative py-6 sm:py-8 first:pt-0 last:pb-0"
                        >
                          <span
                            className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-[color:var(--accent)]
                                       origin-top scale-y-0 group-hover:scale-y-100
                                       transition-transform duration-500"
                            aria-hidden
                          />
                          <div className="flex gap-5 sm:gap-7 transition-transform duration-500 group-hover:translate-x-4">
                            <span
                              className="flex h-14 w-14 flex-shrink-0 items-center justify-center
                                         rounded-2xl border border-white/10 bg-white/[0.07]
                                         group-hover:border-[color:var(--accent-50)] group-hover:bg-[color:var(--accent-15)]
                                         transition-colors duration-500"
                              aria-hidden
                            >
                              <ServiceIconMark
                                icon={point.icon}
                                className="h-7 w-7 object-contain text-[color:var(--accent)]"
                              />
                            </span>
                            <div>
                              <h3 className="text-fluid-h3 font-bold mb-2.5 group-hover:text-[color:var(--accent)] transition-colors duration-500">
                                {point.title}
                              </h3>
                              <p className="text-gray-400 text-fluid-body">
                                {point.description}
                              </p>
                            </div>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                    )}

                    {/* Documents that close on a short list instead of titled points */}
                    {service.detail.howWeWork.focus && (
                      <div>
                        <motion.h3
                          variants={fadeUp}
                          className="text-fluid-h3 font-bold mb-5 sm:mb-6"
                        >
                          {service.detail.howWeWork.focus.heading}
                        </motion.h3>

                        <ul className="divide-y divide-white/10">
                          {service.detail.howWeWork.focus.items.map((item) => (
                            <motion.li
                              key={item.text}
                              variants={fadeUp}
                              className="group relative py-4 sm:py-5 first:pt-0 last:pb-0"
                            >
                              <span
                                className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-[color:var(--accent)]
                                           origin-top scale-y-0 group-hover:scale-y-100
                                           transition-transform duration-500"
                                aria-hidden
                              />
                              <div className="flex items-center gap-4 sm:gap-5 transition-transform duration-500 group-hover:translate-x-4">
                                <span
                                  className="flex flex-shrink-0 items-center justify-center
                                             group-hover:scale-110 transition-transform duration-500"
                                  aria-hidden
                                >
                                  {item.icon ? (
                                    <ServiceIconMark
                                      icon={item.icon}
                                      className="h-10 w-10 object-contain text-[color:var(--accent)]"
                                    />
                                  ) : (
                                    <Check
                                      className="h-5 w-5 text-[color:var(--accent)]"
                                      strokeWidth={2}
                                    />
                                  )}
                                </span>
                                <p className="text-gray-300 text-fluid-body group-hover:text-white transition-colors duration-500">
                                  {item.text}
                                </p>
                              </div>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </section>

            {/* ================= 03 - Project Impact ================= */}
            {/* Third concept: no boxes at all. Outlined numerals on a stepped
                baseline, separated by hairlines - deliberately unlike the icon
                grid in 01 and the dark rows in 02. */}
            <section className="relative py-14 sm:py-18 lg:py-24 bg-[#fbe5e7] overflow-hidden">
              <div
                className="absolute -bottom-40 -left-24 w-[32rem] h-[32rem] rounded-full bg-white/70 blur-[130px] pointer-events-none"
                aria-hidden
              />

              <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <motion.div
                  className="max-w-3xl mb-12 sm:mb-14"
                  variants={fadeUp}
                  {...revealOnce}
                >
                  <h2 className="text-fluid-h2 font-bold text-[#1C1C1C]">
                    Project <span className="text-[color:var(--accent)]">Impact</span>
                  </h2>
                </motion.div>

                {service.detail.projectImpact.intro && (
                  <motion.div
                    className="max-w-4xl mb-10 sm:mb-12 space-y-4"
                    variants={stagger(0.1)}
                    {...revealOnce}
                  >
                    {service.detail.projectImpact.intro.map((paragraph) => (
                      <motion.p
                        key={paragraph.slice(0, 40)}
                        variants={fadeUp}
                        className="text-[#1C1C1C] text-fluid-body font-medium text-justify"
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </motion.div>
                )}

                {service.detail.projectImpact.benefits && (
                  <motion.div variants={stagger(0.08)} {...revealOnce}>
                    <motion.h3
                      variants={fadeUp}
                      className="text-fluid-h3 font-bold text-[#1C1C1C] mb-6"
                    >
                      {service.detail.projectImpact.benefits.heading}
                    </motion.h3>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {service.detail.projectImpact.benefits.items.map(
                        (item) => (
                          <motion.li
                            key={item.text}
                            variants={fadeUp}
                            className="group flex items-start gap-4 border-t border-[color:var(--accent-15)] pt-4"
                          >
                            <span
                              className="flex flex-shrink-0 items-center justify-center
                                         group-hover:scale-110 transition-transform duration-500"
                              aria-hidden
                            >
                              {item.icon ? (
                                <ServiceIconMark
                                  icon={item.icon}
                                  className="h-10 w-10 object-contain text-[color:var(--accent)]"
                                />
                              ) : (
                                <Check
                                  className="h-5 w-5 text-[color:var(--accent)]"
                                  strokeWidth={2.5}
                                />
                              )}
                            </span>
                            <p className="text-gray-700 text-fluid-body">
                              {item.text}
                            </p>
                          </motion.li>
                        ),
                      )}
                    </ul>
                  </motion.div>
                )}

                {service.detail.projectImpact.outcomes && (
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                  variants={stagger(0.1)}
                  {...revealOnce}
                >
                  {service.detail.projectImpact.outcomes.map((impact, index) => (
                    <motion.div
                      key={impact.title}
                      variants={fadeUp}
                      className={`group relative px-0 sm:px-6 lg:px-7 py-8 sm:py-0
                                  border-t border-[color:var(--accent-15)] sm:border-t-0
                                  ${index !== 0 ? "sm:border-l sm:border-[color:var(--accent-15)]" : ""}
                                  ${
                                    // stepped baseline on desktop
                                    ["lg:mt-0", "lg:mt-8", "lg:mt-16", "lg:mt-24"][
                                      index
                                    ]
                                  }`}
                    >
                      {/* Icon matching what the outcome describes */}
                      <span
                        className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white
                                   shadow-[0_2px_14px_rgba(191,30,46,0.10)]
                                   group-hover:scale-105 group-hover:shadow-[0_8px_24px_rgba(191,30,46,0.20)]
                                   transition-all duration-500"
                        aria-hidden
                      >
                        <ServiceIconMark
                          icon={impact.icon}
                          className="h-7 w-7 object-contain text-[color:var(--accent)]"
                        />
                      </span>

                      <h3 className="text-fluid-h3 font-bold text-[#1C1C1C] mb-3 leading-snug">
                        {impact.title}
                      </h3>

                      <span
                        className="block h-[2px] w-10 bg-[color:var(--accent)] mb-4 origin-left
                                   transition-transform duration-500 group-hover:scale-x-[2.4]"
                        aria-hidden
                      />

                      <p className="text-gray-600 text-fluid-body">
                        {impact.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
                )}
              </div>
            </section>

            {/* ================= Other services ================= */}
            {/* An index list rather than chips: each row reveals that service's
                artwork on hover and sweeps in the brand colour. */}
            <section className="py-14 sm:py-18 lg:py-24 bg-white border-t border-gray-100">
              <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-fluid-h2 font-bold text-[#1C1C1C]">
                    Other <span className="text-[color:var(--accent)]">Services</span>
                  </h2>
                </div>

                <ul className="border-t border-gray-200">
                  {SERVICES.filter((item) => item.slug !== service.slug).map(
                    (item, index) => (
                      <li key={item.slug} className="border-b border-gray-200">
                        <Link
                          to={`/services/${item.slug}`}
                          className="group relative flex items-center gap-4 sm:gap-8 overflow-hidden
                                     py-4 sm:py-5 px-2 sm:px-4"
                        >
                          {/* Brand sweep from the left */}
                          <span
                            className="absolute inset-0 bg-[color:var(--accent)] origin-left scale-x-0
                                       transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                                       group-hover:scale-x-100"
                            aria-hidden
                          />

                          <span className="relative text-xs sm:text-sm font-bold text-[color:var(--accent)] group-hover:text-white/70 transition-colors duration-300 w-7 flex-shrink-0">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span
                            className="relative text-fluid-h3 font-bold text-[#1C1C1C] group-hover:text-white
                                       transition-[color,transform] duration-500 group-hover:translate-x-2"
                          >
                            {item.title}
                          </span>

                          <span className="relative flex-1" />

                          {/* Artwork preview, revealed on hover */}
                          <span className="relative hidden md:block w-24 h-14 rounded-xl overflow-hidden flex-shrink-0
                                           opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
                                           transition-all duration-500 shadow-lg">
                            <img
                              src={item.image}
                              alt=""
                              aria-hidden="true"
                              loading="lazy"
                              className="w-full h-full object-cover object-center"
                            />
                          </span>

                          <span
                            className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full
                                       border border-gray-200 text-[color:var(--accent)]
                                       group-hover:bg-white group-hover:border-white
                                       group-hover:translate-x-1 transition-all duration-500"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </section>
          </>
        )}

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
                className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[color:var(--accent-35)] blur-[110px]"
                aria-hidden
              />

              <div className="relative grid lg:grid-cols-2 gap-8 p-7 sm:p-10 lg:p-14">
                <div className="max-w-xl">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5
                                   text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-gray-200 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)]" />
                    Let&apos;s Work Together
                  </span>

                  <h2 className="mt-5 text-fluid-h2 font-bold text-white">
                    Have a project in{" "}
                    <span className="text-[color:var(--accent)]">mind?</span>
                  </h2>

                  <p className="mt-4 text-gray-300 text-fluid-body max-w-lg">
                    Share your requirements with our engineering team and we
                    will advise on the most practical way forward.
                  </p>

                  <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate("/#contact")}
                      className="inline-flex items-center justify-center gap-2 bg-[color:var(--accent)] hover:bg-[color:var(--accent-dark)]
                                 text-white font-semibold rounded-xl px-7 sm:px-8 h-12 text-sm sm:text-base
                                 shadow-lg shadow-[color:var(--accent-25)] transition-colors duration-300"
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

/** Shown for the five services whose detailed content has not been supplied yet. */
const ComingSoonState = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <section className="min-h-[70dvh] flex items-center py-16 sm:py-24 bg-white">
    <div className="w-full max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
      <p className="text-[color:var(--accent)] font-semibold uppercase tracking-widest text-xs sm:text-sm mb-3">
        Service
      </p>
      <h2 className="text-fluid-h2 font-bold text-[#1C1C1C] mb-5">
        {title}
      </h2>
      <span className="block h-[3px] w-16 bg-[color:var(--accent)] mx-auto mb-7" />
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
        {description}
      </p>
      <p className="text-gray-500 text-sm">
        The detailed page for this service is being prepared. In the meantime,
        our team is happy to walk you through our capabilities.
      </p>
    </div>
  </section>
);

const NotFoundState = () => (
  <section className="py-16 sm:py-24 bg-white">
    <div className="w-full max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
      <h2 className="text-fluid-h2 font-bold text-[#1C1C1C] mb-5">
        Service not found
      </h2>
      <p className="text-gray-600 text-sm sm:text-base mb-8">
        The service you are looking for is not available.
      </p>
      <Link
        to="/#services"
        className="inline-flex items-center gap-2 text-[color:var(--accent)] font-semibold text-sm hover:underline"
      >
        View all services
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </section>
);

export default ServiceDetail;
