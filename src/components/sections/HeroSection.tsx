"use client"
import { motion } from "framer-motion"
import { TypewriterEffect } from "../ui/typewriter-effect"
import { useTranslations } from "@/lib/i18n/LanguageProvider"

export function HeroSection() {
  const t = useTranslations()
  
  // Mantenemos los estilos pero usamos el contenido de las traducciones
  const words = t.hero.title.map(item => ({
    ...item,
    className: item.text === "Innovation" || item.text === "Business" || 
               item.text === "Innovación" || item.text === "Negocio" 
      ? "text-purple-500 dark:text-purple-500"
      : item.text === "Technology" || item.text === "Tecnología"
      ? "text-cyan-500 dark:text-cyan-500"
      : "text-white dark:text-white"
  }))

  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden py-20">
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="mb-8">
          <TypewriterEffect words={words} />
        </div>

        <motion.p 
          className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {t.hero.subtitle}
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:opacity-90 transition-opacity"
          >
            {t.hero.cta.services}
          </motion.button>
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="px-8 py-3 rounded-lg border border-zinc-700 text-white font-medium hover:bg-zinc-900 transition-colors"
          >
            {t.hero.cta.contact}
          </motion.button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 w-full h-full">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  )
} 