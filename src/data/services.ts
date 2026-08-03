// Single source of truth for the six services shown on the landing page and
// for the detailed service pages. Content follows the client's Rev-B documents.

import imgStructural from "@/assets/service-structural-design.jpg";
import imgDesignReview from "@/assets/service-design-review.jpg";
import imgConstruction from "@/assets/service-construction-support.jpg";
import imgProject from "@/assets/service-project-management.jpg";
import imgEnvironmental from "@/assets/service-environmental-social.jpg";
import imgDigital from "@/assets/service-digital-bim.jpg";

// Photography used inside the detail pages
import photoStructuralFrame from "@/assets/photo-structural-frame.jpg";

import iconBuildings from "@/assets/icons/cat-buildings.png";
import iconInfrastructure from "@/assets/icons/cat-infrastructure.png";
import iconIndustrial from "@/assets/icons/cat-industrial.png";
import iconTensile from "@/assets/icons/cat-tensile.png";
import iconWater from "@/assets/icons/cat-water.png";
import iconAssessment from "@/assets/icons/cat-assessment.png";

export interface ServiceCategory {
  number: string;
  title: string;
  icon: string;
  items: string[];
}

export interface ServiceDetail {
  tagline: string;
  /** Photograph shown alongside the How We Work section */
  photo?: string;
  whatWeDo: {
    intro: string;
    categories: ServiceCategory[];
    capability: string[];
  };
  howWeWork: {
    intro: string;
    points: { title: string; description: string }[];
  };
  projectImpact: { title: string; description: string }[];
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
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
      photo: photoStructuralFrame,
      whatWeDo: {
        intro:
          "We engineer structures across their full lifecycle from new-build design to assessment, strengthening and rehabilitation.",
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
        intro:
          "We approach every structural challenge with a balance of engineering rigour, practical judgement and collaborative thinking. From establishing the right structural strategy to coordinating disciplines and refining the design, we consider performance, constructability, efficiency and long-term requirements throughout the process.",
        points: [
          {
            title: "Engineering with Purpose",
            description:
              "Sound analysis and engineering judgement guide solutions that are safe, efficient and fit for their intended use.",
          },
          {
            title: "Integrated from the Start",
            description:
              "We coordinate closely with the wider project team and consider constructability early, helping resolve interfaces and practical challenges before they reach the site.",
          },
          {
            title: "Optimised for the Long Term",
            description:
              "We refine solutions with material efficiency, cost, durability, performance and future requirements in mind.",
          },
        ],
      },
      projectImpact: [
        {
          title: "Safety & Integrity",
          description:
            "Structural solutions designed for safety, stability and reliable performance.",
        },
        {
          title: "Efficiency & Value",
          description:
            "Practical solutions that use materials intelligently and support cost-conscious decisions.",
        },
        {
          title: "Buildability & Delivery",
          description:
            "Designs developed with construction realities in mind, helping reduce technical uncertainty and coordination issues.",
        },
        {
          title: "Performance & Longevity",
          description:
            "Structures designed to perform reliably, remain durable and deliver value throughout their service life.",
        },
      ],
    },
  },
  {
    slug: "design-review-value-engineering",
    title: "Design Review & Value Engineering",
    description:
      "Optimizing engineering solutions through independent technical reviews, constructability assessment, and value-driven design improvements.",
    image: imgDesignReview,
  },
  {
    slug: "project-contract-management",
    title: "Project & Contract Management Services",
    description:
      "Managing project delivery through effective controls, contract administration, coordination, and governance practices.",
    image: imgProject,
  },
  {
    slug: "construction-support-services",
    title: "Construction Support Services",
    description:
      "Providing technical guidance, shop drawing reviews, and engineering support throughout successful project execution.",
    image: imgConstruction,
  },
  {
    slug: "environmental-social-advisory",
    title: "Environmental & Social Advisory",
    description:
      "Supporting responsible infrastructure through environmental stewardship, social inclusion, and international safeguard compliance.",
    image: imgEnvironmental,
  },
  {
    slug: "digital-engineering-bim",
    title: "Digital Engineering & BIM",
    description:
      "Applying BIM and digital engineering solutions for coordinated, efficient, and technology-enabled project delivery.",
    image: imgDigital,
  },
];

export const getServiceBySlug = (slug?: string) =>
  SERVICES.find((service) => service.slug === slug);
