import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#0B0B0B] text-white px-5 sm:px-6">
      {/* Same texture and brand glow used across the site */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 45%, #000 35%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 45%, #000 35%, transparent 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[34rem] h-[22rem] rounded-full bg-[#bf1e2e]/25 blur-[140px] pointer-events-none"
        aria-hidden
      />

      <div className="relative text-center max-w-xl">
        <span
          className="block text-[clamp(4rem,10vw+2vh,9rem)] font-bold leading-none"
          style={{
            color: "transparent",
            WebkitTextStroke: "2px rgba(191,30,46,0.55)",
          }}
          aria-hidden
        >
          404
        </span>

        <h1 className="mt-4 text-fluid-h2 font-bold">
          Page not <span className="text-[#bf1e2e]">found</span>
        </h1>

        <p className="mt-4 text-gray-400 text-fluid-body">
          The page you are looking for may have been moved, renamed, or is no
          longer available.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-[#bf1e2e] hover:bg-[#961a27]
                       text-white font-semibold rounded-xl px-7 h-12 text-sm sm:text-base
                       shadow-lg shadow-[#bf1e2e]/25 transition-colors duration-300"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>

          <Link
            to="/#services"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20
                       px-7 h-12 text-sm sm:text-base font-semibold text-white
                       hover:bg-white hover:text-[#1C1C1C] transition-colors duration-300"
          >
            View Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
