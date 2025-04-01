"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = ["Todos", "Sitios Web", "E-commerce", "Aplicaciones", "Marketing"]

  const projects = [
    {
      id: 1,
      title: "E-commerce de Moda",
      category: "E-commerce",
      image: "/placeholder.svg",
      technologies: ["Next.js", "Stripe", "Tailwind CSS"],
      description:
        "Tienda online completa con pasarela de pagos, gestión de inventario y panel de administración personalizado.",
    },
    {
      id: 2,
      title: "Portal Inmobiliario",
      category: "Sitios Web",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB"],
      description:
        "Portal web para búsqueda y gestión de propiedades inmobiliarias con filtros avanzados y mapas interactivos.",
    },
    {
      id: 3,
      title: "App de Gestión de Proyectos",
      category: "Aplicaciones",
      image: "/placeholder.svg",
      technologies: ["React Native", "Firebase", "Redux"],
      description: "Aplicación móvil para la gestión de proyectos, tareas y equipos con notificaciones en tiempo real.",
    },
    {
      id: 4,
      title: "Campaña SEO para Restaurante",
      category: "Marketing",
      image: "/placeholder.svg",
      technologies: ["SEO", "Google Ads", "Analytics"],
      description:
        "Estrategia de posicionamiento que aumentó el tráfico orgánico en un 150% y las reservas online en un 75%.",
    },
    {
      id: 5,
      title: "Plataforma Educativa",
      category: "Aplicaciones",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Laravel", "AWS"],
      description:
        "Sistema de gestión de cursos online con videoconferencias, evaluaciones y certificaciones automáticas.",
    },
    {
      id: 6,
      title: "Sitio Corporativo",
      category: "Sitios Web",
      image: "/placeholder.svg",
      technologies: ["WordPress", "Elementor", "PHP"],
      description: "Sitio web corporativo con múltiples idiomas, blog integrado y formularios personalizados.",
    },
  ]

  return (
    <section className="py-20 bg-white" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Portafolio de Proyectos</h2>
          <p className="text-gray-600">
            Explora algunos de mis trabajos más destacados y descubre cómo puedo ayudarte a alcanzar tus objetivos
            digitales
          </p>
        </div>

        <Tabs defaultValue="Todos" className="mb-12">
          <TabsList className="flex justify-center mb-8 overflow-x-auto">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="px-6">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => category === "Todos" || project.category === category)
                  .map((project) => (
                    <div
                      key={project.id}
                      className="group relative overflow-hidden rounded-xl cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                        {/* This would be replaced with an actual image */}
                        <div className="h-full w-full flex items-center justify-center text-gray-400 text-2xl font-bold">
                          {project.title}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <h3 className="text-white text-xl font-bold">{project.title}</h3>
                        <p className="text-white/80 text-sm">{project.category}</p>
                        <div className="flex gap-2 mt-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} className="text-xs bg-white/20 text-white px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Ver más proyectos
          </Button>
        </div>

        {/* Project Modal (simplified) */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-gray-600 mb-4">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button onClick={() => setSelectedProject(null)}>Cerrar</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

