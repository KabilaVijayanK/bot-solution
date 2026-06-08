import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useScrolled } from "../../hooks/useScrolled";
import { NAV_SERVICES, NAV_INDUSTRIES, NAV_COMPANY, SITE } from "../../data/site";
import { cn } from "../../lib/utils";

const TOP_LINKS = [
  { label: "Services", key: "services", to: "/services" },
  { label: "Technologies", key: "tech", to: "/services" },
  { label: "Industries", key: "industries", to: "/industries" },
  { label: "Design", key: "portfolio", to: "/portfolio" },
  { label: "Who We Are", key: "company", to: "/about" },
];

function MegaPanel({ open, children }: { open: boolean; children: React.ReactNode }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
          className="absolute left-0 right-0 top-full bg-[#1E0A3C] shadow-2xl border-t border-white/10 z-40"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Navbar() {
  const scrolled = useScrolled(60);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all",
        scrolled ? "shadow-md" : "shadow-sm",
      )}
      onMouseLeave={() => setOpen(null)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-18 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="The Bot logo" className="h-28 w-auto" />
          <span className="sr-only">The Bot</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {TOP_LINKS.map((l) => {
            const hasDropdown = ["services", "industries", "company"].includes(l.key);
            return (
              <div
                key={l.key}
                onMouseEnter={() => setOpen(hasDropdown ? l.key : null)}
                className="relative"
              >
                <Link
                  to={l.to}
                  className="flex items-center gap-1 text-gray-700 hover:text-[#7C3AED] font-medium text-sm transition"
                >
                  {l.label}
                  {hasDropdown && <ChevronDown size={14} />}
                </Link>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-flex bg-[#F472B6] hover:bg-[#EC4899] text-[#1E0A3C] font-semibold px-6 py-2.5 rounded-full text-sm transition"
          >
            Contact Us
          </Link>
          <button
            className="lg:hidden p-2 text-[#1E0A3C]"
            onClick={() => setMobile(true)}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* Mega menus */}
      <MegaPanel open={open === "services"}>
        <div className="grid grid-cols-3 gap-10">
          {NAV_SERVICES.map((col) => (
            <div key={col.heading}>
              <div className="text-[#F472B6] font-semibold text-xs uppercase tracking-[0.18em] mb-4">
                {col.heading}
              </div>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/services"
                      className="text-white/75 hover:text-[#F472B6] text-sm leading-7 transition"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </MegaPanel>

      <MegaPanel open={open === "industries"}>
        <div className="grid grid-cols-2 gap-10">
          {NAV_INDUSTRIES.map((col, i) => (
            <ul key={i} className="space-y-2">
              {col.map((link) => (
                <li key={link}>
                  <Link
                    to="/industries"
                    className="text-white/80 hover:text-[#F472B6] text-sm leading-8 transition"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </MegaPanel>

      <MegaPanel open={open === "company"}>
        <ul className="space-y-2">
          {NAV_COMPANY.map((link) => (
            <li key={link}>
              <Link
                to="/about"
                className="text-white/80 hover:text-[#F472B6] text-sm leading-8 transition"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </MegaPanel>

      {/* Mobile */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#1E0A3C] text-white overflow-y-auto"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <span className="text-2xl font-bold">The Bot</span>
              <button onClick={() => setMobile(false)} className="p-2" aria-label="Close menu">
                <X size={26} />
              </button>
            </div>
            <div className="px-6 py-6 space-y-4">
              {[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: "Portfolio", to: "/portfolio" },
                { label: "Industries", to: "/industries" },
                { label: "Who We Are", to: "/about" },
                { label: "Success Stories", to: "/projects" },
                { label: "Learning Centre", to: "/learning" },
                { label: "Blog", to: "/blog" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobile(false)}
                  className="block text-lg font-medium py-2 border-b border-white/10 hover:text-[#F472B6]"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobile(false)}
                className="block text-center bg-[#F472B6] text-[#1E0A3C] rounded-full py-3 font-bold mt-6"
              >
                Contact Us
              </Link>
              <div className="text-white/60 text-sm mt-6">
                {SITE.phone}
                <br />
                {SITE.email}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
