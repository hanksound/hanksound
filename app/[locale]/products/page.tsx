import Header from '../components/Header'
import ProductsHero from './components/ProductsHero'
import ProductCategories from './components/ProductCategories'
import ProductShowcase from './components/ProductShowcase'
import WhyChooseUs from './components/WhyChooseUs'

export const metadata = {
  title: 'Products - HankSound Home Audio System Products',
  description: 'Discover HankSound\'s complete range of wireless audio products including amplifiers, preamplifiers, speakers, and audio boards for your home audio system.',
  keywords: 'wireless audio amplifier, wireless audio preamplifier, wireless speakers, audio boards, home audio system',
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <ProductsHero />
        <ProductCategories />
        <ProductShowcase />
        <WhyChooseUs />
      </div>
    </main>
  )
}
