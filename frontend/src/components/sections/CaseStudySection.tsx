import { motion } from "framer-motion";
import { Briefcase, Server, Sparkles } from "lucide-react";
import { fadeUp, staggerContainer } from "../../animations/variants";
import { SectionHeading } from "../ui/SectionHeading";
import { CLIENTS } from "../../data/site";

const PROJECTS = [
  {
    title: "Enterprise Automation Platform",
    tag: "Automation · 2025",
    desc: "Built a cloud-native automation platform that unified CRM, workflows, and analytics for a retail conglomerate.",
    facts: ["3X throughput", "70% fewer manual steps", "Real-time dashboards"],
    tech: ["Node.js", "React", "PostgreSQL", "AWS"],
    icon: Briefcase,
  },
  {
    title: "AI-Enhanced Lead Scoring",
    tag: "AI · 2024",
    desc: "Implemented a generative-AI pipeline for lead enrichment and scoring — increasing conversion by 28%.",
    facts: ["+28% conversion", "Automated enrichment", "Low-latency scoring"],
    tech: ["Python", "LangChain", "Redis", "GCP"],
    icon: Sparkles,
  },
  {
    title: "Scalable Microservices Platform",
    tag: "Platform · 2023",
    desc: "Replatformed legacy monolith into microservices to achieve resilient horizontal scale and simpler deployments.",
    facts: ["99.99% uptime", "Independent deployments", "Autoscaling"],
    tech: ["Go", "Kubernetes", "Docker", "Prometheus"],
    icon: Server,
  },
];

export function CaseStudySection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F3FF] py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6 lg:px-12"
      >
        <SectionHeading
          title="Selected Projects — Real Results"
          subtitle="We design, build, and scale software that transforms operations and drives measurable outcomes."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {PROJECTS.map((p) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-transparent bg-white/90 p-6 shadow-lg hover:shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-gradient-to-br from-[#7C3AED]/20 to-[#EC4899]/10 p-3 text-[#7C3AED]">
                    <Icon size={28} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#7C3AED]">{p.tag}</div>
                    <h4 className="mt-2 text-lg font-bold text-[#0B1020]">{p.title}</h4>
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-600">{p.desc}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.facts.map((f) => (
                    <li
                      key={f}
                      className="rounded-full bg-[#F3E8FF] px-3 py-1 text-xs font-medium text-[#5B21B6]"
                    >
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-[#F8F7FF] px-2 py-1 text-xs text-[#6B7280]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="/projects"
                    className="text-sm font-semibold text-[#EC4899] hover:text-[#F472B6]"
                  >
                    View →
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {CLIENTS.slice(0, 8).map((c) => (
            <span key={c} className="text-gray-400 font-semibold text-sm uppercase tracking-wider">
              {c}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
