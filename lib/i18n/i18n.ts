import {getRequestConfig} from 'next-intl/server';
import { getValidLocale, defaultLocale } from './locales';

export default getRequestConfig(async ({locale}) => {
  // 验证语言代码是否支持，如果不支持则使用默认语言
  const validLocale = getValidLocale(locale);
  
  try {
    // 尝试加载翻译文件
    const messages = (await import(`../../messages/${validLocale}.json`)).default;
    
    return {
      locale: validLocale,
      messages
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${validLocale}`, error);
    
    // 如果加载失败，回退到默认语言
    const fallbackMessages = (await import(`../../messages/${defaultLocale}.json`)).default;
    
    return {
      locale: defaultLocale,
      messages: fallbackMessages
    };
  }
});