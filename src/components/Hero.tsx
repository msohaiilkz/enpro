import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpeg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 parallax"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-4 text-center text-white">
       <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-6 sm:mb-8 animate-fade-in ">
  <h1 className="mb-4 sm:mb-8 leading-tight">Building Strong</h1> 
  <h1 className="mb-4 sm:mb-8 leading-tight">Foundations for the Future</h1>  
</div>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl xl:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-in opacity-90 leading-relaxed px-2">
          Expert structural engineers delivering safe and innovative solutions
          for modern infrastructure
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-up px-2">
          <Button
            variant="hero"
            size="lg"
            style={{ backgroundColor: "#bf1e2e" }}
            onClick={() => scrollToSection("service")}
          >
            Our Services
          </Button>
          <Button
            variant="heroOutline"
            size="lg"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Scroll Indicator - Section Centered */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center z-20">
        <button 
          onClick={() => scrollToSection("features")}
          className="animate-bounce cursor-pointer group"
        >
          <div className="w-6 h-10 border-2 border-white/50 group-hover:border-white rounded-full flex items-start justify-center p-2 transition-colors">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
