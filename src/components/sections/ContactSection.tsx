"use client"
import { BackgroundGradient } from "../ui/background-gradient"
import { useState } from "react"
import { useTranslations } from "@/lib/i18n/LanguageProvider"

export function ContactSection() {
  const t = useTranslations()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí implementarías la lógica de envío del formulario
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          {t.contact.title}
        </h2>

        <BackgroundGradient className="rounded-[22px] p-8 sm:p-16 bg-zinc-900">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-white mb-2"
              >
                {t.contact.form.name}
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  name: e.target.value
                }))}
                required
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-white mb-2"
              >
                {t.contact.form.email}
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  email: e.target.value
                }))}
                required
              />
            </div>

            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-white mb-2"
              >
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  message: e.target.value
                }))}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:opacity-90 transition-opacity"
            >
              {t.contact.form.submit}
            </button>
          </form>
        </BackgroundGradient>
      </div>
    </section>
  )
} 