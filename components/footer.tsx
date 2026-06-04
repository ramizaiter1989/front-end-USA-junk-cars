'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Car, Shield, Clock, Star } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* SEO Content Block */}
      <div className="relative z-10 bg-secondary/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                Sell My Junk Car Online — Detroit &amp; Michigan
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                SellMyJunkCar.online is Michigan&apos;s premier junk car buying platform serving Detroit,
                Dearborn, Warren, Pontiac, Ann Arbor, Flint, Lansing, and all Metro Detroit communities.
                We buy junk cars, salvage cars, wrecked cars, flood-damaged vehicles, and any end-of-life
                vehicle regardless of condition, year, make, or model. Our transparent, no-hassle process
                delivers instant cash offers and same-day free towing across the entire state of Michigan.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                We Buy Junk Cars In These Michigan Cities
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Detroit', 'Dearborn', 'Warren', 'Pontiac', 'Southfield',
                  'Sterling Heights', 'Troy', 'Livonia', 'Ann Arbor', 'Flint',
                  'Lansing', 'Taylor', 'Westland', 'Clinton Township', 'Royal Oak',
                  'Roseville', 'Farmington Hills', 'Macomb', 'Saginaw', 'Kalamazoo',
                ].map((city) => (
                  <span key={city} className="text-xs text-muted-foreground px-2 py-1 rounded-lg bg-muted border border-border hover:text-primary transition-colors">
                    {city}, MI
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <Car className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-foreground block leading-none">
                  SellMyJunk<span className="text-primary">Car</span>
                </span>
                <span className="text-[10px] text-muted-foreground tracking-widest uppercase">.online</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Detroit&apos;s trusted junk car buyer. Instant offers, free towing, cash on pickup — 7 days a week.
            </p>
            <div className="flex gap-2">
              {[
                { icon: Shield, label: 'Licensed' },
                { icon: Star, label: '4.9 Rated' },
                { icon: Clock, label: 'Same Day' },
              ].map((b) => (
                <div key={b.label} className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl bg-muted border border-border text-center">
                  <b.icon className="w-3.5 h-3.5 text-primary" />
                  <span className="text-[10px] text-muted-foreground font-semibold">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Get Free Offer', href: '#get-offer' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'What We Pay', href: '#pricing' },
                { label: 'Customer Reviews', href: '#reviews' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Service Areas', href: '#areas' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                'Cash for Junk Cars',
                'Free Towing & Pickup',
                'Same-Day Service',
                'No Title Assistance',
                'Salvage Car Buying',
                'Flood Car Removal',
                'Free Instant Quotes',
                'Michigan Title Help',
              ].map((service) => (
                <li key={service} className="text-sm text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+12484172552"
                className="flex items-center gap-3 p-3 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors group"
              >
                <Phone className="w-4 h-4 text-primary" />
                <div>
                  <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">(248) 417-2552</div>
                  <div className="text-xs text-muted-foreground">Call or Text Anytime</div>
                </div>
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-foreground font-medium">Detroit, Michigan</div>
                  <div>Serving all Metro Detroit &amp; Michigan</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>Mon–Sun, 7am – 9pm EST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            &copy; 2025 SellMyJunkCar.online — Detroit, Michigan. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
