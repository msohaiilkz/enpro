import { Lightbulb, ClipboardCheck, Briefcase, Leaf, Monitor, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Conceptual and Preliminary Design",
      description:
        "Transforming project visions into technically sound concepts through feasibility studies, preliminary structural schemes, and early-stage engineering assessments.",
    },
    {
      icon: ClipboardCheck,
      title: "Design Review and Value Engineering",
      description:
        "Independent design reviews and value engineering analyses to optimize structural performance, reduce costs, and ensure compliance with international standards.",
    },
    {
      icon: Briefcase,
      title: "Project and Contract Management Services",
      description:
        "End-to-end project and contract management ensuring scope control, schedule adherence, cost governance, and transparent reporting throughout project lifecycle.",
    },
    {
      icon: Leaf,
      title: "Environmental and Social Services",
      description:
        "Integrating environmental impact assessments and social safeguard frameworks to deliver responsible, sustainable, and community-sensitive infrastructure solutions.",
    },
    {
      icon: Monitor,
      title: "Virtual and Digital Delivery",
      description:
        "Leveraging BIM, digital twins, and advanced simulation tools to enhance design accuracy, collaboration, and project delivery efficiency.",
    },
    {
      icon: HardHat,
      title: "Construction Support Services",
      description:
        "On-site and remote construction support including site supervision, technical queries, inspection, and quality assurance to ensure faithful design implementation.",
    },
  ];

  const scrollToNext = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="pt-8 sm:pt-12 pb-32 sm:pb-40 bg-[#fbe5e7] min-h-screen flex flex-col items-center justify-start relative"
    >
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-[#bf1e2e] font-semibold mb-2 uppercase tracking-wide text-xs sm:text-sm">
            OUR FEATURES
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1C1C]">
            Precision. Strength. Durability.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full mx-auto max-w-5xl">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-[#1C1C1C] text-white rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#2A2A2A] rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-[#bf1e2e]" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 whitespace-pre-line">{feature.title}</h3>
                <p className="text-gray-300 mb-2 leading-relaxed text-center text-xs sm:text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll Indicator - Section Centered */}
      <div className="absolute bottom-20 inset-x-0 flex justify-center z-20">
        <button 
          onClick={scrollToNext}
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

export default Services;
