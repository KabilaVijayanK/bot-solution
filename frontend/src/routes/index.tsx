import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../animations/variants";
import { HeroSection } from "../components/sections/HeroSection";
import { MarqueeStrip } from "../components/sections/MarqueeStrip";
import { AboutSection } from "../components/sections/AboutSection";
import { CaseStudySection } from "../components/sections/CaseStudySection";
import { ServicesGrid } from "../components/sections/ServicesGrid";
import { BannerImageSection } from "../components/sections/BannerImageSection";
import { TechStack } from "../components/sections/TechStack";
import { IndustriesGrid } from "../components/sections/IndustriesGrid";
import { Testimonials } from "../components/sections/Testimonials";
import { CTABanner } from "../components/sections/CTABanner";
import { AwardsStrip } from "../components/sections/AwardsStrip";
import { BlogGrid } from "../components/sections/BlogGrid";
import { FAQSection } from "../components/sections/FAQSection";
import { OfficesSection } from "../components/sections/OfficesSection";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="overflow-hidden"
    >
      <motion.div variants={fadeUp}>
        <HeroSection />
      </motion.div>

      <motion.div variants={fadeUp}>
        <AboutSection />
      </motion.div>

      <motion.div variants={fadeUp}>
        <MarqueeStrip />
      </motion.div>

      <motion.div variants={fadeUp}>
        <CaseStudySection />
      </motion.div>

      <motion.div variants={fadeUp}>
        <ServicesGrid />
      </motion.div>

      <motion.div variants={fadeUp}>
        <BannerImageSection />
      </motion.div>

      <motion.div variants={fadeUp}>
        <IndustriesGrid />
      </motion.div>
      <motion.div variants={fadeUp}>
        <TechStack />
      </motion.div>

      <motion.div variants={fadeUp}>
        <Testimonials />
      </motion.div>

      <motion.div variants={fadeUp}>
        <CTABanner />
      </motion.div>

      <motion.div variants={fadeUp}>
        <AwardsStrip />
      </motion.div>

      <motion.div variants={fadeUp}>
        <BlogGrid limit={3} />
      </motion.div>

      <motion.div variants={fadeUp}>
        <FAQSection />
      </motion.div>

      <motion.div variants={fadeUp}>
        <OfficesSection />
      </motion.div>
    </motion.main>
  );
}
