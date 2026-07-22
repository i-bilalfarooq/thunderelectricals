"use client"
import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="relative flex h-12 w-48 items-center justify-start">
            <Image 
              src="/images/Logo.png" 
              alt="Thunder Electrical Logo" 
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-500">Home</Link>
            <Link href="/services/ac-repair" className="text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-500">AC Repair</Link>
            <Link href="/services/appliances" className="text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-500">Appliances</Link>
            <Link href="/services/electrical" className="text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-500">Electrical</Link>
            <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-500">Contact</Link>
          </div>

          {/* Call CTA */}
          <div className="hidden md:flex">
            <Button variant="thunder" className="gap-2" asChild>
              <a href="tel:0504962516">
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">Call Now</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button aria-label="Toggle Mobile Menu" variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-sm font-medium" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/services/ac-repair" className="text-sm font-medium" onClick={() => setIsOpen(false)}>AC Repair</Link>
            <Link href="/services/appliances" className="text-sm font-medium" onClick={() => setIsOpen(false)}>Appliances</Link>
            <Link href="/services/electrical" className="text-sm font-medium" onClick={() => setIsOpen(false)}>Electrical</Link>
            <Link href="/contact" className="text-sm font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
            <Button variant="thunder" className="w-full gap-2 mt-4" asChild>
              <a href="tel:0504962516">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
