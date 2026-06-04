'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const reviews = [
  {
    name: 'Marcus T.',
    city: 'Detroit, MI',
    rating: 5,
    text: 'Called around 9 on a Tuesday about my Impala that had been dead in the driveway for months. They were here before lunch and paid $650 cash. Price did not change when they showed up.',
    car: '2008 Chevy Impala',
    paid: '$650',
  },
  {
    name: 'Sandra K.',
    city: 'Dearborn, MI',
    rating: 5,
    text: "I didn't have the title and honestly thought I was out of luck. They told me what I needed from the Secretary of State over the phone. Explorer was picked up same day and I got $400.",
    car: '2005 Ford Explorer',
    paid: '$400',
  },
  {
    name: 'James R.',
    city: 'Warren, MI',
    rating: 5,
    text: 'They quoted $550 when I called. Showed up when they said they would and handed me $550. My wife already called them about her old van.',
    car: '2003 Dodge Ram',
    paid: '$550',
  },
  {
    name: 'Angela M.',
    city: 'Pontiac, MI',
    rating: 5,
    text: 'Grand Prix sat in the backyard forever, no tires even. Flatbed came out, did not charge me extra for how bad it was. $300 cash and I did not have to mess with it anymore.',
    car: '2001 Pontiac Grand Prix',
    paid: '$300',
  },
  {
    name: 'Tyrone B.',
    city: 'Southfield, MI',
    rating: 5,
    text: 'I got two other quotes first. These guys came in a little higher and towing was free. Sierra was gone in about four hours.',
    car: '2006 GMC Sierra',
    paid: '$800',
  },
  {
    name: 'Patricia L.',
    city: 'Livonia, MI',
    rating: 5,
    text: 'Filled out the form on my lunch break at work. They called back pretty quick. Driver was polite. Had cash by the end of the day.',
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
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">4.9 Average · 1,247 Reviews</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground mb-4 text-balance">
            Real Detroit Customers.<br />
            <span className="text-gradient-navy">Real Cash. Real Results.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don&apos;t take our word for it. Here&apos;s what your Michigan neighbors are saying.
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
                From first call to cash in hand, most customers are done in less than 4 hours.
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
