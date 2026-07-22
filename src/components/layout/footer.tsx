import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Zap } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div>
            <Link href="/" className="mb-4 relative block h-16 w-56">
              <Image 
                src="/images/Logo.png" 
                alt="Thunder Electrical Logo" 
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Professional repair and maintenance services for all types of ACs, home appliances, and electrical work in Dubai.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">Services</h3>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/services/ac-repair" className="hover:text-primary-600">AC Repair & Maintenance</Link></li>
              <li><Link href="/services/appliances" className="hover:text-primary-600">Washing Machine Repair</Link></li>
              <li><Link href="/services/appliances" className="hover:text-primary-600">Fridge & Chiller Repair</Link></li>
              <li><Link href="/services/electrical" className="hover:text-primary-600">Electrical Work</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">Contact Us</h3>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                <span>Satwa - Dubai<br/>U.A.E.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary-600" />
                <a href="tel:0504962516" className="hover:text-primary-600">050 4962516</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary-600" />
                <a href="tel:0553804786" className="hover:text-primary-600">055 3804786</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary-600" />
                <a href="mailto:thunderelectric2000@hotmail.com" className="hover:text-primary-600">thunderelectric2000@hotmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-primary-600" />
                <span>Open until 10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Reviews Badge */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">Highly Rated</h3>
            <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <div className="text-2xl font-bold text-slate-900 dark:text-white">4.85</div>
              <div className="flex flex-col">
                <div className="flex text-thunder-500">
                  {"★★★★★"}
                </div>
                <span className="text-xs text-slate-500">Google Reviews</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-200 pt-8 dark:border-slate-800 md:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Thunder Electrical Equipment Repairing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
