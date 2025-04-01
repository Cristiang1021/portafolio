"use client"

import { useState } from "react"
import { SunIcon, MoonIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"
import Image from "next/image"

export default function CV() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gray-800 dark:text-white">
          JP
        </a>
        <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          {darkMode ? <SunIcon className="text-yellow-400" /> : <MoonIcon className="text-gray-800" />}
        </button>
      </nav>

      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <Image
            src="/placeholder.svg?height=150&width=150"
            alt="Juan Pérez"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Juan Pérez</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">Ingeniero de Software Full-Stack</p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/juanperez" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" />
            </a>
            <a href="https://linkedin.com/in/juanperez" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" />
            </a>
            <a href="mailto:juan@example.com">
              <MailIcon className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" />
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Habilidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["JavaScript", "React", "Node.js", "TypeScript", "Python", "Docker", "AWS", "GraphQL"].map((skill) => (
              <div key={skill} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center">
                <p className="text-gray-800 dark:text-white">{skill}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Proyectos Destacados</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">E-commerce Platform</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Una plataforma de comercio electrónico construida con React y Node.js.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Ver proyecto
              </a>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Task Management App</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Una aplicación de gestión de tareas con React Native y Firebase.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Ver proyecto
              </a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Experiencia</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Senior Full-Stack Developer</h3>
              <p className="text-gray-600 dark:text-gray-300">TechCorp | 2020 - Presente</p>
              <p className="text-gray-600 dark:text-gray-300">
                Desarrollo de aplicaciones web escalables y mantenimiento de infraestructura en la nube.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Front-end Developer</h3>
              <p className="text-gray-600 dark:text-gray-300">WebSolutions Inc. | 2018 - 2020</p>
              <p className="text-gray-600 dark:text-gray-300">
                Creación de interfaces de usuario responsivas y accesibles para aplicaciones web.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Contacto</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">¿Interesado en trabajar juntos? ¡Contáctame!</p>
          <a
            href="mailto:juan@example.com"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Enviar email
          </a>
        </section>
      </main>

      <footer className="container mx-auto px-6 py-4 text-center text-gray-600 dark:text-gray-300">
        <p>&copy; 2023 Juan Pérez. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

