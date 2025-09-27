'use client'

import { Cpu, Code, Palette, Smartphone, Factory, Package } from 'lucide-react'
import { useTranslations } from 'next-intl'

const ServicesSectionServer = () => {
  const t = useTranslations('services')
  
  const services = [
    {
      icon: Cpu,
      titleKey: 'hardwareDesign',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Code,
      titleKey: 'softwareDesign',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Palette,
      titleKey: 'idmdDesign',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Smartphone,
      titleKey: 'appDevelopment',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Factory,
      titleKey: 'manufacture',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Package,
      titleKey: 'componentsDistributor',
      color: 'bg-indigo-100 text-indigo-600'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${service.color}`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t(`categories.${service.titleKey}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`categories.${service.titleKey}.description`)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSectionServer
