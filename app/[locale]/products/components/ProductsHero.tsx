'use client'

import { motion } from 'framer-motion'
import { Volume2, Wifi, Bluetooth } from 'lucide-react'
import { useTranslations } from 'next-intl'

const ProductsHero = () => {
  const t = useTranslations('products.hero')
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
{t('title')}
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold mb-8 text-blue-100"
          >
{t('subtitle')}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              {t('description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Volume2 className="h-12 w-12 mb-4 text-blue-300" />
              <h3 className="text-lg font-semibold mb-2">{t('features.amplifiers.title')}</h3>
              <p className="text-blue-100 text-center">{t('features.amplifiers.description')}</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Wifi className="h-12 w-12 mb-4 text-blue-300" />
              <h3 className="text-lg font-semibold mb-2">{t('features.wifi.title')}</h3>
              <p className="text-blue-100 text-center">{t('features.wifi.description')}</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Bluetooth className="h-12 w-12 mb-4 text-blue-300" />
              <h3 className="text-lg font-semibold mb-2">{t('features.bluetooth.title')}</h3>
              <p className="text-blue-100 text-center">{t('features.bluetooth.description')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProductsHero
