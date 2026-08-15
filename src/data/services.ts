// Single source of truth for the six services shown on the landing page and
// for the detailed service pages. Content follows the client's Rev-B documents.

import imgStructural from "@/assets/service-structural-design.jpg";
import imgDesignReview from "@/assets/service-design-review.jpg";
import imgConstruction from "@/assets/service-construction-support.jpg";
import imgProject from "@/assets/service-project-management.jpg";
import imgEnvironmental from "@/assets/service-environmental-social.jpg";
import imgDigital from "@/assets/service-digital-bim.jpg";

import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Boxes,
  Lightbulb,
  Search,
  Wrench,
  CalendarClock,
  Database,
  Layers,
  Map,
  Globe,
  Handshake,
  Leaf,
  Sprout,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  Compass,
  FileSignature,
  Gavel,
  Gauge,
  HardHat,
  Landmark,
  Layers3,
  LifeBuoy,
  Network,
  PencilRuler,
  Scale,
  Settings2,
  ShieldAlert,
  ShieldCheck,
  Sliders,
  Timer,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";

// Photography used inside the detail pages
import photoStructural from "@/assets/photo-structural.jpg";
import photoDesignReview from "@/assets/photo-design-review.jpg";
import photoConstructionSupport from "@/assets/photo-construction-support.jpg";
import photoProjectManagement from "@/assets/photo-project-management.jpg";
import photoEnvironmentalSocial from "@/assets/photo-environmental-social.jpg";
import photoDigitalBim from "@/assets/photo-digital-bim.jpg";

import iconBuildings from "@/assets/icons/cat-buildings.png";
import iconInfrastructure from "@/assets/icons/cat-infrastructure.png";
import iconIndustrial from "@/assets/icons/cat-industrial.png";
import iconTensile from "@/assets/icons/cat-tensile.png";
import iconWater from "@/assets/icons/cat-water.png";
import iconAssessment from "@/assets/icons/cat-assessment.png";

// Environmental & Social Advisory - the client's own green artwork
import iconEnvSustainable from "@/assets/icons/green-sustainable.png";
import iconEnvSafeguards from "@/assets/icons/green-safeguards.png";
import iconEnvStakeholder from "@/assets/icons/green-stakeholder.png";
import iconEnvPartner from "@/assets/icons/green-partner.png";
import iconEnvIntegrated from "@/assets/icons/green-integrated.png";
import iconEnvCompliance from "@/assets/icons/green-compliance.png";
import iconEnvConfidence from "@/assets/icons/green-confidence.png";
import iconEnvOutcomes from "@/assets/icons/green-outcomes.png";

/** Either a supplied artwork file or a line icon from lucide. */
export type ServiceIcon = string | LucideIcon;

export interface ServiceCategory {
  number: string;
  title: string;
  icon: ServiceIcon;
  /** Some documents introduce the category before listing its items */
  description?: string;
  items: string[];
}

export interface ServiceDetail {
  /** Optional line under the page title */
  tagline?: string;
  /** Photograph shown alongside the How We Work section */
  photo?: string;
  whatWeDo: {
    intro?: string[];
    categories: ServiceCategory[];
    /** Defaults to "Our Engineering Capability" */
    capabilityLabel?: string;
    capability: string[];
  };
  /**
   * The documents describe this section in two shapes: some list titled points,
   * others close with a short "our approach focuses on" list. Both are
   * supported so each service can follow its own document.
   */
  howWeWork: {
    intro: string[];
    points?: { icon: ServiceIcon; title: string; description: string }[];
    focus?: {
      heading: string;
      items: { icon?: ServiceIcon; text: string }[];
    };
  };
  /**
   * Most documents list titled outcomes; the Digital Engineering document
   * opens with a summary and closes on a "clients benefit from" list.
   */
  projectImpact: {
    intro?: string[];
    outcomes?: { icon: ServiceIcon; title: string; description: string }[];
    benefits?: {
      heading: string;
      items: { icon?: ServiceIcon; text: string }[];
    };
  };
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  /** Card artwork on the landing page */
  image: string;
  /** Overrides the shared banner when the client supplied one for this service */
  banner?: string;
  detail?: ServiceDetail;
}

