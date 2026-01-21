import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Package, Globe, TrendingUp, Shield, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Inicio",
  description: "Servicios de comercio exterior desde Chile. Importación y exportación de commodities, transporte marítimo, terrestre y multimodal. Soluciones logísticas 24/7.",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-[#0039A6] via-[#DA020E] to-[#0039A6] bg-clip-text text-transparent px-2">
              ¿Quieres Exportar o Importar hacia o desde cualquier lugar del mundo?
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-2">
              Especialistas en comercio exterior desde Chile. Trabajamos con todo tipo de commodities y buscamos la mejor oferta para tu negocio. Conectamos mercados globales con soluciones personalizadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-6 px-2">
              <Link href="/cotizar" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
                  Comenzar ahora
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
              <Link href="/servicios" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
                  Ver servicios
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-20">
            <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl">Commodities Globales</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Trabajamos con todo tipo de productos: agrícolas, minerales, energéticos, manufacturados y más.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl">Cobertura Mundial</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Operamos en todos los continentes, conectando proveedores y compradores internacionales.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl">Mejor Oferta</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Negociamos las mejores condiciones comerciales para optimizar tus costos y maximizar beneficios.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-12 sm:mt-20 grid sm:grid-cols-2 gap-4 sm:gap-8">
            <Card className="border-2">
              <CardHeader>
                <Shield className="h-7 w-7 sm:h-8 sm:w-8 text-primary mb-4" />
                <CardTitle className="text-2xl sm:text-3xl">Experiencia y Confianza</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Años de experiencia en comercio exterior nos han posicionado como socios estratégicos confiables para empresas de todos los tamaños.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Clock className="h-7 w-7 sm:h-8 sm:w-8 text-primary mb-4" />
                <CardTitle className="text-2xl sm:text-3xl">Soporte 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Nuestro equipo está disponible las 24 horas del día, los 7 días de la semana para resolver cualquier contingencia en tu operación.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}