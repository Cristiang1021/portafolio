import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, BarChart3, Globe } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Desarrollo de Páginas Web",
      description:
        "Sitios web modernos, responsivos y optimizados para SEO que representan perfectamente tu marca y convierten visitantes en clientes.",
      price: "Desde $999",
      features: ["Diseño personalizado", "Optimización SEO", "Responsive", "CMS incluido"],
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Sistemas Personalizados",
      description:
        "Aplicaciones web a medida para automatizar procesos, gestionar datos y mejorar la eficiencia operativa de tu negocio.",
      price: "Desde $2,499",
      features: ["Análisis de requisitos", "Desarrollo a medida", "Integración con APIs", "Soporte técnico"],
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Marketing Digital",
      description:
        "Estrategias de marketing digital que aumentan tu visibilidad online, generan tráfico cualificado y maximizan el ROI.",
      price: "Desde $599/mes",
      features: ["SEO", "Google Ads", "Meta Ads", "Análisis de datos"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Servicios Profesionales</h2>
          <p className="text-gray-600">
            Soluciones digitales completas para impulsar tu presencia online y hacer crecer tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-lg font-medium text-primary">{service.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary/90">Solicitar cotización</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

