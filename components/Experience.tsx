"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechInnovate Solutions",
    period: "2020 - Presente",
    description:
      "Lideré el desarrollo de aplicaciones web escalables utilizando React, Node.js y AWS. Implementé arquitecturas de microservicios y CI/CD pipelines.",
  },
  {
    title: "Full-Stack Developer",
    company: "DataDriven Corp",
    period: "2018 - 2020",
    description:
      "Desarrollé y mantuve aplicaciones web full-stack. Trabajé en la optimización de rendimiento y la implementación de nuevas características.",
  },
  {
    title: "Front-end Developer",
    company: "WebSolutions Inc",
    period: "2016 - 2018",
    description:
      "Creé interfaces de usuario responsivas y accesibles. Colaboré en la migración de aplicaciones legacy a arquitecturas modernas basadas en componentes.",
  },
]

export default function Experience() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Experiencia Profesional</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{exp.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {exp.company} | {exp.period}
              </p>
              <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

