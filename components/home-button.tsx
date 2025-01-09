'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { Home } from 'lucide-react'

export function HomeButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-4 z-50"
    >
      <Link href="/">
        <div className="w-10 h-10 bg-zinc-800/50 rounded-lg flex items-center justify-center
                    backdrop-blur-sm border border-zinc-700 hover:border-purple-500 transition-all
                    hover:bg-purple-500/20 group">
          <Home className="w-5 h-5 text-zinc-400 group-hover:text-purple-400" />
        </div>
      </Link>
    </motion.div>
  )
}

