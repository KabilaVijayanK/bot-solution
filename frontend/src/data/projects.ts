export type Project = {
  name: string;
  client: string;
  category: "Government" | "Enterprise & Industrial" | "Technology" | "Portals & Platforms";
  tags: string[];
  gradient: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Sago Serve",
    client: "Tamil Nadu Government",
    category: "Government",
    tags: ["CRM", "HRMS", "Workflow Automation", "Reporting", "Operations"],
    gradient: "from-indigo-700 to-purple-900",
  },
  {
    name: "NS Power Corp",
    client: "NS Power Corp",
    category: "Enterprise & Industrial",
    tags: ["CRM Platform", "Inventory", "Operations Digitisation"],
    gradient: "from-violet-600 to-purple-800",
  },
  {
    name: "Danesh Industries",
    client: "Danesh Industries",
    category: "Enterprise & Industrial",
    tags: ["HRMS", "Workflow Automation", "Reporting Dashboard"],
    gradient: "from-purple-600 to-fuchsia-700",
  },
  {
    name: "Pars Industries Works",
    client: "Pars Industries",
    category: "Enterprise & Industrial",
    tags: ["ERP", "Inventory", "CRM"],
    gradient: "from-fuchsia-600 to-pink-700",
  },
  {
    name: "Vamtech",
    client: "Vamtech",
    category: "Enterprise & Industrial",
    tags: ["CRM", "Operations", "Reporting"],
    gradient: "from-pink-600 to-rose-700",
  },
  {
    name: "Vtech",
    client: "Vtech",
    category: "Enterprise & Industrial",
    tags: ["HRMS", "Inventory", "Workflow Automation"],
    gradient: "from-indigo-600 to-violet-700",
  },
  {
    name: "Digimax",
    client: "Digimax",
    category: "Technology",
    tags: ["Web App", "Business Automation", "Cloud"],
    gradient: "from-violet-700 to-purple-900",
  },
  {
    name: "Global Softwares",
    client: "Global Softwares",
    category: "Technology",
    tags: ["Process Management", "Cloud Solution"],
    gradient: "from-purple-500 to-fuchsia-700",
  },
  {
    name: "Vivegan",
    client: "Vivegan",
    category: "Technology",
    tags: ["Web Application", "Business Automation"],
    gradient: "from-fuchsia-700 to-purple-800",
  },
  {
    name: "OJK Jobs",
    client: "OJK Jobs",
    category: "Portals & Platforms",
    tags: ["Portal", "User Management", "Lead Management", "Workflow"],
    gradient: "from-pink-500 to-fuchsia-600",
  },
  {
    name: "Nagarathar Matchify",
    client: "Nagarathar Matchify Matrimony",
    category: "Portals & Platforms",
    tags: ["Matrimony Portal", "User Matching", "Profile Management"],
    gradient: "from-rose-600 to-pink-700",
  },
];
