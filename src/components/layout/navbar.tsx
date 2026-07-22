"use client"
import * as React from "react"
import Link from "next/link"
import { Phone, Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary-600 text-white">
              <Zap className="h-5 w-5 fill-thunder-400 text-thunder-400" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Thunder <span className="text-primary-600">Electrical</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-500">Home</Link>
            <Link href="/services/ac-repair" className="text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-500">AC Repair</Link>
            <Link href="/services/appliances" className="text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-500">Appliances</Link>
            <Link href="/services/electrical" className="text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-500">Electrical & Plumbing</Link>
            <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-500">Contact</Link>
          </div>

          {/* Call CTA */}
          <div className="hidden md:flex">
            <Button variant="thunder" className="gap-2" asChild>
              <a href="tel:0551555386">
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">055 155 5386</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
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
            <Link href="/services/electrical" className="text-sm font-medium" onClick={() => setIsOpen(false)}>Electrical & Plumbing</Link>
            <Link href="/contact" className="text-sm font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
            <Button variant="thunder" className="w-full gap-2 mt-4" asChild>
              <a href="tel:0551555386">
                <Phone className="h-4 w-4" />
                Call Now: 055 155 5386
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
