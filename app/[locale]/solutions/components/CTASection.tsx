'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MessageCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'

const CTASection = () => {
  const t = useTranslations('solutions.cta')
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('title')}
            </h2>
            
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-12">
              {t('subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center space-x-2 shadow-lg"
              >
                <span>{t('getQuote')}</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors flex items-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>{t('contactUs')}</span>
              </motion.button>
            </div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{t('email.title')}</h3>
                    <p className="text-primary-100">sales@HankSound.com</p>
                  </div>
                </div>
                <p className="text-primary-100 text-sm">
                  {t('email.description')}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{t('phone.title')}</h3>
                    <p className="text-primary-100">86-755-86530235</p>
                  </div>
                </div>
                <p className="text-primary-100 text-sm">
                  {t('phone.description')}
                </p>
              </div>
            </motion.div>

            {/* Additional Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">24h</span>
                </div>
                <h4 className="text-white font-semibold mb-2">{t('benefits.quickResponse.title')}</h4>
                <p className="text-primary-100 text-sm">{t('benefits.quickResponse.description')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">15+</span>
                </div>
                <h4 className="text-white font-semibold mb-2">{t('benefits.experience.title')}</h4>
                <p className="text-primary-100 text-sm">{t('benefits.experience.description')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">100+</span>
                </div>
                <h4 className="text-white font-semibold mb-2">{t('benefits.products.title')}</h4>
                <p className="text-primary-100 text-sm">{t('benefits.products.description')}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
