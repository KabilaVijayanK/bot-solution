import { motion } from "framer-motion";
import { Globe, Users, Rocket, Sparkles } from "lucide-react";
import { fadeUp, staggerContainer } from "../../animations/variants";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutSection() {
  return (
    <section className="bg-white/90 py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6 lg:px-12"
      >
        <SectionHeading
          title="About Us — Building Software That Matters"
          subtitle="We partner with ambitious teams to design, build and scale reliable software products powered by modern engineering and AI."
        />

        <motion.div variants={fadeUp} className="mt-10 grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 text-lg">
              We are a product-minded engineering firm focused on enterprise-grade software,
              automation and AI-first experiences. Our cross-functional teams combine design
              thinking, robust architecture, and pragmatic delivery to help organizations move
              faster and reduce risk.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-start gap-2">
                <div className="rounded-full bg-gradient-to-br from-[#FCE7F3] to-[#EEF2FF] p-3 text-[#7C3AED]">
                  <Users size={20} />
                </div>
                <div className="text-sm text-gray-500">People-first teams</div>
                <div className="text-xl font-bold text-[#0B1020]">25+ Engineers</div>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="rounded-full bg-gradient-to-br from-[#FEF3C7] to-[#FFEEF0] p-3 text-[#F59E0B]">
                  <Globe size={20} />
                </div>
                <div className="text-sm text-gray-500">Global Delivery</div>
                <div className="text-xl font-bold text-[#0B1020]">Remote & On-site</div>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="rounded-full bg-gradient-to-br from-[#EFF6FF] to-[#F0FDF4] p-3 text-[#06B6D4]">
                  <Rocket size={20} />
                </div>
                <div className="text-sm text-gray-500">Product Velocity</div>
                <div className="text-xl font-bold text-[#0B1020]">Faster Releases</div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-[#7C3AED] px-4 py-2 text-white font-semibold shadow hover:opacity-95"
              >
                Contact Us
              </a>
              <a href="/projects" className="text-sm font-medium text-gray-600 hover:text-gray-800">
                See Projects
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-[#F7F3FF] to-[#FFF5F7] p-8 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-[#7C3AED]">Our Mission</div>
                <h3 className="mt-3 text-2xl font-bold text-[#0B1020]">
                  Create dependable software that drives outcomes
                </h3>
              </div>
              <div className="text-[#EC4899]">
                <Sparkles size={36} />
              </div>
            </div>

            <p className="mt-4 text-gray-600">
              We combine strong product sensibility with pragmatic engineering — delivering
              solutions that are maintainable, measurable and aligned to business outcomes.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-white p-4 border">
                <div className="text-sm text-gray-500">Avg. Time To Market</div>
                <div className="mt-1 text-lg font-bold">8–12 weeks</div>
              </div>
              <div className="rounded-lg bg-white p-4 border">
                <div className="text-sm text-gray-500">Customer Satisfaction</div>
                <div className="mt-1 text-lg font-bold">95%</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
