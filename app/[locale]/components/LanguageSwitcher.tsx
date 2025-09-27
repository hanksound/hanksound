'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Globe } from 'lucide-react'
import { useState } from 'react'
import { supportedLocales, defaultLocale, localeNames, getValidLocale, removeLocaleFromPath } from '@/lib/i18n/locales'

const LanguageSwitcher = () => {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // 确保当前语言是支持的，如果不是则使用默认语言
  const validLocale = getValidLocale(locale)
  const currentLanguage = {
    code: validLocale,
    name: localeNames[validLocale].name,
    flag: localeNames[validLocale].flag
  }

  const handleLanguageChange = (newLocale: string) => {
    // 验证新语言是否支持
    const validNewLocale = getValidLocale(newLocale)
    
    if (validNewLocale !== newLocale) {
      console.warn(`Unsupported locale: ${newLocale}, falling back to default: ${validNewLocale}`)
    }

    // Remove the current locale from the pathname
    const pathWithoutLocale = removeLocaleFromPath(pathname)
    // Navigate to the new locale
    router.push(`/${validNewLocale}${pathWithoutLocale}`)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
      >
        <Globe className="h-4 w-4" />
        <span>{currentLanguage?.flag}</span>
        <span className="hidden sm:inline">{currentLanguage?.name}</span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-20">
            <div className="py-1">
              {supportedLocales.map((localeCode) => (
                <button
                  key={localeCode}
                  onClick={() => handleLanguageChange(localeCode)}
                  className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-3 hover:bg-gray-100 transition-colors ${
                    validLocale === localeCode ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                  }`}
                >
                  <span>{localeNames[localeCode].flag}</span>
                  <span>{localeNames[localeCode].name}</span>
                  {validLocale === localeCode && (
                    <span className="ml-auto text-primary-600">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default LanguageSwitcher
