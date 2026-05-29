import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { fadeUp, staggerContainer } from "../../animations/variants";
import { SectionHeading } from "../ui/SectionHeading";
import { INDUSTRIES } from "../../data/industries";

export function IndustriesGrid() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

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

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
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

  return (
    <section className="bg-white py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6 lg:px-12"
      >
        <SectionHeading
          eyebrow="Industries"
          title="Revolutionising Industries With Tech That Breaks Barriers"
          subtitle="We build specialised solutions for businesses that operate in complex, fast-moving environments."
        />

        <div className="relative mt-10">
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="hidden md:inline-flex absolute -left-3 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-white shadow-md text-[#1E0A3C] hover:bg-white/90"
          >
            ‹
          </button>

          <div
            ref={scrollRef}
            className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-6 px-1"
          >
            {INDUSTRIES.map(({ icon: Icon, name, gradient, desc }, i) => (
              <motion.article
                key={name}
                variants={fadeUp}
                className="snap-start flex-shrink-0 w-[320px] sm:w-[360px] md:w-[420px] lg:w-[460px] rounded-2xl bg-white shadow-lg border border-white/6 overflow-hidden"
                aria-labelledby={`industry-${i}`}
              >
                <a href="/industries" className="block h-full p-6 lg:p-8">
                  <div
                    className={`rounded-lg inline-flex items-center justify-center p-3 bg-gradient-to-br ${gradient}`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>

                  <h3 id={`industry-${i}`} className="mt-6 text-2xl font-semibold text-[#0B1020]">
                    {name}
                  </h3>

                  <p className="mt-3 text-sm text-[#374151]">{desc}</p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-[#6B7280]">Trusted solutions</span>
                    <span className="text-sm font-medium text-[#7C3AED]">View Solutions →</span>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>

          <button
            onClick={scrollNext}
            aria-label="Next"
            className="hidden md:inline-flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-white shadow-md text-[#1E0A3C] hover:bg-white/90"
          >
            ›
          </button>
        </div>
      </motion.div>
    </section>
  );
}
