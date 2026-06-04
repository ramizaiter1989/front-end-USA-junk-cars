'use client'

import { motion } from 'framer-motion'
import { ClipboardList, Phone, Truck, Banknote, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Tell Us About Your Car',
    desc: 'Fill out our 60-second form — year, make, model, condition. No photos required. We accept any condition: running, dead, totaled, flooded, or burned.',
    detail: 'Running or not, title or no title — we buy it.',
  },
  {
    icon: Phone,
    number: '02',
    title: 'Get Your Instant Offer',
    desc: 'Receive your guaranteed cash offer by phone or text within minutes. Our price is transparent — we show you exactly how your vehicle\'s value is calculated.',
    detail: 'Guaranteed price. No bait-and-switch.',
  },
  {
    icon: Truck,
    number: '03',
    title: 'We Come To You — Free',
    desc: 'Schedule a pickup time that works for you. Same-day and next-day options available across Detroit, Dearborn, Warren, Pontiac, and all Metro Detroit.',
    detail: '100% free towing, always. No deductions.',
  },
  {
    icon: Banknote,
    number: '04',
    title: 'Get Paid on the Spot',
    desc: 'When we pick up your car, you get paid immediately — cash in hand. No waiting for checks that might bounce, no wire transfer delays.',
    detail: 'Cash on pickup. Every time.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: 'oklch(0.35 0.12 250)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Simple 4-Step Process</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground mb-4 text-balance">
            Selling Your Junk Car<br />
            <span className="text-gradient-navy">Has Never Been Easier</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From first call to cash in hand — most Detroit customers complete the entire process in under 3 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative group"
            >
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:border-primary/30 transition-all duration-300 h-full">
                {/* Number */}
                <div className="font-display text-7xl font-black text-primary/10 leading-none mb-3 group-hover:text-primary/20 transition-colors">
                  {step.number}
                </div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.desc}</p>
                <div className="flex items-center gap-2 text-xs font-bold text-accent border-t border-border/50 pt-3 mt-auto">
                  <ArrowRight className="w-3.5 h-3.5" />
                  {step.detail}
                </div>
              </div>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30 z-10" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Tow truck visual + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-border shadow-lg"
        >
          <div className="relative aspect-[16/6] sm:aspect-[16/5]">
            <Image
              src="/images/tow-truck.png"
              alt="Free junk car towing service in Detroit Michigan"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-card via-card/80 to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-center px-8 sm:px-12">
            <div className="max-w-md">
              <h3 className="font-display text-3xl sm:text-4xl font-black text-foreground mb-3">
                Free Pickup Anywhere<br />
                <span className="text-gradient-navy">in Metro Detroit</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                No wheels? Stuck in a backyard? No problem. Our tow truck drivers handle any situation — and it never costs you a dime.
              </p>
              <a
                href="tel:+12484172552"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-6 py-3 rounded-2xl red-glow hover:brightness-110 transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                Schedule Free Pickup
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
