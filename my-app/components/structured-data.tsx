export function StructuredData({ locale }: { locale: string }) {
  const isSpanish = locale === 'es';
  const baseUrl = 'https://www.andescontinental.cl';

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Andes Continental",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": isSpanish
      ? "Especialistas en comercio exterior desde Chile. Transporte marítimo, terrestre y multimodal. Agente de aduana."
      : "Foreign trade specialists from Chile. Maritime, land and multimodal transport. Customs agent.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Renaca Norte 265 Of. 510",
      "addressLocality": "Viña del Mar",
      "addressRegion": "Valparaíso",
      "addressCountry": "CL"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+56-9-XXXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": ["Spanish", "English"],
      "areaServed": "Worldwide"
    },
    "sameAs": []
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}#organization`,
    "name": "Andes Continental",
    "image": `${baseUrl}/logo.png`,
    "description": isSpanish
      ? "Servicios de comercio exterior y logística internacional desde Chile"
      : "International trade and logistics services from Chile",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Renaca Norte 265 Of. 510",
      "addressLocality": "Viña del Mar",
      "addressRegion": "Valparaíso",
      "postalCode": "",
      "addressCountry": "CL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.0246,
      "longitude": -71.5518
    },
    "url": baseUrl,
    "telephone": "+56-9-XXXX-XXXX",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": isSpanish
      ? "Comercio Exterior y Logística Internacional"
      : "International Trade and Logistics",
    "provider": {
      "@type": "Organization",
      "name": "Andes Continental"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": isSpanish ? "Servicios de Transporte" : "Transport Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isSpanish ? "Transporte Marítimo" : "Maritime Transport"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isSpanish ? "Transporte Terrestre" : "Land Transport"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isSpanish ? "Transporte Multimodal" : "Multimodal Transport"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
