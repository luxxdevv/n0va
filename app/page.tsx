'use client'

import { Navbar } from "@/components/navbar"
import { UsernameInput } from "@/components/username-input"
import { LoadingScreen } from "@/components/loading-screen"
import { FAQSection } from "@/components/faq-section"
import { PricingSection } from "@/components/pricing-section"
import Typewriter from 'typewriter-effect'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Users, Upload, UserPlus, Sparkles } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimate, useInView } from "framer-motion"
import { useEffect, useState, useRef } from "react"

export default function Home() {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)
  const [isLoaded, setIsLoaded] = useState(false)
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      const randomInterval = setInterval(() => {
        // Random chance to do a flip while jumping
        const shouldFlip = Math.random() > 0.7
        animate(
          "span.jump",
          { 
            y: [-4, 0],
            rotateY: shouldFlip ? [0, 360] : 0
          },
          { 
            duration: shouldFlip ? 0.4 : 0.3,
            ease: "easeOut"
          }
        )
      }, 1500 + Math.random() * 1500) // Slightly more frequent jumps

      return () => clearInterval(randomInterval)
    }
  }, [isInView, animate])

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <LoadingScreen onLoadingComplete={() => setIsLoaded(true)} />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center mb-8">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-12 w-12 text-purple-500" />
            </motion.div>
            <motion.h1
              ref={scope}
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0, width: "auto" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold ml-4 overflow-hidden whitespace-nowrap"
            >
              n<span className="jump inline-block text-purple-500 transform-gpu">0</span>va.<span className="text-purple-500">one</span>
            </motion.h1>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Mark Your Digital <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent animate-pulse">Presence</span>
          </motion.h2>
          <div className="text-zinc-400 mb-8 max-w-2xl mx-auto text-xl">
            <Typewriter
              options={{
                strings: ['Elevate your online presence with a stunning bio page. Share your world through a single, powerful link.'],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>
          <UsernameInput />
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Users, count: "10,700+", label: "Profile Views" },
              { icon: UserPlus, count: "310,000+", label: "Users" },
              { icon: Upload, count: "240,000+", label: "File Uploads" },
              { icon: Users, count: "10,700+", label: "Subscribers" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-zinc-800 border-zinc-700 text-center transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20">
                  <stat.icon className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.count}</div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-1 bg-purple-500/30 rounded-lg blur-xl"></div>
              <Image
                src="/placeholder.png"
                alt="Preview"
                width={600}
                height={400}
                className="relative w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-zinc-400">
            <div>
              <p>
                &copy; {new Date().getFullYear()} 
                <span className="text-purple-500 hover:text-purple-400 transition-colors duration-300 glow-on-hover">
                  n0va.one
                </span>
                . All rights reserved.
              </p>
              <p>Protected by DMCA - Report Copyright Infringement</p>
            </div>
            <div className="md:text-right">
              <Link href="/terms" className="hover:text-white">Terms of Service</Link>
              <span className="mx-2">·</span>
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
              <span className="mx-2">·</span>
              <Link href="/dmca" className="hover:text-white">DMCA</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

