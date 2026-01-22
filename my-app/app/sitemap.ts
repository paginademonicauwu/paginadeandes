import { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.andescontinental.cl'
  const routes = ['', '/servicios', '/cotizar']
  
  const sitemapEntries: MetadataRoute.Sitemap = []

  routing.locales.forEach((locale) => {
    routes.forEach((route) => {
      const url = locale === 'es' 
        ? `${baseUrl}${route === '' ? '' : route}`
        : `${baseUrl}/${locale}${route === '' ? '' : route}`
      
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: {
            es: locale === 'es' ? url : `${baseUrl}${route === '' ? '' : route}`,
            en: locale === 'en' ? url : `${baseUrl}/en${route === '' ? '' : route}`,
          },
        },
      })
    })
  })

  return sitemapEntries
}
