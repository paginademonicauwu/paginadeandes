import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cotizar",
  description: "Solicita tu cotización de servicios de comercio exterior. Empresa ágil con soporte 24/7. Trabajamos contigo para solucionar cualquier contingencia logística y documental.",
}

export default function CotizarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}