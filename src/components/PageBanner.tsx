import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Crumb {
  label: string;
  to?: string;
}

interface PageBannerProps {
  image: string;
  alt: string;
  /** Set over the artwork when it carries no lettering of its own */
  title?: string;
  /** "dark" suits light artwork: no scrim, dark type */
  titleTone?: "light" | "dark";
  /** Colour of the rule under the title */
  accent?: string;
  crumbs: Crumb[];
}

/**
 * Banner + breadcrumb used at the top of the detail pages, matching the
 * structure of the reference site the client shared.
 */
const PageBanner = ({
  image,
  alt,
  title,
  titleTone = "light",
  accent = "#bf1e2e",
  crumbs,
}: PageBannerProps) => (
  <section className="w-full">
    {/* Fixed-height strip, the same treatment the reference site uses for its
        page banners. */}
    <div className="relative w-full bg-[#f7f7f7] overflow-hidden">
      <img
        src={image}
        alt={alt}
        className="block w-full h-[210px] sm:h-[300px] lg:h-[400px] xl:h-[440px] object-cover object-center"
      />

      {title && (
        <>
          {titleTone === "light" && (
            /* Scrim so the type stays readable over darker artwork */
            <span
              className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/85 via-[#0B0B0B]/55 to-[#0B0B0B]/10"
              aria-hidden
            />
          )}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
              <motion.h1
                initial={{ opacity: 0, x: -36 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`text-fluid-h2 font-bold max-w-md sm:max-w-lg ${
                  titleTone === "dark" ? "text-[#1C1C1C]" : "text-white"
                }`}
              >
                {title}
              </motion.h1>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
                className="mt-4 block h-[3px] w-14 origin-left"
                style={{ backgroundColor: accent }}
                aria-hidden
              />
            </div>
          </div>
        </>
      )}
    </div>

    <nav
      aria-label="Breadcrumb"
      className="w-full bg-[#f7f7f7] border-b border-gray-200"
    >
      <ol className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-gray-500">
        {crumbs.map((crumb, index) => (
          <li key={crumb.label} className="flex items-center gap-1.5">
            {index > 0 && (
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" aria-hidden />
            )}
            {crumb.to ? (
              <Link
                to={crumb.to}
                className="hover:text-[color:var(--accent)] transition-colors"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="text-[color:var(--accent)] font-medium">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  </section>
);

export default PageBanner;
