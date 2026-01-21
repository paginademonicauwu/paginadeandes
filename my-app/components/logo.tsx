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
    <Link href="/" className={cn("flex items-center gap-3 sm:gap-4 group", className)}>
      <div className="relative flex-shrink-0">
        <svg
          width={variant === "compact" ? "48" : "60"}
          height={variant === "compact" ? "48" : "60"}
          viewBox="0 0 160 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
        >
          <g>
            <path
              d="M20 75 L20 30 L60 8 L85 20 L85 75 Z"
              fill="#0039A6"
            />
            <path
              d="M40 38 L48 33 L53 36.5 L48 41 Z"
              fill="white"
            />
            <circle cx="47" cy="36" r="4.5" fill="white" />
            <path
              d="M85 75 L85 40 L115 22 L125 28 L125 75 Z"
              fill="#DA020E"
            />
            <path
              d="M12 80 Q32 70 55 80 T95 80 L102 88 L8 88 Z"
              fill="white"
            />
            <path
              d="M22 80 Q35 74 55 80 T88 80"
              stroke="#DA020E"
              strokeWidth="5.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M85 80 Q95 74 110 80"
              stroke="#0039A6"
              strokeWidth="5.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={cn(
            "font-extrabold text-[#0039A6] tracking-tight",
            variant === "compact" 
              ? "text-[13px] sm:text-base" 
              : "text-base sm:text-lg md:text-xl lg:text-2xl"
          )}>
            <span className="hidden sm:inline">ANDES</span>
            <span className="sm:hidden">ANDES</span>
          </span>
          <span className={cn(
            "font-bold text-[#0039A6] tracking-tight opacity-90",
            variant === "compact"
              ? "text-[10px] sm:text-xs"
              : "text-xs sm:text-sm md:text-base"
          )}>
            <span className="hidden sm:inline">CONTINENTAL.CL</span>
          </span>
        </div>
      )}
    </Link>
  )
}