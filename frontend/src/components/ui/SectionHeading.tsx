import { motion } from "framer-motion";
import { fadeUp } from "../../animations/variants";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={center ? "text-center max-w-3xl mx-auto mb-12" : "max-w-3xl mb-12"}
    >
      {eyebrow && (
        <div className="text-[#EC4899] font-semibold text-sm tracking-[0.18em] uppercase mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={"text-lg text-gray-500 " + (center ? "mx-auto" : "")}>{subtitle}</p>
      )}
    </motion.div>
  );
}
