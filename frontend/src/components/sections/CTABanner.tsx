import { motion } from "framer-motion";
import { PillButton } from "../ui/PillButton";

export function CTABanner({
  title = "Grow Your Business with The Bot's Digital Transformation Services",
  subtitle = "Bring your ideas to reality with our enterprise software, automation, and digital transformation services.",
  cta = "Talk to Our Team",
  href = "/contact",
}: {
  title?: string;
  subtitle?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="navy-gradient py-20 text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-6 lg:px-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-white/70 text-lg mb-10">{subtitle}</p>
        <PillButton as="a" href={href} className="!px-10 !py-4 !text-lg">
          {cta}
        </PillButton>
      </motion.div>
    </section>
  );
}
