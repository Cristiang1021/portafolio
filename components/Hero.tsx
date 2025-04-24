"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
//import { Button } from "@/components/ui/button"
import { Download, ArrowDown, Github, Linkedin, Mail, Code, Database, Server } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language]
  const [currentTitle, setCurrentTitle] = useState(0)

  // Rotación de títulos profesionales
  const titles = ["Desarrollador Web", "Ingeniero de Software", "Full Stack Developer"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

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
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <div className="inline-block px-3 py-1 mb-6 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {titles[currentTitle]}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {t.hero.greeting}{" "}
              <span className="text-primary relative inline-block">
                Cristian González
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">{t.hero.title2}</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">{t.hero.description}</p>

            <div className="flex flex-wrap gap-4 mb-8">
            <a
  href={language === "es" ? "/CV_espanol.pdf" : "/CV_ingles.pdf"}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-white px-4 py-2 rounded-md text-sm font-medium"
>
  <Download className="mr-2 h-4 w-4" /> {t.hero.downloadCV}
</a>



{/*               <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              >
                Contáctame
              </Button> */}
            </div>

            <div className="flex gap-4">
              <motion.a
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="https://github.com/Cristiang1021"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="https://www.linkedin.com/in/cristian-gonz%C3%A1lez/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="mailto:cristiang1046@gmail.com"
                className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
                aria-label="Email Contact"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl dark:border-gray-700 relative z-10">
                <Image
                  src="/cgg.jpeg"
                  alt="Cristian González"
                  width={320}
                  height={320}
                  className="object-cover"
                  priority
                />
              </div>

              {/* Elementos decorativos */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full -z-10"
              ></motion.div>
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
                className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10"
              ></motion.div>

              {/* Iconos flotantes */}
              <motion.div
                className="absolute -top-10 -right-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <Code className="h-5 w-5 text-primary" />
              </motion.div>

              <motion.div
                className="absolute top-20 -right-16 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              >
                <Server className="h-5 w-5 text-primary" />
              </motion.div>

              <motion.div
                className="absolute -bottom-10 -left-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              >
                <Database className="h-5 w-5 text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center mt-16"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-sm mb-2">{t.hero.scrollDown || "Desplázate"}</span>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <ArrowDown />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

