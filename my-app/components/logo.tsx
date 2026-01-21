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
          width={variant === "compact" ? "40" : "56"}
          height={variant === "compact" ? "40" : "56"}
          viewBox="0 0 180 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105 w-auto h-auto"
        >
          <g>
            <path
              d="M25 85 L25 35 L75 10 L100 25 L100 85 Z"
              fill="#0039A6"
              className="transition-colors duration-300"
            />
            <path
              d="M48 45 L57 39 L63 43.5 L57 48 Z"
              fill="white"
            />
            <circle cx="56" cy="43.5" r="5.5" fill="white" />
            <path
              d="M100 85 L100 45 L140 25 L155 32 L155 85 Z"
              fill="#DA020E"
              className="transition-colors duration-300"
            />
            <path
              d="M15 92 Q40 80 70 92 T125 92 L135 102 L5 102 Z"
              fill="white"
            />
            <path
              d="M25 92 Q45 84 70 92 T120 92"
              stroke="#DA020E"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors duration-300"
            />
            <path
              d="M100 92 Q115 84 135 92"
              stroke="#0039A6"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors duration-300"
            />
          </g>
        </svg>
      </div>
      {showText && (
        <span className={cn(
          "font-extrabold text-[#0039A6] tracking-tight whitespace-nowrap",
          variant === "compact" 
            ? "text-[10px] sm:text-xs" 
            : "text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"
        )}>
          <span className="hidden sm:inline">andescontinental.cl</span>
          <span className="sm:hidden">andes</span>
        </span>
      )}
    </Link>
  )
}