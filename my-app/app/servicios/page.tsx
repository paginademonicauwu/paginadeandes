import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Ship, Truck, Package, ArrowRight, CheckCircle2, FileCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Servicios",
  description: "Transporte marítimo, terrestre y multimodal desde Chile. Servicios completos de logística para mover tus productos por cualquier vía. FCL, LCL, carga a granel y más.",
}

export default function Servicios() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight px-2">
              Servicios de Transporte
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-2">
              Soluciones completas de logística para mover tus productos por cualquier vía
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            <Card className="border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <Ship className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl mb-3">Transporte Marítimo</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Servicios de carga marítima para todo tipo de contenedores y carga a granel
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">FCL y LCL a todos los puertos principales</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm font-semibold">Contenedores refrigerados y secos</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Carga a granel líquida y sólida</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Tracking en tiempo real</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Gestión de documentación aduanera</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-green-500/20 transition-colors">
                  <Truck className="h-7 w-7 sm:h-8 sm:w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl mb-3">Transporte Terrestre</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Red de transporte por carretera para distribución regional y nacional
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Transporte de carga completa y parcial</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm font-semibold">Coordinamos toda la logística</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Cobertura transfronteriza</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Servicio express y programado</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Flota moderna y certificada</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 group border-primary sm:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                  <Package className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl mb-3">Transporte Multimodal</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Soluciones integrales combinando marítimo, terrestre y aéreo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Logística de extremo a extremo</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Optimización de rutas y costos</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Gestión unificada de documentos</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Ventana única de contacto</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-primary/30 bg-gradient-to-r from-primary/10 via-white to-accent/10 mb-8 sm:mb-12">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl text-center mb-4 px-2">
                Nuestros Servicios Especializados
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-base sm:text-lg md:text-xl text-foreground font-medium max-w-4xl mx-auto px-4 leading-relaxed">
                Carga para contenedores refrigerados y secos. Transporte terrestre coordinamos toda la logística, 
                contamos con Agente de Aduana para asesoría global a sus operaciones.
              </p>
            </CardContent>
          </Card>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl">Agente de Aduana</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Contamos con <strong>Agente de Aduana</strong> para asesoría global a sus operaciones. 
                  Gestión completa de trámites aduaneros, documentación y cumplimiento normativo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-to-r from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-center mb-4 px-2">
                  Soluciones Completas para tu Cadena de Suministro
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-2">
                  No importa el tamaño de tu operación o la complejidad de tu logística. 
                  Ofrecemos servicios personalizados que se adaptan a tus necesidades específicas.
                </p>
                <Link href="/cotizar" className="inline-block">
                  <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                    Solicitar Cotización
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}