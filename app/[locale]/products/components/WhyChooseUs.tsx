'use client'

import { motion } from 'framer-motion'
import { Award, DollarSign, Wrench, Users, Shield, Zap } from 'lucide-react'
import { useTranslations } from 'next-intl'

const WhyChooseUs = () => {
  const t = useTranslations('products.whyChooseUs')
  const reasons = [
    {
      icon: Award,
      titleKey: 'expertise',
      descriptionKey: 'expertiseDesc'
    },
    {
      icon: DollarSign,
      titleKey: 'value',
      descriptionKey: 'valueDesc'
    },
    {
      icon: Wrench,
      titleKey: 'updates',
      descriptionKey: 'updatesDesc'
    },
    {
      icon: Users,
      titleKey: 'customer',
      descriptionKey: 'customerDesc'
    },
    {
      icon: Shield,
      titleKey: 'quality',
      descriptionKey: 'qualityDesc'
    },
    {
      icon: Zap,
      titleKey: 'innovation',
      descriptionKey: 'innovationDesc'
    }
  ]

  const productStats = [
    { labelKey: 'categories', value: '6+' },
    { labelKey: 'experience', value: '15+' },
    { labelKey: 'products', value: '50+' },
    { labelKey: 'countries', value: '30+' }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <reason.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t(`reasons.${reason.titleKey}.title`)}</h3>
              <p className="text-blue-100 leading-relaxed">{t(`reasons.${reason.descriptionKey}`)}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">{t('impact.title')}</h3>
            <p className="text-blue-100">{t('impact.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {productStats.map((stat, index) => (
              <motion.div
                key={stat.labelKey}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-300 mb-2">{stat.value}</div>
                <div className="text-blue-100 font-medium">{t(`stats.${stat.labelKey}`)}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">{t('cta.title')}</h3>
            <p className="text-blue-100 mb-6 text-lg">
              {t('cta.description')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
{t('cta.button')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
