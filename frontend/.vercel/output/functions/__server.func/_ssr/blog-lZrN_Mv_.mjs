import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, H as HeroStatsCard } from "./PageHero-CT4nQLsN.mjs";
import { P as POSTS } from "./blog-B6YNMBhj.mjs";
import { b as staggerContainer, f as fadeUp } from "./variants-eS7YTXPh.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const TABS = ["All", "Enterprise Software", "Automation", "Digital Transformation", "AI & Automation", "Case Study"];
function BlogPage() {
  const [tab, setTab] = reactExports.useState("All");
  const filtered = tab === "All" ? POSTS : POSTS.filter((p) => p.category === tab);
  const [featured, ...rest] = filtered;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { breadcrumb: "Blog", title: "Enterprise Software & Digital Transformation Insights", subtitle: "Knowledge, case studies, and practical guides from our team to help you make smarter digital decisions.", rightCard: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroStatsCard, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 mb-12", children: TABS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab(t), className: tab === t ? "bg-[#F472B6] text-[#1E0A3C] rounded-full px-5 py-2 text-sm font-semibold" : "border border-gray-200 text-gray-600 rounded-full px-5 py-2 text-sm hover:border-purple-300", children: t }, t)) }),
      featured && /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-[#F8F7FF] rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-[45%_55%] mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `bg-gradient-to-br ${featured.gradient} min-h-[300px]` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[#F472B6] text-[#1E0A3C] text-xs font-bold px-3 py-1 rounded-full", children: "FEATURED" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full", children: featured.category })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 mb-4", children: featured.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6 leading-relaxed", children: featured.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-400 text-sm mb-4", children: [
            "The Bot Team · ",
            featured.date
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "inline-block bg-[#F472B6] hover:bg-[#EC4899] text-[#1E0A3C] rounded-full px-6 py-3 font-semibold transition", children: "Read Article →" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: "hidden", whileInView: "visible", viewport: {
        once: true
      }, variants: staggerContainer, className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: rest.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { variants: fadeUp, className: "bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `relative h-48 bg-gradient-to-br ${p.gradient}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 bg-[#F472B6] text-[#1E0A3C] text-xs font-bold px-3 py-1 rounded-br-xl", children: p.category }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#EC4899] text-xs font-semibold uppercase tracking-wide mb-2", children: p.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-900 mb-2 line-clamp-2", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3", children: p.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-xs", children: p.date }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-[#EC4899] text-sm font-semibold", children: "Read More →" })
          ] })
        ] })
      ] }, p.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "navy-gradient rounded-3xl p-10 text-center text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl md:text-3xl font-bold mb-3", children: "Stay Updated with The Bot's Latest Insights" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 mb-8 max-w-xl mx-auto", children: "Get our best articles on enterprise software, automation, and digital transformation." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "flex max-w-md mx-auto", onSubmit: (e) => e.preventDefault(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", placeholder: "Your email", className: "bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-l-full px-4 py-3 text-sm flex-1 min-w-0 focus:outline-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-[#F472B6] text-[#1E0A3C] font-bold px-6 py-3 rounded-r-full text-sm hover:bg-[#EC4899]", children: "Subscribe" })
      ] })
    ] }) }) })
  ] });
}
export {
  BlogPage as component
};
