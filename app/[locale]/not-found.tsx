'use client'

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function NotFound() {
  const t = useTranslations('notFound')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 图片/图标 */}
        <div className="mb-8">
          <div className="mx-auto w-64 h-64 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center mb-6">
            <div className="text-8xl font-bold text-blue-600">404</div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('title')}</h1>
          <p className="text-lg text-gray-600 mb-8">
            {t('description')}
          </p>
        </div>

        {/* 操作按钮 */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            {t('backToHome')}
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {t('goBack')}
          </button>
        </div>

        {/* 帮助信息 */}
        <div className="mt-8 text-sm text-gray-500">
          <p>{t('helpText')}</p>
        </div>
      </div>
    </div>
  )
}
