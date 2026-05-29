import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Star } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { staggerContainer } from "../../animations/variants";
import { SectionHeading } from "../ui/SectionHeading";
import { TESTIMONIALS } from "../../data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-[#F8F7FF] py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6 lg:px-12"
      >
        <SectionHeading
          eyebrow="Client Testimonials"
          title="What Our Clients Say About Their Digital Transformation Journeys"
        />
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="pb-12"
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 h-full flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-base leading-relaxed italic mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-5 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
