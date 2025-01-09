'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles } from 'lucide-react'
import { motion } from "framer-motion"

export function Navbar() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="border-b border-zinc-800 fixed w-full bg-zinc-900/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="relative group">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="relative"
          >
            <Sparkles className="h-8 w-8 text-purple-500 group-hover:text-purple-400 transition-colors duration-300" />
            <div className="absolute inset-0 bg-purple-500/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-sm text-zinc-400 hover:text-white">
            Discord
          </Link>
          <Button 
            variant="ghost" 
            onClick={scrollToPricing}
            className="text-sm text-zinc-400 hover:text-white"
          >
            Pricing
          </Button>
          <Link href="/dashboard">
            <Button variant="default" className="bg-purple-500 hover:bg-purple-600">
              Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

