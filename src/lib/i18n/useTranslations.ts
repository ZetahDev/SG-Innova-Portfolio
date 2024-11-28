"use client"
import { useParams } from 'next/navigation'
import translations from './translations'

export function useTranslations() {
  const { lang } = useParams()
  return translations[lang as keyof typeof translations]
}

export function getTranslations(lang: string) {
  return translations[lang as keyof typeof translations] || translations.en
} 