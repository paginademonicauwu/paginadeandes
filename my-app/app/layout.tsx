import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://andescontinental.cl"),
  title: {
    default: "Andes Continental - Comercio Exterior y Negociaciones Internacionales",
    template: "%s | Andes Continental",
  },
  description: "Servicios de comercio exterior, transporte marítimo, terrestre y multimodal. Especialistas en importación y exportación desde y hacia Chile. Soluciones logísticas personalizadas 24/7.",
  keywords: ["comercio exterior", "importación", "exportación", "transporte marítimo", "transporte terrestre", "logística", "Chile", "negociaciones internacionales", "commodities"],
  authors: [{ name: "Andes Continental" }],
  creator: "Andes Continental",
  publisher: "Andes Continental",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://andescontinental.cl",
    siteName: "Andes Continental",
    title: "Andes Continental - Comercio Exterior y Negociaciones Internacionales",
    description: "Servicios de comercio exterior, transporte marítimo, terrestre y multimodal. Especialistas en importación y exportación desde y hacia Chile.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andes Continental - Comercio Exterior y Negociaciones Internacionales",
    description: "Servicios de comercio exterior, transporte marítimo, terrestre y multimodal. Especialistas en importación y exportación desde y hacia Chile.",
  },
  alternates: {
    canonical: "https://andescontinental.cl",
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://andescontinental.cl" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
