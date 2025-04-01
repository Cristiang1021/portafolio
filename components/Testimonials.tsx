import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      company: "Fashion Store",
      role: "CEO",
      content:
        "Trabajar con este profesional ha sido una experiencia increíble. Entendió perfectamente nuestras necesidades y entregó un sitio web que superó todas nuestras expectativas. Las ventas han aumentado un 40% desde el lanzamiento.",
      rating: 5,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      company: "Inmobiliaria CR",
      role: "Director de Marketing",
      content:
        "La plataforma que desarrolló para nosotros ha revolucionado la forma en que gestionamos nuestras propiedades. La interfaz es intuitiva y nuestros clientes adoran la experiencia de usuario. Totalmente recomendado.",
      rating: 5,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Laura Martínez",
      company: "EduTech",
      role: "Fundadora",
      content:
        "Nuestra plataforma educativa es ahora mucho más eficiente y atractiva. El proceso de desarrollo fue transparente y profesional en todo momento. Sin duda seguiremos colaborando en futuros proyectos.",
      rating: 4,
      image: "/placeholder.svg",
    },
  ]

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Lo que dicen mis clientes</h2>
          <p className="text-gray-600">
            Testimonios de clientes satisfechos que han confiado en mis servicios para impulsar sus negocios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                    {/* This would be replaced with an actual image */}
                    <div className="h-full w-full flex items-center justify-center text-gray-400 text-xs font-bold">
                      Photo
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Case Study */}
        <div className="mt-20 bg-gray-50 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded text-sm font-medium mb-4">
                Caso de Éxito
              </div>
              <h3 className="text-2xl font-bold mb-4">Cómo ayudé a Fashion Store a aumentar sus ventas en un 40%</h3>
              <p className="text-gray-600 mb-6">
                Fashion Store necesitaba renovar su presencia online y mejorar su proceso de compra. Desarrollé una
                estrategia integral que incluía un nuevo sitio web, optimización SEO y campañas de marketing digital.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  {/* This would be replaced with an actual image */}
                  <div className="h-full w-full flex items-center justify-center text-gray-400 text-xs font-bold">
                    Photo
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">María González</h4>
                  <p className="text-sm text-gray-500">CEO, Fashion Store</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 min-h-[300px] md:min-h-0">
              {/* This would be replaced with an actual image */}
              <div className="h-full w-full flex items-center justify-center text-gray-400 text-2xl font-bold">
                Case Study Image
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

