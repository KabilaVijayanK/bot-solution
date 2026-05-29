import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PageHero, HeroStatsCard } from "../components/sections/PageHero";
import { CTABanner } from "../components/sections/CTABanner";
import { SERVICE_CATEGORIES } from "../data/services";
import { fadeUp, slideLeft, slideRight, staggerContainer } from "../animations/variants";

export const Route = createFileRoute("/services")({ component: ServicesPage });

function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        title="Enterprise Software & Digital Services"
        subtitle="End-to-end software development, workflow automation, cloud applications, and digital transformation services built for enterprises, industries, and government organisations."
        rightCard={<HeroStatsCard />}
      />
      {SERVICE_CATEGORIES.map(({ icon: Icon, title, desc, benefits, items }, i) => (
        <section key={title} className={i % 2 === 0 ? "bg-white py-20" : "bg-[#F8F7FF] py-20"}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            <motion.div variants={slideLeft}>
              <div className="w-16 h-16 rounded-2xl bg-[#F5F3FF] flex items-center justify-center mb-6">
                <Icon size={32} className="text-[#7C3AED]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{desc}</p>
              <ul className="space-y-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-gray-700">
                    <Check size={18} className="text-[#EC4899] mt-1 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={slideRight} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {items.map((it) => (
                <motion.div
                  key={it}
                  variants={fadeUp}
                  className="bg-white border border-gray-100 rounded-xl p-5 hover:border-purple-300 hover:shadow-sm transition"
                >
                  <div className="text-gray-900 font-semibold text-sm">{it}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      ))}
      <CTABanner />
    </>
  );
}
