import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { b as staggerContainer, f as fadeUp, s as slideLeft, a as slideRight } from "./variants-eS7YTXPh.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { C as CountUp } from "../_libs/react-countup.mjs";
import { P as PillButton } from "./PillButton-CwOIAXqt.mjs";
import { C as CLIENTS } from "./router-H_HoUDNU.mjs";
import { S as SERVICES } from "./services-C_g6a1w-.mjs";
import { I as INDUSTRIES } from "./industries-DEdphP1-.mjs";
import { S as Swiper, A as Autoplay, N as Navigation, P as Pagination, a as SwiperSlide } from "../_libs/swiper.mjs";
import { C as CTABanner } from "./CTABanner-DJ9gzMvj.mjs";
import { P as POSTS } from "./blog-B6YNMBhj.mjs";
import { O as OfficesSection } from "./OfficesSection-DrlM7HnJ.mjs";
import { m as motion, u as useScroll, a as useTransform, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { W as Users, G as Globe, R as Rocket, N as Sparkles, b as Briefcase, S as Server, v as MonitorSmartphone, k as CodeXml, a as BrainCircuit, D as Database, z as ShieldCheck, p as LayoutGrid, K as Smartphone, i as CloudCog, l as Cpu, O as Star, f as ChevronDown, x as Phone, M as Mail } from "../_libs/lucide-react.mjs";
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
import "../_libs/countup.js.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const STATS = [
  { v: 50, suffix: "+", label: "Enterprise Clients" },
  { v: 100, suffix: "+", label: "Projects Delivered" },
  { v: 5, suffix: "+", label: "Years Experience" },
  { v: 3, suffix: "", label: "Office Locations" }
];
function HeroSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden bg-[#090312] text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "video",
      {
        className: "absolute inset-0 h-full w-full object-cover",
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        preload: "metadata",
        poster: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1600",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: "https://www.pexels.com/download/video/31710198/", type: "video/mp4" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.26),transparent_42%),linear-gradient(180deg,rgba(18,5,33,0.68)_0%,rgba(9,3,18,0.78)_100%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-34 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#7C3AED]/30 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-24 h-96 w-96 rounded-full bg-[#F472B6]/15 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: "hidden",
        animate: "visible",
        variants: staggerContainer,
        className: "relative mx-auto flex min-h-[calc(100vh-4.5rem)] w-full max-w-7xl items-start px-6 pt-8 pb-16 lg:px-12 lg:pt-10 lg:pb-20",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid w-full items-center gap-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-12 xl:gap-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[44rem] text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                variants: fadeUp,
                className: "inline-block rounded-full border border-white/20 bg-white/8 px-5 py-2 text-sm font-medium text-[#F472B6] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm",
                children: "Enterprise Software & Digital Transformation"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.h1,
              {
                variants: fadeUp,
                className: "mt-8 max-w-none text-4xl font-bold leading-[0.92] tracking-[-0.045em] sm:text-5xl lg:text-6xl xl:text-7xl",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block whitespace-nowrap", children: "AI-Driven Marketing" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block whitespace-nowrap", children: "& Technology Solutions." })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.p,
              {
                variants: fadeUp,
                className: "mt-7 max-w-[34rem] text-base leading-8 text-white/72 sm:text-lg md:text-xl",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "We help enterprises, industries, startups, and government organizations streamline operations" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "with powerful software, automation, and digital transformation services." })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "mt-10 flex flex-wrap items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PillButton, { as: "a", href: "/services", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Explore Our Services" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/projects",
                  className: "text-sm font-semibold text-white/90 underline-offset-4 transition hover:text-white hover:underline",
                  children: "View Our Work →"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, className: "mt-14 grid grid-cols-2 gap-4 md:grid-cols-4", children: STATS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-[1.35rem] border border-white/10 bg-white/6 p-4 backdrop-blur-md",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-[#F472B6] md:text-3xl", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { end: s.v, duration: 2, enableScrollSpy: true, scrollSpyOnce: true }),
                    " ",
                    s.suffix
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-white/68", children: s.label })
                ]
              },
              s.label
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "relative translate-x-18",
              animate: { y: [0, -12, 0], rotate: [-1, 1, -1], scale: [1, 1.02, 1] },
              transition: { duration: 6, ease: "easeInOut", repeat: Infinity },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl p-0 bg-transparent shadow-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "/ai-head.png",
                    alt: "AI illustration",
                    className: "w-[380px] max-w-full h-auto select-none pointer-events-none ai-glow"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "absolute -right-8 -bottom-6 h-20 w-20 rounded-full bg-[#7C3AED]/12 blur-2xl",
                    animate: { opacity: [0.35, 0.8, 0.35], scale: [1, 1.15, 1] },
                    transition: { duration: 4, ease: "easeInOut", repeat: Infinity }
                  }
                )
              ]
            }
          ) })
        ] })
      }
    )
  ] });
}
function MarqueeStrip() {
  const items = [...CLIENTS, ...CLIENTS];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-10 border-y border-gray-100 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12 flex items-center gap-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-400 text-sm font-medium whitespace-nowrap shrink-0 hidden md:block", children: "Trusted by leading organizations" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee-track flex w-max", children: items.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-500 font-semibold text-base mx-8 whitespace-nowrap", children: c }, i)) }) })
  ] }) });
}
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      variants: fadeUp,
      className: center ? "text-center max-w-3xl mx-auto mb-12" : "max-w-3xl mb-12",
      children: [
        eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#EC4899] font-semibold text-sm tracking-[0.18em] uppercase mb-3", children: eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4", children: title }),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-500 " + (center ? "mx-auto" : ""), children: subtitle })
      ]
    }
  );
}
function AboutSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white/90 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.18 },
      variants: staggerContainer,
      className: "max-w-7xl mx-auto px-6 lg:px-12",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeading,
          {
            title: "About Us — Building Software That Matters",
            subtitle: "We partner with ambitious teams to design, build and scale reliable software products powered by modern engineering and AI."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "mt-10 grid gap-8 lg:grid-cols-2 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-lg", children: "We are a product-minded engineering firm focused on enterprise-grade software, automation and AI-first experiences. Our cross-functional teams combine design thinking, robust architecture, and pragmatic delivery to help organizations move faster and reduce risk." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full bg-gradient-to-br from-[#FCE7F3] to-[#EEF2FF] p-3 text-[#7C3AED]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 20 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-500", children: "People-first teams" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-[#0B1020]", children: "25+ Engineers" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full bg-gradient-to-br from-[#FEF3C7] to-[#FFEEF0] p-3 text-[#F59E0B]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 20 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-500", children: "Global Delivery" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-[#0B1020]", children: "Remote & On-site" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full bg-gradient-to-br from-[#EFF6FF] to-[#F0FDF4] p-3 text-[#06B6D4]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { size: 20 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-500", children: "Product Velocity" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-[#0B1020]", children: "Faster Releases" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "/contact",
                  className: "inline-flex items-center gap-2 rounded-md bg-[#7C3AED] px-4 py-2 text-white font-semibold shadow hover:opacity-95",
                  children: "Contact Us"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/projects", className: "text-sm font-medium text-gray-600 hover:text-gray-800", children: "See Projects" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-gradient-to-br from-[#F7F3FF] to-[#FFF5F7] p-8 shadow-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-[#7C3AED]", children: "Our Mission" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-2xl font-bold text-[#0B1020]", children: "Create dependable software that drives outcomes" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#EC4899]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 36 }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600", children: "We combine strong product sensibility with pragmatic engineering — delivering solutions that are maintainable, measurable and aligned to business outcomes." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-white p-4 border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-500", children: "Avg. Time To Market" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-lg font-bold", children: "8–12 weeks" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-white p-4 border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-500", children: "Customer Satisfaction" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-lg font-bold", children: "95%" })
              ] })
            ] })
          ] })
        ] })
      ]
    }
  ) });
}
const PROJECTS = [
  {
    title: "Enterprise Automation Platform",
    tag: "Automation · 2025",
    desc: "Built a cloud-native automation platform that unified CRM, workflows, and analytics for a retail conglomerate.",
    facts: ["3X throughput", "70% fewer manual steps", "Real-time dashboards"],
    tech: ["Node.js", "React", "PostgreSQL", "AWS"],
    icon: Briefcase
  },
  {
    title: "AI-Enhanced Lead Scoring",
    tag: "AI · 2024",
    desc: "Implemented a generative-AI pipeline for lead enrichment and scoring — increasing conversion by 28%.",
    facts: ["+28% conversion", "Automated enrichment", "Low-latency scoring"],
    tech: ["Python", "LangChain", "Redis", "GCP"],
    icon: Sparkles
  },
  {
    title: "Scalable Microservices Platform",
    tag: "Platform · 2023",
    desc: "Replatformed legacy monolith into microservices to achieve resilient horizontal scale and simpler deployments.",
    facts: ["99.99% uptime", "Independent deployments", "Autoscaling"],
    tech: ["Go", "Kubernetes", "Docker", "Prometheus"],
    icon: Server
  }
];
function CaseStudySection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden bg-[#F7F3FF] py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.18 },
      variants: staggerContainer,
      className: "max-w-7xl mx-auto px-6 lg:px-12",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeading,
          {
            title: "Selected Projects — Real Results",
            subtitle: "We design, build, and scale software that transforms operations and drives measurable outcomes."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-6 lg:grid-cols-3", children: PROJECTS.map((p) => {
          const Icon = p.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.article,
            {
              variants: fadeUp,
              className: "group relative overflow-hidden rounded-2xl border border-transparent bg-white/90 p-6 shadow-lg hover:shadow-2xl",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-gradient-to-br from-[#7C3AED]/20 to-[#EC4899]/10 p-3 text-[#7C3AED]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 28 }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-[#7C3AED]", children: p.tag }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-2 text-lg font-bold text-[#0B1020]", children: p.title })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-gray-600", children: p.desc }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 flex flex-wrap gap-2", children: p.facts.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "li",
                  {
                    className: "rounded-full bg-[#F3E8FF] px-3 py-1 text-xs font-medium text-[#5B21B6]",
                    children: f
                  },
                  f
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: p.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "rounded-md bg-[#F8F7FF] px-2 py-1 text-xs text-[#6B7280]",
                      children: t
                    },
                    t
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "/projects",
                      className: "text-sm font-semibold text-[#EC4899] hover:text-[#F472B6]",
                      children: "View →"
                    }
                  )
                ] })
              ]
            },
            p.title
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            variants: fadeUp,
            className: "mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3",
            children: CLIENTS.slice(0, 8).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 font-semibold text-sm uppercase tracking-wider", children: c }, c))
          }
        )
      ]
    }
  ) });
}
function ServicesGrid() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.1 },
      variants: staggerContainer,
      className: "max-w-7xl mx-auto px-6 lg:px-12",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeading,
          {
            eyebrow: "Our Services",
            title: "Powering Innovation with Enterprise-Grade Digital Solutions",
            subtitle: "End-to-end software development, automation, and transformation services built to scale with your business."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: SERVICES.map(({ icon: Icon, title, desc, bullets }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            variants: fadeUp,
            whileHover: { y: -6, borderColor: "#A855F7" },
            transition: { duration: 0.2 },
            className: "bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-13 h-13 rounded-xl bg-[#F5F3FF] flex items-center justify-center mb-5",
                  style: { width: 52, height: 52 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 24, className: "text-[#7C3AED]" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-3", children: title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm leading-relaxed mb-5", children: desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 mb-5", children: bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs text-gray-400 leading-6", children: [
                "• ",
                b
              ] }, b)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "/services",
                  className: "text-[#EC4899] text-sm font-semibold hover:text-[#F472B6]",
                  children: "Learn More →"
                }
              )
            ]
          },
          title
        )) })
      ]
    }
  ) });
}
function BannerImageSection() {
  const sectionRef = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.45, 0.28, 0.5]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref: sectionRef, className: "relative w-full overflow-hidden bg-black", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      variants: fadeUp,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.2 },
      className: "relative h-[100svh] min-h-[520px] w-full",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.img,
          {
            src: "/banner.png",
            alt: "Company banner",
            className: "h-full w-full object-cover object-center",
            style: { y: imageY, scale: imageScale },
            transition: { type: "spring", stiffness: 70, damping: 20 },
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.36),transparent_44%),linear-gradient(to_top,rgba(3,4,16,0.78),rgba(3,4,16,0.15))]",
            style: { opacity: overlayOpacity }
          }
        )
      ]
    }
  ) });
}
const SECTIONS = [
  { key: "frontend", label: "Frontend Engineering", icon: MonitorSmartphone },
  { key: "backend", label: "Backend Engineering", icon: CodeXml },
  { key: "generative-ai", label: "Generative AI", icon: BrainCircuit },
  { key: "databases", label: "Databases", icon: Database },
  { key: "quality", label: "Quality Engineering", icon: ShieldCheck },
  { key: "experience", label: "Digital Experience", icon: LayoutGrid },
  { key: "mobile", label: "Mobile", icon: Smartphone },
  { key: "cloud", label: "Cloud & DevOps", icon: CloudCog },
  { key: "data", label: "Data Engineering", icon: Cpu },
  { key: "platform", label: "Platform", icon: CodeXml }
];
const CONTENT = {
  frontend: {
    key: "frontend",
    title: "Frontend Engineering",
    description: "We craft responsive, high-performance interfaces with modern frameworks and a strong focus on maintainability, accessibility, and speed.",
    items: [
      [
        { name: "React", accent: "#61DAFB" },
        { name: "Next.js", accent: "#111827" },
        { name: "Angular", accent: "#DD0031" },
        { name: "Vue.js", accent: "#41B883" },
        { name: "TypeScript", accent: "#3178C6" }
      ],
      [
        { name: "HTML5", accent: "#E34F26" },
        { name: "Bootstrap", accent: "#7952B3" },
        { name: "Tailwind", accent: "#38BDF8" },
        { name: "Framer", accent: "#111827" }
      ]
    ]
  },
  backend: {
    key: "backend",
    title: "Backend Engineering",
    description: "We develop microservices-driven, scalable back-end infrastructure, guaranteeing robust security, high performance, and seamless growth for applications.",
    items: [
      [
        { name: "Python", accent: "#3776AB" },
        { name: "Node.js", accent: "#68A063" },
        { name: "Java", accent: "#EA2D2E" },
        { name: ".NET", accent: "#512BD4" },
        { name: "Django", accent: "#092E20" }
      ],
      [
        { name: "Flask", accent: "#000000" },
        { name: "Go", accent: "#00ADD8" },
        { name: "PHP", accent: "#777BB4" },
        { name: "Spring", accent: "#6DB33F" },
        { name: "Hibernate", accent: "#59666C" }
      ],
      [
        { name: "GraphQL", accent: "#E535AB" },
        { name: "Express", accent: "#000000" },
        { name: "Laravel", accent: "#FF2D20" }
      ]
    ]
  },
  "generative-ai": {
    key: "generative-ai",
    title: "Generative AI",
    description: "We design AI-powered systems that automate knowledge work, generate insights, and unlock new product experiences with clear business value.",
    items: [
      [
        { name: "OpenAI", accent: "#000000" },
        { name: "LangChain", accent: "#1C7C54" },
        { name: "Hugging Face", accent: "#FF9D00" },
        { name: "RAG", accent: "#7C3AED" }
      ],
      [
        { name: "Prompting", accent: "#EC4899" },
        { name: "Agents", accent: "#2563EB" },
        { name: "Vision", accent: "#0EA5E9" }
      ]
    ]
  },
  databases: {
    key: "databases",
    title: "Databases",
    description: "We build reliable data layers with smart schema design, resilient replication, and the right mix of relational and NoSQL technologies.",
    items: [
      [
        { name: "MySQL", accent: "#4479A1" },
        { name: "PostgreSQL", accent: "#336791" },
        { name: "MongoDB", accent: "#47A248" },
        { name: "Redis", accent: "#DC382D" }
      ],
      [
        { name: "SQLite", accent: "#003B57" },
        { name: "Firebase", accent: "#FFCA28" },
        { name: "Supabase", accent: "#3FCF8E" }
      ]
    ]
  },
  quality: {
    key: "quality",
    title: "Quality Engineering",
    description: "We validate performance, resilience, and UX with automated testing strategies that keep releases dependable and predictable.",
    items: [
      [
        { name: "Playwright", accent: "#2EAD33" },
        { name: "Cypress", accent: "#17202C" },
        { name: "Jest", accent: "#C21325" },
        { name: "Vitest", accent: "#6E9F18" }
      ],
      [
        { name: "QA", accent: "#EC4899" },
        { name: "Automation", accent: "#8B5CF6" },
        { name: "Performance", accent: "#0EA5E9" }
      ]
    ]
  },
  experience: {
    key: "experience",
    title: "Digital Experience",
    description: "We shape polished digital experiences that make products feel intuitive, premium, and consistent across channels.",
    items: [
      [
        { name: "UI Systems", accent: "#7C3AED" },
        { name: "Design Ops", accent: "#EC4899" },
        { name: "Motion", accent: "#38BDF8" },
        { name: "Brand", accent: "#F59E0B" }
      ],
      [
        { name: "Accessibility", accent: "#10B981" },
        { name: "Content", accent: "#111827" },
        { name: "Conversion", accent: "#EF4444" }
      ]
    ]
  },
  mobile: {
    key: "mobile",
    title: "Mobile",
    description: "We deliver mobile-first products with clean architecture, smooth interactions, and platform-aware design patterns.",
    items: [
      [
        { name: "React Native", accent: "#61DAFB" },
        { name: "Flutter", accent: "#02569B" },
        { name: "Swift", accent: "#FA7343" },
        { name: "Kotlin", accent: "#7F52FF" }
      ],
      [
        { name: "iOS", accent: "#111827" },
        { name: "Android", accent: "#3DDC84" }
      ]
    ]
  },
  cloud: {
    key: "cloud",
    title: "Cloud & DevOps",
    description: "We architect cloud-native systems and automation pipelines that scale confidently and reduce operational friction.",
    items: [
      [
        { name: "AWS", accent: "#FF9900" },
        { name: "Docker", accent: "#2496ED" },
        { name: "Kubernetes", accent: "#326CE5" },
        { name: "Linux", accent: "#FCC624" }
      ],
      [
        { name: "CI/CD", accent: "#8B5CF6" },
        { name: "Terraform", accent: "#7B42BC" },
        { name: "Monitoring", accent: "#0EA5E9" }
      ]
    ]
  },
  data: {
    key: "data",
    title: "Data Engineering",
    description: "We prepare data platforms for analytics, automation, and machine learning with practical pipelines and strong governance.",
    items: [
      [
        { name: "Airflow", accent: "#017CEE" },
        { name: "Spark", accent: "#E25A1C" },
        { name: "dbt", accent: "#FF694B" },
        { name: "BigQuery", accent: "#4285F4" }
      ],
      [
        { name: "ETL", accent: "#8B5CF6" },
        { name: "Pipelines", accent: "#EC4899" },
        { name: "Warehouse", accent: "#0EA5E9" }
      ]
    ]
  },
  platform: {
    key: "platform",
    title: "Platform",
    description: "We unify architecture, tooling, and delivery practices so teams can ship faster with confidence and alignment.",
    items: [
      [
        { name: "Microservices", accent: "#7C3AED" },
        { name: "API Gateway", accent: "#0EA5E9" },
        { name: "Auth", accent: "#111827" },
        { name: "Observability", accent: "#F59E0B" }
      ],
      [
        { name: "Docs", accent: "#10B981" },
        { name: "Governance", accent: "#EC4899" },
        { name: "Scalability", accent: "#3B82F6" }
      ]
    ]
  }
};
function TechBadge({ item }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-[72px] items-center gap-3 rounded-xl border border-white/60 bg-white/90 px-4 py-2 shadow-[0_8px_24px_rgba(124,58,237,0.08)] transition hover:bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold text-white shadow-sm",
        style: { backgroundColor: item.accent },
        children: item.name.split(" ").map((part) => part[0]).slice(0, 2).join("")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[15px] font-medium tracking-tight text-[#334155]", children: item.name })
  ] });
}
function TechStack() {
  const [active, setActive] = reactExports.useState("backend");
  const current = CONTENT[active];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-[#090312] py-0 text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.28),transparent_42%),linear-gradient(180deg,rgba(22,8,36,0.96)_0%,rgba(9,3,18,0.98)_100%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.16 },
        variants: staggerContainer,
        className: "relative mx-auto w-full px-0",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid min-h-[740px] grid-cols-1 overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.08)] lg:grid-cols-[33%_67%]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.aside,
            {
              variants: slideLeft,
              className: "bg-[linear-gradient(180deg,rgba(92,37,177,0.96)_0%,rgba(54,16,93,0.98)_55%,rgba(18,5,33,0.98)_100%)] text-white",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full flex-col", children: SECTIONS.map((section) => {
                const Icon = section.icon;
                const isActive = active === section.key;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setActive(section.key),
                    className: `group relative flex min-h-[70px] w-full items-center gap-4 border-b border-white/15 px-4 text-left transition-colors duration-200 sm:px-5 lg:px-6 ${isActive ? "bg-[rgba(244,114,182,0.18)]" : "hover:bg-[rgba(244,114,182,0.08)]"}`,
                    "aria-pressed": isActive,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/40 bg-white/5 text-white transition group-hover:border-[#F472B6] group-hover:bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22, strokeWidth: 1.75 }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-[15px] font-medium tracking-tight sm:text-[16px]", children: section.label }),
                      isActive ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-0 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[16px] border-y-transparent border-l-[18px] border-l-[#F472B6]" }) : null
                    ]
                  },
                  section.key
                );
              }) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: slideRight,
              className: "relative flex flex-col items-center justify-between bg-[linear-gradient(180deg,rgba(247,244,255,0.96)_0%,rgba(244,242,255,0.94)_100%)] px-5 py-10 text-center sm:px-8 lg:px-12 lg:py-12",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-[1050px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.h2,
                    {
                      initial: { opacity: 0, y: 12 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.35 },
                      className: "text-[34px] font-semibold tracking-[-0.03em] text-[#5B21B6] sm:text-[40px] lg:text-[44px]",
                      children: current.title
                    },
                    current.title
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-3 h-[4px] w-[220px] rounded-full bg-[linear-gradient(90deg,#F472B6_0%,#EC4899_45%,#A855F7_100%)]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.p,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.35, delay: 0.05 },
                      className: "mx-auto mt-10 max-w-[930px] text-[17px] leading-8 text-[#374151] sm:text-[18px]",
                      children: current.description
                    },
                    `${current.key}-description`
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 16 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.35, delay: 0.08 },
                    className: "mx-auto mt-12 w-full max-w-[1080px]",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-x-0 gap-y-10", children: current.items.map((row, rowIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "grid items-center",
                        style: { gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))` },
                        children: row.map((item, itemIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: `relative flex items-center justify-center px-4 py-6 ${itemIndex !== row.length - 1 ? "after:absolute after:right-0 after:top-1/2 after:h-[90px] after:-translate-y-1/2 after:border-r after:border-dashed after:border-[#D6BCFA]" : ""}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(TechBadge, { item })
                          },
                          item.name
                        ))
                      },
                      `${current.key}-row-${rowIndex}`
                    )) })
                  },
                  current.key
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "/services",
                    className: "inline-flex h-14 items-center rounded-full bg-[linear-gradient(90deg,#F472B6_0%,#EC4899_45%,#A855F7_100%)] px-10 text-[18px] font-medium text-white shadow-[0_18px_40px_rgba(168,85,247,0.28)] transition hover:brightness-110",
                    children: "Know More"
                  }
                ) })
              ]
            }
          )
        ] })
      }
    )
  ] });
}
function IndustriesGrid() {
  const scrollRef = reactExports.useRef(null);
  function scrollNext() {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.75, behavior: "smooth" });
  }
  function scrollPrev() {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: -el.clientWidth * 0.75, behavior: "smooth" });
  }
  const [isPaused, setIsPaused] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      if (isPaused) return;
      const el = scrollRef.current;
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const next = Math.min(el.scrollLeft + el.clientWidth * 0.75, maxScroll);
      if (el.scrollLeft >= maxScroll - 2) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollTo({ left: next, behavior: "smooth" });
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.12 },
      variants: staggerContainer,
      className: "max-w-7xl mx-auto px-6 lg:px-12",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeading,
          {
            eyebrow: "Industries",
            title: "Revolutionising Industries With Tech That Breaks Barriers",
            subtitle: "We build specialised solutions for businesses that operate in complex, fast-moving environments."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: scrollPrev,
              "aria-label": "Previous",
              className: "hidden md:inline-flex absolute -left-3 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-white shadow-md text-[#1E0A3C] hover:bg-white/90",
              children: "‹"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              ref: scrollRef,
              className: "no-scrollbar flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-6 px-1",
              children: INDUSTRIES.map(({ icon: Icon, name, gradient, desc }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.article,
                {
                  variants: fadeUp,
                  className: "snap-start flex-shrink-0 w-[320px] sm:w-[360px] md:w-[420px] lg:w-[460px] rounded-2xl bg-white shadow-lg border border-white/6 overflow-hidden",
                  "aria-labelledby": `industry-${i}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/industries", className: "block h-full p-6 lg:p-8", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `rounded-lg inline-flex items-center justify-center p-3 bg-gradient-to-br ${gradient}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 28, className: "text-white" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: `industry-${i}`, className: "mt-6 text-2xl font-semibold text-[#0B1020]", children: name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-[#374151]", children: desc }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-[#6B7280]", children: "Trusted solutions" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-[#7C3AED]", children: "View Solutions →" })
                    ] })
                  ] })
                },
                name
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: scrollNext,
              "aria-label": "Next",
              className: "hidden md:inline-flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-white shadow-md text-[#1E0A3C] hover:bg-white/90",
              children: "›"
            }
          )
        ] })
      ]
    }
  ) });
}
const TESTIMONIALS = [
  {
    quote: "Working with The Bot transformed our entire operations. Their CRM system gave us complete visibility over sales and customer management that we simply didn't have before. Highly professional team that actually understands enterprise needs.",
    name: "Rajesh Kumar",
    role: "Director",
    company: "NS Power Corp",
    initials: "RK"
  },
  {
    quote: "The HRMS and inventory system The Bot built for us cut our HR processing time by more than half. The platform is intuitive, well-designed, and the team was with us every step of the way.",
    name: "Mohammed Danesh",
    role: "CEO",
    company: "Danesh Industries",
    initials: "MD"
  },
  {
    quote: "We needed a complex business automation platform on a tight deadline. The Bot delivered — on time, on scope, and with exceptional quality. Their support team is always responsive and reliable.",
    name: "Priya Sundaram",
    role: "Operations Head",
    company: "Digimax",
    initials: "PS"
  }
];
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#F8F7FF] py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.15 },
      variants: staggerContainer,
      className: "max-w-7xl mx-auto px-6 lg:px-12",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeading,
          {
            eyebrow: "Client Testimonials",
            title: "What Our Clients Say About Their Digital Transformation Journeys"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Swiper,
          {
            modules: [Autoplay, Navigation, Pagination],
            slidesPerView: 1,
            spaceBetween: 24,
            autoplay: { delay: 4e3, disableOnInteraction: false },
            loop: true,
            pagination: { clickable: true },
            breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
            className: "pb-12",
            children: TESTIMONIALS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SwiperSlide, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl p-8 border border-gray-100 h-full flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 mb-4", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 16, className: "fill-yellow-400 text-yellow-400" }, i)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 text-base leading-relaxed italic mb-6 flex-1", children: [
                "“",
                t.quote,
                "”"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-gray-100 pt-5 flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-sm", children: t.initials }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-900 font-semibold text-sm", children: t.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-400 text-xs", children: [
                    t.role,
                    " · ",
                    t.company
                  ] })
                ] })
              ] })
            ] }) }, t.name))
          }
        )
      ]
    }
  ) });
}
function AwardsStrip() {
  const items = [
    "MSME Certified",
    "ISO 9001:2015",
    "Google Partner",
    "StartupIndia",
    "Nasscom Member",
    "DIPP Registered"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl md:text-3xl font-bold text-gray-900 mb-3", children: "Trusted, Recognised, and Certified" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 mb-10", children: "Our work is recognised by industry bodies and technology leaders across India." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-x-12 gap-y-4 flex-wrap", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "text-gray-300 font-bold text-lg uppercase tracking-widest hover:text-gray-500 transition",
        children: i
      },
      i
    )) })
  ] }) });
}
function BlogGrid({ limit }) {
  const posts = limit ? POSTS.slice(0, limit) : POSTS;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#F8F7FF] py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.1 },
      variants: staggerContainer,
      className: "max-w-7xl mx-auto px-6 lg:px-12",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-12 flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#EC4899] font-semibold text-sm tracking-[0.18em] uppercase mb-3", children: "Latest Insights" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900", children: "Industry Knowledge to Guide Your Digital Journey" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/blog", className: "text-[#EC4899] font-semibold hover:text-[#F472B6]", children: "View All Articles →" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: posts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.article,
          {
            variants: fadeUp,
            whileHover: { y: -4 },
            className: "bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `relative h-48 bg-gradient-to-br ${p.gradient}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 bg-[#F472B6] text-[#1E0A3C] text-xs font-bold px-3 py-1 rounded-br-xl", children: p.category }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#EC4899] text-xs font-semibold uppercase tracking-wide mb-2", children: p.category }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-900 mb-2 line-clamp-2", children: p.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3", children: p.excerpt }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-xs", children: p.date }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/blog", className: "text-[#EC4899] text-sm font-semibold", children: "Read More →" })
                ] })
              ] })
            ]
          },
          p.title
        )) })
      ]
    }
  ) });
}
const FAQS = [
  {
    q: "What types of software does The Bot build?",
    a: "The Bot builds enterprise CRM, HRMS, ERP, inventory management, billing systems, workflow automation platforms, cloud applications, AI tools, data analytics dashboards, mobile applications, and SaaS platforms. We serve businesses of all sizes from startups to large enterprises and government organisations."
  },
  {
    q: "Which industries does The Bot serve?",
    a: "We serve manufacturing, education, healthcare and pharmacy, retail and e-commerce, logistics and transport, finance and trading, information technology, agriculture and commodity trading, government institutions, and startups across India."
  },
  {
    q: "How long does a software development project take?",
    a: "Project timelines depend on scope and complexity. A standard CRM or HRMS typically takes 8 to 12 weeks. Larger ERP or multi-module systems may take 16 to 24 weeks. We provide detailed timelines during our initial requirement analysis phase."
  },
  {
    q: "Does The Bot work with government organisations?",
    a: "Yes. We have successfully delivered digital systems for government-related projects including Sago Serve, an operational workflow management platform for Tamil Nadu government operations. We understand compliance requirements and government procurement processes."
  },
  {
    q: "What is the difference between CRM and ERP software?",
    a: "A CRM (Customer Relationship Management) system focuses on managing customer interactions, sales pipelines, and lead tracking. An ERP (Enterprise Resource Planning) integrates all business functions including finance, HR, inventory, and operations into one unified platform. Many enterprises use both together."
  },
  {
    q: "Do you provide training and post-launch support?",
    a: "Yes, all our projects include user training, go-live support, and a post-launch maintenance period. We offer ongoing support plans that include bug fixes, feature updates, performance monitoring, and dedicated technical assistance."
  },
  {
    q: "Can The Bot integrate with our existing software systems?",
    a: "Absolutely. We design all our systems with API-first architecture and can integrate with most existing business tools including accounting software, payment gateways, communication platforms, ERP systems, and third-party databases."
  },
  {
    q: "Where is The Bot located and do you work with clients outside Tamil Nadu?",
    a: "The Bot's head office is in Mumbai, Maharashtra, with offices in Tirunelveli, Tamil Nadu and Anna Nagar, Chennai. We serve clients across India and internationally. Our team works remotely with clients in all states and can visit client sites for requirement gathering and training."
  }
];
function FAQSection() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-500", children: [
        "Have more questions? Reach us at",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-[#EC4899]", href: "mailto:sales@thebot.agency", children: "sales@thebot.agency" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[65%_35%] gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: FAQS.map((f, i) => {
        const isOpen = open === i;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-gray-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setOpen(isOpen ? -1 : i),
              className: "w-full flex items-center justify-between text-left py-5 cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 font-semibold text-base pr-4", children: f.q }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    animate: { rotate: isOpen ? 180 : 0 },
                    transition: { duration: 0.2 },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 20, className: "text-gray-500 shrink-0" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: { duration: 0.25 },
              className: "overflow-hidden",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm leading-relaxed pb-5", children: f.a })
            }
          ) })
        ] }, f.q);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#F5F3FF] rounded-2xl p-8 h-fit", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-2xl text-gray-900 mb-3", children: "Still have questions?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6", children: "Our team is available Monday to Saturday, 9am to 7pm IST. We typically respond within 2 hours." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-gray-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+919892969648", className: "flex items-center gap-3 hover:text-[#EC4899]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16 }),
            " +91 98929 69648"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "mailto:sales@thebot.agency",
              className: "flex items-center gap-3 hover:text-[#EC4899]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16 }),
                " sales@thebot.agency"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "/contact",
            className: "inline-block mt-6 bg-[#F472B6] hover:bg-[#EC4899] text-[#1E0A3C] rounded-full px-6 py-3 font-semibold transition",
            children: "Book a Free Call →"
          }
        )
      ] })
    ] })
  ] }) });
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.main, { initial: "hidden", animate: "visible", variants: staggerContainer, className: "overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AboutSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MarqueeStrip, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStudySection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesGrid, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BannerImageSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IndustriesGrid, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TechStack, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CTABanner, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AwardsStrip, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BlogGrid, { limit: 3 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FAQSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(OfficesSection, {}) })
  ] });
}
export {
  Home as component
};
