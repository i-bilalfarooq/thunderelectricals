"use client"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Phone, Wrench, Snowflake, Zap, CheckCircle2, Star, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRef } from "react"

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden bg-slate-950 text-white min-h-[90vh] flex items-center">
        {/* Parallax Background */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/images/hero-bg.png" 
            alt="Dubai Skyline Background" 
            fill 
            priority
            className="object-cover opacity-30 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </motion.div>

        <div className="container relative z-10 mx-auto px-4 pt-24 pb-32 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.a 
              href="https://share.google/WzIUswxgl2vslRFqk"
              target="_blank"
              rel="noopener noreferrer"
              variants={FADE_UP} 
              className="mb-6 inline-flex items-center rounded-full bg-primary-900/50 px-4 py-1.5 text-sm font-medium text-primary-300 ring-1 ring-primary-700/50 shadow-[0_0_20px_rgba(250,204,21,0.15)] hover:bg-primary-800/60 transition-colors cursor-pointer backdrop-blur-md"
            >
              <Star className="mr-1.5 h-4 w-4 fill-thunder-500 text-thunder-500 animate-pulse" />
              Rated 4.85 on Google Reviews
            </motion.a>
            <motion.h1 variants={FADE_UP} className="mb-6 font-outfit text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-tight">
              Dubai's Trusted Experts in <br className="hidden sm:block" />
              <span className="text-primary-500 relative inline-block">
                Appliance
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary-500/40 blur-sm"></span>
              </span> & <span className="text-thunder-400 relative inline-block">
                Electrical
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-thunder-400/40 blur-sm"></span>
              </span> Repair
            </motion.h1>
            <motion.p variants={FADE_UP} className="mb-10 text-lg text-slate-300 sm:text-xl max-w-2xl mx-auto">
              From AC maintenance to washing machine repairs and emergency electrical work. We fix it fast, right, and affordably. Available 24/7.
            </motion.p>
            <motion.div variants={FADE_UP} className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="thunder" className="w-full gap-2 sm:w-auto h-14 px-8 text-lg rounded-full group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]" asChild>
                <a href="tel:0504962516">
                  <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full gap-2 border-slate-700 bg-slate-900/50 text-white hover:bg-slate-800 hover:text-white sm:w-auto h-14 px-8 text-lg rounded-full group transition-all duration-300" asChild>
                <Link href="#services">
                  View Our Services
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Animated scroll down indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-xs uppercase tracking-widest">Scroll Down</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-slate-600 flex justify-center pt-1"
          >
            <div className="w-1 h-2 rounded-full bg-slate-400"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-slate-50 py-24 dark:bg-slate-900/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-thunder-500/5 rounded-full blur-3xl"></div>
        
        <div className="container relative mx-auto px-4 sm:px-6 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center max-w-2xl mx-auto"
          >
            <h2 className="font-outfit text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Professional Repair Services
            </h2>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
              Comprehensive solutions for your home and business, delivered by certified experts.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "AC Repair & Maintenance",
                description: "Complete AC servicing, gas refilling, leak repair, and annual maintenance contracts for all brands.",
                icon: Snowflake,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                link: "/services/ac-repair"
              },
              {
                title: "Washing Machines",
                description: "Expert repairs for front-load, top-load, and semi-automatic washing machines and dryers.",
                icon: Wrench,
                color: "text-indigo-500",
                bg: "bg-indigo-500/10",
                link: "/services/appliances"
              },
              {
                title: "Fridges & Chillers",
                description: "Fixing cooling issues, compressor replacements, and repairs for commercial and residential refrigerators.",
                icon: Snowflake,
                color: "text-cyan-500",
                bg: "bg-cyan-500/10",
                link: "/services/appliances"
              },
              {
                title: "Electrical Work",
                description: "Short circuits, wiring issues, breaker replacements, and complete electrical installations.",
                icon: Zap,
                color: "text-thunder-500",
                bg: "bg-thunder-500/10",
                link: "/services/electrical"
              },
              {
                title: "Kitchen Appliances",
                description: "Repairs for microwaves, gas cookers, dishwashers, and ovens to keep your kitchen running.",
                icon: Wrench,
                color: "text-orange-500",
                bg: "bg-orange-500/10",
                link: "/services/appliances"
              }
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, type: "spring", stiffness: 100 } }
                }}
              >
                <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-primary-900/20 border-slate-200/60 dark:border-slate-800/60 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-transparent to-primary-500/5 rounded-full blur-xl group-hover:bg-primary-500/10 transition-colors"></div>
                  <CardHeader className="relative z-10">
                    <div className={`mb-6 inline-flex rounded-xl p-4 transition-transform duration-300 group-hover:scale-110 ${service.bg}`}>
                      <service.icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <CardTitle className="text-2xl font-outfit">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="mb-6 text-base leading-relaxed text-slate-600 dark:text-slate-400">{service.description}</CardDescription>
                    <Link href={service.link} className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-primary-600 group-hover:text-primary-500">
                      Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-outfit text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Why Dubai Trusts <br />
                <span className="text-primary-600">Thunder Electrical</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                We bring years of experience to every job, ensuring your home appliances and electrical systems are safe and fully functional. Our certified technicians are just a call away.
              </p>
              
              <ul className="mt-10 space-y-6">
                {[
                  "Experienced & Certified Technicians",
                  "Fast Response Time Across Dubai",
                  "Transparent Pricing - No Hidden Fees",
                  "Genuine Spare Parts Used",
                  "Satisfaction Guaranteed on All Repairs"
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="rounded-full bg-primary-100 p-1 group-hover:bg-primary-600 transition-colors">
                      <CheckCircle2 className="h-5 w-5 text-primary-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-lg font-medium text-slate-700 dark:text-slate-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-12">
                <Button variant="default" size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-primary-600/25 transition-all" asChild>
                  <Link href="/contact">Get a Free Estimate</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
              className="relative aspect-square overflow-hidden rounded-[2rem] bg-slate-200 dark:bg-slate-800 lg:aspect-auto lg:h-[600px] shadow-2xl group"
            >
              <Image 
                src="/images/technician.png" 
                alt="Appliance Repair Technician in Dubai" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/60 to-transparent mix-blend-multiply transition-opacity duration-300 group-hover:opacity-75"></div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 left-8 right-8 sm:right-auto sm:w-72 bg-white/90 backdrop-blur-md dark:bg-slate-900/90 p-6 rounded-2xl shadow-xl border border-white/20"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-thunder-400 text-slate-900 font-bold text-xl">
                    24/7
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Emergency Service</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Available across all of Dubai</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-slate-900 py-24 text-white dark:bg-slate-950 border-t border-thunder-500/20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        {/* Subtle radial gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-thunder-500/10 to-transparent"></div>
        <div className="container relative z-10 mx-auto px-4 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-outfit text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
              Need Emergency Repair?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-300">
              Our technicians are on standby to fix your AC, fridge, or electrical issues immediately.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Button size="lg" variant="thunder" className="w-full gap-3 h-16 px-10 text-xl font-bold rounded-full shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:scale-105 transition-all sm:w-auto" asChild>
                <a href="tel:0504962516">
                  <Phone className="h-6 w-6 animate-bounce" />
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
