import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { g as ChevronRight } from "../_libs/lucide-react.mjs";
function PageHero({
  breadcrumb,
  title,
  subtitle,
  rightCard
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "navy-gradient min-h-[380px] flex items-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-white/70 flex items-center gap-1 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-[#F472B6]", children: "Home" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#F472B6]", children: breadcrumb })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-white text-4xl md:text-5xl font-bold leading-tight", children: title }),
          subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/75 text-lg md:text-xl max-w-2xl mt-4", children: subtitle })
        ]
      }
    ),
    rightCard && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, x: 30 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5, delay: 0.2 },
        children: rightCard
      }
    )
  ] }) });
}
function HeroStatsCard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/10 backdrop-blur rounded-2xl p-6 text-white border border-white/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4 text-center", children: [
    ["50+", "Clients"],
    ["100+", "Projects"],
    ["5+", "Years"]
  ].map(([v, l]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-[#F472B6]", children: v }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white/70 mt-1", children: l })
  ] }, l)) }) });
}
export {
  HeroStatsCard as H,
  PageHero as P
};
