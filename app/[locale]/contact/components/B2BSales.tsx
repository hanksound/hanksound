'use client'

import { motion } from 'framer-motion'
import { Mail, User, Building2, Users, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

const B2BSales = () => {
  const t = useTranslations('contact.b2b')
  const b2bFeatures = [
    {
      icon: Building2,
      titleKey: 'oemOdm',
      descriptionKey: 'oemOdmDesc'
    },
    {
      icon: Users,
      titleKey: 'partnerships',
      descriptionKey: 'partnershipsDesc'
    },
    {
      icon: User,
      titleKey: 'ceoContact',
      descriptionKey: 'ceoContactDesc'
    },
    {
      icon: Mail,
      titleKey: 'prioritySupport',
      descriptionKey: 'prioritySupportDesc'
    }
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* CEO Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white"
          >
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{t('ceo.name')}</h3>
              <p className="text-blue-100 text-lg">{t('ceo.title')}</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-200" />
                <div>
                  <p className="text-blue-100 text-sm">{t('ceo.emailLabel')}:</p>
                  <a 
                    href="mailto:sales@HankSound.com" 
                    className="text-white font-semibold hover:text-blue-200 transition-colors"
                  >
                    sales@HankSound.com
                  </a>
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/20">
                <p className="text-blue-100 text-sm mb-2">{t('ceo.forLabel')}:</p>
                <p className="text-white font-medium">{t('ceo.forDescription')}</p>
              </div>
            </div>

            <motion.a
              href="mailto:sales@HankSound.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
{t('ceo.contactButton')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.a>
          </motion.div>

          {/* B2B Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('whyChoose.title')}</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {t('whyChoose.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {b2bFeatures.map((feature, index) => (
                <motion.div
                  key={feature.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t(`features.${feature.titleKey}.title`)}</h4>
                  <p className="text-gray-600 text-sm">{t(`features.${feature.descriptionKey}`)}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-blue-50 rounded-xl p-6"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('cta.title')}</h4>
              <p className="text-gray-600 mb-4">
                {t('cta.description')}
              </p>
              <motion.a
                href="mailto:sales@HankSound.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
{t('cta.button')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default B2BSales
