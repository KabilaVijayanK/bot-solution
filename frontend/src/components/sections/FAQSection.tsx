import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Phone, Mail } from "lucide-react";
import { FAQS } from "../../data/faq";

export function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">
            Have more questions? Reach us at{" "}
            <a className="text-[#EC4899]" href="mailto:sales@thebot.agency">
              sales@thebot.agency
            </a>
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-10">
          <div>
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="border-b border-gray-100">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between text-left py-5 cursor-pointer"
                  >
                    <span className="text-gray-900 font-semibold text-base pr-4">{f.q}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={20} className="text-gray-500 shrink-0" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-500 text-sm leading-relaxed pb-5">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          <div className="bg-[#F5F3FF] rounded-2xl p-8 h-fit">
            <h3 className="font-bold text-2xl text-gray-900 mb-3">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Our team is available Monday to Saturday, 9am to 7pm IST. We typically respond within
              2 hours.
            </p>
            <div className="space-y-3 text-gray-700">
              <a href="tel:+919892969648" className="flex items-center gap-3 hover:text-[#EC4899]">
                <Phone size={16} /> +91 98929 69648
              </a>
              <a
                href="mailto:sales@thebot.agency"
                className="flex items-center gap-3 hover:text-[#EC4899]"
              >
                <Mail size={16} /> sales@thebot.agency
              </a>
            </div>
            <a
              href="/contact"
              className="inline-block mt-6 bg-[#F472B6] hover:bg-[#EC4899] text-[#1E0A3C] rounded-full px-6 py-3 font-semibold transition"
            >
              Book a Free Call →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
