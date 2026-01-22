import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from 'next';
import { StructuredData } from '@/components/structured-data';
import { WhatsAppFloat } from '@/components/whatsapp-float';
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const baseUrl = 'https://www.andescontinental.cl';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isSpanish = locale === 'es';
  const url = isSpanish ? baseUrl : `${baseUrl}/${locale}`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: isSpanish 
        ? 'Andes Continental - Comercio Exterior y Logística Internacional desde Chile'
        : 'Andes Continental - International Trade and Logistics from Chile',
      template: isSpanish 
        ? '%s | Andes Continental'
        : '%s | Andes Continental'
    },
    description: isSpanish
      ? 'Especialistas en comercio exterior desde Chile. Transporte marítimo, terrestre y multimodal. Agente de aduana. Conectamos mercados globales con soluciones personalizadas. Disponible 24/7.'
      : 'Foreign trade specialists from Chile. Maritime, land and multimodal transport. Customs agent. We connect global markets with customized solutions. Available 24/7.',
    keywords: isSpanish
      ? 'comercio exterior chile, transporte marítimo, transporte terrestre, logística internacional, agente de aduana, exportación chile, importación chile, commodities, transporte multimodal, logística global, fcl lcl, contenedores refrigerados, transporte de carga chile'
      : 'foreign trade chile, maritime transport, land transport, international logistics, customs agent, export chile, import chile, commodities, multimodal transport, global logistics, fcl lcl, refrigerated containers, cargo transport chile',
    authors: [{ name: 'Andes Continental' }],
    creator: 'Andes Continental',
    publisher: 'Andes Continental',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: 'website',
      locale: isSpanish ? 'es_CL' : 'en_US',
      url: url,
      siteName: 'Andes Continental',
      title: isSpanish
        ? 'Andes Continental - Comercio Exterior y Logística Internacional'
        : 'Andes Continental - International Trade and Logistics',
      description: isSpanish
        ? 'Especialistas en comercio exterior desde Chile. Transporte marítimo, terrestre y multimodal. Conectamos mercados globales con soluciones personalizadas.'
        : 'Foreign trade specialists from Chile. Maritime, land and multimodal transport. We connect global markets with customized solutions.',
      images: [
        {
          url: `${baseUrl}/bannermapa.png`,
          width: 1920,
          height: 800,
          alt: isSpanish ? 'Cobertura global Andes Continental' : 'Global coverage Andes Continental',
        },
        {
          url: `${baseUrl}/logonuevo.png`,
          width: 500,
          height: 200,
          alt: 'Andes Continental Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isSpanish
        ? 'Andes Continental - Comercio Exterior y Logística'
        : 'Andes Continental - International Trade and Logistics',
      description: isSpanish
        ? 'Especialistas en comercio exterior desde Chile. Conectamos mercados globales.'
        : 'Foreign trade specialists from Chile. We connect global markets.',
      images: [`${baseUrl}/bannermapa.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: url,
      languages: {
        'es': baseUrl,
        'en': `${baseUrl}/en`,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
    category: 'Business',
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const isSpanish = locale === 'es';

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <StructuredData locale={locale} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider messages={messages}>
            {children}
            <WhatsAppFloat />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
