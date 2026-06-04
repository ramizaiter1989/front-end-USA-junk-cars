'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Star, Users, Truck, DollarSign, Clock } from 'lucide-react'

function CountUp({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
}

const stats = [
  { icon: Users, value: 12400, suffix: '+', label: 'Cars Purchased', sub: 'Across Michigan' },
  { icon: DollarSign, value: 1000, suffix: '', prefix: 'Up to $', label: 'Max Cash Paid', sub: 'On the Spot' },
  { icon: Clock, value: 24, suffix: 'hr', label: 'Avg. Pickup Time', sub: 'Same or Next Day' },
  { icon: Star, value: 4.9, suffix: '★', label: 'Average Rating', sub: '1,247 Reviews' },
  { icon: Truck, value: 100, suffix: '%', label: 'Free Towing', sub: 'Always Included' },
]

const tickerItems = [
  'Detroit', 'Dearborn', 'Warren', 'Sterling Heights', 'Ann Arbor',
  'Flint', 'Lansing', 'Pontiac', 'Southfield', 'Troy', 'Livonia',
  'Taylor', 'Westland', 'Farmington Hills', 'Clinton Township', 'Macomb',
  'Royal Oak', 'Roseville', 'Saginaw', 'Kalamazoo',
]

export default function StatsSection() {
  return (
    <section className="relative py-8 overflow-hidden">
      {/* Ticker */}
      <div className="bg-primary/10 border-y border-primary/20 py-3 overflow-hidden mb-16">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((city, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-6 text-sm font-semibold text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              We Buy Junk Cars in {city}, MI
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-4">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Trusted by Thousands</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground mb-3 text-balance">
            Michigan&apos;s Most Trusted<br />
            <span className="text-gradient">Junk Car Buyers</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Real numbers. Real people. Real cash, delivered fast across Detroit and all of Michigan.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl p-5 text-center border border-border shadow-sm hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="font-display text-3xl font-black text-foreground mb-0.5">
                <CountUp target={typeof stat.value === 'string' ? parseFloat(stat.value) : stat.value} suffix={stat.suffix} prefix={stat.prefix || ''} />
              </div>
              <div className="text-sm font-bold text-foreground">{stat.label}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Review Snippets */}
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {[
            {
              name: 'Marcus T.',
              city: 'Detroit, MI',
              text: 'Called around 9 about my dead Impala. Picked up before lunch, $650 cash. Nobody tried to change the price at the door.',
              stars: 5,
            },
            {
              name: 'Sandra K.',
              city: 'Dearborn, MI',
              text: "No title and I didn't know what to do. They explained the SOS stuff on the phone. $400 for my Explorer same day.",
              stars: 5,
            },
            {
              name: 'James R.',
              city: 'Warren, MI',
              text: 'Said $550 on the phone, showed up on time, paid $550. No weird fees when they got here.',
              stars: 5,
            },
          ].map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-card rounded-2xl p-5 border border-border shadow-sm"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div>
                <div className="text-sm font-bold text-foreground">{review.name}</div>
                <div className="text-xs text-muted-foreground">{review.city}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
