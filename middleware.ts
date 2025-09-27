import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { supportedLocales, defaultLocale, isValidLocale, extractLocaleFromPath, removeLocaleFromPath } from './lib/i18n/locales';

// 创建中间件
const intlMiddleware = createMiddleware({
  locales: supportedLocales,
  defaultLocale,
  localePrefix: 'always',
  // 当语言不支持时自动重定向到默认语言
  localeDetection: true
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // 提取路径中的语言代码
  const segments = pathname.split('/');
  const locale = segments[1];
  
  // 如果路径有语言代码但不是支持的语言
  if (locale && !isValidLocale(locale)) {
    // 先检查移除语言代码后的路径是否是有效路由
    const pathWithoutLocale = '/' + segments.slice(2).join('/') || '/';
    
    // 定义有效的路由模式
    const validRoutes = [
      '/',
      '/contact',
      '/products', 
      '/solutions'
    ];
    
    // 检查路径是否匹配有效路由
    const isValidRoute = validRoutes.some(route => {
      if (route === '/') {
        return pathWithoutLocale === '/';
      }
      // 精确匹配或匹配子路径（如 /products 匹配 /products 和 /products/xxx）
      return pathWithoutLocale === route || pathWithoutLocale.startsWith(route + '/');
    });
    
    // 只有路径是有效路由且语言不支持时，才重定向到默认语言
    if (isValidRoute) {
      const url = request.nextUrl.clone();
      url.pathname = `/${defaultLocale}${pathWithoutLocale}`;
      return Response.redirect(url);
    }
    
    // 如果路径本身无效，让Next.js处理404
    return NextResponse.next();
  }

  // 使用next-intl中间件处理其他逻辑
  return intlMiddleware(request);
}

export const config = {
  // 匹配所有路径，让中间件决定如何处理
  matcher: [
    // 匹配所有路径除了静态文件和API路由
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ]
};
