'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, X } from 'lucide-react'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', damping: 20 }}
          className="fixed bottom-24 md:bottom-8 right-4 md:right-6 z-50 hidden sm:flex flex-col items-end gap-2"
        >
          {/* Tooltip */}
          <div className="bg-card rounded-2xl border border-border px-4 py-2 text-sm font-medium text-foreground max-w-[180px] text-center shadow-lg">
            Get cash offer in{' '}
            <strong className="text-accent">under 2 minutes</strong>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDismissed(true)}
              className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors shadow-sm"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
            <a
              href="tel:+12484172552"
              className="flex items-center gap-2 bg-accent text-accent-foreground font-bold px-5 py-3 rounded-2xl red-glow hover:brightness-110 transition-all text-sm animate-pulse-glow"
            >
              <Phone className="w-4 h-4" />
              (248) 417-2552
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