export const SERVICES: Service[] = [
  {
    slug: "structural-design-engineering",
    title: "Structural Design & Engineering",
    description:
      "Delivering innovative structural solutions for high-rise buildings, bridges, industrial facilities, and critical infrastructure.",
    image: imgStructural,
    detail: {
      tagline:
        "We design and engineer safe, efficient and resilient structural solutions across a wide range of structures and structural systems.",
      photo: photoStructural,
      whatWeDo: {
        intro: [
          "We engineer structures across their full lifecycle from new-build design to assessment, strengthening and rehabilitation.",
        ],
        categories: [
          {
            number: "01",
            title: "Buildings",
            icon: iconBuildings,
            items: [
              "Residential, commercial and mixed-use buildings",
              "High-rise and multi-storey buildings",
              "Hotels and hospitality facilities",
              "Institutional and public buildings",
              "Long-span and large-volume structures",
              "Special-purpose buildings",
            ],
          },
          {
            number: "02",
            title: "Infrastructure",
            icon: iconInfrastructure,
            items: [
              "Bridges and flyovers",
              "Underpasses and grade-separated structures",
              "Culverts and drainage structures",
              "Retaining and earth-retaining structures",
              "Transportation-related structures",
              "Other civil infrastructure",
            ],
          },
          {
            number: "03",
            title: "Industrial & Specialized",
            icon: iconIndustrial,
            items: [
              "Industrial buildings and facilities",
              "Structural steel buildings and frames",
              "Warehouses and large-span structures",
              "Telecom towers and supporting structures",
              "Equipment-support structures",
              "Complex and special structural systems",
            ],
          },
          {
            number: "04",
            title: "Tensile & Membrane",
            icon: iconTensile,
            items: [
              "Tensile and membrane structures",
              "Fabric roofs and canopies",
              "Covered walkways and shade structures",
              "Cable-supported and lightweight structural systems",
            ],
          },
          {
            number: "05",
            title: "Water & Hydraulic",
            icon: iconWater,
            items: [
              "Water-retaining structures",
              "Tanks and reservoirs",
              "Hydraulic and irrigation structures",
              "Pumping and utility-related structures",
            ],
          },
          {
            number: "06",
            title: "Existing Structures, Assessment & Rehabilitation",
            icon: iconAssessment,
            items: [
              "Building and structural audits",
              "Structural condition assessment and investigation",
              "Structural evaluation and performance assessment",
              "Retrofitting and strengthening",
              "Rehabilitation and refurbishment",
              "Structural alterations and extensions",
            ],
          },
        ],
        capability: [
          "Concept & Preliminary Design",
          "Structural Analysis & Modelling",
          "Detailed Design",
          "Reinforced Concrete & Structural Steel Design",
          "Design Optimisation",
          "Constructability",
          "Assessment & Strengthening",
        ],
      },
      howWeWork: {
        intro: [
          "We approach every structural challenge with a balance of engineering rigour, practical judgement and collaborative thinking. From establishing the right structural strategy to coordinating disciplines and refining the design, we consider performance, constructability, efficiency and long-term requirements throughout the process.",
        ],
        points: [
          {
            icon: Compass,
            title: "Engineering with Purpose",
            description:
              "Sound analysis and engineering judgement guide solutions that are safe, efficient and fit for their intended use.",
          },
          {
            icon: Workflow,
            title: "Integrated from the Start",
            description:
              "We coordinate closely with the wider project team and consider constructability early, helping resolve interfaces and practical challenges before they reach the site.",
          },
          {
            icon: Sliders,
            title: "Optimised for the Long Term",
            description:
              "We refine solutions with material efficiency, cost, durability, performance and future requirements in mind.",
          },
        ],
      },
      projectImpact: {
        outcomes: [
        {
          icon: ShieldCheck,
          title: "Safety & Integrity",
          description:
            "Structural solutions designed for safety, stability and reliable performance.",
        },
        {
          icon: Gauge,
          title: "Efficiency & Value",
          description:
            "Practical solutions that use materials intelligently and support cost-conscious decisions.",
        },
        {
          icon: HardHat,
          title: "Buildability & Delivery",
          description:
            "Designs developed with construction realities in mind, helping reduce technical uncertainty and coordination issues.",
        },
        {
          icon: Timer,
          title: "Performance & Longevity",
          description:
            "Structures designed to perform reliably, remain durable and deliver value throughout their service life.",
        },
        ],
      },
    },
  },
  {
    slug: "design-review-value-engineering",
    title: "Design Review & Value Engineering",
    description:
      "Optimizing engineering solutions through independent technical reviews, constructability assessment, and value-driven design improvements.",
    image: imgDesignReview,
    detail: {
      tagline:
        "We provide independent engineering review and value engineering services that improve design quality, optimise project performance and support informed engineering decisions throughout the project lifecycle.",
      photo: photoDesignReview,
      whatWeDo: {
        categories: [
          {
            number: "01",
            title: "Engineering Review & Assurance",
            icon: ClipboardCheck,
            items: [
              "Independent design review and verification",
              "Design validation and technical assurance",
              "Compliance with applicable codes and standards",
              "Engineering peer review",
            ],
          },
          {
            number: "02",
            title: "Value Engineering",
            icon: Scale,
            items: [
              "Structural system optimization",
              "Material and resource optimisation",
              "Alternative engineering solutions",
              "Lifecycle value improvement",
            ],
          },
          {
            number: "03",
            title: "Design Optimization",
            icon: Settings2,
            items: [
              "Design refinement and rationalization",
              "Buildability and constructability improvements",
              "Multidisciplinary design coordination",
              "Performance-focused engineering solutions",
            ],
          },
          {
            number: "04",
            title: "Risk & Constructability Assessment",
            icon: ShieldAlert,
            items: [
              "Engineering risk identification",
              "Constructability assessment",
              "Critical design review",
              "Site implementation considerations",
            ],
          },
        ],
        capability: [
          "Engineering Review",
          "Technical Assurance",
          "Value Engineering",
          "Design Optimisation",
          "Constructability Assessment",
          "Risk Evaluation",
          "Independent Technical Advice",
        ],
      },
      howWeWork: {
        intro: [
          "Every engineering review begins with understanding the project's objectives, design intent and delivery requirements. We evaluate engineering solutions with an independent and objective perspective, identifying opportunities to improve safety, constructability, efficiency and long-term performance while maintaining compliance with applicable standards.",
          "Rather than simply identifying issues, we work collaboratively with clients, architects and project stakeholders to develop practical, evidence-based recommendations that strengthen engineering outcomes and support informed decision-making.",
        ],
        focus: {
          heading: "Our approach focuses on",
          items: [
            { icon: Search, text: "Independent technical assessment" },
            {
              icon: Lightbulb,
              text: "Practical, evidence-based recommendations",
            },
            { icon: Users, text: "Collaborative engineering engagement" },
            {
              icon: Scale,
              text: "Balanced decisions that consider performance, cost and constructability",
            },
            { icon: TrendingUp, text: "Delivering measurable engineering value" },
          ],
        },
      },
      projectImpact: {
        outcomes: [
        {
          icon: ClipboardCheck,
          title: "Better Engineering Decisions",
          description:
            "Independent technical advice that strengthens confidence in critical project decisions.",
        },
        {
          icon: TrendingUp,
          title: "Improved Project Value",
          description:
            "Optimised engineering solutions that enhance performance while making efficient use of materials, time and project resources.",
        },
        {
          icon: ShieldAlert,
          title: "Reduced Technical Risk",
          description:
            "Early identification of design challenges that supports smoother project delivery.",
        },
        {
          icon: Layers3,
          title: "Stronger Project Outcomes",
          description:
            "Well-reviewed and optimised designs that improve constructability, long-term performance and overall project success.",
        },
        ],
      },
    },
  },
  {
    slug: "project-contract-management",
    title: "Project & Contract Management Services",
    description:
      "Managing project delivery through effective controls, contract administration, coordination, and governance practices.",
    image: imgProject,
    detail: {
      tagline:
        "Successful project delivery depends on effective planning, disciplined contract administration, and structured project controls. Enpro provides integrated Project & Contract Management services that strengthen project governance, improve coordination, manage risks, and support informed decision-making throughout the project lifecycle.",
      photo: photoProjectManagement,
      whatWeDo: {
        categories: [
          {
            number: "01",
            title: "Project Management & Coordination",
            icon: Network,
            description:
              "We help clients establish structured management frameworks that improve coordination, communication, and governance throughout the project lifecycle.",
            items: [
              "Project management planning and implementation",
              "Project execution strategies",
              "Project governance and coordination",
              "Stakeholder and interface management",
              "Programme monitoring and reporting",
              "Progress review and performance assessment",
              "Meeting management and technical coordination",
              "Project close-out support",
            ],
          },
          {
            number: "02",
            title: "Project Planning & Controls",
            icon: CalendarClock,
            description:
              "We develop practical planning and control systems that improve visibility of programme, resources, project performance, and delivery risks.",
            items: [
              "Project programme development",
              "Baseline scheduling and monitoring",
              "Progress measurement and performance tracking",
              "Resource planning and coordination",
              "Cost and schedule monitoring",
              "Risk identification and mitigation planning",
              "Delay monitoring and early warning assessments",
              "Project reporting and performance dashboards",
            ],
          },
          {
            number: "03",
            title: "Contract Administration & Management",
            icon: FileSignature,
            description:
              "We support effective contract administration through structured documentation, compliance monitoring, and management of contractual obligations throughout the project.",
            items: [
              "Contract administration",
              "Contract review and compliance monitoring",
              "Contract correspondence and documentation",
              "Contractor performance monitoring",
              "Interim payment certification support",
              "Management of contractual submissions",
              "Variation assessment and administration",
              "Contract close-out support",
            ],
          },
          {
            number: "04",
            title: "Claims, Variations & Change Management",
            icon: Gavel,
            description:
              "We provide structured contractual support to evaluate claims, administer variations, and manage project changes while helping minimise the potential for disputes.",
            items: [
              "Claims preparation and evaluation",
              "Extension of Time (EOT) assessments",
              "Delay and disruption analysis",
              "Variation evaluation",
              "Change management",
              "Contractual entitlement assessments",
              "Claims negotiation support",
              "Dispute avoidance assistance",
            ],
          },
          {
            number: "05",
            title: "Procurement & Tender Advisory",
            icon: ClipboardList,
            description:
              "We assist clients throughout the procurement process with technical, contractual, and commercial advice that supports transparent and informed decision-making.",
            items: [
              "Tender strategy support",
              "Preparation of tender documentation",
              "Technical specifications review",
              "Technical bid evaluation",
              "Bid comparison and assessment",
              "Tender clarifications",
              "Consultant and contractor selection support",
              "Procurement coordination",
            ],
          },
          {
            number: "06",
            title: "Infrastructure & MDB Project Support",
            icon: Landmark,
            description:
              "We support infrastructure and donor-funded projects through disciplined project management, contract administration, reporting, and stakeholder coordination.",
            items: [
              "Client-side project management",
              "Infrastructure project coordination",
              "Multilateral Development Bank (MDB) project support",
              "Contract administration under international contract frameworks",
              "Progress monitoring and reporting",
              "Stakeholder and implementing agency coordination",
              "Project documentation and compliance support",
            ],
          },
        ],
        capability: [
          "Project Management",
          "Project Planning",
          "Project Controls",
          "Contract Administration",
          "Claims & Change Management",
          "Procurement & Tender Advisory",
          "Risk Management",
          "Progress Monitoring",
          "Stakeholder Coordination",
          "Infrastructure & MDB Project Support",
        ],
      },
      howWeWork: {
        intro: [
          "Engineering decisions influence programme, cost, constructability, contractual obligations, and project performance. By combining engineering expertise with structured project management, we help clients make informed decisions, manage risks, and maintain project control throughout delivery.",
          "We work alongside clients from planning and procurement through contract administration and project completion, strengthening governance, improving coordination, and supporting predictable project outcomes.",
        ],
        points: [
          {
            icon: CalendarClock,
            title: "Structured Planning",
            description:
              "Successful projects begin with clear objectives, realistic planning, and a structured delivery framework. We align project scope, programme, resources, risks, and stakeholder expectations to establish a strong foundation for delivery.",
          },
          {
            icon: Users,
            title: "Collaborative Coordination",
            description:
              "Successful delivery relies on effective communication and coordinated decision-making. We work closely with clients, consultants, contractors, and stakeholders to maintain alignment throughout the project lifecycle.",
          },
          {
            icon: Gauge,
            title: "Controlled Delivery",
            description:
              "Through disciplined project controls, contract administration, and continuous performance monitoring, we help clients manage change, reduce risks, and maintain confidence throughout project delivery.",
          },
        ],
      },
      projectImpact: {
        outcomes: [
        {
          icon: Gauge,
          title: "Greater Project Control",
          description:
            "Structured planning, monitoring, and reporting improve visibility of project performance, enabling timely decisions and proactive management of programme, cost, and project risks.",
        },
        {
          icon: FileSignature,
          title: "Stronger Contractual Confidence",
          description:
            "Professional contract administration and structured management of claims and variations improve compliance, strengthen transparency, and support effective contractual outcomes.",
        },
        {
          icon: Users,
          title: "Better Stakeholder Alignment",
          description:
            "Clear communication and coordinated decision-making strengthen collaboration between clients, consultants, contractors, funding agencies, and other project stakeholders.",
        },
        {
          icon: CheckCircle2,
          title: "Successful Project Delivery",
          description:
            "By integrating engineering expertise with disciplined project and contract management, Enpro helps clients manage complexity, reduce delivery risks, and achieve successful project outcomes.",
        },
        ],
      },
    },
  },
  {
    slug: "construction-support-services",
    title: "Construction Support Services",
    description:
      "Providing technical guidance, shop drawing reviews, and engineering support throughout successful project execution.",
    image: imgConstruction,
    detail: {
      tagline:
        "We provide continued engineering support during construction, helping clients and project teams translate design intent into successful on-site delivery through timely technical advice and practical engineering solutions.",
      photo: photoConstructionSupport,
      whatWeDo: {
        categories: [
          {
            number: "01",
            title: "Technical Engineering Support",
            icon: LifeBuoy,
            items: [
              "Engineering advice during construction",
              "Design clarification and technical responses",
              "Review of contractor technical submissions",
              "Responses to Requests for Information (RFIs)",
            ],
          },
          {
            number: "02",
            title: "Construction Engineering Support",
            icon: HardHat,
            items: [
              "Site engineering support",
              "Technical inspections and observations",
              "Resolution of construction engineering issues",
              "Coordination with project stakeholders",
            ],
          },
          {
            number: "03",
            title: "Design Changes & Constructability",
            icon: PencilRuler,
            items: [
              "Review of shop and fabrication drawings",
              "Assessment of design modifications",
              "Constructability review",
              "Engineering solutions for unforeseen site conditions",
            ],
          },
        ],
        capability: [
          "Construction Engineering",
          "Technical Advisory",
          "Site Coordination",
          "Shop Drawing Review",
          "Constructability Assessment",
          "Design Modifications",
          "Engineering Support",
        ],
      },
      howWeWork: {
        intro: [
          "Construction projects often present site conditions, coordination requirements and technical challenges that require timely engineering input. We work closely with clients, contractors and project teams to provide practical engineering advice, resolve technical issues and support efficient construction while maintaining the integrity of the original design.",
          "Our focus is on delivering responsive engineering support that helps keep construction progressing safely, efficiently and in accordance with the approved design.",
        ],
        focus: {
          heading: "Our approach focuses on",
          items: [
            {
              icon: LifeBuoy,
              text: "Responsive engineering support during construction",
            },
            {
              icon: Wrench,
              text: "Practical solutions to site engineering challenges",
            },
            { icon: Users, text: "Close coordination with project stakeholders" },
            {
              icon: ShieldCheck,
              text: "Maintaining design intent throughout project delivery",
            },
          ],
        },
      },
      projectImpact: {
        outcomes: [
        {
          icon: BadgeCheck,
          title: "Technical Confidence",
          description:
            "Responsive engineering support that enables informed decisions throughout construction.",
        },
        {
          icon: Users,
          title: "Better Coordination",
          description:
            "Effective collaboration that reduces technical uncertainty and improves project communication.",
        },
        {
          icon: ShieldAlert,
          title: "Reduced Construction Risk",
          description:
            "Timely engineering solutions that minimise design conflicts, delays and site-related issues.",
        },
        {
          icon: CheckCircle2,
          title: "Successful Project Delivery",
          description:
            "Engineering support that contributes to quality construction, efficient execution and successful project outcomes.",
        },
        ],
      },
    },
  },
  {
    slug: "environmental-social-advisory",
    title: "Environmental & Social Advisory",
    description:
      "Supporting responsible infrastructure through environmental stewardship, social inclusion, and international safeguard compliance.",
    image: imgEnvironmental,
    detail: {
      tagline:
        "Today's infrastructure projects demand more than engineering excellence. They require environmental stewardship, social responsibility, meaningful stakeholder engagement, and compliance with national and international development requirements. Enpro strengthens multidisciplinary project teams through integrated Environmental & Social Advisory services, supporting sustainable, compliant, and resilient infrastructure delivery.",
      photo: photoEnvironmentalSocial,
      whatWeDo: {
        capabilityLabel: "Our Professional Capability",
        categories: [
          {
            number: "01",
            title: "Supporting Sustainable Infrastructure",
            icon: iconEnvSustainable,
            description:
              "We integrate environmental and social considerations into infrastructure projects, helping clients and project partners deliver responsible, resilient, and sustainable outcomes.",
            items: [
              "Environmental planning and compliance",
              "Initial Environmental Examinations (IEE)",
              "Environmental Impact Assessments (EIA)",
              "Environmental & Social Management Plans (ESMP)",
              "Climate and environmental risk assessments",
              "Environmental monitoring and reporting",
            ],
          },
          {
            number: "02",
            title: "Environmental & Social Safeguards",
            icon: iconEnvSafeguards,
            description:
              "We assist project teams in managing environmental and social risks while supporting safeguard implementation throughout planning, design, procurement, construction, and project delivery.",
            items: [
              "Environmental & Social Management Frameworks (ESMF)",
              "Environmental & Social Management Systems (ESMS)",
              "Social Impact Assessments (SIA)",
              "Safeguard implementation and compliance",
              "Monitoring and performance reporting",
            ],
          },
          {
            number: "03",
            title: "Stakeholder Engagement, Inclusion & Capacity Development",
            icon: iconEnvStakeholder,
            description:
              "Successful infrastructure depends on meaningful engagement, inclusive planning, and strengthened institutional capacity. We work with specialist professionals to support projects that create lasting value for communities and stakeholders.",
            items: [
              "Stakeholder engagement and public consultation",
              "Gender and social inclusion",
              "Capacity development and institutional strengthening",
              "Community engagement and awareness",
              "Grievance Redress Mechanisms (GRM)",
            ],
          },
          {
            number: "04",
            title: "Development Partner Project Support",
            icon: iconEnvPartner,
            description:
              "Working alongside multidisciplinary project teams, we contribute specialist advisory capabilities that strengthen project preparation, implementation, and delivery for nationally and internationally funded infrastructure programmes.",
            items: [
              "Development partner project support",
              "Environmental and social specialist advisory",
              "Gender specialist support",
              "Capacity development specialist support",
              "Project implementation advisory",
            ],
          },
        ],
        capability: [
          "Environmental Planning",
          "Environmental & Social Safeguards",
          "Stakeholder Engagement",
          "Gender & Social Inclusion",
          "Capacity Development",
          "Institutional Strengthening",
          "Environmental Compliance",
          "Sustainable Infrastructure",
          "Development Partner Project Support",
        ],
      },
      howWeWork: {
        intro: [
          "Sustainable infrastructure is achieved by integrating engineering, environmental, and social considerations from the earliest stages of project development. We work collaboratively with clients, project partners, and specialist professionals to embed these requirements throughout the project lifecycle.",
          "Our collaborative approach strengthens multidisciplinary project teams, supports regulatory compliance, and contributes to infrastructure that is technically robust, environmentally responsible, and socially inclusive.",
        ],
        focus: {
          heading: "Our approach focuses on",
          items: [
            {
              icon: iconEnvIntegrated,
              text: "Integrating engineering, environmental, and social expertise",
            },
            {
              icon: iconEnvStakeholder,
              text: "Strengthening multidisciplinary project teams through specialist collaboration",
            },
            {
              icon: iconEnvCompliance,
              text: "Supporting compliance with national and international development requirements",
            },
            {
              icon: iconEnvOutcomes,
              text: "Delivering sustainable, resilient, and inclusive infrastructure",
            },
          ],
        },
      },
      projectImpact: {
        outcomes: [
        {
          icon: iconEnvIntegrated,
          title: "Integrated Project Delivery",
          description:
            "Bringing engineering, environmental, and social expertise together strengthens multidisciplinary teams and supports more effective project delivery.",
        },
        {
          icon: iconEnvCompliance,
          title: "Improved Compliance & Risk Management",
          description:
            "Structured safeguard implementation supports regulatory compliance, manages project risks, and aligns projects with development partner requirements.",
        },
        {
          icon: iconEnvConfidence,
          title: "Stronger Stakeholder Confidence",
          description:
            "Inclusive engagement and transparent communication foster trust among clients, communities, funding institutions, and project partners.",
        },
        {
          icon: iconEnvOutcomes,
          title: "Sustainable Infrastructure Outcomes",
          description:
            "Integrating specialist environmental and social advisory into engineering solutions contributes to resilient, responsible, and future-ready infrastructure.",
        },
        ],
      },
    },
  },
  {
    slug: "digital-engineering-bim",
    title: "Digital Engineering & BIM",
    description:
      "Applying BIM and digital engineering solutions for coordinated, efficient, and technology-enabled project delivery.",
    image: imgDigital,
    detail: {
      tagline:
        "Digital engineering is transforming the way complex infrastructure and building projects are planned, coordinated, and delivered. At Enpro, we combine engineering expertise with advanced digital workflows to improve collaboration, reduce coordination risks, and support more efficient project delivery.",
      photo: photoDigitalBim,
      whatWeDo: {
        intro: [
          "Our Digital Engineering & BIM services help consultants, contractors, developers, and project teams strengthen their technical capabilities through BIM-enabled multidisciplinary modelling, digital coordination, digital delivery, and structured engineering information management.",
        ],
        capabilityLabel: "Our Professional Capability",
        categories: [
          {
            number: "01",
            title: "BIM, Digital Coordination & Collaboration",
            icon: Network,
            items: [
              "BIM-enabled multidisciplinary modelling across structural, civil, architectural, MEP, and specialist engineering disciplines",
              "Design coordination, clash detection, constructability support, and collaborative digital workflows",
              "Engineering information management to improve project coordination and decision-making",
            ],
          },
          {
            number: "02",
            title: "Engineering Modelling & Digital Detailing",
            icon: Boxes,
            items: [
              "Structural and civil engineering modelling",
              "Structural steel detailing and fabrication-ready modelling workflows",
              "Specialist digital modelling for complex structural systems, including tensile and membrane structures",
            ],
          },
          {
            number: "03",
            title: "Geospatial & Digital Solutions",
            icon: Map,
            items: [
              "GIS integration, geospatial information, and spatial data support for infrastructure planning and development",
              "Reality capture and Scan-to-BIM support for existing asset documentation and project development",
            ],
          },
          {
            number: "04",
            title: "Digital Project Information Management",
            icon: Database,
            items: [
              "Model-based documentation and quantity extraction",
              "Accurate as-built information and engineering data management to support efficient project delivery",
            ],
          },
        ],
        capability: [
          "BIM Coordination",
          "Multidisciplinary Digital Modelling",
          "Architectural, Structural, Civil & MEP Coordination",
          "Structural Steel Detailing",
          "Fabrication-Ready Modelling",
          "Specialist Tensile & Membrane Structure Modelling",
          "Digital Design Review",
          "Clash Detection",
          "GIS & Geospatial Intelligence",
          "Reality Capture & Scan-to-BIM",
          "Model-Based Documentation",
          "Quantity Information",
          "Digital Project Information Management",
          "Digital As-Built Information",
        ],
      },
      howWeWork: {
        intro: [
          "Digital engineering delivers the greatest value when it is built on sound engineering principles. At Enpro, we combine engineering knowledge with collaborative digital workflows to develop coordinated models and reliable project information that accurately reflect design intent, engineering requirements, and construction realities.",
          "We work closely with consultants, contractors, and project teams as an extension of their technical capabilities, providing flexible digital engineering support that complements project teams during specialised assignments, peak workloads, and critical delivery stages.",
        ],
        points: [
          {
            icon: Compass,
            title: "Engineering First",
            description:
              "Every digital solution is developed around practical engineering knowledge and project requirements.",
          },
          {
            icon: Users,
            title: "Integrated Collaboration",
            description:
              "Coordinating multidisciplinary information to improve communication, strengthen project integration, and reduce design conflicts.",
          },
          {
            icon: Layers,
            title: "Flexible Delivery Support",
            description:
              "Providing scalable technical capability to support complex projects, peak workloads, and demanding delivery schedules.",
          },
          {
            icon: BadgeCheck,
            title: "Quality-Controlled Delivery",
            description:
              "Maintaining accuracy, consistency, and reliability across modelling, coordination, and engineering documentation activities.",
          },
        ],
      },
      projectImpact: {
        intro: [
          "Digital Engineering & BIM helps project teams work more efficiently, coordinate more effectively, and make better-informed engineering decisions with greater confidence.",
          "By integrating engineering expertise with digital technologies, Enpro enables clients to improve multidisciplinary collaboration, reduce coordination risks, and strengthen project delivery through reliable digital information and flexible technical support.",
        ],
        benefits: {
          heading: "Clients benefit from",
          items: [
            {
              icon: Network,
              text: "Better multidisciplinary coordination and communication",
            },
            {
              icon: ShieldCheck,
              text: "Reduced design conflicts and improved constructability",
            },
            {
              icon: Workflow,
              text: "More efficient engineering workflows and project delivery",
            },
            {
              icon: Database,
              text: "Reliable digital information for informed decision-making",
            },
            {
              icon: Layers,
              text: "Additional technical capacity during peak project demands",
            },
            {
              icon: Boxes,
              text: "Improved integration between design, fabrication, construction, and asset information throughout the project lifecycle",
            },
          ],
        },
      },
    },
  },
];

export const getServiceBySlug = (slug?: string) =>
  SERVICES.find((service) => service.slug === slug);
