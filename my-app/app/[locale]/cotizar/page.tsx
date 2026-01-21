"use client"

import { useState } from "react"
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Send, Clock, Headphones, Zap, CheckCircle2 } from "lucide-react"

export default function Cotizar() {
  const t = useTranslations('cotizar');
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    empresa: "",
    telefono: "",
    tipoServicio: "",
    origen: "",
    destino: "",
    descripcion: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Card className="border-2 text-center">
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mx-auto mb-4" />
                <CardTitle>{t('rapida.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('rapida.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardHeader>
                <Headphones className="h-10 w-10 text-primary mx-auto mb-4" />
                <CardTitle>{t('soporte.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('soporte.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardHeader>
                <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-4" />
                <CardTitle>{t('agiles.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('agiles.description')}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl mb-2">{t('form.title')}</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  {t('form.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-medium">
                      {t('form.nombre')}
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      {t('form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="empresa" className="text-sm font-medium">
                      {t('form.empresa')}
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="telefono" className="text-sm font-medium">
                      {t('form.telefono')}
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="tipoServicio" className="text-sm font-medium">
                      {t('form.tipoServicio')}
                    </label>
                    <select
                      id="tipoServicio"
                      name="tipoServicio"
                      required
                      value={formData.tipoServicio}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">{t('form.seleccione')}</option>
                      <option value="maritimo">{t('form.maritimo')}</option>
                      <option value="terrestre">{t('form.terrestre')}</option>
                      <option value="multimodal">{t('form.multimodal')}</option>
                      <option value="exportacion">{t('form.exportacion')}</option>
                      <option value="importacion">{t('form.importacion')}</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="origen" className="text-sm font-medium">
                        {t('form.origen')}
                      </label>
                      <input
                        type="text"
                        id="origen"
                        name="origen"
                        value={formData.origen}
                        onChange={handleChange}
                        placeholder={t('form.ciudadPais')}
                        className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="destino" className="text-sm font-medium">
                        {t('form.destino')}
                      </label>
                      <input
                        type="text"
                        id="destino"
                        name="destino"
                        value={formData.destino}
                        onChange={handleChange}
                        placeholder={t('form.ciudadPais')}
                        className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="descripcion" className="text-sm font-medium">
                      {t('form.descripcion')}
                    </label>
                    <textarea
                      id="descripcion"
                      name="descripcion"
                      rows={4}
                      value={formData.descripcion}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-base sm:text-lg">
                    {t('form.enviar')}
                    <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-2 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl mb-4">{t('porque.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{t('porque.empresa.title')}</p>
                      <p className="text-sm text-muted-foreground">
                        {t('porque.empresa.description')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{t('porque.contingencias.title')}</p>
                      <p className="text-sm text-muted-foreground">
                        {t('porque.contingencias.description')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{t('porque.personalizada.title')}</p>
                      <p className="text-sm text-muted-foreground">
                        {t('porque.personalizada.description')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{t('porque.disponibilidad.title')}</p>
                      <p className="text-sm text-muted-foreground">
                        {t('porque.disponibilidad.description')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <Clock className="h-7 w-7 sm:h-8 sm:w-8 text-primary mb-4" />
                  <CardTitle className="text-xl sm:text-2xl">{t('tiempos.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {t('tiempos.description')}
                  </p>
                  <p className="text-sm font-semibold">
                    {t('tiempos.horario')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
