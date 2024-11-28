"use client"
import { useParams } from 'next/navigation'
import translations, { getTranslations } from './translations'

export function useTranslations() {
  const { lang } = useParams()
  return translations[lang as keyof typeof translations]
} 