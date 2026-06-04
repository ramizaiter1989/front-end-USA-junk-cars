import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import StatsSection from '@/components/stats-section'
import HowItWorks from '@/components/how-it-works'
import PricingSection from '@/components/pricing-section'
import ReviewsSection from '@/components/reviews-section'
import FAQSection from '@/components/faq-section'
import AreasSection from '@/components/areas-section'
import Footer from '@/components/footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'
import StickyCTA from '@/components/sticky-cta'

export default function Page() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsSection />
      <HowItWorks />
      <PricingSection />
      <ReviewsSection />
      <FAQSection />
      <AreasSection />
      <Footer />
      <MobileBottomNav />
      <StickyCTA />
    </main>
  )
}
