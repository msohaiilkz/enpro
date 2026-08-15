import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Crumb {
  label: string;
  to?: string;
}

interface PageBannerProps {
  image: string;
  alt: string;
  /** Set over the artwork; the per-service banners carry no lettering */
  title?: string;
  crumbs: Crumb[];
}

/**
 * Banner + breadcrumb used at the top of the detail pages, matching the
 * structure of the reference site the client shared.
 */
const PageBanner = ({ image, alt, title, crumbs }: PageBannerProps) => (
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
          {/* Scrim so the type stays readable over any artwork */}
          <span
            className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/85 via-[#0B0B0B]/55 to-[#0B0B0B]/10"
            aria-hidden
          />
          <div className="absolute inset-0 flex items-center">
            <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
              <h1 className="text-fluid-h2 font-bold text-white max-w-3xl">
                {title}
              </h1>
              <span
                className="mt-4 block h-[3px] w-14 bg-[#bf1e2e]"
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
                className="hover:text-[#bf1e2e] transition-colors"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="text-[#bf1e2e] font-medium">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  </section>
);

export default PageBanner;
