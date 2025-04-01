"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useForm } from "react-hook-form"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/context/language-context"

// Definición de tipos para el formulario
interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const { language } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  // Traducciones
  const translations = {
    es: {
      badge: "Contacto",
      title: "¿Hablamos sobre tu proyecto?",
      description:
        "¿Interesado en trabajar juntos? Contáctame para discutir cómo puedo ayudarte con tu próximo proyecto.",
      contactInfo: {
        title: "Información de contacto",
        email: {
          label: "Email",
          value: "cristiang1046@gmail.com",
        },
        phone: {
          label: "Teléfono",
          value: "+593 99-984-7805",
        },
        location: {
          label: "Ubicación",
          value: "Riobamba, Ecuador",
        },
      },
      availability: {
        title: "Disponibilidad",
        description: "Actualmente disponible para proyectos freelance y oportunidades de colaboración.",
        status: "Disponible para nuevos proyectos",
      },
      form: {
        title: "Envíame un mensaje",
        name: {
          label: "Nombre",
          placeholder: "Tu nombre",
          required: "El nombre es obligatorio",
        },
        email: {
          label: "Email",
          placeholder: "tu@email.com",
          required: "El correo es obligatorio",
          invalid: "Correo inválido",
        },
        subject: {
          label: "Asunto",
          placeholder: "¿En qué puedo ayudarte?",
          required: "El asunto es obligatorio",
        },
        message: {
          label: "Mensaje",
          placeholder: "Escribe tu mensaje aquí...",
          required: "El mensaje es obligatorio",
        },
        submit: "Enviar mensaje",
        sending: "Enviando...",
      },
      whatsapp: {
        messageTitle: "Nuevo Mensaje de Contacto",
        nameLabel: "Nombre:",
        emailLabel: "Email:",
        subjectLabel: "Asunto:",
        messageLabel: "Mensaje:",
      },
    },
    en: {
      badge: "Contact",
      title: "Let's talk about your project",
      description: "Interested in working together? Contact me to discuss how I can help you with your next project.",
      contactInfo: {
        title: "Contact Information",
        email: {
          label: "Email",
          value: "cristiang1046@gmail.com",
        },
        phone: {
          label: "Phone",
          value: "+593 99-984-7805",
        },
        location: {
          label: "Location",
          value: "Riobamba, Ecuador",
        },
      },
      availability: {
        title: "Availability",
        description: "Currently available for freelance projects and collaboration opportunities.",
        status: "Available for new projects",
      },
      form: {
        title: "Send me a message",
        name: {
          label: "Name",
          placeholder: "Your name",
          required: "Name is required",
        },
        email: {
          label: "Email",
          placeholder: "your@email.com",
          required: "Email is required",
          invalid: "Invalid email",
        },
        subject: {
          label: "Subject",
          placeholder: "How can I help you?",
          required: "Subject is required",
        },
        message: {
          label: "Message",
          placeholder: "Write your message here...",
          required: "Message is required",
        },
        submit: "Send message",
        sending: "Sending...",
      },
      whatsapp: {
        messageTitle: "New Contact Message",
        nameLabel: "Name:",
        emailLabel: "Email:",
        subjectLabel: "Subject:",
        messageLabel: "Message:",
      },
    },
  }

  // Seleccionar el idioma actual
  const t = translations[language] || translations.es

  // Función para enviar mensaje a WhatsApp
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    try {
      // Mensaje para WhatsApp
      const message = `
        🌟 *${t.whatsapp.messageTitle}* 🌟
        👤 *${t.whatsapp.nameLabel}* ${data.name}
        📧 *${t.whatsapp.emailLabel}* ${data.email}
        📝 *${t.whatsapp.subjectLabel}* ${data.subject}
        💬 *${t.whatsapp.messageLabel}* ${data.message}
      `

      // Número de WhatsApp en formato internacional
      const phoneNumber = "593999847805" // +593 para Ecuador

      // Construye la URL de WhatsApp
      const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`

      // Abre WhatsApp en una nueva ventana
      window.open(whatsappURL, "_blank")

      // Resetea el formulario después del envío
      reset()
    } catch (error) {
      console.error("Error al enviar el mensaje:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Datos de contacto
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: t.contactInfo.email.label,
      value: t.contactInfo.email.value,
      href: `mailto:${t.contactInfo.email.value}`,
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: t.contactInfo.phone.label,
      value: t.contactInfo.phone.value,
      href: "tel:+593999847805",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: t.contactInfo.location.label,
      value: t.contactInfo.location.value,
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>

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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="h-full border-0 shadow-md bg-white dark:bg-gray-900">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">{t.contactInfo.title}</h3>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-full mr-4">{item.icon}</div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{item.title}</h4>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-300">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">{t.availability.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{t.availability.description}</p>
                  <div className="flex items-center mt-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">{t.availability.status}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Formulario de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <Card className="border-0 shadow-md bg-white dark:bg-gray-900">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">{t.form.title}</h3>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {t.form.name.label}
                      </label>
                      <Input
                        id="name"
                        placeholder={t.form.name.placeholder}
                        {...register("name", { required: t.form.name.required })}
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        {t.form.email.label}
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t.form.email.placeholder}
                        {...register("email", {
                          required: t.form.email.required,
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: t.form.email.invalid,
                          },
                        })}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      {t.form.subject.label}
                    </label>
                    <Input
                      id="subject"
                      placeholder={t.form.subject.placeholder}
                      {...register("subject", { required: t.form.subject.required })}
                      className={errors.subject ? "border-red-500" : ""}
                    />
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      {t.form.message.label}
                    </label>
                    <Textarea
                      id="message"
                      placeholder={t.form.message.placeholder}
                      rows={5}
                      {...register("message", { required: t.form.message.required })}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <Button
                    className="w-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        {t.form.sending}
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> {t.form.submit}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

