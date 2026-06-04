'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const cities = [
  { city: 'Detroit', zip: '48201', featured: true },
  { city: 'Dearborn', zip: '48124', featured: true },
  { city: 'Warren', zip: '48088', featured: true },
  { city: 'Sterling Heights', zip: '48310', featured: false },
  { city: 'Pontiac', zip: '48342', featured: true },
  { city: 'Ann Arbor', zip: '48104', featured: false },
  { city: 'Flint', zip: '48502', featured: false },
  { city: 'Lansing', zip: '48933', featured: false },
  { city: 'Southfield', zip: '48075', featured: false },
  { city: 'Troy', zip: '48084', featured: false },
  { city: 'Livonia', zip: '48150', featured: false },
  { city: 'Taylor', zip: '48180', featured: false },
  { city: 'Westland', zip: '48185', featured: false },
  { city: 'Farmington Hills', zip: '48334', featured: false },
  { city: 'Clinton Township', zip: '48035', featured: false },
  { city: 'Royal Oak', zip: '48067', featured: false },
  { city: 'Roseville', zip: '48066', featured: false },
  { city: 'Saginaw', zip: '48601', featured: false },
  { city: 'Kalamazoo', zip: '49001', featured: false },
  { city: 'Macomb', zip: '48042', featured: false },
]

export default function AreasSection() {
  return (
    <section id="areas" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full border border-primary/20 mb-4">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Service Areas</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground mb-4 text-balance">
            We Buy Junk Cars<br />
            <span className="text-gradient">Across All of Michigan</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From downtown Detroit to suburban neighborhoods: if you&apos;re in Michigan, we come to you. Free towing always.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {cities.map((item, i) => (
            <motion.div
              key={item.city}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={`rounded-2xl p-4 text-center border transition-all duration-200 hover:border-primary/40 cursor-default ${
                item.featured
                  ? 'glass border-primary/30 bg-primary/5'
                  : 'glass border-white/5'
              }`}
            >
              <MapPin className={`w-4 h-4 mx-auto mb-1.5 ${item.featured ? 'text-primary' : 'text-muted-foreground'}`} />
              <div className={`text-sm font-bold ${item.featured ? 'text-foreground' : 'text-muted-foreground'}`}>
                {item.city}
              </div>
              <div className="text-xs text-muted-foreground">{item.zip}</div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-6"
        >
          Don&apos;t see your city? Call{' '}
          <a href="tel:+12484172552" className="text-primary font-semibold hover:underline">
            (248) 417-2552
          </a>
          . We likely cover your area too.
        </motion.p>
      </div>
    </section>
  )
}
