import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Share2 } from "lucide-react"

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Tendencias de Diseño Web para 2024",
      excerpt: "Descubre las tendencias de diseño web que dominarán el próximo año y cómo implementarlas en tu sitio.",
      category: "Diseño Web",
      date: "15 Nov 2023",
      readTime: "5 min",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Guía Completa de SEO para Principiantes",
      excerpt:
        "Todo lo que necesitas saber para empezar a optimizar tu sitio web y mejorar tu posicionamiento en buscadores.",
      category: "SEO",
      date: "8 Nov 2023",
      readTime: "8 min",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Cómo Aumentar las Conversiones en tu E-commerce",
      excerpt: "Estrategias probadas para mejorar la tasa de conversión y aumentar las ventas en tu tienda online.",
      category: "E-commerce",
      date: "1 Nov 2023",
      readTime: "6 min",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      title: "Introducción a las APIs de Inteligencia Artificial",
      excerpt: "Aprende cómo integrar IA en tus proyectos web para crear experiencias más personalizadas y eficientes.",
      category: "Desarrollo",
      date: "25 Oct 2023",
      readTime: "7 min",
      image: "/placeholder.svg",
    },
  ]

  return (
    <section className="py-20 bg-gray-50" id="blog">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Blog y Noticias</h2>
            <p className="text-gray-600 max-w-2xl">
              Artículos, tutoriales y noticias sobre desarrollo web, marketing digital y tendencias tecnológicas
            </p>
          </div>

          <div className="mt-6 md:mt-0 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input placeholder="Buscar artículos..." className="pl-10 w-full md:w-64" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-[16/9] bg-gray-200">
                {/* This would be replaced with an actual image */}
                <div className="h-full w-full flex items-center justify-center text-gray-400 text-xl font-bold">
                  Image
                </div>
              </div>
              <CardHeader className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-xs">
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-4 flex justify-between items-center">
                <span className="text-xs text-gray-500">{post.date}</span>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Ver todos los artículos
          </Button>
        </div>
      </div>
    </section>
  )
}

