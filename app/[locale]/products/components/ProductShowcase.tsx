'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'
import { useTranslations } from 'next-intl'

const ProductShowcase = () => {
  const t = useTranslations('products.showcase')
  const featuredProducts = [
    {
      titleKey: 'amplifier',
      subtitleKey: 'amplifierSubtitle',
      descriptionKey: 'amplifierDescription',
      featuresKey: 'amplifierFeatures',
      image: '/images/bt-audio-amplifier-a50.jpg',
      productNameKey: 'amplifierProductName'
    },
    {
      titleKey: 'preamplifier',
      subtitleKey: 'preamplifierSubtitle',
      descriptionKey: 'preamplifierDescription',
      featuresKey: 'preamplifierFeatures',
      image: '/images/lp10-google-cast-streamer.jpg',
      productNameKey: 'preamplifierProductName'
    },
    {
      titleKey: 'networkDevice',
      subtitleKey: 'networkDeviceSubtitle',
      descriptionKey: 'networkDeviceDescription',
      featuresKey: 'networkDeviceFeatures',
      image: '/images/ha400-4-zone-amplifier.jpg',
      productNameKey: 'networkDeviceProductName'
    },
    {
      titleKey: 'speaker',
      subtitleKey: 'speakerSubtitle',
      descriptionKey: 'speakerDescription',
      featuresKey: 'speakerFeatures',
      image: '/images/wireless-surround-speakers.jpg',
      productNameKey: 'speakerProductName'
    },
    {
      titleKey: 'audioBoard',
      subtitleKey: 'audioBoardSubtitle',
      descriptionKey: 'audioBoardDescription',
      featuresKey: 'audioBoardFeatures',
      image: '/images/amp2-0.jpg',
      productNameKey: 'audioBoardProductName'
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

        <div className="space-y-20">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-xl shadow-lg mx-auto mb-4 flex items-center justify-center">
                      <Star className="h-16 w-16 text-blue-600" />
                    </div>
                    <p className="text-gray-600 font-medium">{t(`products.${product.productNameKey}`)}</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{t(`products.${product.titleKey}.title`)}</h3>
                    <h4 className="text-xl font-semibold text-blue-600 mb-4">{t(`products.${product.subtitleKey}`)}</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">{t(`products.${product.descriptionKey}`)}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <h5 className="text-lg font-semibold text-gray-800">{t('keyFeatures')}:</h5>
                    <div className="space-y-2">
                      {(() => {
                        try { 
                          const features = t.raw(`products.${product.featuresKey}`) as string[];
                          return Array.isArray(features) ? features : [];
                        } catch {
                          return [];
                        }
                      })().map((feature: string, featureIndex: number) => (
                        <div key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {t('learnMore')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase