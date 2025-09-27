import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {Inter} from 'next/font/google';
import '../../public/css/globals.css';
import { supportedLocales, isValidLocale } from '@/lib/i18n/locales';

const inter = Inter({subsets: ['latin']});

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!isValidLocale(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
