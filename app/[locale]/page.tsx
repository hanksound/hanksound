import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProductsSection from './components/ProductsSection'
import ServicesSection from './components/ServicesSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ServicesSection />
      </div>
    </main>
  )
}
