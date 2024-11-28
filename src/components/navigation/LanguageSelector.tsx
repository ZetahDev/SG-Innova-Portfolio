"use client"
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
]

export function LanguageSelector() {
  const pathname = usePathname()
  const router = useRouter()
  const currentLang = pathname.split('/')[1]

  const switchLanguage = (langCode: string) => {
    const pathParts = pathname.split('/')
    pathParts[1] = langCode
    const newPath = pathParts.join('/')
    router.push(newPath)
  }

  return (
    <div className="relative inline-flex bg-zinc-800 rounded-full p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => switchLanguage(lang.code)}
          className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
            currentLang === lang.code
              ? 'text-white'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          {currentLang === lang.code && (
            <motion.div
              layoutId="activeLanguage"
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
              transition={{ type: "spring", duration: 0.5 }}
            />
          )}
          <span className="relative z-10">{lang.label}</span>
        </button>
      ))}
    </div>
  )
} 