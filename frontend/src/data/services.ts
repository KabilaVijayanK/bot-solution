import {
  Users,
  IdCard,
  Building2,
  Workflow,
  Package,
  Cloud,
  Bot,
  BarChart2,
  Zap,
  Database,
  Palette,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    icon: Users,
    title: "Enterprise CRM Software",
    desc: "Custom CRM platforms to manage your entire customer lifecycle — leads, sales, follow-ups, and reporting.",
    bullets: [
      "Lead & pipeline management",
      "Client communication tracking",
      "Custom reporting dashboards",
    ],
  },
  {
    icon: IdCard,
    title: "HRMS & Payroll Systems",
    desc: "Complete HR automation from onboarding, attendance, and leave management to payroll processing.",
    bullets: [
      "Automated payroll calculation",
      "Attendance & leave tracking",
      "Employee self-service portal",
    ],
  },
  {
    icon: Building2,
    title: "ERP Systems",
    desc: "Unify finance, operations, inventory, and HR into a single intelligent enterprise resource platform.",
    bullets: [
      "Multi-module integration",
      "Real-time business visibility",
      "Role-based access control",
    ],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Replace manual, repetitive processes with smart workflow systems that save time and reduce errors.",
    bullets: [
      "Approval workflow automation",
      "Digital forms & e-signatures",
      "Automated notifications",
    ],
  },
  {
    icon: Package,
    title: "Inventory Management",
    desc: "Real-time tracking of stock, vendors, and supply chains across all warehouses and locations.",
    bullets: ["Multi-location stock tracking", "Vendor & purchase management", "Low-stock alerts"],
  },
  {
    icon: Cloud,
    title: "Cloud Applications",
    desc: "Scalable, secure, cloud-hosted business applications that your team can access from anywhere.",
    bullets: ["Cloud-native architecture", "99.9% uptime SLA", "Auto-scaling infrastructure"],
  },
  {
    icon: Bot,
    title: "AI Business Automation",
    desc: "AI-powered tools to automate complex decisions, predict trends, and improve business outcomes.",
    bullets: ["Predictive analytics", "AI document processing", "Intelligent reporting"],
  },
  {
    icon: BarChart2,
    title: "Data Analytics & BI",
    desc: "Interactive dashboards and business intelligence tools to turn raw data into actionable insights.",
    bullets: ["Real-time KPI dashboards", "Custom report builder", "Data export & API access"],
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    desc: "End-to-end modernisation of traditional business processes into streamlined digital operations.",
    bullets: ["Paperless office systems", "Process digitisation", "IoT-based monitoring"],
  },
];

export const SERVICE_CATEGORIES = [
  {
    icon: Building2,
    title: "Enterprise Software Development",
    desc: "Custom-built software solutions designed to automate and optimise business operations for enterprises, manufacturers, institutions, and government bodies.",
    benefits: [
      "Increased operational efficiency",
      "Reduced manual work",
      "Centralised data management",
      "Better reporting & analytics",
      "Faster decision making",
    ],
    items: [
      "CRM Software",
      "HRMS Platforms",
      "ERP Systems",
      "Inventory Management",
      "Billing & Accounting Systems",
      "Vendor Management",
      "Employee Tracking",
      "Production Monitoring",
      "MIS Dashboards",
      "Mobile Applications",
      "SaaS Platforms",
    ],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Automate repetitive tasks and streamline business operations with intelligent workflow systems that eliminate bottlenecks and human error.",
    benefits: [
      "Saves time",
      "Reduces human errors",
      "Improves productivity",
      "Enhances accountability",
      "Speeds up operations",
    ],
    items: [
      "Approval Workflow Systems",
      "Task Automation",
      "Attendance Automation",
      "Document Management",
      "Complaint Management",
      "Process Tracking",
      "Internal Communication",
      "Automated Notifications",
      "Digital Forms & Approvals",
    ],
  },
  {
    icon: Database,
    title: "Technical Data Management",
    desc: "Centralised platforms for managing structured business and industrial data securely with real-time access and role-based controls.",
    benefits: [
      "Secure cloud storage",
      "Real-time visibility",
      "Role-based controls",
      "Reliable backups",
    ],
    items: [
      "Cloud Storage Systems",
      "Data Visualisation Dashboards",
      "Evidence & File Management",
      "Real-Time Reports",
      "Data Analytics",
      "Role-Based Access Control",
      "API Integrations",
      "Backup & Security",
    ],
  },
  {
    icon: Zap,
    title: "Digital Transformation Solutions",
    desc: "We help organisations modernise their traditional processes using advanced digital technologies, making businesses paperless, automated, and future-ready.",
    benefits: [
      "Go paperless",
      "Automate operations",
      "Modern, future-ready stack",
      "Better governance",
    ],
    items: [
      "Paperless Office Systems",
      "Industrial Automation Platforms",
      "Smart Reporting Systems",
      "Business Process Digitisation",
      "AI Integration",
      "Cloud Migration",
      "IoT-Based Monitoring",
      "Digital Governance",
    ],
  },
  {
    icon: Palette,
    title: "Branding Services",
    desc: "Build a strong, memorable, and professional brand identity that reflects your business values and attracts your ideal clients.",
    benefits: [
      "Memorable identity",
      "Consistent visual language",
      "Stronger trust",
      "Better positioning",
    ],
    items: [
      "Brand Strategy",
      "Logo & Visual Identity",
      "Website Branding",
      "Marketing Materials",
      "Business Cards",
      "Letterheads",
      "Packaging Design",
      "Brand Guidelines",
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing Services",
    desc: "Grow your online presence and generate quality leads with strategic digital marketing campaigns built around your business goals.",
    benefits: [
      "Quality lead generation",
      "Higher brand visibility",
      "Measurable ROI",
      "Owned audience growth",
    ],
    items: [
      "SEO",
      "Social Media Marketing",
      "Content Marketing",
      "Performance Marketing",
      "Email Marketing",
      "Local Business Marketing",
      "Analytics & Reporting",
    ],
  },
];
