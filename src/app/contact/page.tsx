import { Metadata } from "next"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | Thunder Electrical Dubai",
  description: "Get in touch with Thunder Electrical Equipment Repairing in Dubai for emergency AC, electrical, and appliance repairs. Call 050 4962516.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-slate-900 py-16 text-white sm:py-24">
        {/* Banner Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/contact.png"
            alt="Contact background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center sm:px-6">
          <h1 className="font-outfit text-4xl font-extrabold tracking-tight sm:text-5xl">
            Contact <span className="text-thunder-500">Us</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-300 sm:text-xl">
            We are available 24/7 for emergency repairs across Dubai.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            
            {/* Contact Info */}
            <div>
              <h2 className="font-outfit text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                Get In Touch
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400">
                Whether you need a quick repair or a full maintenance contract, we are here to help. Reach out to us via phone or visit our shop.
              </p>

              <div className="mt-8 mb-8 relative h-64 w-full overflow-hidden rounded-2xl sm:h-[300px]">
                <Image
                  src="/images/contact.png"
                  alt="Customer Support"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>


              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Phone & WhatsApp</h3>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">Call us for immediate assistance.</p>
                    <a href="tel:0504962516" className="mt-1 inline-block font-medium text-primary-600 hover:text-primary-700">050 4962516</a>
                    <br />
                    <a href="tel:0553804786" className="mt-1 inline-block font-medium text-primary-600 hover:text-primary-700">055 3804786</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Email</h3>
                    <a href="mailto:thunderelectric2000@hotmail.com" className="mt-1 inline-block text-slate-600 dark:text-slate-400 hover:text-primary-600">thunderelectric2000@hotmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Location</h3>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">Satwa - Dubai<br/>U.A.E.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Business Hours</h3>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">Open until 10:00 PM (Emergency Services Available)</p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
