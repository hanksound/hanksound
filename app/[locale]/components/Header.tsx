'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import MobileMenu from './MobileMenu'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const t = useTranslations('navigation')
  const locale = useLocale()
  const pathname = usePathname()
  
  const menuItems = [
    { name: t('home'), href: `/${locale}` },
    { name: t('solutions'), href: `/${locale}/solutions` },
    { name: t('products'), href: `/${locale}/products` },
    { name: t('contact'), href: `/${locale}/contact` }
  ]

  const isActive = (href: string) => {
    // 移除末尾的斜杠进行标准化比较
    const normalizedHref = href.endsWith('/') ? href.slice(0, -1) : href
    const normalizedPathname = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
    
    // 如果是首页路由，只匹配完全相等
    if (normalizedHref === `/${locale}`) {
      return normalizedPathname === normalizedHref
    }
    
    // 其他路由使用 startsWith 匹配
    return normalizedPathname.startsWith(normalizedHref)
  }

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-1 md:flex-none">
            <Link href={`/${locale}`} className="flex items-center">
              <div className="text-2xl font-bold text-primary-600">
                HankSound
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Language Switcher */}
          <LanguageSwitcher />
          {/* Mobile Menu Component */}
          <MobileMenu menuItems={menuItems} />
        </div>
      </div>
    </header>
  )
}

export default Header
