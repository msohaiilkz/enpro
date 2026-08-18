import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Mail } from "lucide-react";
import {
  LinkedInIcon,
  FacebookIcon,
  WhatsAppIcon,
} from "@/components/icons/SocialIcons";
import logo from "@/assets/logo1.png";
// TODO: swap back to enpro-logo.png once that file is added to src/assets
import logo2 from "@/assets/npro-logo.png";
import { useNavigate, useLocation } from "react-router-dom";

/** Links with a `to` open that page; the rest scroll to a landing section. */
const NAV_LINKS: { label: string; id?: string; to?: string }[] = [
  { label: "Home",       to: "/" },
  { label: "About Us",   to: "/about-us" },
  { label: "Why Enpro",  id: "why-enpro" },
  { label: "Services",   id: "services" },
  { label: "Contact",    id: "contact" },
];

const TopNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const navigate  = useNavigate();
  const location  = useLocation();
  const isDetail  = location.pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when sidebar is open */
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [sidebarOpen]);

  const handleNav = (link: { id?: string; to?: string }) => {
    setSidebarOpen(false);
    if (link.to) {
      navigate(link.to);
      return;
    }
    if (!link.id) return;
    if (isDetail) {
      window.location.assign(`/#${link.id}`);
    } else {
      const el = document.getElementById(link.id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Fixed while scrolling; the bar turns to frosted glass once the page moves */}
      <header
        className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#111111]/70 backdrop-blur-xl supports-[backdrop-filter]:bg-[#111111]/60 shadow-[0_4px_30px_rgba(0,0,0,0.45)] border-b border-white/[0.08]"
            : "bg-[#1a1a1a] border-b border-transparent"
        }`}
      >
        {/* Top accent line */}
        <div className="h-[3px] w-full bg-gradient-to-r from-[color:var(--accent)] via-[color:var(--accent-light)] to-[color:var(--accent)]" />

        <div
          className={`max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-[58px] sm:h-[66px]" : "h-[66px] sm:h-[76px]"
          }`}
        >

          {/* Logo */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex items-center gap-3 flex-shrink-0 group"
            aria-label="Go home"
          >
            <img
              src={logo}
              alt="Enpro Consultants"
              className="h-10 sm:h-12 w-auto object-contain rounded transition-transform duration-200 group-hover:scale-105"
            />
          </button>

          {/* Desktop nav — centered */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNav(link)}
                className="relative px-4 py-2 text-[14px] font-medium text-gray-300 hover:text-white transition-colors duration-200 whitespace-nowrap group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[color:var(--accent)] rounded-full w-0 group-hover:w-4/5 transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* CTA — desktop */}
            <button
              type="button"
              onClick={() => handleNav({ id: "contact" })}
              className="hidden sm:inline-flex items-center gap-2 bg-[color:var(--accent)] hover:bg-[color:var(--accent-dark)] text-white font-semibold px-5 py-2.5 rounded-xl text-[13px] transition-all duration-200 hover:shadow-lg hover:shadow-[color:var(--accent-30)] whitespace-nowrap group"
            >
              GET A QUOTE
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Hamburger — opens canvas sidebar */}
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all duration-200"
            >
              <Menu size={18} className="text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Keeps the page from sliding under the fixed bar */}
      <div className="h-[69px] sm:h-[79px]" aria-hidden />

      {/* ─── Canvas Sidebar Overlay ─── */}

      {/* Backdrop */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-[340px] max-w-[90vw] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close menu"
          className="absolute top-4 right-4 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 text-gray-700"
        >
          <X size={18} />
        </button>

        {/* Scrollable content */}
        <div className="flex-1 overflow-hidden px-8 py-6">

          {/* Brand */}
          <div className="mb-6">
            <button
              type="button"
              onClick={() => {
                setSidebarOpen(false);
                navigate("/");
              }}
              aria-label="Go to home page"
              className="block mb-4 group"
            >
              <img
                src={logo2}
                alt="Enpro Consultants"
                className="h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </button>
            <p className="text-gray-500 text-sm leading-relaxed">
              Delivering excellence in engineering consultancy and construction management across every project.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-100 mb-4" />

          {/* Nav Links */}
          <nav className="flex flex-col gap-0.5 mb-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNav(link)}
                className="flex items-center gap-3 text-left px-3 py-2 text-gray-700 hover:text-[color:var(--accent)] hover:bg-[color:var(--accent-10)] rounded-lg text-sm font-medium transition-all duration-200 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                {link.label}
              </button>
            ))}
          </nav>

          {/* Divider */}
          <div className="h-px bg-gray-100 mb-4" />

          {/* Get In Touch */}
          <div className="mb-4">
            <h3 className="text-base font-bold text-gray-900 mb-3">Get In Touch</h3>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@enproconsultants.com"
                className="group flex items-center gap-3"
              >
                <span className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:border-[color:var(--accent)] group-hover:bg-[color:var(--accent)] transition-colors duration-200">
                  <Mail
                    size={14}
                    className="text-gray-500 group-hover:text-white transition-colors duration-200"
                  />
                </span>
                <span className="text-sm text-gray-600 group-hover:text-[color:var(--accent)] transition-colors duration-200 break-all">
                  info@enproconsultants.com
                </span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-100 mb-6" />

          {/* Tagline, given the same shape as the site's buttons */}
          <div
            className="w-full flex items-center justify-center rounded-xl
                       border border-[color:var(--accent-25)] bg-[color:var(--accent-10)] px-4 py-3"
          >
            <p className="text-[color:var(--accent)] text-[11px] font-bold uppercase tracking-[0.22em] text-center whitespace-nowrap">
              Partners in Performance
            </p>
          </div>
        </div>

        {/* Social icons close the menu, centred */}
        <div className="px-8 pb-8 pt-5 border-t border-gray-100">
          <div className="flex items-center justify-center gap-3">
            {[
              { Icon: LinkedInIcon, href: "#", label: "LinkedIn" },
              { Icon: FacebookIcon, href: "#", label: "Facebook" },
              { Icon: WhatsAppIcon, href: "#", label: "WhatsApp" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full bg-[#1C1C1C] flex items-center justify-center
                           text-white hover:bg-[color:var(--accent)] hover:scale-110
                           hover:shadow-lg hover:shadow-[color:var(--accent-40)]
                           transition-all duration-300"
              >
                <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default TopNavbar;