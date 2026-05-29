import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { PageHero, HeroStatsCard } from "../components/sections/PageHero";
import { POSTS } from "../data/blog";
import { fadeUp, staggerContainer } from "../animations/variants";

export const Route = createFileRoute("/blog")({ component: BlogPage });

const TABS = [
  "All",
  "Enterprise Software",
  "Automation",
  "Digital Transformation",
  "AI & Automation",
  "Case Study",
];

function BlogPage() {
  const [tab, setTab] = useState("All");
  const filtered = tab === "All" ? POSTS : POSTS.filter((p) => p.category === tab);
  const [featured, ...rest] = filtered;

  return (
    <>
      <PageHero
        breadcrumb="Blog"
        title="Enterprise Software & Digital Transformation Insights"
        subtitle="Knowledge, case studies, and practical guides from our team to help you make smarter digital decisions."
        rightCard={<HeroStatsCard />}
      />

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3 mb-12">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={
                  tab === t
                    ? "bg-[#F472B6] text-[#1E0A3C] rounded-full px-5 py-2 text-sm font-semibold"
                    : "border border-gray-200 text-gray-600 rounded-full px-5 py-2 text-sm hover:border-purple-300"
                }
              >
                {t}
              </button>
            ))}
          </div>

          {featured && (
            <article className="bg-[#F8F7FF] rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-[45%_55%] mb-12">
              <div className={`bg-gradient-to-br ${featured.gradient} min-h-[300px]`} />
              <div className="p-10">
                <div className="flex gap-2 mb-3">
                  <span className="bg-[#F472B6] text-[#1E0A3C] text-xs font-bold px-3 py-1 rounded-full">
                    FEATURED
                  </span>
                  <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {featured.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featured.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{featured.excerpt}</p>
                <div className="text-gray-400 text-sm mb-4">The Bot Team · {featured.date}</div>
                <a
                  href="#"
                  className="inline-block bg-[#F472B6] hover:bg-[#EC4899] text-[#1E0A3C] rounded-full px-6 py-3 font-semibold transition"
                >
                  Read Article →
                </a>
              </div>
            </article>
          )}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {rest.map((p) => (
              <motion.article
                key={p.title}
                variants={fadeUp}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition"
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
                    <a href="#" className="text-[#EC4899] text-sm font-semibold">
                      Read More →
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="navy-gradient rounded-3xl p-10 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Stay Updated with The Bot's Latest Insights
            </h3>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Get our best articles on enterprise software, automation, and digital transformation.
            </p>
            <form className="flex max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-l-full px-4 py-3 text-sm flex-1 min-w-0 focus:outline-none"
              />
              <button className="bg-[#F472B6] text-[#1E0A3C] font-bold px-6 py-3 rounded-r-full text-sm hover:bg-[#EC4899]">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
