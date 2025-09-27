'use client'

import { Users, Award, Clock, Shield } from 'lucide-react'
import { useTranslations } from 'next-intl'

const AboutSectionServer = () => {
  const t = useTranslations('about')
  
  const features = [
    {
      icon: Users,
      title: t('features.professionalTeam.title'),
      description: t('features.professionalTeam.description')
    },
    {
      icon: Award,
      title: t('features.qualityProducts.title'),
      description: t('features.qualityProducts.description')
    },
    {
      icon: Clock,
      title: t('features.quickResponse.title'),
      description: t('features.quickResponse.description')
    },
    {
      icon: Shield,
      title: t('features.customSolutions.title'),
      description: t('features.customSolutions.description')
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center group">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <IconComponent className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AboutSectionServer
