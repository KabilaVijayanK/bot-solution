import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};
export const slideLeft: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
export const slideRight: Variants = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
export const scaleIn: Variants = {
  hidden: { scale: 0.92, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};
