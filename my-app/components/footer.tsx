"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  return (
    <footer className="border-t bg-muted/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="space-y-4">
            <Logo variant="default" />
            <p className="text-sm sm:text-base text-muted-foreground">
              {t('description')}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-base sm:text-lg">{t('navegacion')}</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                {tNav('inicio')}
              </Link>
              <Link href="/servicios" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                {tNav('servicios')}
              </Link>
              <Link href="/cotizar" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                {tNav('cotizar')}
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-base sm:text-lg">{t('servicios')}</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/servicios" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                {t('maritimo')}
              </Link>
              <Link href="/servicios" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                {t('terrestre')}
              </Link>
              <Link href="/servicios" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                {t('multimodal')}
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-base sm:text-lg">{t('contacto')}</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-muted-foreground">contacto@andescontinental.cl</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-muted-foreground">+56 9 XXXX XXXX</span>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/569XXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                  {t('whatsapp')}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-muted-foreground">{t('direccion')}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xs text-muted-foreground">{t('disponible')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              {t('derechos')}
            </p>
            <div className="flex gap-6">
              <Link href="/" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('privacidad')}
              </Link>
              <Link href="/" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('terminos')}
              </Link>
              <Link href="/" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('cookies')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}