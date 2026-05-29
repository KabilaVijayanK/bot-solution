import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-H_HoUDNU.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function PillButton({
  variant = "primary",
  className,
  children,
  as = "button",
  href,
  type,
  onClick
}) {
  const base = "inline-flex items-center justify-center font-semibold px-8 py-3.5 rounded-full transition-all duration-200";
  const v = variant === "primary" ? "bg-[#F472B6] text-[#1E0A3C] hover:bg-[#EC4899]" : variant === "secondary" ? "border-2 border-[#F472B6] text-[#F472B6] hover:bg-[#F472B6] hover:text-[#1E0A3C]" : "text-white underline-offset-4 hover:underline";
  if (as === "a") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.a,
      {
        href,
        onClick,
        whileHover: { scale: 1.04 },
        whileTap: { scale: 0.97 },
        className: cn(base, v, className),
        children
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.button,
    {
      type,
      onClick,
      whileHover: { scale: 1.04 },
      whileTap: { scale: 0.97 },
      className: cn(base, v, className),
      children
    }
  );
}
export {
  PillButton as P
};
