import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'

export default function Home({ params }: { params: { lang: string } }) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesSection />
    </div>
  )
}
