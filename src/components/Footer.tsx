import logo from "@/assets/npro-logo.png";
import {
  LinkedInIcon,
  FacebookIcon,
  WhatsAppIcon,
} from "@/components/icons/SocialIcons";

const Footer = () => {
  // TODO: replace the placeholder hrefs once the client shares the live profiles
  const socialLinks = [
    { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
    { icon: FacebookIcon, href: "#", label: "Facebook" },
    { icon: WhatsAppIcon, href: "#", label: "WhatsApp" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Why Enpro", id: "why-enpro" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
  ];

  const services = [
    "Structural Design & Engineering",
    "Design Review & Value Engineering",
    "Construction Support Services",
    "Project & Contract Management",
    "Environmental & Social Advisory",
    "Digital Engineering & BIM",
  ];

  return (
    <footer className="bg-white text-[#1C1C1C] border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4 flex justify-center sm:justify-start">
              <img
                src={logo}
                alt="Enpro Consultants"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <h4 className="font-heading font-semibold text-[#bf1e2e] text-base mb-3 text-center sm:text-left">
              Enpro Consultants
            </h4>
            <p className="text-gray-600 text-sm sm:text-base text-center sm:text-left leading-relaxed">
              Building strong foundations for the future with expert structural
              engineering solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-semibold text-[#bf1e2e] text-base mb-4 sm:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-600 hover:text-[#bf1e2e] transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-semibold text-[#bf1e2e] text-base mb-4 sm:mb-6">
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-semibold text-[#bf1e2e] text-base mb-4 sm:mb-6">
              Contact Us
            </h4>
            <a
              href="mailto:info@enproconsultants.com"
              className="text-gray-600 hover:text-[#bf1e2e] transition-colors duration-200 text-sm sm:text-base break-all"
            >
              info@enproconsultants.com
            </a>

            <h4 className="font-heading font-semibold text-[#bf1e2e] text-base mt-6 sm:mt-8 mb-4">
              Connect With Us
            </h4>
            <div className="flex justify-center sm:justify-start gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group w-10 h-10 rounded-full bg-[#1C1C1C] flex items-center justify-center
                             text-white hover:bg-[#bf1e2e] hover:scale-110
                             hover:shadow-lg hover:shadow-[#bf1e2e]/40
                             transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright - dark strip, matching the sidebar's finish */}
      <div className="bg-gradient-to-b from-[#242424] to-[#181818] text-white/70 text-center text-xs sm:text-sm py-4 px-6">
        <p>
          &copy; {new Date().getFullYear()} Enpro Consultants. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
