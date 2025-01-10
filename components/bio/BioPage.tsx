'use client'

import { motion, AnimatePresence } from "framer-motion"
import { Eye } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { AudioControl } from "@/components/bio/AudioControl"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ProfileConfig } from "./profileConfig"

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <span className="text-white [text-shadow:_0_0_10px_rgb(255_255_255_/_0.4)]">
      {displayText}
    </span>
  )
}

interface BioPageProps {
  config: ProfileConfig
}

export default function BioPage({ config }: BioPageProps) {
  const [viewCount, setViewCount] = useState(49)
  const [showImageActions, setShowImageActions] = useState(false)
  const [isEntered, setIsEntered] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const usernameAnimation = {
    animate: {
      y: [0, -10, 0],
      rotateY: [0, 360],
      transition: {
        y: {
          duration: 1,
          repeat: Infinity,
          repeatDelay: 5
        },
        rotateY: {
          duration: 1,
          repeat: Infinity,
          repeatDelay: 7
        }
      }
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Set initial volume to 50%
    }
  }, []);

  if (!isEntered) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center cursor-pointer"
           onClick={() => setIsEntered(true)}>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white text-2xl font-bold hover:text-purple-400 transition-colors"
        >
          Click to Enter
        </motion.div>
      </div>
    )
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={config.backgroundVideo} type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        
        <audio ref={audioRef} src={config.backgroundMusic} loop />
        <AudioControl audioRef={audioRef} />

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md relative z-10"
          >
            <div className="bg-zinc-900/50 rounded-3xl p-8 backdrop-blur-sm border border-zinc-800">
              {/* View Counter */}
              <div className="flex items-center gap-2 text-zinc-400 mb-8">
                <Eye className="w-4 h-4" />
                <span className="text-sm">{viewCount}</span>
              </div>

              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <motion.div
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative group"
                  onMouseEnter={() => setShowImageActions(true)}
                  onMouseLeave={() => setShowImageActions(false)}
                >
                  <div className="absolute -inset-0.5 bg-purple-500/30 rounded-full blur-lg animate-pulse"></div>
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-zinc-700">
                    <Image
                      src={config.profilePicture}
                      alt="Profile"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                    {showImageActions && (
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-2">
                        {config.imageActions.map((action, index) => (
                          <Tooltip key={index}>
                            <TooltipTrigger asChild>
                              <button className="w-8 h-8 rounded-lg flex items-center justify-center
                                             bg-zinc-800/50 border border-zinc-700
                                             hover:bg-purple-500/20 transition-all duration-300
                                             hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:border-white
                                             group">
                                <action.icon className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent className="bg-zinc-800/50 border border-zinc-700">
                              <p>{action.label}</p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Badges */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4 mb-6"
              >
                {config.badges.map((badge, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger>
                      <div 
                        className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center
                                  border border-zinc-700 hover:border-purple-500 transition-colors
                                  hover:bg-zinc-800/50 group"
                      >
                        <badge.icon className="w-4 h-4 text-zinc-400 group-hover:text-purple-400" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-zinc-800/50 border border-zinc-700">
                      <p>{badge.label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </motion.div>

              {/* Username */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center mb-4"
              >
                <Tooltip>
                  <TooltipTrigger>
                    <motion.h1 
                      className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent
                                hover:text-purple-400 transition-colors cursor-pointer
                                [text-shadow:_0_0_15px_rgb(168_85_247_/_0.4)]"
                      variants={usernameAnimation}
                      animate="animate"
                    >
                      {config.username}
                    </motion.h1>
                  </TooltipTrigger>
                  <TooltipContent className="bg-zinc-800/50 border border-zinc-700">
                    <p>UID: {config.uid}</p>
                  </TooltipContent>
                </Tooltip>
                <div className="mt-2 text-sm">
                  <TypewriterText text={config.description} />
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-zinc-800/50 rounded-xl p-4 flex justify-center gap-4"
              >
                {config.socials.map((social, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <Link 
                        href={social.href}
                        target="_blank"
                        className="w-10 h-10 bg-zinc-700/50 rounded-lg flex items-center justify-center
                                  hover:bg-purple-500/20 transition-all duration-300 group
                                  hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:border-white
                                  border border-transparent text-zinc-400 hover:text-white"
                      >
                        <social.icon />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent className="bg-zinc-800/50 border border-zinc-700">
                      <p>{social.label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </TooltipProvider>
  )
}

