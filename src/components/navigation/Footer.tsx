import { useTranslations } from "@/lib/i18n/LanguageProvider";

export function Footer() {
  
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white mb-4 md:mb-0">
            © 2024 SG Innova. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 