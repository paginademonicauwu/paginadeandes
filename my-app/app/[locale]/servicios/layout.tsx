import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isSpanish = locale === 'es';
  const baseUrl = 'https://www.andescontinental.cl';
  const url = isSpanish ? `${baseUrl}/servicios` : `${baseUrl}/${locale}/servicios`;

  return {
    title: isSpanish
      ? 'Servicios de Transporte Marítimo, Terrestre y Multimodal | Andes Continental'
      : 'Maritime, Land and Multimodal Transport Services | Andes Continental',
    description: isSpanish
      ? 'Servicios completos de logística: transporte marítimo FCL/LCL, transporte terrestre, multimodal, contenedores refrigerados y agente de aduana. Soluciones personalizadas desde Chile.'
      : 'Complete logistics services: FCL/LCL maritime transport, land transport, multimodal, refrigerated containers and customs agent. Customized solutions from Chile.',
    keywords: isSpanish
      ? 'transporte marítimo chile, fcl lcl, contenedores refrigerados, transporte terrestre, transporte multimodal, agente de aduana chile, logística internacional, carga marítima, transporte de carga'
      : 'maritime transport chile, fcl lcl, refrigerated containers, land transport, multimodal transport, customs agent chile, international logistics, maritime cargo, cargo transport',
    openGraph: {
      title: isSpanish
        ? 'Servicios de Transporte | Andes Continental'
        : 'Transport Services | Andes Continental',
      description: isSpanish
        ? 'Soluciones completas de logística para mover tus productos por cualquier vía. Transporte marítimo, terrestre y multimodal.'
        : 'Complete logistics solutions to move your products by any route. Maritime, land and multimodal transport.',
      url: url,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
