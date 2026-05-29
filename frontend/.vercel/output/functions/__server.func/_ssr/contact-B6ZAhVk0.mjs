import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, H as HeroStatsCard } from "./PageHero-CT4nQLsN.mjs";
import { O as OFFICES, S as SITE } from "./router-H_HoUDNU.mjs";
import { r as MapPin, x as Phone, M as Mail, G as Globe, u as MessageCircle } from "../_libs/lucide-react.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const SERVICES = ["CRM Software", "HRMS & Payroll", "ERP System", "Workflow Automation", "Inventory Management", "Cloud Application", "AI Business Tools", "Branding", "Digital Marketing", "Other"];
const BUDGETS = ["Under ₹1 Lakh", "₹1L–₹5L", "₹5L–₹15L", "₹15L–₹50L", "₹50L+"];
const field = "bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm w-full focus:border-purple-400 focus:ring-2 focus:ring-purple-100 focus:outline-none transition";
function ContactPage() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { breadcrumb: "Contact", title: "Let's Build Something Great Together", subtitle: "Tell us about your project — our team will get back to you within 2 business hours.", rightCard: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroStatsCard, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Tell Us About Your Project" }),
        submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#F5F3FF] border border-purple-200 rounded-2xl p-8 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-[#1E0A3C] mb-2", children: "Thanks — we got your message!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Our team will reach out within 2 business hours." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
          e.preventDefault();
          setSubmitted(true);
        }, className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, placeholder: "Full Name*", className: field }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, placeholder: "Company Name*", className: field }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", placeholder: "Work Email*", className: field }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "tel", placeholder: "Phone Number*", className: field }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, defaultValue: "", className: field, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Service Interest*" }),
            SERVICES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: s }, s))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { defaultValue: "", className: field, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Project Budget" }),
            BUDGETS.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: b }, b))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { placeholder: "Tell us about your project (optional)", rows: 5, className: `${field} md:col-span-2` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "md:col-span-2 bg-[#F472B6] hover:bg-[#EC4899] text-[#1E0A3C] font-bold rounded-xl py-4 transition", children: "Send Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "md:col-span-2 text-gray-400 text-sm text-center", children: "We typically reply within 2 business hours. No commitment required." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Our Offices" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: OFFICES.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#F8F7FF] rounded-2xl p-6 flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 22, className: "text-[#EC4899] shrink-0 mt-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-gray-900", children: [
              o.city,
              o.primary && " (Head Office)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#EC4899] text-sm", children: o.state }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm mt-1", children: o.desc })
          ] })
        ] }, o.city)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#1E0A3C] text-white rounded-2xl p-6 mt-4 space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16, className: "text-[#F472B6]" }),
            SITE.phone
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16, className: "text-[#F472B6]" }),
            SITE.email
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 16, className: "text-[#F472B6]" }),
            SITE.website
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/60 pt-2 border-t border-white/10 mt-2", children: "Mon–Sat, 9AM–7PM IST" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `https://wa.me/${SITE.whatsapp}`, target: "_blank", rel: "noreferrer", className: "bg-[#25D366] hover:brightness-110 text-white rounded-xl py-3.5 font-semibold mt-4 flex items-center justify-center gap-2 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 18 }),
          " Chat with us on WhatsApp →"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#F8F7FF] py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Find Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-100 rounded-2xl h-80 flex items-center justify-center text-gray-400", children: "Interactive map — embed Google Maps iframe here" })
    ] }) })
  ] });
}
export {
  ContactPage as component
};
