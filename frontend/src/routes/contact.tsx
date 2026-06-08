import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Globe, MessageCircle } from "lucide-react";
import { PageHero, HeroStatsCard } from "../components/sections/PageHero";
import { OFFICES, SITE } from "../data/site";

export const Route = createFileRoute("/contact")({ component: ContactPage });

const SERVICES = [
  "CRM Software",
  "HRMS & Payroll",
  "ERP System",
  "Workflow Automation",
  "Inventory Management",
  "Cloud Application",
  "AI Business Tools",
  "Branding",
  "Digital Marketing",
  "Other",
];
const BUDGETS = ["Under ₹1 Lakh", "₹1L–₹5L", "₹5L–₹15L", "₹15L–₹50L", "₹50L+"];

const field =
  "bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm w-full focus:border-purple-400 focus:ring-2 focus:ring-purple-100 focus:outline-none transition";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        title="Let's Build Something Great Together"
        subtitle="Tell us about your project — our team will get back to you within 2 business hours."
        rightCard={<HeroStatsCard />}
      />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tell Us About Your Project</h3>
            {submitted ? (
              <div className="bg-[#F5F3FF] border border-purple-200 rounded-2xl p-8 text-center">
                <h4 className="text-xl font-bold text-[#1E0A3C] mb-2">
                  Thanks — we got your message!
                </h4>
                <p className="text-gray-600">Our team will reach out within 2 business hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <input required placeholder="Full Name*" className={field} />
                <input required placeholder="Company Name*" className={field} />
                <input required type="email" placeholder="Work Email*" className={field} />
                <input required type="tel" placeholder="Phone Number*" className={field} />
                <select required defaultValue="" className={field}>
                  <option value="" disabled>
                    Service Interest*
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <select defaultValue="" className={field}>
                  <option value="" disabled>
                    Project Budget
                  </option>
                  {BUDGETS.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
                <textarea
                  placeholder="Tell us about your project (optional)"
                  rows={5}
                  className={`${field} md:col-span-2`}
                />
                <button
                  type="submit"
                  className="md:col-span-2 bg-[#F472B6] hover:bg-[#EC4899] text-[#1E0A3C] font-bold rounded-xl py-4 transition"
                >
                  Send Message
                </button>
                <p className="md:col-span-2 text-gray-400 text-sm text-center">
                  We typically reply within 2 business hours. No commitment required.
                </p>
              </form>
            )}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Offices</h3>
            <div className="space-y-4">
              {OFFICES.map((o) => (
                <div key={o.city} className="bg-[#F8F7FF] rounded-2xl p-6 flex gap-4">
                  <MapPin size={22} className="text-[#EC4899] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {o.flag ? <span className="mr-2">{o.flag}</span> : null}
                      {o.city}
                    </h4>
                    <div className="text-[#EC4899] text-sm">{o.state}</div>
                    <p className="text-gray-500 text-sm mt-1">{o.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#1E0A3C] text-white rounded-2xl p-6 mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#F472B6]" />
                {SITE.email}
              </div>
              <div className="flex items-center gap-3">
                <Globe size={16} className="text-[#F472B6]" />
                {SITE.website}
              </div>
              <div className="text-white/60 pt-2 border-t border-white/10 mt-2">
                Mon–Sat, 9AM–7PM IST
              </div>
            </div>

            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:brightness-110 text-white rounded-xl py-3.5 font-semibold mt-4 flex items-center justify-center gap-2 transition"
            >
              <MessageCircle size={18} /> Chat with us on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F7FF] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h3>
          <div className="bg-gray-100 rounded-2xl h-80 overflow-hidden">
            <iframe
              title="Company location"
              src={
                "https://maps.google.com/maps?q=https://maps.app.goo.gl/SZFnb2PwsVynM6Ss6?g_st=ic&output=embed"
              }
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-3 text-sm">
            <a
              href="https://maps.app.goo.gl/SZFnb2PwsVynM6Ss6?g_st=ic"
              target="_blank"
              rel="noreferrer"
              className="text-[#2563eb] underline"
            >
              Open location in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
