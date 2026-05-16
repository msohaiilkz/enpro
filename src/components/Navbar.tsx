import React, { useState } from "react";
import {
  Menu,
  X,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react";
import logo from "@/assets/logo1.jpeg";

const SidebarNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (id: string) => {
    const targetUrl = `/#${id}`;
    window.location.assign(targetUrl);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Features", id: "features" },
    { label: "About Us", id: "about" },
    { label: "Service", id: "service" },
    { label: "Contact Us", id: "contact" },
  ];

  const socialLinks = [{ icon: Linkedin, href: "#" }];

  const DesktopSidebar = () => (
    <nav
      className="hidden lg:flex flex-col fixed top-0 left-0 h-full w-[280px] bg-black text-white z-50 
                 shadow-[4px_0_24px_rgba(0,0,0,0.4)] justify-between border-r border-white/5 transition-all duration-300"
    >
      {/* Logo Area */}
      <div className="flex flex-col items-center justify-center py-12">
        <img
          src={logo}
          alt="Enpro Consultants"
          className="h-14 w-auto object-contain"
        />
      </div>

      {/* Navigation Links - Centered Vertically with more top/bottom gap */}
      <div className="flex-grow flex flex-col justify-center space-y-4 px-6 overflow-hidden no-scrollbar py-20">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleNavigation(link.id)}
            className="group flex items-center justify-center w-full px-4 py-3 rounded-xl
                       text-gray-400 hover:text-white hover:bg-white/5
                       transition-all duration-200 ease-in-out"
          >
            <span className="text-[16px] font-medium tracking-wide group-hover:scale-105 text-white transition-transform duration-200">
              {link.label}
            </span>
          </button>
        ))}
      </div>

      {/* Footer Area: Socials + CTA */}
      <div className="flex flex-col space-y-6 items-center w-full pb-10 px-6 pt-8">
        {/* Social Icons */}
        <div className="flex space-x-4 justify-center">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center 
                         text-gray-400 hover:text-white hover:border-[#bf1e2e] hover:bg-[#bf1e2e] 
                         transition-all duration-300 shadow-lg hover:shadow-[#bf1e2e]/20"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        {/* Tagline Container */}
        <div className="w-full flex flex-col items-center bg-[#9e1925] rounded-xl py-3 px-4">
          {/* Tagline - Now White and Non-Italic */}
          <p className="text-white text-sm font-bold tracking-widest text-center opacity-80 uppercase">
            Partners in Performance
          </p>
        </div>
      </div>
    </nav>
  );

  const MobileMenu = () => (
    <>
      <div className="lg:hidden fixed top-3 right-3 z-[90] sm:top-4 sm:right-4">
        <button
          className="p-2 sm:p-3 rounded-xl bg-[#1a1a1a]/90 backdrop-blur-md text-white shadow-xl border border-white/10 hover:bg-[#2a2a2a]/90 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#1a1a1a] text-white flex flex-col items-center justify-center space-y-6 sm:space-y-10 p-4 sm:p-8 animate-fade-in overflow-y-auto">
          <div className="p-3 sm:p-4 bg-white/20 rounded-2xl border border-white/10 shrink-0">
            <img
              src={logo}
              alt="BUILDA"
              className="h-12 sm:h-16 w-auto object-contain"
            />
          </div>

          <div className="flex flex-col w-full items-center space-y-3 sm:space-y-4 shrink-0">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigation(link.id)}
                className="text-lg sm:text-2xl font-medium text-gray-300 hover:text-[#bf1e2e] transition-colors py-1.5 sm:py-2"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col w-full items-center space-y-4 sm:space-y-8 shrink-0 pb-6 sm:pb-8">
            <div className="flex space-x-3 sm:space-x-5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center 
                                hover:bg-[#bf1e2e] hover:border-[#bf1e2e] text-gray-300 hover:text-white transition-all duration-300"
                >
                  <social.icon size={18} className="sm:w-5.5 sm:h-5.5" />
                </a>
              ))}
            </div>

            <button
              onClick={() => handleNavigation("contact")}
              className="w-full max-w-xs text-white font-bold py-3 sm:py-4 rounded-xl flex items-center justify-center space-x-2 shadow-xl text-sm sm:text-base"
              style={{
                background: "linear-gradient(135deg, #BE1E2D 0%, #9e1925 100%)",
              }}
            >
              <span className="tracking-wide">Request A Visit</span>
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </button>

            {/* Tagline */}
            <p className="text-[#BE1E2D]  p-3 text-xs sm:text-base font-bold tracking-widest italic mt-2 drop-shadow-sm">
              Partners in Performance
            </p>
          </div>
        </div>
      )}
    </>
  );

  return (
    <>
      <DesktopSidebar />
      <MobileMenu />
    </>
  );
};

export default SidebarNav;
