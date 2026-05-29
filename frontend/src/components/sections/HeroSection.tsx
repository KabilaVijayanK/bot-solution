import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import CountUp from "react-countup";
import { fadeUp, staggerContainer } from "../../animations/variants";
import { PillButton } from "../ui/PillButton";

const STATS = [
  { v: 50, suffix: "+", label: "Enterprise Clients" },
  { v: 100, suffix: "+", label: "Projects Delivered" },
  { v: 5, suffix: "+", label: "Years Experience" },
  { v: 3, suffix: "", label: "Office Locations" },
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#090312] text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1600"
      >
        <source src="https://www.pexels.com/download/video/31710198/" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.26),transparent_42%),linear-gradient(180deg,rgba(18,5,33,0.68)_0%,rgba(9,3,18,0.78)_100%)]" />
      <div className="absolute inset-0 opacity-34 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#7C3AED]/30 blur-3xl" />
      <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-[#F472B6]/15 blur-3xl" />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative mx-auto flex min-h-[calc(100vh-4.5rem)] w-full max-w-7xl items-start px-6 pt-8 pb-16 lg:px-12 lg:pt-10 lg:pb-20"
      >
        <div className="grid w-full items-center gap-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-12 xl:gap-16">
          <div className="max-w-[44rem] text-white">
            <motion.div
              variants={fadeUp}
              className="inline-block rounded-full border border-white/20 bg-white/8 px-5 py-2 text-sm font-medium text-[#F472B6] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm"
            >
              Enterprise Software & Digital Transformation
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-8 max-w-none text-4xl font-bold leading-[0.92] tracking-[-0.045em] sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              <span className="block whitespace-nowrap">AI-Driven Marketing</span>
              <span className="block whitespace-nowrap">&amp; Technology Solutions.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-[34rem] text-base leading-8 text-white/72 sm:text-lg md:text-xl"
            >
              <span className="block">
                We help enterprises, industries, startups, and government organizations streamline
                operations
              </span>
              <span className="block">
                with powerful software, automation, and digital transformation services.
              </span>
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
              <PillButton as="a" href="/services">
                <span>Explore Our Services</span>
              </PillButton>
              <Link
                to="/projects"
                className="text-sm font-semibold text-white/90 underline-offset-4 transition hover:text-white hover:underline"
              >
                View Our Work →
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-[1.35rem] border border-white/10 bg-white/6 p-4 backdrop-blur-md"
                >
                  <div className="text-2xl font-bold text-[#F472B6] md:text-3xl">
                    <CountUp end={s.v} duration={2} enableScrollSpy scrollSpyOnce /> {s.suffix}
                  </div>
                  <div className="mt-1 text-sm text-white/68">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <motion.div
              className="relative translate-x-18"
              animate={{ y: [0, -12, 0], rotate: [-1, 1, -1], scale: [1, 1.02, 1] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            >
              <div className="rounded-3xl p-0 bg-transparent shadow-none">
                <img
                  src="/ai-head.png"
                  alt="AI illustration"
                  className="w-[380px] max-w-full h-auto select-none pointer-events-none ai-glow"
                />
              </div>

              <motion.div
                className="absolute -right-8 -bottom-6 h-20 w-20 rounded-full bg-[#7C3AED]/12 blur-2xl"
                animate={{ opacity: [0.35, 0.8, 0.35], scale: [1, 1.15, 1] }}
                transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
