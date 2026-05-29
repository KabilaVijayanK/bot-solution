import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "../../animations/variants";

export function BannerImageSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Gentle parallax and zoom for a premium hero-like feel.
  const imageY = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.45, 0.28, 0.5]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-black">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative h-[100svh] min-h-[520px] w-full"
      >
        <motion.img
          src="/banner.png"
          alt="Company banner"
          className="h-full w-full object-cover object-center"
          style={{ y: imageY, scale: imageScale }}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
          loading="lazy"
        />

        <motion.div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.36),transparent_44%),linear-gradient(to_top,rgba(3,4,16,0.78),rgba(3,4,16,0.15))]"
          style={{ opacity: overlayOpacity }}
        />
      </motion.div>
    </section>
  );
}

export default BannerImageSection;
