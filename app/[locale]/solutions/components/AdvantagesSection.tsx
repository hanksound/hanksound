'use client'

import { motion } from 'framer-motion'
import { Code, Download, Shield, Home, DollarSign, Zap } from 'lucide-react'
import { useTranslations } from 'next-intl'

const AdvantagesSection = () => {
  const t = useTranslations('solutions.advantages')
  const advantages = [
    {
      icon: Code,
      titleKey: 'development',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Download,
      titleKey: 'update',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Shield,
      titleKey: 'stability',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Home,
      titleKey: 'smartHome',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: DollarSign,
      titleKey: 'costEffective',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Zap,
      titleKey: 'fastDelivery',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-primary-200"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${advantage.color} group-hover:scale-110 transition-transform flex-shrink-0`}>
                  <advantage.icon className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {t(`categories.${advantage.titleKey}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`categories.${advantage.titleKey}.description`)}
                  </p>
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">{t('stats.yearsExperience')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-600">{t('stats.productsAvailable')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">{t('stats.countriesServed')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">{t('stats.supportAvailable')}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AdvantagesSection
