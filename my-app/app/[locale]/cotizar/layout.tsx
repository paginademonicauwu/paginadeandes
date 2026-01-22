import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isSpanish = locale === 'es';
  const baseUrl = 'https://www.andescontinental.cl';
  const url = isSpanish ? `${baseUrl}/cotizar` : `${baseUrl}/${locale}/cotizar`;

  return {
    title: isSpanish
      ? 'Cotización de Servicios de Comercio Exterior | Andes Continental'
      : 'Foreign Trade Services Quote | Andes Continental',
    description: isSpanish
      ? 'Solicite su cotización de servicios de comercio exterior. Respuesta en menos de 24 horas. Soporte 24/7. Transporte marítimo, terrestre y multimodal desde Chile.'
      : 'Request your foreign trade services quote. Response in less than 24 hours. 24/7 support. Maritime, land and multimodal transport from Chile.',
    keywords: isSpanish
      ? 'cotización comercio exterior, cotización transporte marítimo, cotización logística, solicitar cotización chile, presupuesto transporte internacional'
      : 'foreign trade quote, maritime transport quote, logistics quote, request quote chile, international transport budget',
    openGraph: {
      title: isSpanish
        ? 'Cotice con Nosotros | Andes Continental'
        : 'Get a Quote | Andes Continental',
      description: isSpanish
        ? 'Somos una empresa ágil. Trabajamos con usted para solucionar cualquier contingencia en la cadena operativa logística y documental. Nuestro apoyo es 24/7.'
        : 'We are an agile company. We work with you to solve any contingency in the operational logistics and documentation chain. Our support is 24/7.',
      url: url,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default function CotizarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
