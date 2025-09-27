'use client'

import Link from 'next/link'
import { Volume2, Wifi, Bluetooth, Smartphone, Speaker, Zap } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

const ProductsSectionServer = () => {
  const locale = useLocale()
  const t = useTranslations('products')
  
  const productCategories = [
    {
      icon: Volume2,
      titleKey: 'amplifier',
      products: ['A100', 'H50', 'M50', 'A50+', 'A30+']
    },
    {
      icon: Wifi,
      titleKey: 'preamplifier',
      products: ['LP10', 'BT10', 'BR10', 'BP50', 'S10+']
    },
    {
      icon: Speaker,
      titleKey: 'networkDevice',
      products: ['HA400', 'H400']
    },
    {
      icon: Bluetooth,
      titleKey: 'speaker',
      products: ['WBC65', 'CK30C', 'RK525']
    },
    {
      icon: Zap,
      titleKey: 'audioBoard',
      products: ['Up2Cast', 'Board Mini', 'Board Pro', 'Board 2.0']
    },
    {
      icon: Smartphone,
      titleKey: 'audioModule',
      products: ['Module A31', 'Module A97', 'Module A98']
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t(`categories.${category.titleKey}.title`)}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t(`categories.${category.titleKey}.description`)}
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Products:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.products.map((product, productIndex) => (
                      <span 
                        key={productIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link 
            href={`/${locale}/products`}
            className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center space-x-2"
          >
            <span>{t('viewAll')}</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductsSectionServer
