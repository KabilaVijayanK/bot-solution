import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { f as ChevronDown, t as Menu, Z as X, q as Linkedin, V as Twitter, o as Instagram, F as Facebook, _ as Youtube, r as MapPin, x as Phone, M as Mail, G as Globe, u as MessageCircle } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-DuDFRmhh.css";
function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}
const SITE = {
  phone: "+91 98929 69648",
  whatsapp: "919892969648",
  email: "sales@thebot.agency",
  website: "thebot.agency"
};
const NAV_SERVICES = [
  {
    heading: "Enterprise Software",
    links: [
      "CRM Software",
      "HRMS & Payroll",
      "ERP Systems",
      "Inventory Management",
      "Billing & Accounting",
      "Vendor Management",
      "Production Monitoring",
      "MIS Dashboards",
      "Mobile Applications"
    ]
  },
  {
    heading: "Automation & Cloud",
    links: [
      "Workflow Automation",
      "Task Automation",
      "Attendance Automation",
      "Document Management",
      "Cloud Applications",
      "AI Business Tools",
      "IoT Monitoring",
      "Digital Transformation",
      "Data Analytics"
    ]
  },
  {
    heading: "Branding & Marketing",
    links: [
      "Brand Strategy",
      "Logo & Visual Identity",
      "Website Branding",
      "Marketing Materials",
      "SEO Services",
      "Social Media Marketing",
      "Content Marketing",
      "Performance Marketing",
      "Email Marketing"
    ]
  }
];
const NAV_INDUSTRIES = [
  [
    "Education",
    "Manufacturing",
    "Healthcare & Pharmacy",
    "Retail & E-Commerce",
    "Logistics & Transport"
  ],
  [
    "Finance & Trading",
    "Information Technology",
    "Agriculture & Commodity",
    "Government",
    "Startups & SMEs"
  ]
];
const NAV_COMPANY = [
  "About The Bot",
  "Our Team",
  "Learning Centre",
  "Consultancy",
  "Careers"
];
const OFFICES = [
  {
    flag: "🇮🇳",
    city: "Mumbai",
    state: "Maharashtra",
    desc: "Head office serving pan-India enterprise clients",
    phone: "+91 98929 69648",
    email: "sales@thebot.agency",
    primary: true
  },
  {
    flag: "🇮🇳",
    city: "Tirunelveli",
    state: "Tamil Nadu",
    desc: "Regional office serving South India operations and government projects"
  },
  {
    flag: "🇮🇳",
    city: "Anna Nagar",
    state: "Chennai",
    desc: "Metro office serving enterprise clients in Chennai and surrounding districts"
  }
];
const CLIENTS = [
  "NS Power Corp",
  "Danesh Industries",
  "Pars Industries Works",
  "Vamtech",
  "Vtech",
  "Digimax",
  "Global Softwares",
  "Vivegan",
  "OJK Jobs",
  "Nagarathar Matchify",
  "Sago Serve"
];
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const TOP_LINKS = [
  { label: "Services", key: "services", to: "/services" },
  { label: "Technologies", key: "tech", to: "/services" },
  { label: "Industries", key: "industries", to: "/industries" },
  { label: "Who We Are", key: "company", to: "/about" },
  { label: "Success Stories", key: "stories", to: "/projects" }
];
function MegaPanel({ open, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: -8 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -8 },
      transition: { duration: 0.18 },
      className: "absolute left-0 right-0 top-full bg-[#1E0A3C] shadow-2xl border-t border-white/10 z-40",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-12 py-10", children })
    }
  ) });
}
function Navbar() {
  const scrolled = useScrolled(60);
  const [open, setOpen] = reactExports.useState(null);
  const [mobile, setMobile] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: cn(
        "sticky top-0 z-50 w-full bg-white border-b border-gray-100 transition-all",
        scrolled && "shadow-md backdrop-blur"
      ),
      onMouseLeave: () => setOpen(null),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-18 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-[#1E0A3C]", children: "The Bot" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full brand-gradient" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-8", children: TOP_LINKS.map((l) => {
            const hasDropdown = ["services", "industries", "company"].includes(l.key);
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                onMouseEnter: () => setOpen(hasDropdown ? l.key : null),
                className: "relative",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: l.to,
                    className: "flex items-center gap-1 text-gray-700 hover:text-[#7C3AED] font-medium text-sm transition",
                    children: [
                      l.label,
                      hasDropdown && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 14 })
                    ]
                  }
                )
              },
              l.key
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/contact",
                className: "hidden md:inline-flex bg-[#F472B6] hover:bg-[#EC4899] text-[#1E0A3C] font-semibold px-6 py-2.5 rounded-full text-sm transition",
                children: "Contact Us"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "lg:hidden p-2 text-[#1E0A3C]",
                onClick: () => setMobile(true),
                "aria-label": "Open menu",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 26 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MegaPanel, { open: open === "services", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-10", children: NAV_SERVICES.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#F472B6] font-semibold text-xs uppercase tracking-[0.18em] mb-4", children: col.heading }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: col.links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/services",
              className: "text-white/75 hover:text-[#F472B6] text-sm leading-7 transition",
              children: link
            }
          ) }, link)) })
        ] }, col.heading)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MegaPanel, { open: open === "industries", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-10", children: NAV_INDUSTRIES.map((col, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: col.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/industries",
            className: "text-white/80 hover:text-[#F472B6] text-sm leading-8 transition",
            children: link
          }
        ) }, link)) }, i)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MegaPanel, { open: open === "company", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: NAV_COMPANY.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/about",
            className: "text-white/80 hover:text-[#F472B6] text-sm leading-8 transition",
            children: link
          }
        ) }, link)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: mobile && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { x: "100%" },
            animate: { x: 0 },
            exit: { x: "100%" },
            transition: { type: "tween", duration: 0.3 },
            className: "fixed inset-0 z-[60] bg-[#1E0A3C] text-white overflow-y-auto",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-5 border-b border-white/10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold", children: "The Bot" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMobile(false), className: "p-2", "aria-label": "Close menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 26 }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-6 space-y-4", children: [
                [
                  { label: "Home", to: "/" },
                  { label: "Services", to: "/services" },
                  { label: "Industries", to: "/industries" },
                  { label: "Who We Are", to: "/about" },
                  { label: "Success Stories", to: "/projects" },
                  { label: "Learning Centre", to: "/learning" },
                  { label: "Blog", to: "/blog" },
                  { label: "Contact", to: "/contact" }
                ].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: l.to,
                    onClick: () => setMobile(false),
                    className: "block text-lg font-medium py-2 border-b border-white/10 hover:text-[#F472B6]",
                    children: l.label
                  },
                  l.to
                )),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/contact",
                    onClick: () => setMobile(false),
                    className: "block text-center bg-[#F472B6] text-[#1E0A3C] rounded-full py-3 font-bold mt-6",
                    children: "Contact Us"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white/60 text-sm mt-6", children: [
                  SITE.phone,
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  SITE.email
                ] })
              ] })
            ]
          }
        ) })
      ]
    }
  );
}
const COMPANY_LINKS = [
  "About The Bot",
  "Our Projects",
  "Industries",
  "Learning Centre",
  "Consultancy",
  "Blog & Insights",
  "Careers",
  "Contact Us"
];
const INDUSTRY_LINKS = [
  "Manufacturing",
  "Education",
  "Healthcare",
  "Retail & E-Commerce",
  "Logistics",
  "Finance & Trading",
  "Information Technology",
  "Agriculture",
  "Government"
];
const SERVICE_LINKS = NAV_SERVICES[0].links.slice(0, 9);
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-[#1E0A3C] text-white pt-16 pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold", children: "The Bot" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full brand-gradient" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-sm mt-3 mb-6 max-w-xs", children: "Building the enterprise software that runs modern businesses." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2.5", children: [Linkedin, Twitter, Instagram, Facebook, Youtube].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            "aria-label": "social",
            className: "w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F472B6]/30 transition",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16, className: "text-white/80" })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#F472B6] font-semibold text-xs uppercase tracking-[0.18em] mb-4", children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: SERVICE_LINKS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/services",
            className: "text-white/60 text-sm hover:text-[#F472B6] transition",
            children: l
          }
        ) }, l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#F472B6] font-semibold text-xs uppercase tracking-[0.18em] mb-4", children: "Company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: COMPANY_LINKS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/about",
            className: "text-white/60 text-sm hover:text-[#F472B6] transition",
            children: l
          }
        ) }, l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#F472B6] font-semibold text-xs uppercase tracking-[0.18em] mb-4", children: "Industries" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: INDUSTRY_LINKS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/industries",
            className: "text-white/60 text-sm hover:text-[#F472B6] transition",
            children: l
          }
        ) }, l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#F472B6] font-semibold text-xs uppercase tracking-[0.18em] mb-4", children: "Get In Touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-white/60 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14, className: "mt-1 shrink-0" }),
            "Mumbai, Maharashtra (Head Office)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14, className: "mt-1 shrink-0" }),
            "Tirunelveli, Tamil Nadu"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14, className: "mt-1 shrink-0" }),
            "Anna Nagar, Chennai"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 14, className: "mt-1 shrink-0" }),
            SITE.phone
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 14, className: "mt-1 shrink-0" }),
            SITE.email
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 14, className: "mt-1 shrink-0" }),
            SITE.website
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "flex mt-4", onSubmit: (e) => e.preventDefault(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              placeholder: "Your email",
              className: "bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-l-full px-4 py-2 text-sm flex-1 min-w-0 focus:outline-none"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-[#F472B6] text-[#1E0A3C] font-bold px-5 py-2 rounded-r-full text-sm hover:bg-[#EC4899] transition", children: "Subscribe" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/40 text-sm", children: "© 2025 The Bot Agency. All rights reserved." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white/40 text-sm flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-white/70", children: "Privacy Policy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-white/70", children: "Terms of Service" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-white/70", children: "Sitemap" })
      ] })
    ] })
  ] }) });
}
function WhatsAppButton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: `https://wa.me/${SITE.whatsapp}`,
      target: "_blank",
      rel: "noreferrer",
      "aria-label": "Chat with us on WhatsApp",
      className: "fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 24, className: "text-white" })
    }
  );
}
function SideCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, x: 28 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.45, ease: "easeOut" },
      className: "fixed right-0 top-1/2 z-50 hidden -translate-y-1/2 md:block",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/contact",
          "aria-label": "Talk to our expert",
          className: "group flex h-[208px] w-[52px] origin-right flex-col items-center justify-between rounded-l-[20px] rounded-r-none bg-[#0C73B8] py-3.5 text-white shadow-[0_18px_45px_rgba(12,115,184,0.28)] transition-transform duration-300 hover:scale-[1.02] hover:bg-[#117CC1]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition group-hover:bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 20, strokeWidth: 1.9 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex flex-1 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap text-[18px] font-medium tracking-tight [writing-mode:vertical-rl]", children: "Talk to our expert" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Open contact page" })
          ]
        }
      )
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-white px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-[#1E0A3C]", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-full bg-[#F472B6] px-6 py-3 text-sm font-semibold text-[#1E0A3C]",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-white px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-gray-500", children: "Something went wrong. Try again." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex gap-2 justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "rounded-full bg-[#F472B6] px-6 py-2.5 text-sm font-semibold text-[#1E0A3C]",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-full border px-6 py-2.5 text-sm font-semibold", children: "Go home" })
    ] })
  ] }) });
}
const Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Bot — Enterprise Software & Digital Transformation" },
      {
        name: "description",
        content: "The Bot builds enterprise CRM, HRMS, ERP, workflow automation, and digital transformation solutions for businesses, industries, and government organisations across India."
      }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap"
      },
      { rel: "stylesheet", href: appCss }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SideCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppButton, {})
  ] });
}
const $$splitComponentImporter$7 = () => import("./services-DKAdroa7.mjs");
const Route$7 = createFileRoute("/services")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./projects-BH1BlxVM.mjs");
const Route$6 = createFileRoute("/projects")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./learning-B69Jwq0B.mjs");
const Route$5 = createFileRoute("/learning")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./industries-BhmJE4tG.mjs");
const Route$4 = createFileRoute("/industries")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contact-B6ZAhVk0.mjs");
const Route$3 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./blog-lZrN_Mv_.mjs");
const Route$2 = createFileRoute("/blog")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-DD4Xd-EF.mjs");
const Route$1 = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-DO-23ad4.mjs");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ServicesRoute = Route$7.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$8
});
const ProjectsRoute = Route$6.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$8
});
const LearningRoute = Route$5.update({
  id: "/learning",
  path: "/learning",
  getParentRoute: () => Route$8
});
const IndustriesRoute = Route$4.update({
  id: "/industries",
  path: "/industries",
  getParentRoute: () => Route$8
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const BlogRoute = Route$2.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  BlogRoute,
  ContactRoute,
  IndustriesRoute,
  LearningRoute,
  ProjectsRoute,
  ServicesRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  CLIENTS as C,
  OFFICES as O,
  SITE as S,
  cn as c,
  router as r
};
