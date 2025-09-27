import Header from '../components/Header'
import WirelessStreamingHero from './components/WirelessStreamingHero'
import ApplicationsSection from './components/ApplicationsSection'
import AdvantagesSection from './components/AdvantagesSection'
import TechnologiesSection from './components/TechnologiesSection'
import CTASection from './components/CTASection'

export default function WirelessStreamingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <WirelessStreamingHero />
        <ApplicationsSection />
        <AdvantagesSection />
        <TechnologiesSection />
        <CTASection />
      </div>
    </main>
  )
}
