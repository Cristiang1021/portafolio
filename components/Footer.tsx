"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language]
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Nombre e Información */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <Link href="#" className="text-xl font-bold text-gray-900 dark:text-white">
              Cristian González
            </Link>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{t.footer.tagline}</p>
          </div>

          {/* Enlaces a Redes Sociales */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            {/* GitHub */}
            <a
              href="https://github.com/CristianG1046"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
            >
              <Github size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/cristiangonzalez1046"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
            >
              <Linkedin size={20} />
            </a>

            {/* Correo */}
            <a
              href="mailto:cristiang1046@gmail.com"
              className="p-2 rounded-full text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Derechos Reservados */}
          <div className="text-gray-600 dark:text-gray-300 text-sm text-center md:text-right">
            &copy; {currentYear} Cristian González. {t.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  )
}
