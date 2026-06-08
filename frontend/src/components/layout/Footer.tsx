import { Link } from "@tanstack/react-router";
import {
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Globe,
} from "lucide-react";
import { SITE, NAV_SERVICES } from "../../data/site";

const COMPANY_LINKS = [
  "About The Bot",
  "Our Projects",
  "Industries",
  "Learning Centre",
  "Consultancy",
  "Blog & Insights",
  "Careers",
  "Contact Us",
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
  "Government",
];
const SERVICE_LINKS = NAV_SERVICES[0].links.slice(0, 9);

export function Footer() {
  return (
    <footer className="bg-[#1E0A3C] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src="/logo1.png" alt="The Bot logo" className="h-12 w-auto" />
            </div>
            <p className="text-white/60 text-sm mt-3 mb-6 max-w-xs">
              Building the enterprise software that runs modern businesses.
            </p>
            <div className="flex gap-2.5">
              {[Linkedin, Twitter, Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F472B6]/30 transition"
                >
                  <Icon size={16} className="text-white/80" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[#F472B6] font-semibold text-xs uppercase tracking-[0.18em] mb-4">
              Services
            </div>
            <ul className="space-y-2">
              {SERVICE_LINKS.map((l) => (
                <li key={l}>
                  <Link
                    to="/services"
                    className="text-white/60 text-sm hover:text-[#F472B6] transition"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[#F472B6] font-semibold text-xs uppercase tracking-[0.18em] mb-4">
              Company
            </div>
            <ul className="space-y-2">
              {COMPANY_LINKS.map((l) => (
                <li key={l}>
                  <Link
                    to="/about"
                    className="text-white/60 text-sm hover:text-[#F472B6] transition"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[#F472B6] font-semibold text-xs uppercase tracking-[0.18em] mb-4">
              Industries
            </div>
            <ul className="space-y-2">
              {INDUSTRY_LINKS.map((l) => (
                <li key={l}>
                  <Link
                    to="/industries"
                    className="text-white/60 text-sm hover:text-[#F472B6] transition"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[#F472B6] font-semibold text-xs uppercase tracking-[0.18em] mb-4">
              Get In Touch
            </div>
            <ul className="space-y-2 text-white/60 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 shrink-0" />
                Mumbai, Maharashtra (Head Office)
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 shrink-0" />
                Tirunelveli, Tamil Nadu
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 shrink-0" />
                Anna Nagar, Chennai
              </li>
              <li className="flex items-start gap-2">
                <Phone size={14} className="mt-1 shrink-0" />
                {SITE.phone}
              </li>
              <li className="flex items-start gap-2">
                <Mail size={14} className="mt-1 shrink-0" />
                {SITE.email}
              </li>
              <li className="flex items-start gap-2">
                <Globe size={14} className="mt-1 shrink-0" />
                {SITE.website}
              </li>
            </ul>
            <form className="flex mt-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-l-full px-4 py-2 text-sm flex-1 min-w-0 focus:outline-none"
              />
              <button className="bg-[#F472B6] text-[#1E0A3C] font-bold px-5 py-2 rounded-r-full text-sm hover:bg-[#EC4899] transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center">
          <div className="text-white/40 text-sm">© 2025 The Bot Agency. All rights reserved.</div>
          <div className="text-white/40 text-sm flex gap-4">
            <a href="#" className="hover:text-white/70">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/70">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white/70">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
