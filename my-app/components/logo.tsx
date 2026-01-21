"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  showText?: boolean
  variant?: "default" | "compact"
}

export function Logo({ className, showText = false, variant = "default" }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center group", className)}>
      <div className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/logo.png"
          alt="Andes Continental"
          width={variant === "compact" ? 120 : 200}
          height={variant === "compact" ? 40 : 65}
          className={cn(
            "h-auto w-auto object-contain",
            variant === "compact" 
              ? "max-w-[120px] sm:max-w-[140px] md:max-w-[160px]" 
              : "max-w-[150px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[250px] xl:max-w-[280px]"
          )}
          priority
          quality={95}
        />
      </div>
    </Link>
  )
}