'use client'

import { motion } from 'framer-motion'
import { Wifi, Bluetooth, Radio, Mic, Mic2, Zap, Speaker, Tv, Home, Radio as RadioIcon, Volume2, Smartphone, Headphones, Music, Settings } from 'lucide-react'
import { useTranslations } from 'next-intl'

const TechnologiesSection = () => {
  const t = useTranslations('solutions.technologies')
  const technologies = [
    { icon: Wifi, name: 'WiFi', description: 'High-speed wireless connectivity' },
    { icon: Bluetooth, name: 'Bluetooth 5.0', description: 'Advanced Bluetooth audio streaming' },
    { icon: Radio, name: 'Auracast', description: 'Next-generation audio broadcasting' },
    { icon: RadioIcon, name: 'TX/RX', description: 'Transmitter and receiver systems' },
    { icon: Smartphone, name: 'Mobile App', description: 'iOS and Android applications' },
    { icon: Zap, name: 'Wireless Charging', description: 'Convenient charging solutions' },
    { icon: Volume2, name: 'Amplification', description: 'High-quality audio amplification' },
    { icon: Speaker, name: 'Multi-room', description: 'Whole home audio distribution' },
    { icon: Home, name: 'Smart Home', description: 'Home automation integration' },
    { icon: RadioIcon, name: 'DAB/FM', description: 'Digital and analog radio' },
    { icon: Mic, name: 'Voice Control', description: 'Near and far-field voice commands' },
    { icon: Music, name: 'Lossless Audio', description: 'High-resolution audio formats' },
    { icon: Headphones, name: 'Multi-zone', description: 'Independent audio zones' },
    { icon: Settings, name: 'API Integration', description: 'Developer-friendly APIs' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
{t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
{t('subtitle')}
          </motion.p>
        </div>

        {/* Main Technology Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Wifi className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('categories.wireless.title')}</h3>
            <p className="text-gray-600">{t('categories.wireless.description')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Speaker className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('categories.audio.title')}</h3>
            <p className="text-gray-600">{t('categories.audio.description')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Smartphone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('categories.mobile.title')}</h3>
            <p className="text-gray-600">{t('categories.mobile.description')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Home className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('categories.smart.title')}</h3>
            <p className="text-gray-600">{t('categories.smart.description')}</p>
          </motion.div>
        </div>

        {/* Detailed Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-gray-50 rounded-xl hover:bg-primary-50 transition-all duration-300 p-4 text-center hover:shadow-md"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                <tech.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-primary-700 transition-colors">
                {tech.name}
              </h3>
              <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Audio Technology Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">{t('highlight.title')}</h3>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            {t('highlight.description')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologiesSection
