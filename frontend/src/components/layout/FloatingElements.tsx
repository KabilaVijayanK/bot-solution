import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SITE } from "../../data/site";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
    >
      <MessageCircle size={24} className="text-white" />
    </a>
  );
}

export function SideCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed right-0 top-1/2 z-50 hidden -translate-y-1/2 md:block"
    >
      <Link
        to="/contact"
        aria-label="Talk to our expert"
        className="group flex h-[208px] w-[52px] origin-right flex-col items-center justify-between rounded-l-[20px] rounded-r-none bg-[#0C73B8] py-3.5 text-white shadow-[0_18px_45px_rgba(12,115,184,0.28)] transition-transform duration-300 hover:scale-[1.02] hover:bg-[#117CC1]"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition group-hover:bg-white/20">
          <MessageCircle size={20} strokeWidth={1.9} />
        </span>

        <span className="flex flex-1 items-center justify-center">
          <span className="whitespace-nowrap text-[18px] font-medium tracking-tight [writing-mode:vertical-rl]">
            Talk to our expert
          </span>
        </span>

        <span className="sr-only">Open contact page</span>
      </Link>
    </motion.div>
  );
}

export function MobileCTABar() {
  return (
    <a
      href="/contact"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 brand-gradient text-white py-3.5 text-center font-semibold"
    >
      Get Free Consultation →
    </a>
  );
}
