'use client'

import { useTranslations, useLocale } from 'next-intl'

const HeroSectionServer = () => {
  const t = useTranslations('hero')
  const locale = useLocale()
  
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                {t('title')}
              </h1>
              <div className="flex items-center space-x-4 text-lg text-gray-600">
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  {t('subtitle')}
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('description')}
              </p>
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href={`/${locale}/contact`}
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button className="border border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </div> */}
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-6">
                {/* Audio Equipment Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-primary-600 font-bold">A</span>
                    </div>
                    <h3 className="font-semibold text-sm">{t('amplifier')}</h3>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-primary-600 font-bold">S</span>
                    </div>
                    <h3 className="font-semibold text-sm">{t('streamer')}</h3>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-primary-600 font-bold">B</span>
                    </div>
                    <h3 className="font-semibold text-sm">{t('board')}</h3>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-primary-600 font-bold">M</span>
                    </div>
                    <h3 className="font-semibold text-sm">{t('module')}</h3>
                  </div>
                </div>

                {/* Technology Icons */}
                <div className="flex justify-center space-x-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-sm">WiFi</span>
                    </div>
                    <span className="text-xs text-gray-600">{t('wifi')}</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-sm">BT</span>
                    </div>
                    <span className="text-xs text-gray-600">{t('bluetooth')}</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-sm">APP</span>
                    </div>
                    <span className="text-xs text-gray-600">{t('app')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Static decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-200 rounded-full opacity-60" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-300 rounded-full opacity-40" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSectionServer
