"use client"
import { HoverEffect } from "../ui/card-hover-effect"
import { BackgroundGradient } from "../ui/background-gradient"
import { useTranslations } from "@/lib/i18n/LanguageProvider"

export function ServicesSection() {
  const t = useTranslations()
  
  const services = [
    {
      title: t.services.software.title,
      description: t.services.software.description,
      icon: "💻",
      link: "/services/software",
      features: t.services.software.features
    },
    {
      title: t.services.consulting.title,
      description: t.services.consulting.description,
      icon: "🤝",
      link: "/services/consulting",
      features: t.services.consulting.features
    },
    {
      title: t.services.blockchain.title,
      description: t.services.blockchain.description,
      icon: "⛓️",
      link: "/services/blockchain",
      features: t.services.blockchain.features
    },
    {
      title: t.services.vrar.title,
      description: t.services.vrar.description,
      icon: "🥽",
      link: "/services/vrar",
      features: t.services.vrar.features
    },
    {
      title: t.services.mobile.title,
      description: t.services.mobile.description,
      icon: "📱",
      link: "/services/mobile",
      features: t.services.mobile.features
    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          {t.services.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <BackgroundGradient 
              key={service.title} 
              className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 h-full flex"
            >
              <div className="flex flex-col h-full w-full">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zinc-300 mb-8 flex-grow">{service.description}</p>
                <div className="mt-auto">
                  <h4 className="text-white font-semibold mb-2">Servicios incluidos:</h4>
                  <ul className="list-disc list-inside text-zinc-300">
                    {service.features.map((feature, index) => (
                      <li key={index} className="mb-2">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  )
} 