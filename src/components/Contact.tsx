import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, stagger, revealOnce } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { User, Mail, MessageSquare, ChevronDown, Loader2 } from "lucide-react";
import contactImage from "@/assets/contact-enpro.jpeg";

// Web3Forms delivers submissions to web@enproconsultants.com. The key is tied
// to that inbox and is meant to live in frontend code (their design).
const WEB3FORMS_ACCESS_KEY = "093ddb1b-ab2b-4447-8fec-466ba73cd44f";

/** Human-readable service names for the email, keyed by the option values. */
const SERVICE_LABELS: Record<string, string> = {
  "structural-design": "Structural Design & Engineering",
  "design-review": "Design Review & Value Engineering",
  "construction-support": "Construction Support Services",
  "project-management": "Project & Contract Management",
  "environmental-social": "Environmental & Social Advisory",
  "digital-bim": "Digital Engineering & BIM",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Honeypot: real visitors never see or fill this field
    const trap = (e.target as HTMLFormElement).querySelector<HTMLInputElement>(
      "input[name='company_website']",
    );
    if (trap?.value) return;

    setSending(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New inquiry from ${formData.name} — enproconsultants.com`,
          from_name: "Enpro Consultants Website",
          name: formData.name,
          email: formData.email,
          service: SERVICE_LABELS[formData.service] ?? "Not specified",
          message: formData.message,
        }),
      });
      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", service: "", message: "" });
      } else {
        throw new Error(result.message);
      }
    } catch {
      toast({
        title: "Something went wrong",
        description:
          "Your message could not be sent. Please email us directly at info@enproconsultants.com.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-12 sm:py-14 lg:py-16 bg-white relative overflow-hidden min-h-[100dvh] flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mx-auto">
          {/* Left: Image - square, shown in full rather than stretched */}
          <motion.div className="order-2 lg:order-1" variants={scaleIn} {...revealOnce}>
            <img
              src={contactImage}
              alt="Enpro consultants reviewing a project in the office"
              className="w-full max-w-[430px] max-h-[38vh] lg:max-h-[56vh] mx-auto aspect-square object-cover object-center rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="px-0 sm:px-2 lg:px-4 order-1 lg:order-2"
            variants={stagger(0.1)}
            {...revealOnce}
          >
            <motion.h2 variants={fadeUp} className="text-fluid-h2 font-bold text-[#1C1C1C] mb-4 sm:mb-6">
              Contact Us
            </motion.h2>

            <motion.form
              variants={fadeUp} onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {/* Honeypot — hidden from people, bots fill it and get dropped */}
              <input
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {/* Name */}
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name*"
                  className="w-full px-4 sm:px-6 py-2.5 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#bf1e2e]/20 focus:border-[#bf1e2e] transition-all duration-300 placeholder-gray-400 pl-10 sm:pl-12 text-sm sm:text-base"
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
                  className="w-full px-4 sm:px-6 py-2.5 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#bf1e2e]/20 focus:border-[#bf1e2e] transition-all duration-300 placeholder-gray-400 pl-10 sm:pl-12 text-sm sm:text-base"
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
                  className="appearance-none w-full px-4 sm:px-6 py-2.5 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#bf1e2e]/20 focus:border-[#bf1e2e] transition-all duration-300 pl-10 sm:pl-12 cursor-pointer text-sm sm:text-base"
                >
                  <option value="">Select Service</option>
                  <option value="structural-design">
                    Structural Design &amp; Engineering
                  </option>
                  <option value="design-review">
                    Design Review &amp; Value Engineering
                  </option>
                  <option value="construction-support">
                    Construction Support Services
                  </option>
                  <option value="project-management">
                    Project &amp; Contract Management
                  </option>
                  <option value="environmental-social">
                    Environmental &amp; Social Advisory
                  </option>
                  <option value="digital-bim">
                    Digital Engineering &amp; BIM
                  </option>
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
                  className="w-full px-4 sm:px-6 py-2.5 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#bf1e2e]/20 focus:border-[#bf1e2e] transition-all duration-300 placeholder-gray-400 pl-10 sm:pl-12 resize-none text-sm sm:text-base"
                ></textarea>
                <MessageSquare
                  className="absolute left-3 sm:left-4 top-5 text-gray-400 group-focus-within:text-[#bf1e2e] transition-colors"
                  size={18}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-[#bf1e2e] hover:bg-[#961a27] text-white text-sm sm:text-base font-bold rounded-xl py-3 sm:py-4 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {sending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Submit Message"
                )}
              </Button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
