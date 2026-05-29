import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PageHero, HeroStatsCard } from "../components/sections/PageHero";
import { CTABanner } from "../components/sections/CTABanner";
import { INDUSTRIES } from "../data/industries";
import { slideLeft, slideRight, staggerContainer } from "../animations/variants";

export const Route = createFileRoute("/industries")({ component: IndustriesPage });

function IndustriesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Industries"
        title="Industry-Specific Digital Solutions Built for Real Operations"
        subtitle="From government workflow systems to factory floor automation — we build software tuned to how your industry actually works."
        rightCard={<HeroStatsCard />}
      />

      {INDUSTRIES.map(({ icon: Icon, name, gradient, desc, solutions }, i) => {
        const reverse = i % 2 === 1;
        return (
          <section key={name} className={i % 2 === 0 ? "bg-white py-20" : "bg-[#F8F7FF] py-20"}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className={`max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <motion.div variants={reverse ? slideRight : slideLeft}>
                <div
                  className={`rounded-3xl min-h-[320px] flex items-center justify-center bg-gradient-to-br ${gradient}`}
                >
                  <Icon size={100} className="text-white/90" />
                </div>
              </motion.div>
              <motion.div variants={reverse ? slideLeft : slideRight}>
                <span className="inline-block bg-[#F472B6]/15 text-[#EC4899] rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wide mb-4">
                  Industry
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{name}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{desc}</p>
                <ul className="space-y-2">
                  {solutions.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-gray-700">
                      <Check size={18} className="text-[#EC4899] mt-1 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </section>
        );
      })}

      <CTABanner />
    </>
  );
}
