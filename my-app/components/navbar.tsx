"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe2, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <nav className="container flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Globe2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          </div>
          <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            <span className="hidden sm:inline">Página de Mónica</span>
            <span className="sm:hidden">Mónica</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-sm font-medium">Inicio</Button>
          </Link>
          <Link href="/servicios">
            <Button variant="ghost" size="sm" className="text-sm font-medium">Servicios</Button>
          </Link>
          <Link href="/cotizar">
            <Button variant="default" size="sm" className="text-sm font-medium">Cotizar</Button>
          </Link>
          <ThemeToggle />
        </div>
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="relative"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-md animate-in slide-in-from-top">
          <div className="container px-4 py-4 flex flex-col gap-1">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start font-medium">Inicio</Button>
            </Link>
            <Link href="/servicios" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start font-medium">Servicios</Button>
            </Link>
            <Link href="/cotizar" onClick={() => setIsOpen(false)}>
              <Button variant="default" className="w-full justify-start font-medium">Cotizar</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}