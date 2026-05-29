import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-CT4nQLsN.mjs";
import { P as PillButton } from "./PillButton-CwOIAXqt.mjs";
import { b as staggerContainer, f as fadeUp } from "./variants-eS7YTXPh.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { j as Code, w as Palette, s as Megaphone, l as Cpu, b as Briefcase, n as GraduationCap } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./router-H_HoUDNU.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const COURSES = [{
  icon: Code,
  name: "Full Stack Development",
  duration: "16 Weeks",
  desc: "Learn to build complete web applications from frontend to backend using modern frameworks.",
  topics: ["React", "Node.js", "Databases", "Deployment"]
}, {
  icon: Palette,
  name: "UI/UX Design",
  duration: "8 Weeks",
  desc: "Master creative design principles and build stunning, user-centred digital interfaces.",
  topics: ["Figma", "Design Systems", "Prototyping", "User Research"]
}, {
  icon: Megaphone,
  name: "Digital Marketing",
  duration: "10 Weeks",
  desc: "Master SEO, social media, content marketing, and performance advertising from scratch.",
  topics: ["SEO & SEM", "Social Media", "Google Ads", "Analytics"]
}, {
  icon: Cpu,
  name: "Software Development",
  duration: "12 Weeks",
  desc: "Real-time, project-based software development training with live client projects.",
  topics: ["System Design", "Agile", "Git", "Code Reviews"]
}, {
  icon: Briefcase,
  name: "Internship Program",
  duration: "3 Months",
  desc: "Industry-focused internships with live project exposure and mentorship from our team.",
  topics: ["Live Projects", "Mentorship", "Stipend", "Certificate"]
}, {
  icon: GraduationCap,
  name: "Career Development",
  duration: "4 Weeks",
  desc: "Communication, business presentation, and professional growth training for job-readiness.",
  topics: ["Communication Skills", "Portfolio Building", "Interview Prep", "Networking"]
}];
function LearningPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { breadcrumb: "Learning Centre", title: "Empowering the Next Generation of Digital Professionals", subtitle: "Industry-led courses, internships, and live projects to launch your career in software, design, and digital marketing.", rightCard: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/10 backdrop-blur rounded-2xl p-6 text-white border border-white/15 space-y-4", children: [["500+", "Students Trained"], ["6", "Courses"], ["Live", "Projects"]].map(([v, l]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-[#F472B6]", children: v }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-white/75", children: l })
    ] }, l)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", whileInView: "visible", viewport: {
      once: true,
      amount: 0.1
    }, variants: staggerContainer, className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "Our Courses" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 max-w-2xl mx-auto", children: "Practical, project-based training programmes designed and delivered by industry practitioners." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: COURSES.map(({
        icon: Icon,
        name,
        duration,
        desc,
        topics
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "bg-white rounded-2xl border border-gray-100 p-8 flex flex-col hover:shadow-lg hover:border-purple-200 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-[#F5F3FF] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 26, className: "text-[#7C3AED]" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[#F472B6]/15 text-[#EC4899] text-xs font-bold px-3 py-1 rounded-full", children: duration })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm leading-relaxed mb-4", children: desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 mb-6 flex-1", children: topics.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs text-gray-500 leading-6", children: [
          "• ",
          t
        ] }, t)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PillButton, { as: "a", href: "/contact", className: "!w-full !py-3", children: "Enroll Now" })
      ] }, name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#F8F7FF] py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "navy-gradient rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-2", children: "Join Our Internship Program — Work on Real Enterprise Projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/75", children: "Get hands-on experience with live client work, expert mentorship, and a path into the enterprise software industry." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PillButton, { as: "a", href: "/contact", children: "Apply Now" })
    ] }) }) })
  ] });
}
export {
  LearningPage as component
};
