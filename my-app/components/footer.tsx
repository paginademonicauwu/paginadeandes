"use client"

import Link from "next/link"
import { Globe2, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <Globe2 className="h-6 w-6 text-primary" />
              <span>Página de Mónica</span>
            </Link>
            <p className="text-sm sm:text-base text-muted-foreground">
              Servicios de comercio exterior y negociaciones internacionales. Conectamos mercados globales con soluciones personalizadas.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-base sm:text-lg">Navegación</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Inicio
              </Link>
              <Link href="/servicios" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Servicios
              </Link>
              <Link href="/cotizar" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Cotizar
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-base sm:text-lg">Servicios</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/servicios" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Transporte Marítimo
              </Link>
              <Link href="/servicios" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Transporte Terrestre
              </Link>
              <Link href="/servicios" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Transporte Multimodal
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-base sm:text-lg">Contacto</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-muted-foreground">contacto@monica.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-muted-foreground">Disponible 24/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              &copy; 2024 Página de Mónica. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="/" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacidad
              </Link>
              <Link href="/" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Términos
              </Link>
              <Link href="/" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}