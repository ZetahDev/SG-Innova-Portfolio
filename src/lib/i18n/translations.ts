const translations = {
  en: {
    hero: {
      title: [
        { text: "Innovation", className: "text-purple-500" },
        { text: "and", className: "text-white" },
        { text: "Technology", className: "text-cyan-500" },
        { text: "for", className: "text-white" },
        { text: "your", className: "text-white" },
        { text: "Business", className: "text-purple-500" },
      ],
      subtitle: "We transform ideas into innovative technological solutions to drive your company's growth in the digital era.",
      cta: {
        services: "Our Services",
        contact: "Contact Us"
      }
    },
    services: {
      title: "Service Portfolio",
      software: {
        title: "Specialized Software Development",
        description: "Our company specializes in creating custom software solutions...",
        features: [
          "Enterprise platform development",
          "Integration with existing systems",
          "Web and desktop applications",
          "AI-based solutions and process automation"
        ]
      },
      consulting: {
        title: "Technology Consulting",
        description: "Our consulting service is designed to help you identify improvement opportunities...",
        features: [
          "Technology infrastructure assessment",
          "Digital transformation consulting",
          "Technology process optimization",
          "Security and regulatory compliance strategies"
        ]
      },
      blockchain: {
        title: "Blockchain Project Development",
        description: "Explore the potential of blockchain technology to transform your business...",
        features: [
          "Smart contract development",
          "Decentralized management platforms",
          "DeFi solutions implementation",
          "Blockchain integration consulting"
        ]
      },
      vrar: {
        title: "Interactive VR/AR Experiences",
        description: "Transform the way your customers interact with your brand through immersive Virtual Reality (VR) and Augmented Reality (AR) experiences.",
        features: [
          "VR/AR application development",
          "Training and capacity building simulations",
          "Immersive marketing experiences",
          "Retail and entertainment applications"
        ]
      },
      mobile: {
        title: "Mobile Development",
        description: "We develop robust and scalable mobile applications for iOS and Android...",
        features: [
          "Native iOS and Android development",
          "Cross-platform hybrid applications",
          "User-centered design (UX/UI)",
          "Backend services and API integration"
        ]
      }
    },
    contact: {
      title: "Contact Us",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send Message"
      }
    }
  },
  es: {
    hero: {
      title: [
        { text: "Innovación", className: "text-purple-500" },
        { text: "y", className: "text-white" },
        { text: "Tecnología", className: "text-cyan-500" },
        { text: "para", className: "text-white" },
        { text: "tu", className: "text-white" },
        { text: "Negocio", className: "text-purple-500" },
      ],
      subtitle: "Transformamos ideas en soluciones tecnológicas innovadoras para impulsar el crecimiento de tu empresa en la era digital.",
      cta: {
        services: "Nuestros Servicios",
        contact: "Contáctanos"
      }
    },
    services: {
      title: "Portafolio de Servicios",
      software: {
        title: "Desarrollo de Software Especializado",
        description: "Nuestra empresa se especializa en crear soluciones de software personalizadas, adaptadas a las necesidades específicas de su negocio...",
        features: [
          "Desarrollo de plataforma empresarial",
          "Integración con sistemas existentes",
          "Aplicaciones web y de escritorio",
          "Soluciones basadas en IA y automatización de procesos"
        ]
      },
      consulting: {
        title: "Consultoría Tecnológica",
        description: "Nuestro servicio de consultoría está diseñado para ayudarlo a identificar oportunidades de mejora...",
        features: [
          "Evaluación de infraestructura tecnológica",
          "Consultoría de transformación digital",
          "Optimización de procesos tecnológicos",
          "Estrategias de cumplimiento de seguridad y cumplimiento normativo"
        ]
      },
      blockchain: {
        title: "Desarrollo de Proyectos Blockchain",
        description: "Explora el potencial de la tecnología blockchain para transformar su negocio...",
        features: [
          "Desarrollo de contratos inteligentes",
          "Plataformas de gestión descentralizada",
          "Implementación de soluciones DeFi",
          "Consultoría de integración blockchain"
        ]
      },
      vrar: {
        title: "Experiencias VR/AR Interactivas",
        description: "Transforma la forma en que sus clientes interactúan con su marca a través de experiencias de Realidad Virtual (VR) y Realidad Aumentada (AR) inmersivas.",
        features: [
          "Desarrollo de aplicaciones VR/AR",
          "Simulaciones de capacitación y construcción de capacidades",
          "Experiencias de marketing inmersivo",
          "Aplicaciones de comercio minorista y entretenimiento"
        ]
      },
      mobile: {
        title: "Desarrollo Móvil",
        description: "Desarrollamos aplicaciones móviles robustas y escalables para iOS y Android...",
        features: [
          "Desarrollo nativo para iOS y Android",
          "Aplicaciones híbridas multiplataforma",
          "Diseño centrado en el usuario (UX/UI)",
          "Servicios de backend y integración de API"
        ]
      }
    },
    contact: {
      title: "Contáctanos",
      form: {
        name: "Nombre",
        email: "Correo electrónico",
        message: "Mensaje",
        submit: "Enviar Mensaje"
      }
    }
  }
} as const;

export type Languages = keyof typeof translations;
export type ServiceType = {
  title: string;
  description: string;
  features: string[];
};

export const validServices = ["software", "consulting", "blockchain", "vrar"] as const
export type ValidService = typeof validServices[number]

export function isValidService(service: string): service is ValidService {
  return validServices.includes(service as ValidService)
}

export function getTranslations(lang: Languages) {
  return translations[lang] || translations.en;
}

export default translations;