import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations/variants";
import { POSTS } from "../../data/blog";

export function BlogGrid({ limit }: { limit?: number }) {
  const posts = limit ? POSTS.slice(0, limit) : POSTS;
  return (
    <section className="bg-[#F8F7FF] py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6 lg:px-12"
      >
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="text-[#EC4899] font-semibold text-sm tracking-[0.18em] uppercase mb-3">
              Latest Insights
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Industry Knowledge to Guide Your Digital Journey
            </h2>
          </div>
          <a href="/blog" className="text-[#EC4899] font-semibold hover:text-[#F472B6]">
            View All Articles →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className={`relative h-48 bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute top-0 left-0 bg-[#F472B6] text-[#1E0A3C] text-xs font-bold px-3 py-1 rounded-br-xl">
                  {p.category}
                </div>
              </div>
              <div className="p-6">
                <div className="text-[#EC4899] text-xs font-semibold uppercase tracking-wide mb-2">
                  {p.category}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {p.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs">{p.date}</span>
                  <a href="/blog" className="text-[#EC4899] text-sm font-semibold">
                    Read More →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
