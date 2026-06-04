'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Star, Shield, Zap, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const conditions = ['Runs & Drives', 'Starts, Won\'t Drive', 'Won\'t Start', 'Major Damage', 'Flood/Fire']
const makes = ['Ford', 'Chevrolet', 'Dodge', 'GMC', 'Chrysler', 'Pontiac', 'Buick', 'Cadillac', 'Jeep', 'Honda', 'Toyota', 'Nissan', 'Hyundai', 'Kia', 'BMW', 'Mercedes', 'Other']
const years = Array.from({ length: 30 }, (_, i) => (2025 - i).toString())

export default function Hero() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ year: '', make: '', model: '', mileage: '', condition: '', zip: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
    else setSubmitted(true)
  }

  const trustBadges = [
    { icon: Star, label: '4.9★ Rated', sub: '1,200+ Reviews' },
    { icon: Zap, label: 'Same-Day', sub: 'Pickup Available' },
    { icon: Shield, label: 'No Hidden', sub: 'Fees Ever' },
    { icon: TrendingUp, label: 'Up to $1,000', sub: 'Cash Paid' },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/detroit-skyline.png"
          alt="Detroit Michigan skyline at night"
          fill
          className="object-cover object-center opacity-75"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        {/* Ambient glow - navy */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: 'oklch(0.35 0.12 250)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-8"
          style={{ background: 'oklch(0.55 0.22 25)' }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Detroit&apos;s #1 Junk Car Buyer</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-foreground leading-[0.95] mb-6 text-balance"
            >
              Turn Your{' '}
              <span className="text-gradient-navy">Junk Car</span>
              <br />
              Into{' '}
              <span className="text-gradient">Cash Today</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
            >
              We buy junk cars across Detroit &amp; Michigan — <strong className="text-foreground">running or not</strong>.
              Get an instant offer, free same-day towing, and up to{' '}
              <strong className="text-accent">$1,000 cash</strong> in your hand. No title? No problem.
            </motion.p>

            {/* Trust Badges Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
            >
              {trustBadges.map((badge) => (
                <div key={badge.label} className="bg-card rounded-2xl p-3 text-center border border-border shadow-sm">
                  <badge.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                  <div className="text-xs font-bold text-foreground">{badge.label}</div>
                  <div className="text-[10px] text-muted-foreground">{badge.sub}</div>
                </div>
              ))}
            </motion.div>

            {/* Call CTA */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href="tel:+12484172552"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-accent text-accent-foreground font-black text-xl px-8 py-4 rounded-2xl red-glow transition-all duration-200"
            >
              <Phone className="w-6 h-6" />
              (248) 417-2552
              <span className="text-sm font-normal opacity-90 ml-1">Call Now</span>
            </motion.a>

            {/* Guarantees */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mt-6"
            >
              {['Free Towing Included', 'No Hidden Fees', 'Lost Title Help', 'Same-Day Pickup'].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Quote Form */}
          <motion.div
            id="get-offer"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-full"
          >
            <div className="bg-card rounded-3xl border border-border p-6 sm:p-8 shadow-xl">
              {!submitted ? (
                <>
                  {/* Form Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="font-display text-2xl font-bold text-foreground">Get Your Free Offer</h2>
                      <div className="text-xs text-muted-foreground">Step {step} of 3</div>
                    </div>
                    {/* Progress */}
                    <div className="flex gap-1.5">
                      {[1, 2, 3].map((s) => (
                        <div
                          key={s}
                          className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                            s <= step ? 'bg-accent' : 'bg-border'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {step === 1 && 'Tell us about your vehicle'}
                      {step === 2 && 'Vehicle condition & mileage'}
                      {step === 3 && 'Your contact info for the offer'}
                    </p>
                  </div>

                  {/* Step 1 */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="text-sm font-semibold text-foreground mb-1.5 block">Year</label>
                        <select
                          value={form.year}
                          onChange={(e) => setForm({ ...form, year: e.target.value })}
                          className="w-full bg-secondary border border-border text-foreground rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                        >
                          <option value="">Select year...</option>
                          {years.map((y) => <option key={y} value={y}>{y}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-foreground mb-1.5 block">Make</label>
                        <select
                          value={form.make}
                          onChange={(e) => setForm({ ...form, make: e.target.value })}
                          className="w-full bg-secondary border border-border text-foreground rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                        >
                          <option value="">Select make...</option>
                          {makes.map((m) => <option key={m} value={m}>{m}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-foreground mb-1.5 block">Model</label>
                        <input
                          type="text"
                          placeholder="e.g. F-150, Silverado, Camry..."
                          value={form.model}
                          onChange={(e) => setForm({ ...form, model: e.target.value })}
                          className="w-full bg-secondary border border-border text-foreground placeholder:text-muted-foreground rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="text-sm font-semibold text-foreground mb-1.5 block">Condition</label>
                        <div className="grid grid-cols-1 gap-2">
                          {conditions.map((c) => (
                            <button
                              key={c}
                              onClick={() => setForm({ ...form, condition: c })}
                              className={`text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 ${
                                form.condition === c
                                  ? 'border-accent bg-accent/10 text-accent'
                                  : 'border-border bg-secondary text-muted-foreground hover:border-accent/50'
                              }`}
                            >
                              {c}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-foreground mb-1.5 block">Approximate Mileage</label>
                        <input
                          type="text"
                          placeholder="e.g. 150,000"
                          value={form.mileage}
                          onChange={(e) => setForm({ ...form, mileage: e.target.value })}
                          className="w-full bg-secondary border border-border text-foreground placeholder:text-muted-foreground rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3 */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="text-sm font-semibold text-foreground mb-1.5 block">ZIP Code</label>
                        <input
                          type="text"
                          placeholder="Detroit area ZIP, e.g. 48201"
                          value={form.zip}
                          onChange={(e) => setForm({ ...form, zip: e.target.value })}
                          className="w-full bg-secondary border border-border text-foreground placeholder:text-muted-foreground rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                          maxLength={5}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-foreground mb-1.5 block">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="(xxx) xxx-xxxx"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-secondary border border-border text-foreground placeholder:text-muted-foreground rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                        <p className="text-xs text-muted-foreground mt-1.5">We&apos;ll text or call with your offer within minutes.</p>
                      </div>
                    </motion.div>
                  )}

                  {/* Next/Submit button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleNext}
                    className="w-full mt-6 bg-accent text-accent-foreground font-bold py-4 rounded-2xl text-lg flex items-center justify-center gap-2 red-glow transition-all duration-200 hover:brightness-110"
                  >
                    {step < 3 ? (
                      <>Next Step <ArrowRight className="w-5 h-5" /></>
                    ) : (
                      <>Get My Free Offer Now <ArrowRight className="w-5 h-5" /></>
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-muted-foreground mt-3">
                    100% Free • No Obligation • Takes 60 Seconds
                  </p>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 red-glow">
                    <CheckCircle2 className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Request Received!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We&apos;ll call or text you at <strong className="text-foreground">{form.phone}</strong> within the next 10 minutes with your cash offer.
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">Need it faster? Call us directly:</p>
                  <a
                    href="tel:+12484172552"
                    className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-6 py-3 rounded-2xl red-glow"
                  >
                    <Phone className="w-5 h-5" />
                    (248) 417-2552
                  </a>
                </motion.div>
              )}
            </div>

            {/* Car image below form on mobile */}
            <div className="mt-4 rounded-2xl overflow-hidden border border-border relative aspect-[16/7] shadow-lg">
              <Image
                src="/images/junk-car-hero.png"
                alt="Junk car for sale in Detroit Michigan"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-accent/90 text-accent-foreground px-3 py-1.5 rounded-xl text-xs font-bold">
                  Any Condition — We Buy It
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
