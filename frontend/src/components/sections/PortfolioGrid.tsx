import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { PROJECTS } from "../../data/portfolio";

export default function PortfolioGrid() {

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="text-sm text-[#F472B6] font-semibold uppercase tracking-[0.18em]">Our Work</div>
          <h2 className="text-3xl font-bold">Success Stories & Projects</h2>
        </div>
      </div>

      <div className="portfolio-grid">
        {PROJECTS.map((p) => (
          <motion.div
            key={p.slug}
            className="portfolio-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.36 }}
          >
            <div className="relative">
              <img className="media" src={p.images[0]} alt={p.name} />
            </div>
            <div className="portfolio-body">
              <div className="portfolio-title">{p.name.toUpperCase()}</div>
              <Link
                to="/portfolio/$slug"
                params={{ slug: p.slug }}
                className="portfolio-view inline-flex items-center justify-center"
              >
                View
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
