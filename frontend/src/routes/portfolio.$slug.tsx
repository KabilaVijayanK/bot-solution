import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../data/portfolio";

export const Route = createFileRoute("/portfolio/$slug")({ component: PortfolioDetailPage });

function PortfolioDetailPage() {
  const { slug } = Route.useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  const [index, setIndex] = useState(0);
  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <h2 className="text-2xl font-bold">Project not found</h2>
        <Link to="/portfolio" className="mt-4 inline-block text-sm text-[#F472B6]">Back to portfolio</Link>
      </div>
    );
  }

  const images = project.images;

  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="bg-white"
    >
      <section className="bg-gradient-to-r from-[#eef2ff] via-white to-[#fdf2f8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 lg:py-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-block text-sm uppercase tracking-[0.28em] text-[#f472b6] font-semibold mb-3">
                {project.category}
              </span>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-950">
                {project.name}
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-slate-700 leading-8">
                {project.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#2563eb] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-200/50 transition hover:bg-[#1d4ed8]"
                >
                  Contact Us
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  Back to portfolio
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:w-[420px] lg:w-[520px]">
              {images.slice(0, 4).map((src, idx) => (
                <motion.img
                  key={src}
                  src={src}
                  alt={`${project.name} preview ${idx + 1}`}
                  className="h-36 w-full rounded-3xl object-cover shadow-lg"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.7fr_1fr] items-start">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl">
              <motion.img
                key={images[index]}
                src={images[index]}
                alt={`${project.name} image ${index + 1}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="w-full h-[520px] object-cover"
              />
              <div className="flex items-center justify-between gap-3 p-4 bg-slate-900/90 text-white">
                <div className="font-semibold">Gallery</div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  Image {index + 1} of {images.length}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {images.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setIndex(i)}
                  className={`min-w-[100px] overflow-hidden rounded-3xl border-2 transition ${
                    i === index ? "border-[#60a5fa]" : "border-slate-200"
                  }`}
                >
                  <img src={src} alt={`${project.name} thumb ${i + 1}`} className="h-24 w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <aside className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
            <div className="rounded-3xl bg-gradient-to-br from-[#eff6ff] via-white to-[#fdf2f8] p-6">
              <div className="text-sm uppercase tracking-[0.24em] text-[#2563eb] font-semibold">Project details</div>
              <dl className="mt-6 space-y-4 text-sm text-slate-700">
                <div>
                  <dt className="font-semibold text-slate-900">Category</dt>
                  <dd className="mt-1">{project.category}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Primary challenge</dt>
                  <dd className="mt-1">Deliver a strong brand experience with streamlined product discovery.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Outcome</dt>
                  <dd className="mt-1">Modern UX, faster page load, and polished product presentation.</dd>
                </div>
              </dl>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-950">Business Description</h2>
              <p className="text-slate-700 leading-7">{project.description}</p>
            </div>

            <Link
              to="/contact"
              className="block rounded-3xl bg-[#f472b6] px-6 py-3 text-center text-sm font-semibold text-[#1e0a3c] shadow-lg shadow-[#f472b6]/20 transition hover:bg-[#ec4899]"
            >
              Start your project
            </Link>
          </aside>
        </div>
      </section>
    </motion.main>
  );
}
