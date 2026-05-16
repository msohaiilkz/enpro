import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { User, Mail, MessageSquare, ChevronDown } from "lucide-react";
import contactImage from "@/assets/contact_thumb_7_1.png"; // change to your image

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success!",
      description: "Message sent successfully! We'll contact you soon.",
    });

    setFormData({ name: "", email: "", service: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-8 sm:py-16 bg-white relative overflow-hidden min-h-screen flex flex-col items-center justify-start">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center mx-auto">
          {/* Left: Image */}
          <div className="relative h-full order-2 lg:order-1">
            <img
              src={contactImage}
              alt="Team consultation"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-[500px] object-cover rounded-2xl lg:rounded-r-3xl shadow-xl"
            />
          </div>

          {/* Right: Form */}
          <div className="px-0 sm:px-4 lg:px-8 xl:px-16 py-6 sm:py-10 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1C1C] mb-6 sm:mb-8">
              Contact Us
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Name */}
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name*"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#bf1e2e]/20 focus:border-[#bf1e2e] transition-all duration-300 placeholder-gray-400 pl-10 sm:pl-12 text-sm sm:text-base"
                />
                <User
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#bf1e2e] transition-colors"
                  size={18}
                />
              </div>

              {/* Email */}
              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email*"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#bf1e2e]/20 focus:border-[#bf1e2e] transition-all duration-300 placeholder-gray-400 pl-10 sm:pl-12 text-sm sm:text-base"
                />
                <Mail
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#bf1e2e] transition-colors"
                  size={18}
                />
              </div>

              {/* Service */}
              <div className="relative group">
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="appearance-none w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#bf1e2e]/20 focus:border-[#bf1e2e] transition-all duration-300 pl-10 sm:pl-12 cursor-pointer text-sm sm:text-base"
                >
                  <option value="">Select Service</option>
                  <option value="real-estate"> Conceptual and Preliminary Design</option>
                  <option value="steel-fabrication">Design Review and Value Engineering</option>
                  <option value="bridge">Project and Contract Management Services</option>
                  <option value="consultation">Environmental and Social Services</option>
                  <option value="digital-delivery">Virtual and Digital Delivery</option>
                  <option value="construction-support">Construction Support Services</option>
                </select>
                <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2">
                  <ChevronDown
                    className="text-gray-400 group-focus-within:text-[#bf1e2e] transition-colors"
                    size={18}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="relative group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type Your Message"
                  rows={4}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#bf1e2e]/20 focus:border-[#bf1e2e] transition-all duration-300 placeholder-gray-400 pl-10 sm:pl-12 resize-none text-sm sm:text-base"
                ></textarea>
                <MessageSquare
                  className="absolute left-3 sm:left-4 top-5 text-gray-400 group-focus-within:text-[#bf1e2e] transition-colors"
                  size={18}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#bf1e2e] hover:bg-[#961a27] text-white text-base sm:text-lg font-bold rounded-xl py-3 sm:py-6 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Submit Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
