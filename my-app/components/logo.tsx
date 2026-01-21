"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface LogoProps {
  className?: string
  showText?: boolean
  variant?: "default" | "compact"
}

export function Logo({ className, showText = true, variant = "default" }: LogoProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === "dark"
  const primaryColor = isDark ? "rgb(87 149 255)" : "rgb(0 57 166)"
  const accentColor = isDark ? "rgb(255 87 97)" : "rgb(218 2 14)"
  const snowColor = isDark ? "rgb(230 230 230)" : "white"
  const shadowColor = isDark ? "rgb(30 30 40)" : "rgb(200 210 220)"

  const gradientId = `mountainGradient-${variant}`

  return (
    <Link href="/" className={cn("flex items-center gap-2 sm:gap-3 md:gap-4 group", className)}>
      <div className="relative flex-shrink-0">
        <svg
          width={variant === "compact" ? "44" : "56"}
          height={variant === "compact" ? "44" : "56"}
          viewBox="0 0 200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105 w-auto h-auto"
        >
          <g>
            <path
              d="M0 120 L15 75 L35 55 L50 45 L65 35 L80 30 L95 25 L110 20 L125 18 L140 22 L155 28 L170 38 L185 52 L200 70 L200 120 Z"
              fill={shadowColor}
              fillOpacity="0.3"
            />
            <path
              d="M0 120 L20 70 L40 50 L60 38 L80 28 L100 22 L120 18 L140 20 L160 28 L180 42 L200 60 L200 120 Z"
              fill={primaryColor}
              className="transition-colors duration-300"
            />
            <path
              d="M0 120 L20 70 L40 50 L60 38 L80 28 L100 22 L120 18 L140 20 L160 28 L180 42 L200 60 L200 120 Z"
              fill={`url(#${gradientId})`}
            />
            <path
              d="M40 50 L60 38 L58 32 L42 44 Z"
              fill={snowColor}
            />
            <path
              d="M80 28 L100 22 L98 16 L82 24 Z"
              fill={snowColor}
            />
            <path
              d="M120 18 L140 20 L138 14 L122 16 Z"
              fill={snowColor}
            />
            <path
              d="M60 38 L80 28 L100 22 L120 18 L140 20 L160 28 L180 42 L200 60 L200 120 L0 120 Z"
              fill={accentColor}
              fillOpacity="0.2"
              className="transition-colors duration-300"
            />
            <path
              d="M90 24 L100 22 L98 18 L92 20 Z"
              fill={snowColor}
            />
            <path
              d="M130 20 L140 20 L138 16 L132 18 Z"
              fill={snowColor}
            />
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={primaryColor} />
                <stop offset="40%" stopColor={primaryColor} stopOpacity="0.95" />
                <stop offset="70%" stopColor={primaryColor} stopOpacity="0.85" />
                <stop offset="100%" stopColor={accentColor} stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </g>
        </svg>
      </div>
      {showText && (
        <span className={cn(
          "font-bold text-primary tracking-tight whitespace-nowrap select-none",
          variant === "compact" 
            ? "text-[11px] sm:text-xs md:text-sm" 
            : "text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
        )}>
          <span className="hidden sm:inline font-semibold">andescontinental.cl</span>
          <span className="sm:hidden font-semibold">andes</span>
        </span>
      )}
    </Link>
  )
}