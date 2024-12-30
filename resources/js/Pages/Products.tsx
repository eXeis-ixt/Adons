'use client'

import { Badge } from "@/Components/ui/badge"
import { Card, CardContent } from "@/Components/ui/card"
import { ArrowUpRight } from 'lucide-react'
import { motion } from "framer-motion"
import { Link } from "@inertiajs/react"
import Default from "@/Layouts/Default"

export default function DigitalProducts() {
  const services = [
    {
      title: "Digital Experiences",
      description: "Immersive web applications that define the future of digital interaction.",
      gradient: "from-primary/5 to-primary/10",
      delay: 0.2,
    },
    {
      title: "Brand Evolution",
      description: "Strategic design systems that evolve with your digital presence.",
      gradient: "from-primary/10 to-primary/5",
      delay: 0.3,
    },
    {
      title: "Future Commerce",
      description: "Next-generation e-commerce solutions for the digital age.",
      gradient: "from-primary/5 to-primary/10",
      delay: 0.4,
    },
    {
      title: "Digital Innovation",
      description: "Cutting-edge technology solutions that push boundaries.",
      gradient: "from-primary/10 to-primary/5",
      delay: 0.5,
    },
  ]

  return (
    <>
    <Default>
    <div className="min-h-screen bg-black text-white selection:bg-primary/20 selection:text-primary">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(64,64,64,0.04),transparent_60%)]" />
      <div className="container relative px-4 py-20 mx-auto">
        {/* Modern Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-24"
        >
          <Badge
            className="bg-white/5 text-white hover:bg-white/10 transition-all duration-300 mb-6"
          >
            Digital Innovation Studio
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Crafting Digital
            <span className="block mt-1 text-gray-300">Futures</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            We shape tomorrow's digital landscape through innovative design and technology.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.delay }}
            >
              <Link href="#" className="block group">
                <Card className="bg-white/[0.02] border-white/[0.03] hover:bg-white/[0.04] hover:border-white/[0.05] transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-opacity duration-300`} />
                      <div className="relative">
                        <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2 text-white group-hover:text-gray-100 transition-colors duration-300">
                          {service.title}
                          <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                        </h3>
                        <p className="text-gray-400 leading-relaxed pr-6">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Modern CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-lg font-medium text-white hover:text-gray-100 transition-colors duration-300 group"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </div>
    </Default>

    </>
  )
}

