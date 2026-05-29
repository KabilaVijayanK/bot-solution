import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Code, Palette, Megaphone, Cpu, GraduationCap, Briefcase } from "lucide-react";
import { PageHero, HeroStatsCard } from "../components/sections/PageHero";
import { PillButton } from "../components/ui/PillButton";
import { fadeUp, staggerContainer } from "../animations/variants";

export const Route = createFileRoute("/learning")({ component: LearningPage });

const COURSES = [
  {
    icon: Code,
    name: "Full Stack Development",
    duration: "16 Weeks",
    desc: "Learn to build complete web applications from frontend to backend using modern frameworks.",
    topics: ["React", "Node.js", "Databases", "Deployment"],
  },
  {
    icon: Palette,
    name: "UI/UX Design",
    duration: "8 Weeks",
    desc: "Master creative design principles and build stunning, user-centred digital interfaces.",
    topics: ["Figma", "Design Systems", "Prototyping", "User Research"],
  },
  {
    icon: Megaphone,
    name: "Digital Marketing",
    duration: "10 Weeks",
    desc: "Master SEO, social media, content marketing, and performance advertising from scratch.",
    topics: ["SEO & SEM", "Social Media", "Google Ads", "Analytics"],
  },
  {
    icon: Cpu,
    name: "Software Development",
    duration: "12 Weeks",
    desc: "Real-time, project-based software development training with live client projects.",
    topics: ["System Design", "Agile", "Git", "Code Reviews"],
  },
  {
    icon: Briefcase,
    name: "Internship Program",
    duration: "3 Months",
    desc: "Industry-focused internships with live project exposure and mentorship from our team.",
    topics: ["Live Projects", "Mentorship", "Stipend", "Certificate"],
  },
  {
    icon: GraduationCap,
    name: "Career Development",
    duration: "4 Weeks",
    desc: "Communication, business presentation, and professional growth training for job-readiness.",
    topics: ["Communication Skills", "Portfolio Building", "Interview Prep", "Networking"],
  },
];

function LearningPage() {
  return (
    <>
      <PageHero
        breadcrumb="Learning Centre"
        title="Empowering the Next Generation of Digital Professionals"
        subtitle="Industry-led courses, internships, and live projects to launch your career in software, design, and digital marketing."
        rightCard={
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white border border-white/15 space-y-4">
            {[
              ["500+", "Students Trained"],
              ["6", "Courses"],
              ["Live", "Projects"],
            ].map(([v, l]) => (
              <div
                key={l}
                className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0"
              >
                <div className="text-2xl font-bold text-[#F472B6]">{v}</div>
                <div className="text-sm text-white/75">{l}</div>
              </div>
            ))}
          </div>
        }
      />

      <section className="bg-white py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 lg:px-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Practical, project-based training programmes designed and delivered by industry
              practitioners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map(({ icon: Icon, name, duration, desc, topics }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col hover:shadow-lg hover:border-purple-200 transition"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#F5F3FF] flex items-center justify-center">
                    <Icon size={26} className="text-[#7C3AED]" />
                  </div>
                  <span className="bg-[#F472B6]/15 text-[#EC4899] text-xs font-bold px-3 py-1 rounded-full">
                    {duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                <ul className="space-y-1 mb-6 flex-1">
                  {topics.map((t) => (
                    <li key={t} className="text-xs text-gray-500 leading-6">
                      • {t}
                    </li>
                  ))}
                </ul>
                <PillButton as="a" href="/contact" className="!w-full !py-3">
                  Enroll Now
                </PillButton>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-[#F8F7FF] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="navy-gradient rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Join Our Internship Program — Work on Real Enterprise Projects
              </h2>
              <p className="text-white/75">
                Get hands-on experience with live client work, expert mentorship, and a path into
                the enterprise software industry.
              </p>
            </div>
            <PillButton as="a" href="/contact">
              Apply Now
            </PillButton>
          </div>
        </div>
      </section>
    </>
  );
}
