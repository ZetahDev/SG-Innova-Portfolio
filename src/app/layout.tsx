import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { url } from "inspector";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "SG Innova - Soluciones Tecnológicas",
  description: "Servicios de desarrollo de software, consultoría tecnológica, blockchain, VR/AR y desarrollo mobile",
  icons: {
    icon: [
      {
        url: '/images/LogoSG_Alpha.png',
        href: '/images/LogoSG_Alpha.png',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-black`}>
        {children}
      </body>
    </html>
  );
}
