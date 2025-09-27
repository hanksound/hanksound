'use client'

import { motion } from 'framer-motion'
import { Volume2, Wifi, Bluetooth, Speaker, Zap, Cpu, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

const ProductCategories = () => {
  const t = useTranslations('products.categories')
  const categories = [
    {
      icon: Volume2,
      titleKey: 'amplifier',
      descriptionKey: 'amplifierDesc',
      productsKey: 'amplifierProducts',
      featuresKey: 'amplifierFeatures'
    },
    {
      icon: Wifi,
      titleKey: 'preamplifier',
      descriptionKey: 'preamplifierDesc',
      productsKey: 'preamplifierProducts',
      featuresKey: 'preamplifierFeatures'
    },
    {
      icon: Speaker,
      titleKey: 'networkDevice',
      descriptionKey: 'networkDeviceDesc',
      productsKey: 'networkDeviceProducts',
      featuresKey: 'networkDeviceFeatures'
    },
    {
      icon: Bluetooth,
      titleKey: 'speaker',
      descriptionKey: 'speakerDesc',
      productsKey: 'speakerProducts',
      featuresKey: 'speakerFeatures'
    },
    {
      icon: Zap,
      titleKey: 'audioBoard',
      descriptionKey: 'audioBoardDesc',
      productsKey: 'audioBoardProducts',
      featuresKey: 'audioBoardFeatures'
    },
    {
      icon: Cpu,
      titleKey: 'audioModule',
      descriptionKey: 'audioModuleDesc',
      productsKey: 'audioModuleProducts',
      featuresKey: 'audioModuleFeatures'
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

        <div className="space-y-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <category.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{t(`${category.titleKey}.title`)}</h3>
                      <p className="text-gray-600 mt-2">{t(category.descriptionKey)}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-800">{t('keyFeatures')}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {(() => {
                        try {
                          const features = t.raw(category.featuresKey) as string[];
                          return Array.isArray(features) ? features : [];
                        } catch {
                          return [];
                        }
                      })().map((feature: string) => (
                        <span
                          key={feature}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">{t('productsInCategory')}:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {(() => {
                      try {
                        const products = t.raw(category.productsKey) as string[];
                        return Array.isArray(products) ? products : [];
                      } catch {
                        return [];
                      }
                    })().map((product: string) => (
                      <div
                        key={product}
                        className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <ArrowRight className="h-4 w-4 text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCategories
