import { InboxIcon as EnvelopeIcon, PhoneIcon, GlobeIcon as GlobeAltIcon } from "lucide-react"

export default function SoftwareEngineerCV() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Juan Pérez</h1>
        <p className="text-xl text-gray-600">Ingeniero de Software</p>
        <div className="flex justify-center items-center space-x-4 mt-4">
          <a href="mailto:juan.perez@email.com" className="flex items-center text-gray-600 hover:text-blue-600">
            <EnvelopeIcon className="w-5 h-5 mr-2" />
            juan.perez@email.com
          </a>
          <a href="tel:+34600123456" className="flex items-center text-gray-600 hover:text-blue-600">
            <PhoneIcon className="w-5 h-5 mr-2" />
            +34 600 123 456
          </a>
          <a
            href="https://www.juanperez.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <GlobeAltIcon className="w-5 h-5 mr-2" />
            juanperez.dev
          </a>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Resumen Profesional</h2>
        <p className="text-gray-600">
          Ingeniero de software con 5 años de experiencia en desarrollo web full-stack. Especializado en JavaScript,
          React, y Node.js. Apasionado por crear soluciones escalables y de alto rendimiento. Fuerte habilidad para
          trabajar en equipo y adaptarse rápidamente a nuevas tecnologías.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Habilidades Técnicas</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "PostgreSQL",
            "Git",
            "Docker",
            "AWS",
            "RESTful APIs",
            "GraphQL",
          ].map((skill) => (
            <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Experiencia Laboral</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Desarrollador Full-Stack Senior</h3>
            <p className="text-gray-600 italic">TechInnovate S.L. | Madrid, España | Enero 2020 - Presente</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>
                Lideré el desarrollo de una aplicación web de comercio electrónico utilizando React y Node.js, mejorando
                el rendimiento en un 40%.
              </li>
              <li>
                Implementé una arquitectura de microservicios utilizando Docker y Kubernetes, aumentando la
                escalabilidad y la resiliencia del sistema.
              </li>
              <li>
                Mentoreé a desarrolladores junior y dirigí revisiones de código para mantener altos estándares de
                calidad.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Desarrollador Front-end</h3>
            <p className="text-gray-600 italic">WebSolutions Corp. | Barcelona, España | Marzo 2017 - Diciembre 2019</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>
                Desarrollé interfaces de usuario responsivas y accesibles utilizando React y Redux para aplicaciones web
                de alto tráfico.
              </li>
              <li>
                Colaboré en la migración de una aplicación legacy a una arquitectura moderna basada en componentes,
                reduciendo el tiempo de carga en un 60%.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Educación</h2>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Grado en Ingeniería Informática</h3>
          <p className="text-gray-600 italic">Universidad Politécnica de Madrid | 2013 - 2017</p>
        </div>
      </section>
    </div>
  )
}

