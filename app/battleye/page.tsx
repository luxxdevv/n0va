"use client"

import { motion } from "framer-motion"

export default function BannedUserPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-[400px] w-full"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="bg-[#111111] border border-[#222222] rounded-lg p-6 text-center group hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(147,51,234,0.15)]"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="text-white text-5xl font-bold mb-4"
          >
            !
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl font-medium mb-2 text-white"
          >
            This User has been Banned From n0va.one
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-500 text-sm mb-6"
          >
            This link is now available, please go to the discord to apply and get this extension
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex gap-3 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://n0va.one"
              className="px-4 py-1.5 bg-[#111111] border border-[#222222] rounded-full text-sm text-gray-300 hover:border-purple-500/50 hover:text-white hover:shadow-[0_0_10px_rgba(147,51,234,0.15)] transition-all duration-300"
            >
              Home
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://dsc.gg/n0vabios"
              className="px-4 py-1.5 bg-[#111111] border border-[#222222] rounded-full text-sm text-gray-300 hover:border-purple-500/50 hover:text-white hover:shadow-[0_0_10px_rgba(147,51,234,0.15)] transition-all duration-300"
            >
              Discord
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

