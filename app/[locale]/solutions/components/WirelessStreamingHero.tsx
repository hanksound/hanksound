'use client'

import { motion } from 'framer-motion'
import { Wifi, Bluetooth, Radio, Smartphone } from 'lucide-react'
import { useTranslations } from 'next-intl'

const WirelessStreamingHero = () => {
  const t = useTranslations('solutions.hero')
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                {t('title')}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('subtitle')}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('description')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                {t('getQuotation')}
              </button>
              <button className="border border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                {t('learnMore')}
              </button>
            </div>
          </motion.div>

          {/* Right Content - Technology Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {t('sectionTitle')}
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Wifi className="h-10 w-10 text-primary-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{t('technologies.wifi.title')}</h4>
                  <p className="text-sm text-gray-600">{t('technologies.wifi.description')}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Bluetooth className="h-10 w-10 text-primary-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{t('technologies.bluetooth.title')}</h4>
                  <p className="text-sm text-gray-600">{t('technologies.bluetooth.description')}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Radio className="h-10 w-10 text-primary-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{t('technologies.auracast.title')}</h4>
                  <p className="text-sm text-gray-600">{t('technologies.auracast.description')}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Smartphone className="h-10 w-10 text-primary-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{t('technologies.mobile.title')}</h4>
                  <p className="text-sm text-gray-600">{t('technologies.mobile.description')}</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-primary-200 rounded-full opacity-60"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-300 rounded-full opacity-40"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WirelessStreamingHero
