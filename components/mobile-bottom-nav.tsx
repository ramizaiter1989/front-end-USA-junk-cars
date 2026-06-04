'use client'

import { Phone, MessageCircle, ClipboardList, Home } from 'lucide-react'
import { motion } from 'framer-motion'

export default function MobileBottomNav() {
  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.8, type: 'spring', damping: 20 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      aria-label="Mobile navigation"
    >
      <div className="glass border-t border-white/10 px-2 py-2 pb-safe">
        <div className="flex items-center justify-around max-w-sm mx-auto">
          <a
            href="#"
            className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-muted-foreground hover:text-primary transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-semibold">Home</span>
          </a>
          <a
            href="#get-offer"
            className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-muted-foreground hover:text-primary transition-colors"
          >
            <ClipboardList className="w-5 h-5" />
            <span className="text-[10px] font-semibold">Get Offer</span>
          </a>
          {/* Center CTA */}
          <a
            href="tel:+12484172552"
            className="relative -mt-6 w-14 h-14 bg-primary rounded-2xl flex items-center justify-center amber-glow animate-pulse-glow shadow-2xl"
            aria-label="Call us now"
          >
            <Phone className="w-6 h-6 text-primary-foreground" />
          </a>
          <a
            href="#faq"
            className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-muted-foreground hover:text-primary transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-[10px] font-semibold">FAQ</span>
          </a>
          <a
            href="#areas"
            className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs font-black text-current leading-none">MI</span>
            <span className="text-[10px] font-semibold">Areas</span>
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
