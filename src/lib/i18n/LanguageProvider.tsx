'use client';

import { createContext, useContext } from 'react';
import translations, { Languages } from './translations';
import { TranslationType } from './types';

const LanguageContext = createContext<TranslationType | null>(null);

export function LanguageProvider({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: Languages;
}) {
  const value = translations[lang] || translations.en;
  return (
    <LanguageContext.Provider value={value as unknown as TranslationType}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslations() {
  const context = useContext(LanguageContext);
  if (context === null) {
    throw new Error('useTranslations must be used within a LanguageProvider');
  }
  return context;
} 