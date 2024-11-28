import { LanguageProvider } from '@/lib/i18n/LanguageProvider';
import { NavigationMenu } from '@/components/navigation/NavigationMenu';
import { Footer } from '@/components/navigation/Footer';

export default function LocaleLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <LanguageProvider lang={lang as 'en' | 'es'}>
      <div className="flex min-h-screen flex-col">
        <NavigationMenu />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
} 