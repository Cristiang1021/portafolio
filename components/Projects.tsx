"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, X } from 'lucide-react'
import Image from "next/image"
import { useLanguage } from "@/context/language-context"

// Definición de tipos
interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  features: string[]
  role: string
  year: string
  link: string
}

export default function Projects() {
  const { language } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Traducciones específicas del componente
  const translations = {
    es: {
      badge: "Portafolio",
      title: "Proyectos Destacados",
      description: "Una selección de mis proyectos más relevantes en diferentes sectores",
      viewDetails: "Ver detalles",
      role: "Rol:",
      viewProject: "Ver proyecto",
      description_label: "Descripción",
      technologies_label: "Tecnologías utilizadas",
      features_label: "Características principales",
      close: "Cerrar",
      projects: [
        {
          id: 1,
          title: "Web Informativa para Firma de Abogados",
          description:
            "Desarrollo de un sitio web informativo para una prestigiosa firma de abogados. La plataforma incluye información sobre la historia de la firma, perfiles de los abogados, servicios legales especializados, programas educativos y una sección de contacto profesional. Actualmente, se está trabajando en la integración de un asistente virtual basado en inteligencia artificial para mejorar la experiencia del usuario y optimizar la atención al cliente.",
          image: "/firma.png",
          technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
          features: [
            "Sección informativa de la historia de la firma",
            "Listado de abogados con perfiles detallados",
            "Descripción de servicios legales especializados",
            "Programas educativos ofrecidos por la firma",
            "Sección de contacto con formulario dinámico",
            "Integración futura de un asistente virtual con IA",
          ],
          role: "Desarrollador Full-Stack",
          year: "Diciembre 2024 - Actualidad",
          link: "https://gygfirmadeabogados.com/",
        },
        {
          id: 2,
          title: "Sistema de Mantenimiento Industrial",
          description:
            "Implementación de un sistema web para la gestión de mantenimientos preventivos y correctivos en maquinaria industrial. El sistema permite a los operarios registrar actividades de mantenimiento, cambiar el estado de las órdenes de trabajo y generar reportes automáticos para optimizar la planificación de tareas. La aplicación facilita el seguimiento en tiempo real y mejora la eficiencia operativa.",
          image: "/mantenimiento.png",
          technologies: ["Next.js", "Flask", "PostgreSQL", "Docker", "Tailwind CSS"],
          features: [
            "Programación de mantenimientos preventivos y correctivos",
            "Registro automático de órdenes de trabajo",
            "Cambio de estado y seguimiento en tiempo real",
            "Historial de mantenimientos completados",
            "Generación de reportes para análisis y auditoría",
          ],
          role: "Consultor IT y Desarrollador",
          year: "Marzo 2024 - Octubre 2024",
          link: "https://mantenimientoapp.vercel.app/",
        },
        {
          id: 3,
          title: "Plataforma de Promoción Turística",
          description:
            "Desarrollo de una plataforma web para la promoción de actividades turísticas en la parroquia San Andrés, con recomendaciones basadas en inteligencia artificial. La aplicación incluye un asistente virtual para guiar a los turistas y una sección informativa sobre actividades locales sostenibles. Los usuarios pueden explorar destinos, obtener recomendaciones personalizadas y participar en experiencias eco-amigables.",
          image: "/turismo.jpg",
          technologies: ["Next.js", "Firebase", "Mapbox", "Tailwind CSS", "Vercel"],
          features: [
            "Asistente virtual para recomendaciones turísticas",
            "Mapa interactivo con destinos sostenibles",
            "Perfiles verificados de operadores turísticos",
            "Panel para la gestión de actividades y eventos",
            "Generación de reportes de visitas y accesos",
          ],
          role: "Investigador y Desarrollador",
          year: "Enero 2023 - Octubre 2023",
          link: "https://tuwebdeturismo.com/",
        },
      ],
    },
    en: {
      badge: "Portfolio",
      title: "Featured Projects",
      description: "A selection of my most relevant projects in different sectors",
      viewDetails: "View details",
      role: "Role:",
      viewProject: "View project",
      description_label: "Description",
      technologies_label: "Technologies used",
      features_label: "Key features",
      close: "Close",
      projects: [
        {
          id: 1,
          title: "Informative Website for Law Firm",
          description:
            "Development of an informative website for a prestigious law firm. The platform includes information about the firm's history, lawyer profiles, specialized legal services, educational programs, and a professional contact section. Currently, work is being done on integrating an artificial intelligence-based virtual assistant to improve the user experience and optimize customer service.",
          image: "/firma.png",
          technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
          features: [
            "Informative section on the firm's history",
            "List of lawyers with detailed profiles",
            "Description of specialized legal services",
            "Educational programs offered by the firm",
            "Contact section with dynamic form",
            "Future integration of an AI virtual assistant",
          ],
          role: "Full-Stack Developer",
          year: "December 2024 - Present",
          link: "https://gygfirmadeabogados.com/",
        },
        {
          id: 2,
          title: "Industrial Maintenance System",
          description:
            "Implementation of a web system for the management of preventive and corrective maintenance of industrial machinery. The system allows operators to record maintenance activities, change the status of work orders, and generate automatic reports to optimize task planning. The application facilitates real-time monitoring and improves operational efficiency.",
          image: "/mantenimiento.png",
          technologies: ["Next.js", "Flask", "PostgreSQL", "Docker", "Tailwind CSS"],
          features: [
            "Scheduling of preventive and corrective maintenance",
            "Automatic registration of work orders",
            "Status change and real-time tracking",
            "History of completed maintenance",
            "Report generation for analysis and auditing",
          ],
          role: "IT Consultant & Developer",
          year: "March 2024 - October 2024",
          link: "https://mantenimientoapp.vercel.app/",
        },
        {
          id: 3,
          title: "Tourism Promotion Platform",
          description:
            "Development of a web platform for the promotion of tourism activities in San Andrés parish, with recommendations based on artificial intelligence. The application includes a virtual assistant to guide tourists and an informative section on sustainable local activities. Users can explore destinations, get personalized recommendations, and participate in eco-friendly experiences.",
          image: "/turismo.jpg",
          technologies: ["Next.js", "Firebase", "Mapbox", "Tailwind CSS", "Vercel"],
          features: [
            "Virtual assistant for tourism recommendations",
            "Interactive map with sustainable destinations",
            "Verified profiles of tour operators",
            "Panel for managing activities and events",
            "Generation of visit and access reports",
          ],
          role: "Researcher & Developer",
          year: "January 2023 - October 2023",
          link: "https://tuwebdeturismo.com/",
        },
      ],
    },
  }

  // Seleccionar el idioma actual
  const t = translations[language] || translations.es
  
  // Obtener los proyectos según el idioma
  const projects: Project[] = t.projects

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
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
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.description}
          </p>
        </motion.div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card
                className="h-full overflow-hidden border-0 shadow-md hover:shadow-xl transition-all cursor-pointer bg-white dark:bg-gray-800 group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <Image
                    src={project.image || "/placeholder.svg?height=400&width=600"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-white text-sm">{project.role}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-0">
                      {project.year.split(" - ")[0]}
                    </Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech: string) => (
                      <Badge key={tech} variant="secondary" className="bg-gray-100 dark:bg-gray-700">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-700">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex justify-end">
                    <Button variant="ghost" size="sm" className="text-primary">
                      {t.viewDetails}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Modal de detalles */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Cabecera del modal */}
                <div className="relative">
                  <div className="h-64 md:h-80 overflow-hidden">
                    <Image
                      src={selectedProject.image || "/placeholder.svg?height=600&width=1200"}
                      alt={selectedProject.title}
                      width={1200}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <Badge className="mb-2 bg-primary text-white">{selectedProject.year}</Badge>
                      <h3 className="text-2xl md:text-3xl font-bold">{selectedProject.title}</h3>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    aria-label="Cerrar modal"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Contenido del modal */}
                <div className="p-6">
                  {/* Rol y enlace */}
                  <div className="flex flex-wrap justify-between items-center gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{t.role}</span>
                      <span className="text-gray-900 dark:text-white">{selectedProject.role}</span>
                    </div>

                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
                    >
                      {t.viewProject} <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>

                  {/* Descripción */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{t.description_label}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{selectedProject.description}</p>
                  </div>

                  {/* Tecnologías */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{t.technologies_label}</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-100 dark:bg-gray-700 py-1.5 px-3">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Características */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {t.features_label}
                    </h4>
                    <ul className="space-y-3 mt-4">
                      {selectedProject.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <div className="min-w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Botón de cerrar */}
                  <div className="mt-8 flex justify-end">
                    <Button
                      variant="outline"
                      onClick={() => setSelectedProject(null)}
                      className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      {t.close}
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
