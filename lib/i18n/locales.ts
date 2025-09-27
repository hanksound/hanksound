// 支持的语言配置
export const supportedLocales = ['en', 'zh', 'ja'] as const;
export const defaultLocale = 'en' as const;

export type SupportedLocale = typeof supportedLocales[number];

// 语言显示信息
export const localeNames = {
  en: { name: 'English', flag: '🇺🇸' },
  zh: { name: '中文', flag: '🇨🇳' },
  ja: { name: '日本語', flag: '🇯🇵' }
} as const;

// 验证语言代码是否支持
export function isValidLocale(locale: string): locale is SupportedLocale {
  return supportedLocales.includes(locale as SupportedLocale);
}

// 获取有效的语言代码，如果不支持则返回默认语言
export function getValidLocale(locale: string | undefined): SupportedLocale {
  if (locale && isValidLocale(locale)) {
    return locale;
  }
  return defaultLocale;
}

// 从路径中提取语言代码
export function extractLocaleFromPath(pathname: string): string | null {
  const segments = pathname.split('/');
  const locale = segments[1];
  return locale || null;
}

// 从路径中移除语言代码
export function removeLocaleFromPath(pathname: string): string {
  const segments = pathname.split('/');
  if (segments[1]) {
    // 如果第一个段看起来像语言代码（2-3个字符），就移除它
    if (segments[1].length >= 2 && segments[1].length <= 3) {
      return '/' + segments.slice(2).join('/') || '/';
    }
  }
  return pathname;
}
