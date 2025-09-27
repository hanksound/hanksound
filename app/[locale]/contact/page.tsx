import Header from '../components/Header'
import ContactHero from './components/ContactHero'
import ContactForm from './components/ContactForm'
import B2BSales from './components/B2BSales'

export const metadata = {
  title: 'Contact Us - HankSound Audio Supplier',
  description: 'Get in touch with HankSound for OEM/ODM inquiries, business partnerships, and technical support. Contact our CEO Ryan for B2B sales.',
  keywords: 'contact HankSound, audio supplier, OEM ODM, B2B sales, wireless audio, business inquiry',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <ContactHero />
        <ContactForm />
        <B2BSales />
      </div>
    </main>
  )
}
