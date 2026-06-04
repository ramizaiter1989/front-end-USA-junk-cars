'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, Car } from 'lucide-react'

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'What We Pay', href: '#pricing' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Service Areas', href: '#areas' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-card/95 border-b border-border shadow-md backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center navy-glow-sm group-hover:scale-105 transition-transform">
                <Car className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="leading-none">
                <span className="font-display font-bold text-lg text-foreground block">
                  SellMyJunk<span className="text-primary">Car</span>
                </span>
                <span className="text-[10px] text-muted-foreground tracking-widest uppercase">.online</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+12484172552"
                className="hidden sm:flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-foreground hover:bg-primary px-4 py-2 rounded-xl border border-primary/30 transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                (248) 417-2552
              </a>
              <a
                href="#get-offer"
                className="hidden md:flex items-center gap-2 bg-accent text-accent-foreground text-sm font-bold px-5 py-2.5 rounded-xl hover:brightness-110 transition-all duration-200 red-glow"
              >
                Get Free Offer
              </a>
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden p-2 rounded-xl border border-border text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Toggle menu"
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-card/95 border-b border-border p-6 lg:hidden backdrop-blur-md"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-foreground text-lg font-medium py-2 border-b border-border/50 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+12484172552"
                className="flex items-center gap-2 text-primary font-bold text-lg mt-2"
              >
                <Phone className="w-5 h-5" />
                (248) 417-2552
              </a>
              <a
                href="#get-offer"
                onClick={() => setOpen(false)}
                className="bg-accent text-accent-foreground font-bold text-center py-3 rounded-2xl red-glow mt-2"
              >
                Get My Free Offer Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
