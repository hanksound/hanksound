'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

interface MenuItem {
  name: string
  href: string
}

interface MobileMenuProps {
  menuItems: MenuItem[]
}

const MobileMenu = ({ menuItems }: MobileMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    // 移除末尾的斜杠进行标准化比较
    const normalizedHref = href.endsWith('/') ? href.slice(0, -1) : href
    const normalizedPathname = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
    
    // 如果是首页路由，只匹配完全相等
    if (normalizedHref === `/${pathname.split('/')[1]}`) {
      return normalizedPathname === normalizedHref
    }
    
    // 其他路由使用 startsWith 匹配
    return normalizedPathname.startsWith(normalizedHref)
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 w-full bg-white shadow-lg border-t border-gray-200 z-40">
          <div className="px-4 py-3 space-y-1">
            {menuItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    active
                      ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}

export default MobileMenu
