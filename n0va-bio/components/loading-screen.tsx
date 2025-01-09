'use client'

import { motion } from "framer-motion"
import { Sparkles } from 'lucide-react'
import { useEffect, useState } from "react"

export function LoadingScreen({ onLoadingComplete }: { onLoadingComplete?: () => void }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      onLoadingComplete?.()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="h-16 w-16 text-purple-500" />
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -bottom-4 left-0 h-1 bg-purple-500 rounded"
        />
      </motion.div>
    </motion.div>
  )
}

