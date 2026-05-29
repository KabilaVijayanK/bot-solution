import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PillButton } from "./PillButton-CwOIAXqt.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function CTABanner({
  title = "Grow Your Business with The Bot's Digital Transformation Services",
  subtitle = "Bring your ideas to reality with our enterprise software, automation, and digital transformation services.",
  cta = "Talk to Our Team",
  href = "/contact"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "navy-gradient py-20 text-white text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6 },
      className: "max-w-3xl mx-auto px-6 lg:px-12",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-lg mb-10", children: subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PillButton, { as: "a", href, className: "!px-10 !py-4 !text-lg", children: cta })
      ]
    }
  ) });
}
export {
  CTABanner as C
};
