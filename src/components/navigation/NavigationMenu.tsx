'use client';

import { useTranslations } from "@/lib/i18n/LanguageProvider";
import { LanguageSelector } from "./LanguageSelector";
import Link from "next/link";
import { motion } from "framer-motion";

export function NavigationMenu() {
  const t = useTranslations();

  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-xl">
            SG Innova
          </Link>
          
          <div className="flex items-center gap-8">
            <Link href="/services" className="text-white hover:text-purple-400 transition-colors">
              {t.services.title}
            </Link>
            <Link href="#contact" className="text-white hover:text-purple-400 transition-colors">
              {t.contact.title}
            </Link>
            <LanguageSelector />
          </div>
        </div>
      </nav>
    </header>
  );
} 