'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from 'lucide-react'
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="pricing" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          Explore our exclusive plans and join <span className="text-purple-500">many</span> subscribers
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 bg-zinc-800 border-zinc-700 transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="mb-4">
                <div className="text-xl font-semibold text-white">Free</div>
                <div className="text-3xl font-bold mt-2 text-white">
                  $0 <span className="text-sm text-zinc-400">Lifetime</span>
                </div>
              </div>
              <p className="text-sm text-zinc-400 mb-4">
                For beginners, link all your socials in one place.
              </p>
              <div className="space-y-3 text-white">
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-purple-500" />
                  <span>Basic Customization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-purple-500" />
                  <span>Basic Effects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-purple-500" />
                  <span>Add Your Socials</span>
                </div>
              </div>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-6 bg-zinc-800 border-zinc-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:border-purple-500 group">
              <div className="transition-colors duration-300 text-white">
                <div className="mb-4">
                  <div className="text-xl font-semibold">Premium</div>
                  <div className="text-3xl font-bold mt-2">
                    $2.99 <span className="text-sm text-zinc-400 group-hover:text-white transition-colors duration-300"> Lifetime</span>
                  </div>
                </div>
                <p className="text-sm text-zinc-400 group-hover:text-white transition-colors duration-300 mb-4">
                  The perfect plan to discover your creativity & unlock more features.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-purple-500 group-hover:text-white transition-colors duration-300" />
                    <span>Exclusive Badge</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-purple-500 group-hover:text-white transition-colors duration-300" />
                    <span>Profile Layouts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-purple-500 group-hover:text-white transition-colors duration-300" />
                    <span>Profile Fonts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-purple-500 group-hover:text-white transition-colors duration-300" />
                    <span>Typewriter Animation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-purple-500 group-hover:text-white transition-colors duration-300" />
                    <span>Special Profile Effects</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-purple-500 group-hover:text-white transition-colors duration-300" />
                    <span>Advanced customization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-purple-500 group-hover:text-white transition-colors duration-300" />
                    <span>Metadata & SEO Customization</span>
                  </div>
                </div>
                <Button 
                  className="w-full mt-6 bg-purple-500 hover:bg-purple-600"
                  onClick={() => {
                    window.location.href = 'https://sellix.io/product/your-product-id'
                  }}
                >
                  Purchase Now
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

