import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations/variants";
import { OFFICES, SITE } from "../../data/site";

export function OfficesSection() {
  return (
    <section className="bg-[#F8F7FF] py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6 lg:px-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Our Presence Across India
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OFFICES.map((o) => (
            <motion.div
              key={o.city}
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 border border-gray-100"
            >
              <div className="text-3xl mb-2">{o.flag}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {o.city}
                {o.primary && " (Head Office)"}
              </div>
              <div className="text-[#EC4899] font-medium text-sm mb-4">{o.state}</div>
              <p className="text-gray-500 text-sm leading-7 mb-4">{o.desc}</p>
              {o.primary && (
                <div className="text-sm space-y-1">
                  <a className="block text-[#EC4899]" href={`tel:${SITE.phone}`}>
                    {SITE.phone}
                  </a>
                  <a className="block text-[#EC4899]" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
