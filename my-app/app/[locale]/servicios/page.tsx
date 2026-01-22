"use client"

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Ship, Truck, Package, ArrowRight, CheckCircle2, FileCheck } from "lucide-react"
import Image from 'next/image'

export default function Servicios() {
  const t = useTranslations('servicios');

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight px-2">
              {t('title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-2">
              {t('subtitle')}
            </p>
          </div>

          <Card className="border-2 border-primary/30 bg-gradient-to-r from-primary/10 via-background/90 to-accent/10 mb-8 sm:mb-12 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl text-center mb-4 px-2">
                {t('emprendimiento.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-base sm:text-lg md:text-xl text-foreground font-medium max-w-4xl mx-auto px-4 leading-relaxed">
                {t('emprendimiento.description')}
              </p>
            </CardContent>
          </Card>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            <Card className="border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                  <Ship className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl mb-3">{t('maritimo.title')}</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  {t('maritimo.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{t('maritimo.fcl')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm font-semibold">{t('maritimo.refrigerados')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{t('maritimo.granel')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{t('maritimo.tracking')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{t('maritimo.documentacion')}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-accent/20 transition-colors">
                  <Truck className="h-7 w-7 sm:h-8 sm:w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl mb-3">{t('terrestre.title')}</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  {t('terrestre.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{t('terrestre.completa')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm font-semibold">{t('terrestre.logistica')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{t('terrestre.transfronteriza')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{t('terrestre.express')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{t('terrestre.flota')}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 group border-primary sm:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                  <Package className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl mb-3">{t('multimodal.title')}</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  {t('multimodal.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{t('multimodal.extremo')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{t('multimodal.optimizacion')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{t('multimodal.documentos')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{t('multimodal.contacto')}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-primary/30 bg-gradient-to-r from-primary/10 via-background to-accent/10 mb-8 sm:mb-12">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl text-center mb-4 px-2">
                {t('especializados.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-base sm:text-lg md:text-xl text-foreground font-medium max-w-4xl mx-auto px-4 leading-relaxed">
                {t('especializados.description')}
              </p>
            </CardContent>
          </Card>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl border-2 border-primary/20 group hover:scale-[1.02] transition-transform duration-300">
              <Image
                src="/barcocarga.png"
                alt="Barcos de carga y contenedores marítimos"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl border-2 border-primary/20 group hover:scale-[1.02] transition-transform duration-300">
              <Image
                src="/avioncargooo.png"
                alt="Andes Continental Cargo - Aviones de carga"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl">{t('aduana.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('aduana.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-to-r from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-center mb-4 px-2">
                  {t('soluciones.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-2">
                  {t('soluciones.description')}
                </p>
                <Link href="/cotizar" className="inline-block">
                  <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                    {t('soluciones.cta')}
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
