import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, H as HeroStatsCard } from "./PageHero-CT4nQLsN.mjs";
import { C as CTABanner } from "./CTABanner-DJ9gzMvj.mjs";
import { I as INDUSTRIES } from "./industries-DEdphP1-.mjs";
import { b as staggerContainer, a as slideRight, s as slideLeft } from "./variants-eS7YTXPh.mjs";
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
function IndustriesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { breadcrumb: "Industries", title: "Industry-Specific Digital Solutions Built for Real Operations", subtitle: "From government workflow systems to factory floor automation — we build software tuned to how your industry actually works.", rightCard: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroStatsCard, {}) }),
    INDUSTRIES.map(({
      icon: Icon,
      name,
      gradient,
      desc,
      solutions
    }, i) => {
      const reverse = i % 2 === 1;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: i % 2 === 0 ? "bg-white py-20" : "bg-[#F8F7FF] py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", whileInView: "visible", viewport: {
        once: true,
        amount: 0.2
      }, variants: staggerContainer, className: `max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: reverse ? slideRight : slideLeft, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-3xl min-h-[320px] flex items-center justify-center bg-gradient-to-br ${gradient}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 100, className: "text-white/90" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: reverse ? slideLeft : slideRight, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block bg-[#F472B6]/15 text-[#EC4899] rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wide mb-4", children: "Industry" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed mb-6", children: desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: solutions.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-gray-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 18, className: "text-[#EC4899] mt-1 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s })
          ] }, s)) })
        ] })
      ] }) }, name);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTABanner, {})
  ] });
}
export {
  IndustriesPage as component
};
