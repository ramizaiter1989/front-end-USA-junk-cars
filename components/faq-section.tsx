'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'How much is my junk car worth in Detroit?',
    a: 'In Detroit and Metro Michigan, junk cars typically range from $75 to $1,000 depending on year, make, model, condition, and current scrap metal prices. Running cars with a title generally earn the most. Call us at (248) 417-2552 for a free, no-obligation quote in under 2 minutes.',
  },
  {
    q: 'Do you buy junk cars without a title in Michigan?',
    a: 'Yes, we buy junk cars with or without a title in Michigan. If you\'ve lost your title, we\'ll help you navigate the Secretary of State process for a duplicate — or we can accept alternate documentation in some cases. Don\'t let a missing title stop you from getting cash.',
  },
  {
    q: 'How does junk car pricing work?',
    a: 'We evaluate your car based on: (1) Scrap metal weight and current market prices, (2) Vehicle make, model, and year, (3) Whether it runs and drives, (4) Condition of major components like the engine, transmission, and catalytic converter, (5) Presence of the title. We\'ll explain every factor when you call.',
  },
  {
    q: 'How quickly can you pick up my junk car in Detroit?',
    a: 'We offer same-day and next-day junk car pickup across Detroit, Dearborn, Warren, Pontiac, Southfield, and all Metro Detroit. In most cases, we can schedule pickup within 24 hours. We\'ll call 30 minutes before arrival so you\'re ready.',
  },
  {
    q: 'Is towing really free? No hidden fees?',
    a: 'Absolutely free. We never charge towing fees, fuel surcharges, or administrative fees. The offer we quote is exactly what you receive — cash in hand at pickup. No deductions unless the vehicle condition radically differs from your description.',
  },
  {
    q: 'What documents do I need to sell a junk car in Michigan?',
    a: 'In Michigan, you\'ll need: (1) Valid photo ID (driver\'s license), (2) Vehicle title if available — signed on the back. If you don\'t have the title, we\'ll guide you through the alternatives. We recommend also notifying your insurance company and the Secretary of State after the sale.',
  },
  {
    q: 'How do I avoid junk car scams in Detroit?',
    a: 'Watch out for: bait-and-switch pricing (offer drops at pickup), fake checks, buyers who want your title before picking up the car, and no-show buyers. With us, the price we quote is guaranteed, we always pay cash at pickup, and we never ask for your title until the car is loaded. Read our 1,200+ Google reviews for peace of mind.',
  },
  {
    q: 'Can you pick up a car that won\'t start or has no wheels?',
    a: 'Yes! Our flatbed tow trucks are equipped to handle cars in any condition — no wheels, no engine, stuck in a garage, backyard, parking lot, or street. No extra charge for challenging pickups. Just tell us the situation when you call.',
  },
  {
    q: 'How do I cancel insurance after selling my junk car in Michigan?',
    a: 'After your car is towed, call your insurance company to cancel or remove the vehicle from your policy. Keep the bill of sale we provide as proof the vehicle is no longer in your possession. Also notify the Michigan Secretary of State to remove the plate from your record and avoid future liability.',
  },
  {
    q: 'What cities do you serve besides Detroit?',
    a: 'We serve all of Metro Detroit including Dearborn, Warren, Sterling Heights, Pontiac, Southfield, Troy, Livonia, Taylor, Westland, Farmington Hills, Clinton Township, Macomb, Royal Oak, and Roseville. We also buy junk cars throughout Michigan including Ann Arbor, Flint, Lansing, Saginaw, and Kalamazoo.',
  },
]

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border border-border rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between p-5 text-left transition-colors duration-200 ${
          open ? 'bg-primary/5' : 'hover:bg-muted/50'
        }`}
        aria-expanded={open}
      >
        <span className={`font-semibold text-base pr-4 ${open ? 'text-primary' : 'text-foreground'}`}>
          {faq.q}
        </span>
        <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
          open ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
        }`}>
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0">
              <p className="text-muted-foreground leading-relaxed text-sm">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Common Questions</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground mb-4 text-balance">
            Everything You Need to Know<br />
            About <span className="text-gradient-navy">Selling Your Junk Car</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From pricing to title issues — we answer the questions Detroit car owners ask most.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>

        {/* CTA below FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-primary rounded-3xl p-8 text-center border border-primary/20 navy-glow"
        >
          <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
            Still have questions? We&apos;re here 7 days a week.
          </h3>
          <p className="text-primary-foreground/80 mb-6">
            Speak with a real person — no robots, no call centers. Our Detroit-based team knows Michigan junk car laws inside and out.
          </p>
          <a
            href="tel:+12484172552"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-black text-xl px-8 py-4 rounded-2xl red-glow hover:brightness-110 transition-all duration-200"
          >
            Call (248) 417-2552 Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}
