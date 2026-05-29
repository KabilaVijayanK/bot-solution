import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { b as staggerContainer, f as fadeUp } from "./variants-eS7YTXPh.mjs";
import { O as OFFICES, S as SITE } from "./router-H_HoUDNU.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function OfficesSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#F8F7FF] py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.1 },
      variants: staggerContainer,
      className: "max-w-7xl mx-auto px-6 lg:px-12",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12", children: "Our Presence Across India" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: OFFICES.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            variants: fadeUp,
            className: "bg-white rounded-2xl p-8 border border-gray-100",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: o.flag }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-gray-900 mb-1", children: [
                o.city,
                o.primary && " (Head Office)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#EC4899] font-medium text-sm mb-4", children: o.state }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm leading-7 mb-4", children: o.desc }),
              o.primary && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "block text-[#EC4899]", href: `tel:${SITE.phone}`, children: SITE.phone }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "block text-[#EC4899]", href: `mailto:${SITE.email}`, children: SITE.email })
              ] })
            ]
          },
          o.city
        )) })
      ]
    }
  ) });
}
export {
  OfficesSection as O
};
