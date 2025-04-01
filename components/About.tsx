"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Award, Code, Globe } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function About() {
  const { language } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  // Traducciones
  const translations = {
    es: {
      badge: "Conóceme",
      title: "Sobre Mí",
      description:
        "Ingeniero de software con experiencia en el desarrollo de aplicaciones web modernas, enfocado en la usabilidad, escalabilidad y calidad del código. He trabajado en proyectos con asistentes virtuales, APIs globales y sistemas de gestión empresarial, garantizando soluciones innovadoras y eficientes.",
      experience: {
        title: "Experiencia Profesional",
        items: [
          {
            role: "Desarrollador Full Stack",
            company: "Firma de abogados G&G",
            period: "Dic 2024 - Actualidad",
            description:
              "Optimicé el rendimiento del sitio web, reduciendo los tiempos de carga en un 50% y mejorando el SEO, lo que incrementó el tráfico orgánico en un 70%.",
          },
          {
            role: "Desarrollador Backend",
            company: "Grupo Ingema 3R",
            period: "Mar 2024 - Oct 2024",
            description:
              "Desarrollé una plataforma de gestión de mantenimiento industrial, reduciendo los tiempos de inactividad en un 40% e implementé un sistema seguro de control de roles.",
          },
          {
            role: "Investigador Practicante",
            company: "Grupo de Investigación ESPOCH",
            period: "Ene 2023 - Oct 2023",
            description:
              "Diseñé una aplicación web para la gestión de actividades turísticas, integrando un asistente virtual mediante Python Flask y Next.js.",
          },
        ],
      },
      education: {
        title: "Educación",
        degree: "Ingeniero de Software",
        institution: "ESPOCH, Riobamba",
        period: "Dic 2024",
        description: "Desarrollo de proyectos centrados en IA, mantenimiento industrial y turismo inteligente.",
      },
      certifications: {
        title: "Certificaciones",
        items: [
          "Google IT Support Professional",
          "Microsoft Power BI Data Analyst",
          "Meta Front-End Developer",
          "IBM DevOps and Software Engineering",
          "Universidad Python (Django, Flask, etc.) - 71 horas",
          "Curso Avanzado de Hacking Ético y Ciberseguridad - 25 horas",
          "Competencias digitales para profesionales - 40 horas",
        ],
      },
      skills: {
        title: "Habilidades Técnicas",
        items: [
          "Python (Flask, Django)",
          "JavaScript (React, Next.js, Angular)",
          "TypeScript",
          "PostgreSQL, MySQL, MongoDB",
          "Git, Docker, APIs REST",
          "UI/UX Design",
          "Tailwind CSS, Bootstrap",
          "Scrumban, Scrum, Agile",
          "Hacking Ético y Ciberseguridad",
          "Power BI",
          "SEO técnico y semántico",
        ],
      },
      languages: {
        title: "Idiomas",
        items: [
          {
            name: "Español",
            level: "Nativo",
            percentage: 100,
          },
          {
            name: "Inglés",
            level: "B2 (PET, Cambridge)",
            percentage: 70,
          },
        ],
      },
    },
    en: {
      badge: "About Me",
      title: "About Me",
      description:
        "Software engineer with experience in developing modern web applications, focused on usability, scalability, and code quality. I have worked on projects with virtual assistants, global APIs, and business management systems, ensuring innovative and efficient solutions.",
      experience: {
        title: "Professional Experience",
        items: [
          {
            role: "Full Stack Developer",
            company: "G&G Law Firm",
            period: "Dec 2024 - Present",
            description:
              "Optimized website performance, reducing load times by 50% and improving SEO, which increased organic traffic by 70%.",
          },
          {
            role: "Backend Developer",
            company: "Ingema 3R Group",
            period: "Mar 2024 - Oct 2024",
            description:
              "Developed an industrial maintenance management platform, reducing downtime by 40% and implemented a secure role control system.",
          },
          {
            role: "Research Intern",
            company: "ESPOCH Research Group",
            period: "Jan 2023 - Oct 2023",
            description:
              "Designed a web application for tourism activity management, integrating a virtual assistant using Python Flask and Next.js.",
          },
        ],
      },
      education: {
        title: "Education",
        degree: "Software Engineer",
        institution: "ESPOCH, Riobamba",
        period: "Dec 2024",
        description: "Development of projects focused on AI, industrial maintenance, and smart tourism.",
      },
      certifications: {
        title: "Certifications",
        items: [
          "Google IT Support Professional",
          "Microsoft Power BI Data Analyst",
          "Meta Front-End Developer",
          "IBM DevOps and Software Engineering",
          "Python University (Django, Flask, etc.) - 71 hours",
          "Advanced Ethical Hacking and Cybersecurity Course - 25 hours",
          "Digital Skills for Professionals - 40 hours",
        ],
      },
      skills: {
        title: "Technical Skills",
        items: [
          "Python (Flask, Django)",
          "JavaScript (React, Next.js, Angular)",
          "TypeScript",
          "PostgreSQL, MySQL, MongoDB",
          "Git, Docker, REST APIs",
          "UI/UX Design",
          "Tailwind CSS, Bootstrap",
          "Scrumban, Scrum, Agile",
          "Ethical Hacking and Cybersecurity",
          "Power BI",
          "Technical and semantic SEO",
        ],
      },
      languages: {
        title: "Languages",
        items: [
          {
            name: "Spanish",
            level: "Native",
            percentage: 100,
          },
          {
            name: "English",
            level: "B2 (PET, Cambridge)",
            percentage: 70,
          },
        ],
      },
    },
  }

  // Seleccionar el idioma actual
  const t = translations[language] || translations.es

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-1 border-primary text-primary bg-primary/5 rounded-full text-sm font-medium"
          >
            {t.badge}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t.description}</p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {/* Experiencia */}
          <motion.div variants={itemVariants}>
            <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out -z-10"></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-full mr-4">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t.experience.title}</h3>
                </div>
                <ul className="space-y-6">
                  {t.experience.items.map((exp, index) => (
                    <li
                      key={index}
                      className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary before:rounded-full"
                    >
                      <h4 className="font-medium text-gray-900 dark:text-white text-lg">{exp.role}</h4>
                      <p className="text-primary font-medium text-sm mb-1">
                        {exp.company} • {exp.period}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{exp.description}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Educación y Certificaciones */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 gap-8">
            {/* Educación */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out -z-10"></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full mr-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t.education.title}</h3>
                </div>
                <div className="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                  <h4 className="font-medium text-gray-900 dark:text-white text-lg">{t.education.degree}</h4>
                  <p className="text-primary font-medium text-sm mb-1">
                    {t.education.institution} • {t.education.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{t.education.description}</p>
                </div>
              </CardContent>
            </Card>

            {/* Certificaciones */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out -z-10"></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full mr-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t.certifications.title}</h3>
                </div>
                <ul className="grid grid-cols-1 gap-2">
                  {t.certifications.items.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <div className="min-w-2 h-2 bg-primary rounded-full mt-2 mr-2"></div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Habilidades y Tecnologías */}
        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Habilidades Técnicas */}
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out -z-10"></div>
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t.skills.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {t.skills.items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-primary/20 hover:text-primary transition-colors py-1.5 px-3"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Idiomas */}
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out -z-10"></div>
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t.languages.title}</h3>
              </div>
              <div className="space-y-6">
                {t.languages.items.map((language, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <span className="font-medium text-gray-900 dark:text-white mr-2">{language.name}</span>
                        <Badge className="bg-primary/10 text-primary border-0">{language.level}</Badge>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{language.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: `${language.percentage}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

