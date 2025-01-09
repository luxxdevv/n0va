'use client'

import { motion } from "framer-motion"
import { Eye, Globe, Diamond, Crown, Zap, Bot, Verified, DollarSign, LinkIcon } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { AudioControl } from "@/components/audio-control"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// Brand Icons (same as before)
const DiscordIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
)

const GithubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const TwitterIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path   d="M12 7c1.49 0 2.75 1.002 2.75 2.25H10.5c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5.224.5.5 0 1.248-1.26 2.25-2.75 2.25s-2.75-1.002-2.75-2.25h4.25c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-4c-.276 0-.5-.224-.5-.5C9.25 8.252 10.514 7 12 7zm0 10.5a1 1 0 100-2 1 1 0 000 2z"/>
  </svg>
)

export default function BioPage({ params }: { params: { username: string } }) {
  const [viewCount, setViewCount] = useState(49)
  const [showImageActions, setShowImageActions] = useState(false)

  useEffect(() => {
    setViewCount(prev => prev + 1)
  }, [])

  const badges = [
    { icon: Diamond, label: "Premium User" },
    { icon: Crown, label: "Admin" },
    { icon: Zap, label: "Early Supporter" },
    { icon: Bot, label: "Verified Bot Developer" }
  ]

  const socials = [
    { icon: DiscordIcon, href: "https://dsc.gg/n0vabios", label: "Discord Server" },
    { icon: GithubIcon, href: "https://github.com/mintybich", label: "GitHub Profile" },
    { icon: TwitterIcon, href: "https://cash.app/$El1Albino", label: "Twitter Profile" },
    { icon: Globe, href: "https://crashedout.lol", label: "portfolio" }
  ]

  const imageActions = [
    { icon: LinkIcon, label: "Copy Profile Picture URL" },
    { icon: Crown, label: "Premium Avatar Frame" },
    { icon: Zap, label: "Add Effects" },
    { icon: Globe, label: "View Original" }
  ]

  return (
    <TooltipProvider>
      <div 
        className="min-h-screen bg-black text-white flex items-center justify-center p-4 relative"
        style={{
          backgroundImage: 'url("/placeholder.mp4")', // Replace with your background image/video
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        
        <AudioControl audioUrl="/1.mp3" /> {/* Replace with your audio file */}

        <div className="w-full max-w-md relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900/50 rounded-3xl p-8 backdrop-blur-sm border border-zinc-800"
          >
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
                    src="/image.png"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                  {showImageActions && (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-2">
                      {imageActions.map((action, index) => (
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
                          <TooltipContent>
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
              className="flex justify-center gap-4 mb-6"
            >
              {badges.map((badge, index) => (
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
                  <TooltipContent>
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
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                {params.username}
              </h1>
              <div className="flex items-center justify-center gap-2 text-zinc-400 mt-2">
                <Globe className="w-4 h-4" />
                <span className="text-sm">cheat.py</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-zinc-800/50 rounded-xl p-4 flex justify-center gap-4"
            >
              {socials.map((social, index) => (
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
                  <TooltipContent>
                    <p>{social.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </motion.div>

            {/* Discord Presence */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-6 bg-zinc-800/30 rounded-xl p-4"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-zinc-700 overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    alt="Discord Profile"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Luxx.</span>
                    <div className="flex gap-1">
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="w-4 h-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                            <Verified className="w-3 h-3 text-purple-400" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Verified User</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
                            <DollarSign className="w-3 h-3 text-green-400" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Premium Subscriber</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-400">Playing Valorant</p>
                </div>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-3">
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span>DND</span>
                </div>
                <div className="mt-2 text-sm">
                  <p className="text-purple-400 font-medium">Custom Status</p>
                  <p className="text-zinc-300">developing n0va.one 🚀</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </TooltipProvider>
  )
}

