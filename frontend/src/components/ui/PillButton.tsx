import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import type { ReactNode } from "react";

type Props = {
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: ReactNode;
  as?: "button" | "a";
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function PillButton({
  variant = "primary",
  className,
  children,
  as = "button",
  href,
  type,
  onClick,
}: Props) {
  const base =
    "inline-flex items-center justify-center font-semibold px-8 py-3.5 rounded-full transition-all duration-200";
  const v =
    variant === "primary"
      ? "bg-[#F472B6] text-[#1E0A3C] hover:bg-[#EC4899]"
      : variant === "secondary"
        ? "border-2 border-[#F472B6] text-[#F472B6] hover:bg-[#F472B6] hover:text-[#1E0A3C]"
        : "text-white underline-offset-4 hover:underline";

  if (as === "a") {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className={cn(base, v, className)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={cn(base, v, className)}
    >
      {children}
    </motion.button>
  );
}
