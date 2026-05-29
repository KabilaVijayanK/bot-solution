import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, H as HeroStatsCard } from "./PageHero-CT4nQLsN.mjs";
import { C as CTABanner } from "./CTABanner-DJ9gzMvj.mjs";
import { b as staggerContainer, f as fadeUp } from "./variants-eS7YTXPh.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { b as Briefcase } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./PillButton-CwOIAXqt.mjs";
import "./router-H_HoUDNU.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const PROJECTS = [
  {
    name: "Sago Serve",
    client: "Tamil Nadu Government",
    category: "Government",
    tags: ["CRM", "HRMS", "Workflow Automation", "Reporting", "Operations"],
    gradient: "from-indigo-700 to-purple-900"
  },
  {
    name: "NS Power Corp",
    client: "NS Power Corp",
    category: "Enterprise & Industrial",
    tags: ["CRM Platform", "Inventory", "Operations Digitisation"],
    gradient: "from-violet-600 to-purple-800"
  },
  {
    name: "Danesh Industries",
    client: "Danesh Industries",
    category: "Enterprise & Industrial",
    tags: ["HRMS", "Workflow Automation", "Reporting Dashboard"],
    gradient: "from-purple-600 to-fuchsia-700"
  },
  {
    name: "Pars Industries Works",
    client: "Pars Industries",
    category: "Enterprise & Industrial",
    tags: ["ERP", "Inventory", "CRM"],
    gradient: "from-fuchsia-600 to-pink-700"
  },
  {
    name: "Vamtech",
    client: "Vamtech",
    category: "Enterprise & Industrial",
    tags: ["CRM", "Operations", "Reporting"],
    gradient: "from-pink-600 to-rose-700"
  },
  {
    name: "Vtech",
    client: "Vtech",
    category: "Enterprise & Industrial",
    tags: ["HRMS", "Inventory", "Workflow Automation"],
    gradient: "from-indigo-600 to-violet-700"
  },
  {
    name: "Digimax",
    client: "Digimax",
    category: "Technology",
    tags: ["Web App", "Business Automation", "Cloud"],
    gradient: "from-violet-700 to-purple-900"
  },
  {
    name: "Global Softwares",
    client: "Global Softwares",
    category: "Technology",
    tags: ["Process Management", "Cloud Solution"],
    gradient: "from-purple-500 to-fuchsia-700"
  },
  {
    name: "Vivegan",
    client: "Vivegan",
    category: "Technology",
    tags: ["Web Application", "Business Automation"],
    gradient: "from-fuchsia-700 to-purple-800"
  },
  {
    name: "OJK Jobs",
    client: "OJK Jobs",
    category: "Portals & Platforms",
    tags: ["Portal", "User Management", "Lead Management", "Workflow"],
    gradient: "from-pink-500 to-fuchsia-600"
  },
  {
    name: "Nagarathar Matchify",
    client: "Nagarathar Matchify Matrimony",
    category: "Portals & Platforms",
    tags: ["Matrimony Portal", "User Matching", "Profile Management"],
    gradient: "from-rose-600 to-pink-700"
  }
];
const TABS = ["All", "Government", "Enterprise & Industrial", "Technology", "Portals & Platforms"];
function ProjectsPage() {
  const [tab, setTab] = reactExports.useState("All");
  const list = tab === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === tab);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { breadcrumb: "Success Stories", title: "Success Stories That Speak for Themselves", subtitle: "Real digital systems built for real enterprises, industries, and government organisations across India.", rightCard: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroStatsCard, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-3 mb-12", children: TABS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab(t), className: tab === t ? "bg-[#F472B6] text-[#1E0A3C] rounded-full px-6 py-2 font-semibold text-sm" : "border border-gray-200 text-gray-600 hover:border-purple-300 rounded-full px-6 py-2 text-sm transition", children: t }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: "hidden", animate: "visible", variants: staggerContainer, className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: list.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, whileHover: {
        y: -6
      }, className: "bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative h-48 bg-gradient-to-br ${p.gradient} flex items-center justify-center`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 bg-[#F472B6] text-[#1E0A3C] text-xs font-bold px-3 py-1 rounded-br-xl", children: p.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 60, className: "text-white/80" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#EC4899] text-xs font-bold uppercase tracking-wide mb-2", children: p.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-900 mb-2", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-500 text-sm mb-3", children: p.client }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-4", children: p.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[#F5F3FF] text-purple-600 text-xs px-3 py-1 rounded-full", children: t }, t)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-[#EC4899] text-sm font-semibold", children: "View Details →" })
        ] })
      ] }, p.name)) }, tab)
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTABanner, {})
  ] });
}
export {
  ProjectsPage as component
};
