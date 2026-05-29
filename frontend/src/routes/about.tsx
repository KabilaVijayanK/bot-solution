import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Award, Sparkles, Shield, TrendingUp } from "lucide-react";
import { PageHero, HeroStatsCard } from "../components/sections/PageHero";
import { OfficesSection } from "../components/sections/OfficesSection";
import { CTABanner } from "../components/sections/CTABanner";
import { fadeUp, staggerContainer } from "../animations/variants";

export const Route = createFileRoute("/about")({ component: AboutPage });

const VALUES = [
  {
    icon: Shield,
    name: "Commitment",
    desc: "We deliver every project with full ownership and accountability.",
  },
  {
    icon: Sparkles,
    name: "Innovation",
    desc: "We bring fresh thinking and modern tech to every problem.",
  },
  {
    icon: Award,
    name: "Reliability",
    desc: "Battle-tested systems your team can depend on every day.",
  },
  {
    icon: TrendingUp,
    name: "Growth",
    desc: "We build software that scales as your business grows.",
  },
];

const SERVICES_CHIPS = [
  "CRM Software",
  "HRMS & Payroll",
  "ERP Systems",
  "Workflow Automation",
  "Inventory Management",
  "Cloud Applications",
  "AI Business Tools",
  "Data Analytics",
  "Digital Transformation",
  "Branding & Marketing",
];

function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        title="Transforming Businesses Through Smart Digital Solutions"
        subtitle="We are The Bot — an enterprise software and digital transformation company helping organisations modernise the way they operate."
        rightCard={<HeroStatsCard />}
      />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We Are The Bot — Your Digital Transformation Partner
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Bot is an enterprise-first software development company headquartered in Mumbai,
              with regional offices in Tirunelveli and Chennai. We build CRM, HRMS, ERP, inventory,
              and workflow automation systems for enterprises, industries, startups, and government
              organisations across India.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our mission is to simplify complex operations through technology and help businesses
              achieve operational excellence using innovative digital systems.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                ["50+", "Clients"],
                ["100+", "Projects"],
                ["5+", "Years"],
                ["3", "Offices"],
              ].map(([v, l]) => (
                <div key={l} className="bg-[#F5F3FF] rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-[#1E0A3C]">{v}</div>
                  <div className="text-xs text-gray-500 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="navy-gradient rounded-3xl min-h-[400px] p-8 flex items-end">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-bold text-[#1E0A3C]">50+ Enterprise Clients</div>
                <div className="text-gray-500 text-sm mt-1">From manufacturing to government</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F7FF] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1E0A3C] text-white rounded-3xl p-10">
            <Target size={36} className="text-[#F472B6] mb-4" />
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-white/75 leading-relaxed">
              To simplify complex business operations through powerful, easy-to-use enterprise
              software and to help every organisation we work with achieve measurable operational
              excellence.
            </p>
          </div>
          <div className="brand-gradient text-white rounded-3xl p-10">
            <Eye size={36} className="text-white mb-4" />
            <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-white/90 leading-relaxed">
              To become India's most trusted enterprise software partner — building digital systems
              that power the next generation of businesses, industries, and government institutions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 lg:px-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, name, desc }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                className="bg-white border border-gray-100 rounded-2xl p-8 text-center hover:shadow-lg hover:border-purple-200 transition"
              >
                <div className="w-14 h-14 rounded-full bg-[#F5F3FF] flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-[#7C3AED]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{name}</h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-[#F8F7FF] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Services We Provide</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICES_CHIPS.map((s) => (
              <span
                key={s}
                className="bg-[#F5F3FF] text-purple-700 border border-purple-200 rounded-full px-5 py-2 text-sm font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <OfficesSection />
      <CTABanner />
    </>
  );
}
