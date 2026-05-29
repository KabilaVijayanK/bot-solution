import { motion } from "framer-motion";
import {
  BrainCircuit,
  CloudCog,
  Code2,
  Cpu,
  Database,
  LayoutGrid,
  MonitorSmartphone,
  Smartphone,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { fadeUp, slideLeft, slideRight, staggerContainer } from "../../animations/variants";

type TechItem = {
  name: string;
  accent: string;
};

type TechSection = {
  key: string;
  title: string;
  description: string;
  items: TechItem[][];
};

const SECTIONS: Array<{
  key: string;
  label: string;
  icon: typeof Code2;
}> = [
  { key: "frontend", label: "Frontend Engineering", icon: MonitorSmartphone },
  { key: "backend", label: "Backend Engineering", icon: Code2 },
  { key: "generative-ai", label: "Generative AI", icon: BrainCircuit },
  { key: "databases", label: "Databases", icon: Database },
  { key: "quality", label: "Quality Engineering", icon: ShieldCheck },
  { key: "experience", label: "Digital Experience", icon: LayoutGrid },
  { key: "mobile", label: "Mobile", icon: Smartphone },
  { key: "cloud", label: "Cloud & DevOps", icon: CloudCog },
  { key: "data", label: "Data Engineering", icon: Cpu },
  { key: "platform", label: "Platform", icon: Code2 },
];

const CONTENT: Record<string, TechSection> = {
  frontend: {
    key: "frontend",
    title: "Frontend Engineering",
    description:
      "We craft responsive, high-performance interfaces with modern frameworks and a strong focus on maintainability, accessibility, and speed.",
    items: [
      [
        { name: "React", accent: "#61DAFB" },
        { name: "Next.js", accent: "#111827" },
        { name: "Angular", accent: "#DD0031" },
        { name: "Vue.js", accent: "#41B883" },
        { name: "TypeScript", accent: "#3178C6" },
      ],
      [
        { name: "HTML5", accent: "#E34F26" },
        { name: "Bootstrap", accent: "#7952B3" },
        { name: "Tailwind", accent: "#38BDF8" },
        { name: "Framer", accent: "#111827" },
      ],
    ],
  },
  backend: {
    key: "backend",
    title: "Backend Engineering",
    description:
      "We develop microservices-driven, scalable back-end infrastructure, guaranteeing robust security, high performance, and seamless growth for applications.",
    items: [
      [
        { name: "Python", accent: "#3776AB" },
        { name: "Node.js", accent: "#68A063" },
        { name: "Java", accent: "#EA2D2E" },
        { name: ".NET", accent: "#512BD4" },
        { name: "Django", accent: "#092E20" },
      ],
      [
        { name: "Flask", accent: "#000000" },
        { name: "Go", accent: "#00ADD8" },
        { name: "PHP", accent: "#777BB4" },
        { name: "Spring", accent: "#6DB33F" },
        { name: "Hibernate", accent: "#59666C" },
      ],
      [
        { name: "GraphQL", accent: "#E535AB" },
        { name: "Express", accent: "#000000" },
        { name: "Laravel", accent: "#FF2D20" },
      ],
    ],
  },
  "generative-ai": {
    key: "generative-ai",
    title: "Generative AI",
    description:
      "We design AI-powered systems that automate knowledge work, generate insights, and unlock new product experiences with clear business value.",
    items: [
      [
        { name: "OpenAI", accent: "#000000" },
        { name: "LangChain", accent: "#1C7C54" },
        { name: "Hugging Face", accent: "#FF9D00" },
        { name: "RAG", accent: "#7C3AED" },
      ],
      [
        { name: "Prompting", accent: "#EC4899" },
        { name: "Agents", accent: "#2563EB" },
        { name: "Vision", accent: "#0EA5E9" },
      ],
    ],
  },
  databases: {
    key: "databases",
    title: "Databases",
    description:
      "We build reliable data layers with smart schema design, resilient replication, and the right mix of relational and NoSQL technologies.",
    items: [
      [
        { name: "MySQL", accent: "#4479A1" },
        { name: "PostgreSQL", accent: "#336791" },
        { name: "MongoDB", accent: "#47A248" },
        { name: "Redis", accent: "#DC382D" },
      ],
      [
        { name: "SQLite", accent: "#003B57" },
        { name: "Firebase", accent: "#FFCA28" },
        { name: "Supabase", accent: "#3FCF8E" },
      ],
    ],
  },
  quality: {
    key: "quality",
    title: "Quality Engineering",
    description:
      "We validate performance, resilience, and UX with automated testing strategies that keep releases dependable and predictable.",
    items: [
      [
        { name: "Playwright", accent: "#2EAD33" },
        { name: "Cypress", accent: "#17202C" },
        { name: "Jest", accent: "#C21325" },
        { name: "Vitest", accent: "#6E9F18" },
      ],
      [
        { name: "QA", accent: "#EC4899" },
        { name: "Automation", accent: "#8B5CF6" },
        { name: "Performance", accent: "#0EA5E9" },
      ],
    ],
  },
  experience: {
    key: "experience",
    title: "Digital Experience",
    description:
      "We shape polished digital experiences that make products feel intuitive, premium, and consistent across channels.",
    items: [
      [
        { name: "UI Systems", accent: "#7C3AED" },
        { name: "Design Ops", accent: "#EC4899" },
        { name: "Motion", accent: "#38BDF8" },
        { name: "Brand", accent: "#F59E0B" },
      ],
      [
        { name: "Accessibility", accent: "#10B981" },
        { name: "Content", accent: "#111827" },
        { name: "Conversion", accent: "#EF4444" },
      ],
    ],
  },
  mobile: {
    key: "mobile",
    title: "Mobile",
    description:
      "We deliver mobile-first products with clean architecture, smooth interactions, and platform-aware design patterns.",
    items: [
      [
        { name: "React Native", accent: "#61DAFB" },
        { name: "Flutter", accent: "#02569B" },
        { name: "Swift", accent: "#FA7343" },
        { name: "Kotlin", accent: "#7F52FF" },
      ],
      [
        { name: "iOS", accent: "#111827" },
        { name: "Android", accent: "#3DDC84" },
      ],
    ],
  },
  cloud: {
    key: "cloud",
    title: "Cloud & DevOps",
    description:
      "We architect cloud-native systems and automation pipelines that scale confidently and reduce operational friction.",
    items: [
      [
        { name: "AWS", accent: "#FF9900" },
        { name: "Docker", accent: "#2496ED" },
        { name: "Kubernetes", accent: "#326CE5" },
        { name: "Linux", accent: "#FCC624" },
      ],
      [
        { name: "CI/CD", accent: "#8B5CF6" },
        { name: "Terraform", accent: "#7B42BC" },
        { name: "Monitoring", accent: "#0EA5E9" },
      ],
    ],
  },
  data: {
    key: "data",
    title: "Data Engineering",
    description:
      "We prepare data platforms for analytics, automation, and machine learning with practical pipelines and strong governance.",
    items: [
      [
        { name: "Airflow", accent: "#017CEE" },
        { name: "Spark", accent: "#E25A1C" },
        { name: "dbt", accent: "#FF694B" },
        { name: "BigQuery", accent: "#4285F4" },
      ],
      [
        { name: "ETL", accent: "#8B5CF6" },
        { name: "Pipelines", accent: "#EC4899" },
        { name: "Warehouse", accent: "#0EA5E9" },
      ],
    ],
  },
  platform: {
    key: "platform",
    title: "Platform",
    description:
      "We unify architecture, tooling, and delivery practices so teams can ship faster with confidence and alignment.",
    items: [
      [
        { name: "Microservices", accent: "#7C3AED" },
        { name: "API Gateway", accent: "#0EA5E9" },
        { name: "Auth", accent: "#111827" },
        { name: "Observability", accent: "#F59E0B" },
      ],
      [
        { name: "Docs", accent: "#10B981" },
        { name: "Governance", accent: "#EC4899" },
        { name: "Scalability", accent: "#3B82F6" },
      ],
    ],
  },
};

function TechBadge({ item }: { item: TechItem }) {
  return (
    <div className="flex min-h-[72px] items-center gap-3 rounded-xl border border-white/60 bg-white/90 px-4 py-2 shadow-[0_8px_24px_rgba(124,58,237,0.08)] transition hover:bg-white">
      <span
        className="flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold text-white shadow-sm"
        style={{ backgroundColor: item.accent }}
      >
        {item.name
          .split(" ")
          .map((part) => part[0])
          .slice(0, 2)
          .join("")}
      </span>
      <span className="text-[15px] font-medium tracking-tight text-[#334155]">{item.name}</span>
    </div>
  );
}

export function TechStack() {
  const [active, setActive] = useState("backend");
  const current = CONTENT[active];

  return (
    <section className="relative overflow-hidden bg-[#090312] py-0 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.28),transparent_42%),linear-gradient(180deg,rgba(22,8,36,0.96)_0%,rgba(9,3,18,0.98)_100%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        variants={staggerContainer}
        className="relative mx-auto w-full px-0"
      >
        <div className="grid min-h-[740px] grid-cols-1 overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.08)] lg:grid-cols-[33%_67%]">
          <motion.aside
            variants={slideLeft}
            className="bg-[linear-gradient(180deg,rgba(92,37,177,0.96)_0%,rgba(54,16,93,0.98)_55%,rgba(18,5,33,0.98)_100%)] text-white"
          >
            <div className="flex h-full flex-col">
              {SECTIONS.map((section) => {
                const Icon = section.icon;
                const isActive = active === section.key;

                return (
                  <button
                    key={section.key}
                    type="button"
                    onClick={() => setActive(section.key)}
                    className={`group relative flex min-h-[70px] w-full items-center gap-4 border-b border-white/15 px-4 text-left transition-colors duration-200 sm:px-5 lg:px-6 ${
                      isActive ? "bg-[rgba(244,114,182,0.18)]" : "hover:bg-[rgba(244,114,182,0.08)]"
                    }`}
                    aria-pressed={isActive}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/40 bg-white/5 text-white transition group-hover:border-[#F472B6] group-hover:bg-white/10">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>

                    <span className="flex-1 text-[15px] font-medium tracking-tight sm:text-[16px]">
                      {section.label}
                    </span>

                    {isActive ? (
                      <span className="absolute right-0 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[16px] border-y-transparent border-l-[18px] border-l-[#F472B6]" />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </motion.aside>

          <motion.div
            variants={slideRight}
            className="relative flex flex-col items-center justify-between bg-[linear-gradient(180deg,rgba(247,244,255,0.96)_0%,rgba(244,242,255,0.94)_100%)] px-5 py-10 text-center sm:px-8 lg:px-12 lg:py-12"
          >
            <div className="mx-auto w-full max-w-[1050px]">
              <motion.h2
                key={current.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="text-[34px] font-semibold tracking-[-0.03em] text-[#5B21B6] sm:text-[40px] lg:text-[44px]"
              >
                {current.title}
              </motion.h2>

              <div className="mx-auto mt-3 h-[4px] w-[220px] rounded-full bg-[linear-gradient(90deg,#F472B6_0%,#EC4899_45%,#A855F7_100%)]" />

              <motion.p
                key={`${current.key}-description`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 }}
                className="mx-auto mt-10 max-w-[930px] text-[17px] leading-8 text-[#374151] sm:text-[18px]"
              >
                {current.description}
              </motion.p>
            </div>

            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 }}
              className="mx-auto mt-12 w-full max-w-[1080px]"
            >
              <div className="grid gap-x-0 gap-y-10">
                {current.items.map((row, rowIndex) => (
                  <div
                    key={`${current.key}-row-${rowIndex}`}
                    className="grid items-center"
                    style={{ gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))` }}
                  >
                    {row.map((item, itemIndex) => (
                      <div
                        key={item.name}
                        className={`relative flex items-center justify-center px-4 py-6 ${
                          itemIndex !== row.length - 1
                            ? "after:absolute after:right-0 after:top-1/2 after:h-[90px] after:-translate-y-1/2 after:border-r after:border-dashed after:border-[#D6BCFA]"
                            : ""
                        }`}
                      >
                        <TechBadge item={item} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="mt-12 flex justify-center">
              <a
                href="/services"
                className="inline-flex h-14 items-center rounded-full bg-[linear-gradient(90deg,#F472B6_0%,#EC4899_45%,#A855F7_100%)] px-10 text-[18px] font-medium text-white shadow-[0_18px_40px_rgba(168,85,247,0.28)] transition hover:brightness-110"
              >
                Know More
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
