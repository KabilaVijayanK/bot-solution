import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations/variants";
import { SectionHeading } from "../ui/SectionHeading";
import { SERVICES } from "../../data/services";

export function ServicesGrid() {
  return (
    <section className="bg-white py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6 lg:px-12"
      >
        <SectionHeading
          eyebrow="Our Services"
          title="Powering Innovation with Enterprise-Grade Digital Solutions"
          subtitle="End-to-end software development, automation, and transformation services built to scale with your business."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, title, desc, bullets }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6, borderColor: "#A855F7" }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg"
            >
              <div
                className="w-13 h-13 rounded-xl bg-[#F5F3FF] flex items-center justify-center mb-5"
                style={{ width: 52, height: 52 }}
              >
                <Icon size={24} className="text-[#7C3AED]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
              <ul className="space-y-1 mb-5">
                {bullets.map((b) => (
                  <li key={b} className="text-xs text-gray-400 leading-6">
                    • {b}
                  </li>
                ))}
              </ul>
              <a
                href="/services"
                className="text-[#EC4899] text-sm font-semibold hover:text-[#F472B6]"
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
