"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  showText?: boolean
  variant?: "default" | "compact"
}

export function Logo({ className, showText = true, variant = "default" }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 sm:gap-3 md:gap-4 group", className)}>
      <div className="relative flex-shrink-0">
        <svg
          width={variant === "compact" ? "44" : "56"}
          height={variant === "compact" ? "44" : "56"}
          viewBox="0 0 180 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105 w-auto h-auto"
        >
          <g>
            <path
              d="M0 110 L25 60 L50 40 L75 25 L100 35 L125 20 L150 30 L180 50 L180 110 Z"
              fill="#0039A6"
              className="transition-colors duration-300"
            />
            <path
              d="M0 110 L25 60 L50 40 L75 25 L100 35 L125 20 L150 30 L180 50 L180 110 Z"
              fill="url(#mountainGradient)"
            />
            <path
              d="M25 60 L50 40 L45 35 L30 50 Z"
              fill="white"
            />
            <path
              d="M75 25 L100 35 L95 30 L80 20 Z"
              fill="white"
            />
            <path
              d="M125 20 L150 30 L145 25 L130 15 Z"
              fill="white"
            />
            <path
              d="M50 40 L75 25 L100 35 L125 20 L150 30 L180 50 L180 110 L0 110 Z"
              fill="#DA020E"
              fillOpacity="0.3"
              className="transition-colors duration-300"
            />
            <defs>
              <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0039A6" />
                <stop offset="50%" stopColor="#0039A6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#DA020E" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </g>
        </svg>
      </div>
      {showText && (
        <span className={cn(
          "font-bold text-[#0039A6] tracking-tight whitespace-nowrap select-none",
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