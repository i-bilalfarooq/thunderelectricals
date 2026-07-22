import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Phone, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

type ServiceData = {
  id: string
  title: string
  description: string
  keywords: string[]
  content: string
  features: string[]
  titleHighlight: string
}

const servicesData: Record<string, ServiceData> = {
  "ac-repair": {
    id: "ac-repair",
    title: "Expert AC Repair & Maintenance in Dubai",
    description: "Professional AC repair, servicing, and annual maintenance contracts in Dubai. We fix all brands quickly and efficiently.",
    keywords: ["AC repair Dubai", "AC servicing", "split AC repair", "AC maintenance contract", "AC gas refill Dubai"],
    content: "Living in Dubai, a working AC is essential. Thunder Electrical provides top-tier AC repair and maintenance services. Whether it's a minor leak, poor cooling, or a complete system breakdown, our certified technicians diagnose and fix the issue promptly.",
    features: ["Gas Refilling & Leak Repair", "Compressor Replacement", "Filter Cleaning & Deep Wash", "Thermostat Fixes", "Annual Maintenance Contracts (AMC)"],
    titleHighlight: "Maintenance"
  },
  "appliances": {
    id: "appliances",
    title: "Home Appliance Repair (Washing Machine, Fridge, Microwave)",
    description: "Fast and reliable repair for washing machines, fridges, microwaves, and dishwashers in Dubai. Call us for same-day service.",
    keywords: ["washing machine repair Dubai", "fridge repair Dubai", "microwave repair", "dishwasher maintenance", "appliance fixing near me"],
    content: "Don't let a broken appliance disrupt your routine. We specialize in repairing all major household appliances, from top and front-load washing machines to commercial chillers and microwaves. We carry genuine spare parts to ensure a long-lasting fix.",
    features: ["Washing Machine & Dryer Repair", "Refrigerator & Chiller Fixing", "Microwave & Oven Repair", "Dishwasher Maintenance", "Gas Cooker Servicing"],
    titleHighlight: "Repair"
  },
  "electrical": {
    id: "electrical",
    title: "Professional Electrical Services",
    description: "Licensed electricians in Dubai. We handle short circuits, wiring, DB panel replacements, and complete rewiring.",
    keywords: ["electrician Dubai", "electrical repair Dubai", "short circuit fix", "electrical wiring Dubai", "DB panel installation"],
    content: "Electrical issues require immediate, professional attention to ensure safety. Our licensed team is equipped to handle everything from flickering lights and tripped breakers to complete rewiring and power socket installations.",
    features: ["Short Circuit & Fault Finding", "DB Panel & Breaker Replacement", "Lighting & Fixture Installation", "Power Sockets & Switches", "Complete Rewiring & Inspection"],
    titleHighlight: "Services"
  }
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = servicesData[slug]
  
  if (!service) {
    return { title: "Service Not Found" }
  }

  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = servicesData[slug]

  if (!service) {
    notFound()
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative overflow-hidden bg-slate-900 py-16 text-white sm:py-24">
        {/* Banner Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={`/images/${service.id}.png`}
            alt={`${service.title} background`}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-outfit text-4xl font-extrabold tracking-tight sm:text-5xl">
              {service.title.split(service.titleHighlight)[0]}
              <span className="text-thunder-500">{service.titleHighlight}</span>
              {service.title.split(service.titleHighlight)[1]}
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-300 sm:text-xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-outfit text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                Comprehensive Service Details
              </h2>
              
              <div className="mt-8 mb-8 relative h-64 w-full overflow-hidden rounded-2xl sm:h-[400px]">
                <Image
                  src={`/images/${service.id}.png`}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <p className="mt-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                {service.content}
              </p>

              <h3 className="mt-10 font-outfit text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                What We Offer
              </h3>
              <ul className="mt-6 space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/50">
                    <CheckCircle2 className="h-6 w-6 text-primary-600" />
                    <span className="font-medium text-slate-800 dark:text-slate-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <h3 className="font-outfit text-xl font-bold text-slate-900 dark:text-white">
                  Need this service?
                </h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Our technicians are ready to help you right now in Dubai.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Button size="lg" variant="thunder" className="w-full gap-2 text-base font-bold" asChild>
                    <a href="tel:0504962516">
                      <Phone className="h-5 w-5" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }))
}
