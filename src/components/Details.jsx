import { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrowRight, Phone, CheckCircle, MapPin, Mail, FileDown,
  Lightbulb, ClipboardCheck, Briefcase, Leaf, Monitor, HardHat,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ─── keyframe injection ─── */
const STYLES = `
@keyframes fadeUp   { from { opacity:0; transform:translateY(28px) } to { opacity:1; transform:translateY(0) } }
@keyframes fadeLeft { from { opacity:0; transform:translateX(-28px) } to { opacity:1; transform:translateX(0) } }
@keyframes scaleIn  { from { opacity:0; transform:scale(.92) } to { opacity:1; transform:scale(1) } }
@keyframes lineGrow { from { width:0 } to { width:100% } }
@keyframes pulse2   { 0%,100%{ transform:scale(1); opacity:.5 } 50%{ transform:scale(1.5); opacity:0 } }
.anim-fade-up    { animation: fadeUp   .7s cubic-bezier(.22,1,.36,1) both }
.anim-fade-left  { animation: fadeLeft .7s cubic-bezier(.22,1,.36,1) both }
.anim-scale-in   { animation: scaleIn  .6s cubic-bezier(.22,1,.36,1) both }
.card-hover { transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease, border-color .3s ease }
.card-hover:hover { transform: translateY(-6px) }
`;

/* ─────────────────── Service data ─────────────────── */
const SERVICES = [
  {
    id: 0, Icon: Lightbulb, label: "Conceptual Design",
    title: "Conceptual and Preliminary Design",
    tagline: "Transforming visions into viable structural concepts",
    description: "Our conceptual and preliminary design service transforms your project vision into technically sound, buildable concepts. We conduct thorough feasibility studies, develop preliminary structural schemes, and provide early-stage engineering assessments that lay a solid foundation for successful project delivery.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=85",
    includes: [
      { num: "01", title: "Site Assessment", desc: "Structural feasibility study and comprehensive site evaluation" },
      { num: "02", title: "System Selection", desc: "Preliminary structural system selection and load path analysis" },
      { num: "03", title: "Concept Schematics", desc: "Concept sketches, structural schematics, and design narratives" },
      { num: "04", title: "Material Review", desc: "Material selection, constructability review and specifications" },
      { num: "05", title: "Cost Support", desc: "Preliminary cost estimation and budget benchmarking support" },
      { num: "06", title: "Regulatory Check", desc: "Early-stage compliance review against applicable standards" },
    ],
    process: [
      { num: "01", title: "Brief & Vision", desc: "Understand project goals, site constraints, and client vision to shape the design direction." },
      { num: "02", title: "Feasibility Study", desc: "Analyse technical, economic and regulatory feasibility to identify the optimal structural approach." },
      { num: "03", title: "Concept Output", desc: "Deliver clear structural schematics and preliminary specifications ready for design development." },
    ],
    benefits: [
      "Reduces costly design changes in later phases",
      "Identifies structural challenges early",
      "Optimises budget allocation from day one",
      "Ensures regulatory compliance from the start",
    ],
  },
  {
    id: 1, Icon: ClipboardCheck, label: "Design Review",
    title: "Design Review & Value Engineering",
    tagline: "Independent verification for optimal structural performance",
    description: "We provide rigorous independent design reviews and value engineering analyses to optimise structural performance, reduce life-cycle costs, and ensure full compliance with international standards. Our experts challenge assumptions and propose innovative alternatives that enhance quality while controlling budgets.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1400&q=85",
    includes: [
      { num: "01", title: "Third-party Review", desc: "Independent structural design review by senior engineers" },
      { num: "02", title: "Code Compliance", desc: "Verification against IBC, Eurocodes, and local standards" },
      { num: "03", title: "VE Workshops", desc: "Value engineering workshops delivering actionable reports" },
      { num: "04", title: "Alternatives Study", desc: "Alternative material and system evaluation for cost savings" },
      { num: "05", title: "Risk Analysis", desc: "Risk identification, assessment, and mitigation strategies" },
      { num: "06", title: "Certification", desc: "Formal peer review certification and sign-off documentation" },
    ],
    process: [
      { num: "01", title: "Document Review", desc: "Comprehensive review of all structural drawings, calculations, and specifications." },
      { num: "02", title: "VE Workshop", desc: "Collaborative workshop to identify value engineering opportunities without compromising quality." },
      { num: "03", title: "Report & Sign-off", desc: "Issue formal review report with findings, recommendations, and certification." },
    ],
    benefits: [
      "Catches design errors before construction starts",
      "Typically saves 10–20% on structural costs",
      "Independent certification builds client confidence",
      "Reduces construction claims and disputes",
    ],
  },
  {
    id: 2, Icon: Briefcase, label: "Project Management",
    title: "Project and Contract Management",
    tagline: "End-to-end delivery with full accountability",
    description: "Our project and contract management services deliver end-to-end oversight ensuring scope control, schedule adherence, cost governance, and transparent reporting throughout the project lifecycle. We act as your trusted representative, protecting your interests at every stage from procurement to handover.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=85",
    includes: [
      { num: "01", title: "Scope Definition", desc: "Project inception, requirements gathering and scope definition" },
      { num: "02", title: "Procurement", desc: "Procurement strategy, tender management and contractor selection" },
      { num: "03", title: "Contract Admin", desc: "Contract administration under FIDIC, NEC, and JCT frameworks" },
      { num: "04", title: "Cost Control", desc: "Cost monitoring, change management and financial reporting" },
      { num: "05", title: "Schedule Mgmt", desc: "Schedule management, progress tracking and delay analysis" },
      { num: "06", title: "Stakeholder Comms", desc: "Structured stakeholder communication and reporting dashboards" },
    ],
    process: [
      { num: "01", title: "Planning", desc: "Define scope, schedule, budget baseline and establish governance frameworks." },
      { num: "02", title: "Execution", desc: "Monitor progress, manage contracts, and resolve issues proactively." },
      { num: "03", title: "Closeout", desc: "Commission works, manage snagging, and ensure smooth handover." },
    ],
    benefits: [
      "Single point of accountability for delivery",
      "Proactive risk management reduces surprises",
      "Real-time cost and schedule visibility",
      "Experienced team across sectors and regions",
    ],
  },
  {
    id: 3, Icon: Leaf, label: "Environmental Services",
    title: "Environmental and Social Services",
    tagline: "Responsible infrastructure for people and planet",
    description: "We integrate comprehensive environmental impact assessments and social safeguard frameworks to deliver responsible, sustainable, and community-sensitive infrastructure. Our approach aligns with IFC Performance Standards, World Bank safeguard policies, and national regulatory requirements.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&q=85",
    includes: [
      { num: "01", title: "EIA Studies", desc: "Environmental Impact Assessment scoping, fieldwork and reporting" },
      { num: "02", title: "Social Impact", desc: "Social Impact Assessment and community engagement programmes" },
      { num: "03", title: "ESMP", desc: "Environmental and Social Management Plan development" },
      { num: "04", title: "Stakeholder Eng.", desc: "Structured stakeholder engagement and public consultation" },
      { num: "05", title: "RAP", desc: "Resettlement Action Plans in line with lender requirements" },
      { num: "06", title: "Biodiversity", desc: "Biodiversity surveys, heritage impact and offset studies" },
    ],
    process: [
      { num: "01", title: "Scoping", desc: "Define assessment boundaries, key issues and engagement strategy." },
      { num: "02", title: "Assessment", desc: "Conduct field surveys, data collection, and impact analysis." },
      { num: "03", title: "Management Plan", desc: "Develop mitigation measures, monitoring frameworks, and reporting." },
    ],
    benefits: [
      "Meets lender and regulatory requirements",
      "Reduces social conflict and project delays",
      "Demonstrates corporate responsibility",
      "Supports long-term community development",
    ],
  },
  {
    id: 4, Icon: Monitor, label: "Digital Delivery",
    title: "Virtual and Digital Delivery",
    tagline: "Harnessing technology for precision and efficiency",
    description: "We leverage Building Information Modelling (BIM), digital twins, and advanced simulation tools to enhance design accuracy, multi-discipline collaboration, and project delivery efficiency. Our digital workflows reduce errors, accelerate decision-making, and create rich asset data for operations.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85",
    includes: [
      { num: "01", title: "BIM Modelling", desc: "Full BIM models from LOD 100 through to LOD 500 delivery" },
      { num: "02", title: "Clash Detection", desc: "Multi-discipline clash detection, resolution and coordination" },
      { num: "03", title: "Digital Twin", desc: "Digital twin creation for ongoing operations and maintenance" },
      { num: "04", title: "FEA Simulation", desc: "Finite element analysis and advanced structural simulation" },
      { num: "05", title: "4D Sequencing", desc: "4D construction sequencing and programme visualisation" },
      { num: "06", title: "Asset Data", desc: "Asset information management and structured data handover" },
    ],
    process: [
      { num: "01", title: "BEP Setup", desc: "Establish BIM Execution Plan, software standards, and collaboration platform." },
      { num: "02", title: "Model Development", desc: "Build federated models, conduct clash detection, and iterative refinement." },
      { num: "03", title: "Digital Handover", desc: "Deliver information-rich models and digital twin for operations." },
    ],
    benefits: [
      "Up to 30% reduction in design conflicts",
      "Faster approvals through 3D visualisation",
      "Rich data asset for facility management",
      "Enhanced coordination across disciplines",
    ],
  },
  {
    id: 5, Icon: HardHat, label: "Construction Support",
    title: "Construction Support Services",
    tagline: "Expert on-site presence ensuring design integrity",
    description: "We provide comprehensive on-site and remote construction support including resident engineering, technical query resolution, inspection services, and quality assurance to ensure faithful design implementation. Our engineers act as the bridge between design intent and site reality.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&q=85",
    includes: [
      { num: "01", title: "Resident Engineer", desc: "Full-time or part-time Resident Engineer and site supervision" },
      { num: "02", title: "RFI Management", desc: "Technical query and Request for Information (RFI) management" },
      { num: "03", title: "Inspections", desc: "Staged structural inspections at critical construction milestones" },
      { num: "04", title: "QA / QC", desc: "Quality assurance checks, material testing and compliance audits" },
      { num: "05", title: "Drawing Review", desc: "Shop drawing and method statement review and approval" },
      { num: "06", title: "As-Built Docs", desc: "As-built documentation, record drawings and handover sign-off" },
    ],
    process: [
      { num: "01", title: "Mobilisation", desc: "Deploy site team, establish inspection protocols and communication channels." },
      { num: "02", title: "Active Supervision", desc: "Daily site presence, RFI resolution, and quality verification at critical stages." },
      { num: "03", title: "Completion", desc: "Final inspections, punch list clearance, and as-built record compilation." },
    ],
    benefits: [
      "Catches non-conformances before they are built-in",
      "Reduces contractor disputes and claims",
      "Ensures structural integrity is maintained",
      "Provides professional indemnity coverage",
    ],
  },
];

/* ─── IntersectionObserver reveal hook ─── */
function useReveal(threshold = 0.08) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* Stagger-reveal wrapper — each child animates in sequence */
function StaggerReveal({ children, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div
              key={i}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(32px)",
                transition: `opacity .65s cubic-bezier(.22,1,.36,1) ${i * 0.08}s, transform .65s cubic-bezier(.22,1,.36,1) ${i * 0.08}s`,
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}

function Reveal({ children, delay = 0, from = "bottom", className = "" }) {
  const [ref, visible] = useReveal();
  const init = from === "left" ? "translateX(-40px)" : from === "right" ? "translateX(40px)" : "translateY(36px)";
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0)" : init,
        transition: `opacity .75s cubic-bezier(.22,1,.36,1) ${delay}s, transform .75s cubic-bezier(.22,1,.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────── Main component ─────────────────── */
const Details = () => {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const bodyRef = useRef(null);
  const svc = SERVICES[activeId];

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

  const switchService = useCallback((id) => {
    if (id === activeId) return;
    setTransitioning(true);
    setTimeout(() => {
      setActiveId(id);
      setTransitioning(false);
      bodyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 320);
  }, [activeId]);

  return (
    <>
      <style>{STYLES}</style>
      <div className="bg-white text-[#1C1C1C] w-full overflow-x-hidden">

        {/* ══════════════════════════ HERO ══════════════════════════ */}
        <section className="relative w-full overflow-hidden" style={{ height: "320px" }}>

          {/* background image — full bleed, properly visible */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${svc.image}')` }}
          />

          {/* very light global dim so image stays visible */}
          <div className="absolute inset-0 bg-black/25" />

          {/* diagonal dark panel — left side only */}
          <div
            className="absolute inset-0"
            style={{
              background: "#111111",
              clipPath: "polygon(0 0, 52% 0, 38% 100%, 0 100%)",
            }}
          />

          {/* red bottom accent line on dark panel */}
          <div className="absolute bottom-0 left-0 h-[3px] w-56 bg-gradient-to-r from-[#bf1e2e] to-transparent" />
          {/* bottom fade into white page */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />

          {/* content — aligned with page container */}
          <div
            className="absolute inset-0 z-10"
            style={{
              opacity: transitioning ? 0 : 1,
              transform: transitioning ? "translateY(10px)" : "translateY(0)",
              transition: "opacity .3s ease, transform .3s ease",
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-full flex flex-col justify-center">
              <h1 className="text-4xl sm:text-4xl md:text-[46px] font-black text-white leading-tight mb-3 tracking-tight">
                Service Details
              </h1>
              <div className="flex items-center gap-2 text-white/55 text-[13px]">
                <button
                  onClick={() => navigate("/")}
                  className="text-white transition-colors duration-200 font-medium"
                >
                  Home
                </button>
                <ArrowRight className="w-3 h-3 text-white" />
                <span className="text-white font-semibold">Service Details</span>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════ BODY ══════════════════════════ */}
        <section ref={bodyRef} className="w-full bg-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-10">

              {/* ────────────────── MAIN CONTENT ────────────────── */}
              <div
                className="flex-1 min-w-0"
                style={{
                  opacity: transitioning ? 0 : 1,
                  transform: transitioning ? "translateY(14px)" : "translateY(0)",
                  transition: "opacity .32s ease, transform .32s ease",
                }}
              >
                {/* Featured image */}
                <section className="flex sm:flex-row flex-col gap-4 justify-center item-center w-full">
                  <div className="rounded-2xl overflow-hidden mb-8 mt-6 h-72 sm:h-80 w-full">
                   
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full"
                      />
                
                   </div>

               <div className="w-full">
                  <h2 className="text-2xl sm:text-3xl font-black text-[#1C1C1C] mt-6  leading-tight">
                    {svc.title}
                  </h2>
                  <p className="text-[#555] text-[15px] leading-relaxed mt-4">
                    {svc.description}
                  </p>
                   <Reveal delay={0.08} >
                  <div className="flex flex-wrap gap-3 mt-6">
                    <button className="flex items-center gap-2 bg-[#1C1C1C] hover:bg-[#bf1e2e] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors duration-200">
                      <FileDown className="w-4 h-4" /> Download PDF
                    </button>
                    <button className="flex items-center gap-2 border-2 border-[#1C1C1C] hover:border-[#bf1e2e] hover:text-[#bf1e2e] text-[#1C1C1C] font-bold text-sm px-6 py-3 rounded-xl transition-colors duration-200">
                      <FileDown className="w-4 h-4" /> Download DOC
                    </button>
                  </div>
                </Reveal>
                </div>


                </section>

               
               

                {/* Two-column image strip */}
                <Reveal delay={0.08}>
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    <div className="rounded-xl overflow-hidden h-48">
                      <img
                        src="/src/assets/hero-construction 2.jpg"
                        alt="Construction site"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden h-48">
                      <img
                        src="/src/assets/about-engineers.jpg"
                        alt="Engineering team"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </Reveal>

                {/* Our Services Include */}
                <Reveal delay={0.1}>
                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="h-px w-8 bg-[#bf1e2e]" />
                      <h3 className="text-lg font-black text-[#1C1C1C] uppercase tracking-wide">
                        Our Services Include
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {svc.includes.map((item) => (
                        <div key={item.num} className="flex items-start gap-3 group">
                          <div className="w-5 h-5 rounded-full bg-[#bf1e2e] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <div>
                            <p className="text-[#1C1C1C] text-[14px] font-bold leading-snug group-hover:text-[#bf1e2e] transition-colors duration-200">
                              {item.title}
                            </p>
                            <p className="text-[#777] text-[12px] leading-relaxed mt-0.5">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>

                {/* Process cards */}
                <div className="mb-12">
                  <Reveal>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="h-px w-8 bg-[#bf1e2e]" />
                      <h3 className="text-lg font-black text-[#1C1C1C] uppercase tracking-wide">
                        Our Working Process
                      </h3>
                    </div>
                  </Reveal>
                  <StaggerReveal className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {svc.process.map((step) => (
                      <div
                        key={step.num}
                        className="card-hover border border-[#ececec] hover:border-[#bf1e2e]/40 rounded-2xl p-6 bg-white shadow-sm text-center"
                      >
                        <div className="w-14 h-14 mx-auto rounded-2xl bg-[#bf1e2e] flex items-center justify-center mb-4 shadow-md">
                          <span className="text-white text-xl font-black">{step.num}</span>
                        </div>
                        <h4 className="text-[#1C1C1C] font-bold text-base mb-2">{step.title}</h4>
                        <p className="text-[#777] text-[13px] leading-relaxed">{step.desc}</p>
                      </div>
                    ))}
                  </StaggerReveal>
                </div>

                {/* Benefits section — image left, text right */}
                <Reveal delay={0.1}>
                  <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center bg-[#f8f8f8] rounded-2xl overflow-hidden">
                    <div className="h-64 sm:h-full min-h-[240px] overflow-hidden">
                      <img
                        src="/src/assets/hero-construction 3.jpg"
                        alt="Service benefits"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-7">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="h-px w-8 bg-[#bf1e2e]" />
                        <span className="text-[#bf1e2e] text-[10px] font-black uppercase tracking-[0.28em]">Why Us</span>
                      </div>
                      <h3 className="text-xl font-black text-[#1C1C1C] mb-5 leading-snug">
                        Service <span className="text-[#bf1e2e]">Benefits</span>
                      </h3>
                      <ul className="space-y-3">
                        {svc.benefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <ArrowRight className="w-4 h-4 text-[#bf1e2e] flex-shrink-0 mt-0.5" />
                            <span className="text-[#555] text-[14px] leading-snug">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>

                {/* Download buttons */}
                <Reveal delay={0.08}>
                  <div className="flex flex-wrap gap-3 mb-12">
                    <button className="flex items-center gap-2 bg-[#1C1C1C] hover:bg-[#bf1e2e] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors duration-200">
                      <FileDown className="w-4 h-4" /> Download PDF
                    </button>
                    <button className="flex items-center gap-2 border-2 border-[#1C1C1C] hover:border-[#bf1e2e] hover:text-[#bf1e2e] text-[#1C1C1C] font-bold text-sm px-6 py-3 rounded-xl transition-colors duration-200">
                      <FileDown className="w-4 h-4" /> Download DOC
                    </button>
                  </div>
                </Reveal>

                {/* Need Help CTA */}
                <Reveal delay={0.1}>
                  <div className="rounded-2xl overflow-hidden p-6 mb-6 bg-[#111111]" style={{ minHeight: "100px" }}>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-5 p-7">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#bf1e2e] p-4 flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "4px" }}>Need Help? Call Here</p>
                          <p style={{ color: "#ffffff", fontSize: "18px", fontWeight: 900, lineHeight: 1.2 }}>+92 300 000 0000</p>
                        </div>
                      </div>
                      <button
                        onClick={() => navigate("/#contact")}
                        style={{ backgroundColor: "#bf1e2e", color: "#fff", fontWeight: 700, fontSize: "13px", padding: "12px 24px", borderRadius: "10px", border: "none", cursor: "pointer", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = "#a01825"}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = "#bf1e2e"}
                      >
                        Get a Quote <ArrowRight style={{ width: "14px", height: "14px" }} />
                      </button>
                    </div>
                  </div>
                </Reveal>
              </div>
 
              {/* ────────────────── SIDEBAR ────────────────── */}
              <aside className="lg:w-72 flex-shrink-0">
                <div className="sticky top-6 flex flex-col gap-5">
<div className="grid grid-cols-2 gap-6">


                  {/* All Services */}
                  <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
                    <div style={{ backgroundColor: "#1C1C1C", padding: "14px 20px" }}>
                      <h4 style={{ color: "#ffffff", fontWeight: 900, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>All Services</h4>
                    </div>
                    <ul style={{ backgroundColor: "#ffffff", margin: 0, padding: 0, listStyle: "none" }}>
                      {SERVICES.map((s, idx) => {
                        const Icon = s.Icon;
                        const active = s.id === activeId;
                        return (
                          <li key={s.id} style={{ borderTop: idx === 0 ? "none" : "1px solid #f2f2f2" }}>
                            <button
                              onClick={() => switchService(s.id)}
                              style={{
                                width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                                padding: "12px 18px", background: active ? "#bf1e2e" : "transparent",
                                border: "none", cursor: "pointer", textAlign: "left", transition: "background 0.2s",
                              }}
                              onMouseEnter={e => { if (!active) e.currentTarget.style.background = "#fdf5f5"; }}
                              onMouseLeave={e => { if (!active) e.currentTarget.style.background = "transparent"; }}
                            >
                              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <Icon style={{ width: "15px", height: "15px", flexShrink: 0, color: active ? "#ffffff" : "#bf1e2e" }} />
                                <span style={{ fontSize: "13px", fontWeight: 600, color: active ? "#ffffff" : "#333333" }}>
                                  {s.label}
                                </span>
                              </div>
                              <ChevronRight style={{ width: "14px", height: "14px", flexShrink: 0, color: active ? "#ffffff" : "#bf1e2e" }} />
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Brochure */}
                  <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", backgroundColor: "#ffffff" }}>
                    <div style={{ backgroundColor: "#1C1C1C", padding: "14px 20px" }}>
                      <h4 style={{ color: "#ffffff", fontWeight: 900, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>Brochure</h4>
                    </div>
                    <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                      <button
                        style={{ width: "100%", display: "flex", alignItems: "center", gap: "10px", padding: "11px 16px", borderRadius: "10px", border: "1.5px solid #e5e5e5", background: "#fafafa", cursor: "pointer", fontSize: "13px", fontWeight: 700, color: "#1C1C1C", transition: "all 0.2s" }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = "#bf1e2e"; e.currentTarget.style.color = "#bf1e2e"; e.currentTarget.style.background = "#fff8f8"; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = "#e5e5e5"; e.currentTarget.style.color = "#1C1C1C"; e.currentTarget.style.background = "#fafafa"; }}
                      >
                        <FileDown style={{ width: "15px", height: "15px", color: "#bf1e2e", flexShrink: 0 }} />
                        Download PDF
                      </button>
                      <button
                        style={{ width: "100%", display: "flex", alignItems: "center", gap: "10px", padding: "11px 16px", borderRadius: "10px", border: "1.5px solid #e5e5e5", background: "#fafafa", cursor: "pointer", fontSize: "13px", fontWeight: 700, color: "#1C1C1C", transition: "all 0.2s" }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = "#bf1e2e"; e.currentTarget.style.color = "#bf1e2e"; e.currentTarget.style.background = "#fff8f8"; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = "#e5e5e5"; e.currentTarget.style.color = "#1C1C1C"; e.currentTarget.style.background = "#fafafa"; }}
                      >
                        <FileDown style={{ width: "15px", height: "15px", color: "#bf1e2e", flexShrink: 0 }} />
                        Download DOC
                      </button>
                    </div>
                  </div>
</div>

<div className="grid grid-cols-2 gap-6 mt-6 mb-6">
                  {/* Contact Card */}
                  <div style={{ borderRadius: "16px", overflow: "hidden", background: "linear-gradient(145deg, #1a1a1a 0%, #2a1010 100%)", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
                    {/* top red strip */}
                    <div style={{ height: "4px", background: "linear-gradient(90deg, #bf1e2e, #e03347)" }} />
                    <div style={{ padding: "24px 20px", textAlign: "center" }}>
                      {/* icon */}
                      <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "#bf1e2e", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", boxShadow: "0 4px 14px rgba(191,30,46,0.4)" }}>
                        <Phone style={{ width: "22px", height: "22px", color: "#ffffff" }} />
                      </div>
                      <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: "6px" }}>Need Help?</p>
                      <p style={{ color: "#ffffff", fontWeight: 900, fontSize: "17px", marginBottom: "8px", letterSpacing: "-0.3px" }}>+92 300 000 0000</p>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", justifyContent: "center", marginBottom: "20px" }}>
                        <Mail style={{ width: "13px", height: "13px", color: "#bf1e2e", flexShrink: 0 }} />
                        <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "12px" }}>info@nproconsultant.com</span>
                      </div>
                      <button
                        onClick={() => navigate("/#contact")}
                        style={{ width: "100%", backgroundColor: "#bf1e2e", color: "#ffffff", fontWeight: 800, fontSize: "13px", padding: "13px 20px", borderRadius: "10px", border: "none", cursor: "pointer", letterSpacing: "0.04em", transition: "background 0.2s" }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = "#a01825"}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = "#bf1e2e"}
                      >
                        Get a Quote
                      </button>
                    </div>
                  </div>

                  {/* Location */}
                  <div style={{ borderRadius: "16px", backgroundColor: "#ffffff", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", padding: "18px 20px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                      <MapPin style={{ width: "17px", height: "17px", color: "#bf1e2e", flexShrink: 0 }} />
                      <h4 style={{ fontWeight: 900, color: "#1C1C1C", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>Our Location</h4>
                    </div>
                    <p style={{ color: "#888888", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
                      123 Engineering Plaza,<br />Lahore, Punjab, Pakistan
                    </p>
                  </div>
</div>
                </div>
              </aside>



            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Details;
