"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X, Globe } from "lucide-react" // Añadido ChevronDown
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false) // Estado del dropdown de idioma

  const { language, setLanguage } = useLanguage()
  const t = translations[language] // Obtén las traducciones según el idioma

  // Detecta scroll para cambiar estilos del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Cambiar entre modo claro/oscuro
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  // Cambiar idioma
  const handleChangeLanguage = (lang: "es" | "en") => {
    setLanguage(lang)
    setIsLanguageMenuOpen(false) // Cierra el menú tras seleccionar idioma
  }

  // Elementos de navegación traducidos
  const navItems = [
    { label: t.nav.home, href: "#" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ]

  // Descargar CV según el idioma
  /* const handleDownloadCV = () => {
    const cvUrl = language === "es" ? "/CV_espanol.pdf" : "/CV_ingles.pdf"
    const link = document.createElement("a")
    link.href = cvUrl
    link.download = language === "es" ? "Cristian_Gonzalez_CV_Espanol.pdf" : "Cristian_Gonzalez_CV_English.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } */
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Nombre */}
          <Link
            href="#"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            Cristian González
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Botones e Iconos a la derecha */}
          <div className="flex items-center gap-2 relative">
            {/* Botón para cambiar modo claro/oscuro */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Botón para desplegar opciones de idioma */}
            <button
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
              aria-label="Cambiar idioma"
            >
              <Globe size={20} />
            </button>

            {/* Menú desplegable para cambiar idioma */}
            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-12 w-32 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
                <button
                  onClick={() => handleChangeLanguage("es")}
                  className={`w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    language === "es" ? "bg-primary/20" : ""
                  }`}
                >
                  🇪🇸 Español
                </button>
                <button
                  onClick={() => handleChangeLanguage("en")}
                  className={`w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    language === "en" ? "bg-primary/20" : ""
                  }`}
                >
                  🇬🇧 English
                </button>
              </div>
            )}

            {/* Botón para descargar CV */}   
            <a
  href={language === "es" ? "/CV_espanol.pdf" : "/CV_ingles.pdf"}
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:inline-flex items-center bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md shadow-md transition-all"
>
  {t.hero.downloadCV}
</a>


            {/* Menú móvil */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="w-full bg-primary hover:bg-primary/90 mt-2">
                {t.nav.downloadCV}
              </Button>
            </nav>

            {/* Botones para modo oscuro e idioma en menú móvil */}
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                <Globe size={20} />
              </button>

              {/* Menú desplegable de idiomas en móvil */}
              {isLanguageMenuOpen && (
                <div className="absolute right-4 mt-12 w-32 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
                  <button
                    onClick={() => handleChangeLanguage("es")}
                    className={`w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                      language === "es" ? "bg-primary/20" : ""
                    }`}
                  >
                    🇪🇸 Español
                  </button>
                  <button
                    onClick={() => handleChangeLanguage("en")}
                    className={`w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                      language === "en" ? "bg-primary/20" : ""
                    }`}
                  >
                    🇬🇧 English
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
