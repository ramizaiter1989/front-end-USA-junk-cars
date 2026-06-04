'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const reviews = [
  {
    name: 'Marcus T.',
    city: 'Detroit, MI',
    rating: 5,
    text: 'Called at 9am, they picked up my dead 2008 Chevy Impala by noon and paid me $650 cash on the spot. No games, no last-minute lowball. Best junk car experience I\'ve ever had.',
    car: '2008 Chevy Impala',
    paid: '$650',
  },
  {
    name: 'Sandra K.',
    city: 'Dearborn, MI',
    rating: 5,
    text: "I didn't have the title and was worried I couldn't sell. They walked me through the whole Michigan process step by step. Got $400 for my old Ford Explorer same day. Amazing.",
    car: '2005 Ford Explorer',
    paid: '$400',
  },
  {
    name: 'James R.',
    city: 'Warren, MI',
    rating: 5,
    text: 'Quoted me $550 online, showed up exactly on time, paid exactly $550. No surprise deductions, no last-minute excuses. These guys are the real deal. Already recommended to three neighbors.',
    car: '2003 Dodge Ram',
    paid: '$550',
  },
  {
    name: 'Angela M.',
    city: 'Pontiac, MI',
    rating: 5,
    text: 'My car was sitting in the backyard with no wheels for two years. They sent a flatbed truck, handled everything, and I walked away with $300 cash. No extra charge for the difficult pickup!',
    car: '2001 Pontiac Grand Prix',
    paid: '$300',
  },
  {
    name: 'Tyrone B.',
    city: 'Southfield, MI',
    rating: 5,
    text: 'I called three junk car places. These guys offered $200 more than anyone else AND included free towing. Picked up within 4 hours. 100% recommend for anyone in Metro Detroit.',
    car: '2006 GMC Sierra',
    paid: '$800',
  },
  {
    name: 'Patricia L.',
    city: 'Livonia, MI',
    rating: 5,
    text: 'Super smooth process. Filled out the form online, got a call in 5 minutes, had cash in my hand the same afternoon. The driver was professional and courteous. Exactly what was promised.',
    car: '2004 Honda Accord',
    paid: '$475',
  },
]

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ background: 'oklch(0.35 0.12 250)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full border border-accent/20 mb-4">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">4.9 Average — 1,247 Reviews</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground mb-4 text-balance">
            Real Detroit Customers.<br />
            <span className="text-gradient-navy">Real Cash. Real Results.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don&apos;t take our word for it — here&apos;s what your Michigan neighbors are saying.
          </p>
        </motion.div>

        {/* Review Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {reviews.map((review, i) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <Quote className="w-6 h-6 text-primary/20 mb-2" />
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                {review.text}
              </p>
              <div className="flex items-end justify-between pt-4 border-t border-border/50">
                <div>
                  <div className="text-sm font-bold text-foreground">{review.name}</div>
                  <div className="text-xs text-muted-foreground">{review.city}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{review.car}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Received</div>
                  <div className="font-display text-xl font-black text-primary">{review.paid}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Happy customer image + social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-white/10"
        >
          <div className="relative aspect-[21/7] sm:aspect-[21/6]">
            <Image
              src="/images/happy-customer.png"
              alt="Happy customer selling junk car in Detroit Michigan for cash"
              fill
              className="object-cover object-top"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-center px-8 sm:px-12">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl font-black text-foreground mb-2">
                Join <span className="text-gradient">12,400+</span> Happy<br />Michigan Sellers
              </h3>
              <p className="text-muted-foreground mb-4 max-w-sm">
                From first call to cash in hand — most customers are done in less than 4 hours.
              </p>
              <a
                href="#get-offer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-2xl amber-glow hover:brightness-110 transition-all"
              >
                Get My Free Offer Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
