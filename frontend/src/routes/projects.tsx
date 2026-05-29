import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { PageHero, HeroStatsCard } from "../components/sections/PageHero";
import { CTABanner } from "../components/sections/CTABanner";
import { PROJECTS } from "../data/projects";
import { fadeUp, staggerContainer } from "../animations/variants";

export const Route = createFileRoute("/projects")({ component: ProjectsPage });

const TABS = [
  "All",
  "Government",
  "Enterprise & Industrial",
  "Technology",
  "Portals & Platforms",
] as const;

function ProjectsPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("All");
  const list = tab === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === tab);

  return (
    <>
      <PageHero
        breadcrumb="Success Stories"
        title="Success Stories That Speak for Themselves"
        subtitle="Real digital systems built for real enterprises, industries, and government organisations across India."
        rightCard={<HeroStatsCard />}
      />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={
                  tab === t
                    ? "bg-[#F472B6] text-[#1E0A3C] rounded-full px-6 py-2 font-semibold text-sm"
                    : "border border-gray-200 text-gray-600 hover:border-purple-300 rounded-full px-6 py-2 text-sm transition"
                }
              >
                {t}
              </button>
            ))}
          </div>

          <motion.div
            key={tab}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {list.map((p) => (
              <motion.div
                key={p.name}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`relative h-48 bg-gradient-to-br ${p.gradient} flex items-center justify-center`}
                >
                  <div className="absolute top-0 left-0 bg-[#F472B6] text-[#1E0A3C] text-xs font-bold px-3 py-1 rounded-br-xl">
                    {p.category}
                  </div>
                  <Briefcase size={60} className="text-white/80" />
                </div>
                <div className="p-6">
                  <div className="text-[#EC4899] text-xs font-bold uppercase tracking-wide mb-2">
                    {p.category}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{p.name}</h3>
                  <div className="text-gray-500 text-sm mb-3">{p.client}</div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-[#F5F3FF] text-purple-600 text-xs px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="text-[#EC4899] text-sm font-semibold">
                    View Details →
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
