import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Example service images (replace with your own)
import img1 from "@/assets/property12-1.jpg";
import img2 from "@/assets/property12-4.jpg";
import img3 from "@/assets/property12-1.jpg";
import img4 from "@/assets/property12-4.jpg";
import img5 from "@/assets/property12-1.jpg";
import img6 from "@/assets/property12-4.jpg";

const FeaturedServices = () => {
  const services = [
    {
      title: "Conceptual & Preliminary Design",
      description:
        "Formulating optimized structural concepts with advanced modeling, rigorous analysis, and precision design of reinforced concrete, structural steel, and other civil engineering systems.",
      image: img1,
    },
    {
      title: "Design Review & Value Engineering",
      description:
        "Independent checking, optimization, and enhancement of existing designs.",
      image: img2,
    },
    {
      title: "Project & Contract Management Services",
      description:
        "Integrated project controls & contract administration ensuring efficient, transparent, and donor-aligned project delivery.",
      image: img3,
    },
    {
      title: "Environmental & Social Services",
      description:
        "Assessment and mitigation of environmental and social risks in line with donor safeguards, with preparation and implementation of ESMPs.",
      image: img4,
    },
    {
      title: "Virtual & Digital Delivery",
      description:
        "Leveraging BIM and advanced digital tools for real-time, coordinated, and efficient project design, review, and execution.",
      image: img5,
    },
    {
      title: "Construction Support Services",
      description:
        "Shop drawings review, site technical support, and resolution of structural issues during execution.",
      image: img6,
    },
  ];

  return (
    <section className="pt-12 sm:pt-16 pb-16 sm:pb-20 bg-[#fbe5e7] relative min-h-screen flex flex-col items-center justify-start">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-center mb-10 sm:mb-12 text-center">
          <div className="text-center">
            <p className="text-[#bf1e2e] font-semibold mb-2 uppercase tracking-wide text-xs sm:text-sm">
              Our Services
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1C1C]">
              Featured Services
            </h2>
          </div>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48 sm:h-60">
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-4 sm:p-6 text-center md:text-left flex flex-col flex-grow bg-white">
                <h3 className="text-lg sm:text-xl font-bold text-[#1C1C1C] mb-2 sm:mb-3 group-hover:text-[#bf1e2e] transition-colors leading-tight whitespace-pre-line">
                  {service.title}
                </h3>
                <p className="text-gray-500 mb-4 sm:mb-5 leading-relaxed text-xs sm:text-sm flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <Button
                    asChild
                    variant="ghost"
                    className="h-9 sm:h-11 border-2 border-gray-100 text-[#1C1C1C] rounded-full px-4 sm:px-6 hover:bg-[#bf1e2e] hover:text-white hover:border-[#bf1e2e] transition-all duration-300 text-xs sm:text-sm font-semibold"
                  >
                    <Link
                      to="/service-details"
                      className="flex items-center gap-2"
                    >
                      Explore Service
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 opacity-40 hidden md:block">
          <svg width="100" height="100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#bf1e2e"
              strokeWidth="1"
              fill="none"
              strokeDasharray="5 5"
            />
          </svg>
        </div>
      </div>

      {/* Scroll Indicator - To show there is more content */}
      <div className="mt-20 inset-x-0 flex justify-center pb-10">
        <button 
          onClick={() => {
            const element = document.getElementById("contact");
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

export default FeaturedServices;
