import { n as GraduationCap, m as Factory, H as HeartPulse, J as ShoppingBag, U as Truck, L as Landmark, l as Cpu, X as Wheat, c as Building, R as Rocket } from "../_libs/lucide-react.mjs";
const INDUSTRIES = [
  {
    icon: GraduationCap,
    name: "Education",
    gradient: "from-violet-600 to-purple-700",
    desc: "Digital learning platforms, ERP systems, and management applications for schools, colleges, and training institutions.",
    solutions: [
      "Student Management System",
      "Fee & Finance Module",
      "Learning Management Platform",
      "Attendance Automation",
      "Exam & Results System"
    ]
  },
  {
    icon: Factory,
    name: "Manufacturing",
    gradient: "from-purple-600 to-indigo-700",
    desc: "Production management, inventory systems, and workflow automation for factories and industrial units.",
    solutions: [
      "Production Monitoring App",
      "Inventory & Stock Management",
      "Vendor Management",
      "Quality Control Tracking",
      "Employee Management"
    ]
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    gradient: "from-fuchsia-600 to-pink-700",
    desc: "Hospital management systems, medical inventory, and reporting platforms for healthcare providers.",
    solutions: [
      "Patient Management System",
      "Medical Inventory",
      "Appointment Scheduling",
      "Billing & Insurance",
      "Pharmacy Management"
    ]
  },
  {
    icon: ShoppingBag,
    name: "Retail & E-Commerce",
    gradient: "from-pink-600 to-rose-700",
    desc: "Billing, sales tracking, and customer management systems for retail chains and online stores.",
    solutions: [
      "POS & Billing System",
      "Inventory Management",
      "Customer CRM",
      "E-Commerce Platform",
      "Sales Analytics"
    ]
  },
  {
    icon: Truck,
    name: "Logistics",
    gradient: "from-indigo-600 to-violet-700",
    desc: "Fleet tracking, delivery management, and logistics automation for transport businesses.",
    solutions: [
      "Fleet Management System",
      "Delivery Tracking",
      "Driver & Staff Management",
      "Route Optimisation",
      "Customer Portal"
    ]
  },
  {
    icon: Landmark,
    name: "Finance & Trading",
    gradient: "from-violet-700 to-purple-900",
    desc: "CRM, reporting, lead tracking, and business operations management for financial services.",
    solutions: [
      "Lead & CRM Platform",
      "Trade Management System",
      "Compliance Reporting",
      "Document Management",
      "Client Portal"
    ]
  },
  {
    icon: Cpu,
    name: "Information Technology",
    gradient: "from-purple-500 to-fuchsia-700",
    desc: "Custom software development, SaaS platforms, and cloud infrastructure for IT companies.",
    solutions: [
      "Custom SaaS Development",
      "API Integration Platform",
      "Cloud Infrastructure",
      "Product Development",
      "Tech Consultancy"
    ]
  },
  {
    icon: Wheat,
    name: "Agriculture",
    gradient: "from-fuchsia-700 to-purple-800",
    desc: "Operational management and reporting systems for agricultural and commodity businesses.",
    solutions: [
      "Commodity Trading Platform",
      "Farmer Records Management",
      "Supply Chain Tracking",
      "Price Management",
      "Reporting Dashboard"
    ]
  },
  {
    icon: Building,
    name: "Government",
    gradient: "from-indigo-700 to-blue-900",
    desc: "Workflow management, citizen services, and compliance reporting systems for government bodies.",
    solutions: [
      "Operational Workflow System",
      "Compliance Management",
      "Reporting & Dashboards",
      "Document Management",
      "Staff Management"
    ]
  },
  {
    icon: Rocket,
    name: "Startups & SMEs",
    gradient: "from-pink-500 to-fuchsia-600",
    desc: "Affordable, scalable software for growing businesses that need enterprise-level tools without the enterprise price.",
    solutions: [
      "CRM & Sales Tools",
      "HRMS Starter",
      "Accounting & Billing",
      "Website & Branding",
      "Digital Marketing"
    ]
  }
];
export {
  INDUSTRIES as I
};
