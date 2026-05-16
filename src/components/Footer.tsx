import { Facebook, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white">

      {/* Main Footer Content */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex justify-center sm:justify-start">
              <img
                src="/src/assets/logo.png"
                alt="Enpro Consultants"
                className="h-10 sm:h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/80 text-sm sm:text-base mb-4 text-center sm:text-left leading-relaxed">
              Building strong foundations for the future with expert structural
              engineering solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left ">
            <h4 className="font-heading font-semibold text-lg mb-4 sm:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {["Home","Features", "About Us", "Services", "Contact Us"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-white/80 hover:text-[#bf1e2e] transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left lg:col-span-2">
            <h4 className="font-heading font-semibold text-lg mb-4 sm:mb-6">
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-white/80 text-sm sm:text-base">
              <li className="hover:text-white transition-colors duration-200">
                Conceptual and Preliminary Design
              </li>
              <li className="hover:text-white transition-colors duration-200">
                Design Review and Value Engineering
              </li>
              <li className="hover:text-white transition-colors duration-200">
                Project and Contract Management Services
              </li>
              <li className="hover:text-white transition-colors duration-200">
                Environmental and Social Services
              </li>
              <li className="hover:text-white transition-colors duration-200">
                Virtual and Digital Delivery
              </li>
              <li className="hover:text-white transition-colors duration-200">
                 Construction Support Services
              </li>

            </ul>
          </div>

          {/* Contact & Social */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h4 className="font-heading font-semibold text-lg mb-4 sm:mb-6">
              Connect With Us
            </h4>
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#bf1e2e] transition-colors duration-200"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {/* Uncomment if needed */}
              {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#bf1e2e] transition-colors duration-200"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#bf1e2e] transition-colors duration-200"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="w-5 h-5" />
              </a> */}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-white/60 text-sm sm:text-base">
          <p>
            &copy; {new Date().getFullYear()} Enpro Consultants. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
