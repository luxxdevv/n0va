'use client'

import { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { Slider } from "@/components/ui/slider"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface AudioControlProps {
  audioUrl: string
}

export function AudioControl({ audioUrl }: AudioControlProps) {
  const [volume, setVolume] = useState(50)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (audioUrl) {
      audioRef.current = new Audio(audioUrl)
      audioRef.current.loop = true
    }
  }, [audioUrl])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100
    }
  }, [volume, isMuted])

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className="fixed top-4 left-4 z-50 flex items-center gap-2 bg-zinc-800/50 rounded-lg p-2 backdrop-blur-sm border border-zinc-700">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={toggleMute}
              className="w-10 h-10 flex items-center justify-center rounded-lg
                       hover:bg-purple-500/20 transition-all duration-300 group
                       hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:border-white
                       border border-transparent"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-zinc-400 group-hover:text-white" />
              ) : (
                <Volume2 className="w-5 h-5 text-zinc-400 group-hover:text-white" />
              )}
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{isMuted ? 'Unmute' : 'Mute'} Audio</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Slider
        value={[volume]}
        onValueChange={(value) => setVolume(value[0])}
        max={100}
        step={1}
        className="w-24"
      />
    </div>
  )
}

const audioUrl = "/placeholder.mp3"

