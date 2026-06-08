export type Project = {
  name: string;
  slug: string;
  category?: string;
  images: string[];
  description: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Vivegan",
    slug: "vivegan",
    category: "Dynamic website",
    images: ["/projects/vivegan-1.jpg", "/projects/vivegan-2.jpg", "/projects/vivegan-3.jpg"],
    description:
      "Vivegan is a consumer-facing brand focused on wholesome plant-based products. We designed a conversion-first website highlighting product lines, nutrition details, and a simple checkout flow.",
  },
  {
    name: "VTech",
    slug: "vtech",
    category: "Ecommerce Website",
    images: ["/projects/vtech-1.jpg", "/projects/vtech-2.jpg", "/projects/vtech-3.jpg"],
    description:
      "VTech needed a scalable online store and catalogue to showcase hardware products. The solution included optimized product pages and performance-first images.",
  },
  {
    name: "Digimax",
    slug: "digimax",
    category: "Digital Marketing",
    images: ["/projects/digimax-1.jpg", "/projects/digimax-2.jpg"],
    description:
      "Digimax is a digital agency; we built a portfolio-driven site that surfaces case studies, lead capture, and analytics integrations to measure campaign ROI.",
  },
  {
    name: "VamTech",
    slug: "vamtech",
    category: "Dynamic website",
    images: ["/projects/vamtech-1.jpg", "/projects/vamtech-2.jpg"],
    description:
      "VamTech is an engineering services firm. The site focuses on credibility — team profiles, service pages, and downloadable resources for partners.",
  },
  {
    name: "SagoServe",
    slug: "sagoserve",
    category: "Services",
    images: ["/projects/sagoserve-1.jpg"],
    description:
      "SagoServe provides B2B services. We designed a clean, trust-building site with clear service funnels and contact forms to increase lead quality.",
  },
  {
    name: "Pars India",
    slug: "pars-india",
    category: "Corporate",
    images: ["/projects/pars-india-1.jpg"],
    description:
      "Pars India required a modern corporate identity online — responsive pages, team sections, and clear calls-to-action for partner inquiries.",
  },
  {
    name: "NS Power Corp",
    slug: "ns-power-corp",
    category: "Energy Website",
    images: ["/projects/ns-power-1.jpg"],
    description:
      "NS Power Corp is an industrial client; the site emphasizes projects, partner credentials, and technical documentation access.",
  },
  {
    name: "Nagarathar Matrimony",
    slug: "nagarathar-matrimony",
    category: "Platform",
    images: ["/projects/nagarathar-1.jpg"],
    description:
      "A matrimonial platform tailored for a regional audience — we created a responsive listing UI, filters, and secure messaging patterns.",
  },
  {
    name: "PlainFuel",
    slug: "plainfuel",
    category: "Ecommerce",
    images: ["/projects/plainfuel-1.jpg"],
    description:
      "PlainFuel is a retail brand. The project focused on fast-loading product galleries, simple navigation, and shipping optimizations.",
  },
];
