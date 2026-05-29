import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  breadcrumb,
  title,
  subtitle,
  rightCard,
}: {
  breadcrumb: string;
  title: string;
  subtitle?: string;
  rightCard?: React.ReactNode;
}) {
  return (
    <section className="navy-gradient min-h-[380px] flex items-center py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-sm text-white/70 flex items-center gap-1 mb-3">
            <Link to="/" className="hover:text-[#F472B6]">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#F472B6]">{breadcrumb}</span>
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">{title}</h1>
          {subtitle && (
            <p className="text-white/75 text-lg md:text-xl max-w-2xl mt-4">{subtitle}</p>
          )}
        </motion.div>
        {rightCard && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {rightCard}
          </motion.div>
        )}
      </div>
    </section>
  );
}

export function HeroStatsCard() {
  return (
    <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white border border-white/15">
      <div className="grid grid-cols-3 gap-4 text-center">
        {[
          ["50+", "Clients"],
          ["100+", "Projects"],
          ["5+", "Years"],
        ].map(([v, l]) => (
          <div key={l}>
            <div className="text-3xl font-bold text-[#F472B6]">{v}</div>
            <div className="text-xs text-white/70 mt-1">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
