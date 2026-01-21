"use client"

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Package, Globe, TrendingUp, Shield, Clock } from "lucide-react"

export default function Home() {
  const t = useTranslations('home');

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      
      <div className="relative w-full mt-16 sm:mt-20 min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/bannermapa.png"
            alt="Cobertura global"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-background/40 dark:bg-background/60 backdrop-blur-[1px]"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="text-center space-y-6 sm:space-y-8 max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent px-2 drop-shadow-lg">
              {t('title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-4xl mx-auto px-2 font-medium drop-shadow-md">
              {t('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center pt-6 sm:pt-8 px-2">
              <Link href="/cotizar" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 shadow-xl hover:shadow-2xl transition-all">
                  {t('cta1')}
                  <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </Link>
              <Link href="/servicios" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 bg-background/90 dark:bg-background/80 backdrop-blur-sm border-2 shadow-xl hover:shadow-2xl transition-all">
                  {t('cta2')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="pt-12 sm:pt-16 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-20">
            <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl">{t('commodities.title')}</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  {t('commodities.description')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl">{t('cobertura.title')}</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  {t('cobertura.description')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl">{t('oferta.title')}</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  {t('oferta.description')}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="border-2 border-primary/30 bg-gradient-to-r from-primary/10 via-background to-accent/10 mt-12 sm:mt-20 mb-8 sm:mb-12">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl text-center mb-4 px-2">
                {t('serviciosEspecializados.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-base sm:text-lg md:text-xl text-foreground font-medium max-w-4xl mx-auto px-4 leading-relaxed">
                {t('serviciosEspecializados.description')}
              </p>
            </CardContent>
          </Card>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
            <Card className="border-2">
              <CardHeader>
                <Shield className="h-7 w-7 sm:h-8 sm:w-8 text-primary mb-4" />
                <CardTitle className="text-xl sm:text-2xl">{t('experiencia.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('experiencia.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Clock className="h-7 w-7 sm:h-8 sm:w-8 text-primary mb-4" />
                <CardTitle className="text-xl sm:text-2xl">{t('soporte.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('soporte.description')}
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
