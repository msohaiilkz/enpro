import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-engineers.jpg";

const About = () => {
  const features = [
    "Structural engineering Solutions",
    "Reliable Project Delivery",
    "Sustainable & Responsible Design",
  ];

  return (
    <section
      className="pt-8 sm:pt-12 pb-16 sm:pb-32 bg-white relative overflow-hidden min-h-screen flex flex-col items-center justify-start"
    >
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center mx-auto">
          {/* Left Image */}
          <div className="relative h-full order-2 lg:order-1">
            <img
              src={aboutImage}
              alt="Structural engineers reviewing blueprints"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-[500px] object-cover rounded-2xl lg:rounded-r-3xl shadow-xl"
            />
          </div>

          {/* Right Content */}
          <div className="px-0 sm:px-4 lg:px-8 xl:px-16 py-6 sm:py-10 order-1 lg:order-2">
            {/* Heading */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="h-0.5 w-8 sm:w-10 bg-[#bf1e2e]" />
              <p className="text-[#bf1e2e] font-bold uppercase tracking-widest text-xs sm:text-sm">
                About Us
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4 sm:mb-6 leading-tight">
              Excellence That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf1e2e] to-[#9e1925]">
                Links Cities
              </span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">
              By integrating structural engineering excellence with disciplined
              project management, responsible environmental and social
              practices, and effective contract management, we deliver holistic,
              sustainable, and value-driven solutions.
            </p>

            {/* Features List */}
            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3 group">
                  <div className="mt-1 p-1 rounded-full bg-[#bf1e2e]/10 group-hover:bg-[#bf1e2e]/20 transition-colors flex-shrink-0">
                    <CheckCircle className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#bf1e2e]" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Decorative Shape */}
        <div className="absolute bottom-10 right-10 hidden md:block opacity-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="90"
            height="90"
            viewBox="0 0 100 100"
            fill="none"
          >
            <rect
              x="20"
              y="20"
              width="60"
              height="60"
              stroke="#bf1e2e"
              strokeWidth="2"
            />
            <rect
              x="30"
              y="30"
              width="60"
              height="60"
              stroke="#bf1e2e"
              strokeWidth="2"
              fill="url(#pattern)"
            />
            <defs>
              <pattern
                id="pattern"
                patternUnits="userSpaceOnUse"
                width="6"
                height="6"
              >
                <path
                  d="M0 6L6 0"
                  stroke="#bf1e2e"
                  strokeWidth="0.5"
                  opacity="0.4"
                />
              </pattern>
            </defs>
          </svg>
        </div>
      </div>

      {/* Scroll Indicator - Section Centered */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center z-20">
        <button 
          onClick={() => {
            const element = document.getElementById("service");
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

export default About;
