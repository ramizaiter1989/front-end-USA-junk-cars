'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, XCircle, Phone, Info } from 'lucide-react'
import Image from 'next/image'

const pricingFactors = [
  { factor: 'Year (newer = higher)', impact: 'High', positive: true },
  { factor: 'Make & Model demand', impact: 'High', positive: true },
  { factor: 'Running condition', impact: 'High', positive: true },
  { factor: 'Metal/scrap weight', impact: 'Medium', positive: true },
  { factor: 'Missing title', impact: 'Low deduction', positive: false },
  { factor: 'Missing parts (catalytic converter, etc.)', impact: 'Medium deduction', positive: false },
  { factor: 'Flood or fire damage', impact: 'Medium deduction', positive: false },
]

const rangeData = [
  { condition: 'Running & Driving', range: '$300 – $1,000', color: 'text-green-400', bg: 'bg-green-400/10 border-green-400/20' },
  { condition: 'Starts But Won\'t Drive', range: '$200 – $600', color: 'text-primary', bg: 'bg-primary/10 border-primary/20' },
  { condition: 'Won\'t Start / Dead Battery', range: '$150 – $450', color: 'text-primary', bg: 'bg-primary/10 border-primary/20' },
  { condition: 'Major Collision Damage', range: '$100 – $400', color: 'text-orange-400', bg: 'bg-orange-400/10 border-orange-400/20' },
  { condition: 'Flood / Fire Damage', range: '$75 – $300', color: 'text-red-400', bg: 'bg-red-400/10 border-red-400/20' },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'oklch(0.35 0.12 250)' }} />
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
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Transparent Pricing</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground mb-4 text-balance">
            How Much Is Your<br />
            <span className="text-gradient">Junk Car Worth?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No mystery. No lowball surprises at pickup. Here&apos;s exactly how we calculate your junk car value and what you can realistically expect to receive.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* What we pay by condition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-sm"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">Cash Offer Ranges</h3>
            <p className="text-sm text-muted-foreground mb-6">Based on condition, Metro Detroit area prices</p>
            <div className="space-y-3">
              {rangeData.map((item, i) => (
                <motion.div
                  key={item.condition}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl border ${item.bg}`}
                >
                  <span className="text-sm text-foreground font-medium">{item.condition}</span>
                  <span className={`text-sm font-black ${item.color}`}>{item.range}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 flex items-start gap-2 p-3 rounded-xl bg-muted/50 border border-border">
              <Info className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground">
                Final prices depend on metal market rates, your specific vehicle, and demand in your area. Call for an exact quote, no obligation.
              </p>
            </div>
          </motion.div>

          {/* Pricing factors */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-sm"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">What Affects Your Price</h3>
            <p className="text-sm text-muted-foreground mb-6">We calculate value based on these real factors</p>
            <div className="space-y-3">
              {pricingFactors.map((item, i) => (
                <motion.div
                  key={item.factor}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center justify-between py-2.5 border-b border-border/50 last:border-0"
                >
                  <div className="flex items-center gap-2.5">
                    {item.positive ? (
                      <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-400/70 shrink-0" />
                    )}
                    <span className="text-sm text-foreground">{item.factor}</span>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${
                    item.positive ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'
                  }`}>
                    {item.impact}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Cash payment visual + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl border border-border shadow-lg overflow-hidden"
        >
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 sm:p-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
                <span className="text-xs font-bold text-accent">No Title? No Problem.</span>
              </div>
              <h3 className="font-display text-3xl font-black text-foreground mb-3">
                Michigan Title Help<br />Included Free
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Missing your title? Over 35% of junk cars in Detroit have title issues. We guide you through every step: lost title affidavit, Secretary of State filings, lien releases. We&apos;ve done it thousands of times.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Lost title replacement assistance',
                  'Signed title walkthrough (Michigan law)',
                  'Lien holder guidance',
                  'Insurance cancellation reminder',
                  'Secretary of State notification',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="tel:+12484172552"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-6 py-3 rounded-2xl red-glow hover:brightness-110 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call For Title Help: (248) 417-2552
              </a>
            </div>
            <div className="relative aspect-square md:aspect-auto md:h-full min-h-[280px] overflow-hidden">
              <Image
                src="/images/cash-payment.png"
                alt="Cash paid instantly for junk cars in Detroit"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r md:from-card md:via-transparent from-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
