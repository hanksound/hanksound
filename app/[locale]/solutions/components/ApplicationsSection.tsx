'use client'

import { motion } from 'framer-motion'
import { Home, Building, Utensils, TreePine, ShoppingBag, Mountain } from 'lucide-react'
import { useTranslations } from 'next-intl'

const ApplicationsSection = () => {
  const t = useTranslations('solutions.applications')
  const applications = [
    {
      icon: Home,
      titleKey: 'villa',
      color: 'bg-blue-100 text-blue-600',
      hoverColor: 'hover:bg-blue-200'
    },
    {
      icon: Home,
      titleKey: 'home',
      color: 'bg-green-100 text-green-600',
      hoverColor: 'hover:bg-green-200'
    },
    {
      icon: Building,
      titleKey: 'resort',
      color: 'bg-purple-100 text-purple-600',
      hoverColor: 'hover:bg-purple-200'
    },
    {
      icon: Utensils,
      titleKey: 'restaurant',
      color: 'bg-orange-100 text-orange-600',
      hoverColor: 'hover:bg-orange-200'
    },
    {
      icon: TreePine,
      titleKey: 'garden',
      color: 'bg-emerald-100 text-emerald-600',
      hoverColor: 'hover:bg-emerald-200'
    },
    {
      icon: ShoppingBag,
      titleKey: 'mall',
      color: 'bg-pink-100 text-pink-600',
      hoverColor: 'hover:bg-pink-200'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={app.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-primary-200"
            >
              <div className="text-center">
                <div className={`w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center ${app.color} ${app.hoverColor} transition-colors group-hover:scale-110`}>
                  <app.icon className="h-10 w-10" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {t(`categories.${app.titleKey}.title`)}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {t(`categories.${app.titleKey}.description`)}
                </p>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t('customSolutions.title')}
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('customSolutions.description')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ApplicationsSection