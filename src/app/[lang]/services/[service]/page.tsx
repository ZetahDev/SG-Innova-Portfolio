import { getTranslations, isValidService, ServiceType } from "@/lib/i18n/translations"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { notFound } from "next/navigation"

type ValidLanguage = "en" | "es";
type ValidService = "software" | "consulting" | "blockchain" | "vrar";

interface ServicePageProps {
  params: {
    lang: string;
    service: string;
  }
}

export default function ServicePage({ params: { lang, service } }: ServicePageProps) {
  if (!["en", "es"].includes(lang)) {
    notFound()
  }

  if (!isValidService(service)) {
    notFound()
  }

  const t = getTranslations(lang as ValidLanguage)
  const serviceData = t.services[service as ValidService]

  if (!serviceData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-4xl mx-auto px-4">
        <BackgroundGradient className="rounded-[22px] p-8 sm:p-16 bg-zinc-900">
          <h1 className="text-4xl font-bold text-white mb-8">
            {serviceData.title}
          </h1>
          <div className="prose prose-invert">
            <p className="text-lg text-zinc-300">
              {serviceData.description}
            </p>
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">
              Servicios incluidos:
            </h2>
            <ul className="list-disc list-inside text-zinc-300">
              {serviceData.features.map((feature, index) => (
                <li key={index} className="mb-2">{feature}</li>
              ))}
            </ul>
          </div>
        </BackgroundGradient>
      </div>
    </div>
  )
} 