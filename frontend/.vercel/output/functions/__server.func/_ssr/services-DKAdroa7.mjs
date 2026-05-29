import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, H as HeroStatsCard } from "./PageHero-CT4nQLsN.mjs";
import { C as CTABanner } from "./CTABanner-DJ9gzMvj.mjs";
import { a as SERVICE_CATEGORIES } from "./services-C_g6a1w-.mjs";
import { b as staggerContainer, s as slideLeft, a as slideRight, f as fadeUp } from "./variants-eS7YTXPh.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { e as Check } from "../_libs/lucide-react.mjs";
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
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { breadcrumb: "Services", title: "Enterprise Software & Digital Services", subtitle: "End-to-end software development, workflow automation, cloud applications, and digital transformation services built for enterprises, industries, and government organisations.", rightCard: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroStatsCard, {}) }),
    SERVICE_CATEGORIES.map(({
      icon: Icon,
      title,
      desc,
      benefits,
      items
    }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: i % 2 === 0 ? "bg-white py-20" : "bg-[#F8F7FF] py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", whileInView: "visible", viewport: {
      once: true,
      amount: 0.15
    }, variants: staggerContainer, className: "max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: slideLeft, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-[#F5F3FF] flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 32, className: "text-[#7C3AED]" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed mb-6", children: desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-gray-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 18, className: "text-[#EC4899] mt-1 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
        ] }, b)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: slideRight, className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, className: "bg-white border border-gray-100 rounded-xl p-5 hover:border-purple-300 hover:shadow-sm transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-900 font-semibold text-sm", children: it }) }, it)) })
    ] }) }, title)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTABanner, {})
  ] });
}
export {
  ServicesPage as component
};
