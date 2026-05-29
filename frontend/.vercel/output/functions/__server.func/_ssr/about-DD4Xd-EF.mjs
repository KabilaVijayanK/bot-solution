import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, H as HeroStatsCard } from "./PageHero-CT4nQLsN.mjs";
import { O as OfficesSection } from "./OfficesSection-DrlM7HnJ.mjs";
import { C as CTABanner } from "./CTABanner-DJ9gzMvj.mjs";
import { b as staggerContainer, f as fadeUp } from "./variants-eS7YTXPh.mjs";
import { T as Target, E as Eye, y as Shield, N as Sparkles, A as Award, Q as TrendingUp } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
import "./router-H_HoUDNU.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "./PillButton-CwOIAXqt.mjs";
const VALUES = [{
  icon: Shield,
  name: "Commitment",
  desc: "We deliver every project with full ownership and accountability."
}, {
  icon: Sparkles,
  name: "Innovation",
  desc: "We bring fresh thinking and modern tech to every problem."
}, {
  icon: Award,
  name: "Reliability",
  desc: "Battle-tested systems your team can depend on every day."
}, {
  icon: TrendingUp,
  name: "Growth",
  desc: "We build software that scales as your business grows."
}];
const SERVICES_CHIPS = ["CRM Software", "HRMS & Payroll", "ERP Systems", "Workflow Automation", "Inventory Management", "Cloud Applications", "AI Business Tools", "Data Analytics", "Digital Transformation", "Branding & Marketing"];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { breadcrumb: "About", title: "Transforming Businesses Through Smart Digital Solutions", subtitle: "We are The Bot — an enterprise software and digital transformation company helping organisations modernise the way they operate.", rightCard: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroStatsCard, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-6", children: "We Are The Bot — Your Digital Transformation Partner" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed mb-4", children: "The Bot is an enterprise-first software development company headquartered in Mumbai, with regional offices in Tirunelveli and Chennai. We build CRM, HRMS, ERP, inventory, and workflow automation systems for enterprises, industries, startups, and government organisations across India." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed mb-8", children: "Our mission is to simplify complex operations through technology and help businesses achieve operational excellence using innovative digital systems." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: [["50+", "Clients"], ["100+", "Projects"], ["5+", "Years"], ["3", "Offices"]].map(([v, l]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#F5F3FF] rounded-xl p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-[#1E0A3C]", children: v }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-500 mt-1", children: l })
        ] }, l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "navy-gradient rounded-3xl min-h-[400px] p-8 flex items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl p-6 shadow-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-[#1E0A3C]", children: "50+ Enterprise Clients" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-500 text-sm mt-1", children: "From manufacturing to government" })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#F8F7FF] py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#1E0A3C] text-white rounded-3xl p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { size: 36, className: "text-[#F472B6] mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3", children: "Our Mission" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/75 leading-relaxed", children: "To simplify complex business operations through powerful, easy-to-use enterprise software and to help every organisation we work with achieve measurable operational excellence." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "brand-gradient text-white rounded-3xl p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 36, className: "text-white mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3", children: "Our Vision" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 leading-relaxed", children: "To become India's most trusted enterprise software partner — building digital systems that power the next generation of businesses, industries, and government institutions." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", whileInView: "visible", viewport: {
      once: true
    }, variants: staggerContainer, className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12", children: "Our Core Values" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: VALUES.map(({
        icon: Icon,
        name,
        desc
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "bg-white border border-gray-100 rounded-2xl p-8 text-center hover:shadow-lg hover:border-purple-200 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-[#F5F3FF] flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 24, className: "text-[#7C3AED]" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-900 mb-2", children: name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm", children: desc })
      ] }, name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#F8F7FF] py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-8", children: "Services We Provide" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-3", children: SERVICES_CHIPS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[#F5F3FF] text-purple-700 border border-purple-200 rounded-full px-5 py-2 text-sm font-medium", children: s }, s)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OfficesSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTABanner, {})
  ] });
}
export {
  AboutPage as component
};
