'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

export function UsernameInput() {
  const [username, setUsername] = useState('')

  return (
    <div className="flex justify-center space-x-2 max-w-md mx-auto">
      <div className="relative flex-1 group">
        <div className="absolute -inset-0.5 bg-purple-500/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-zinc-400 z-10">
          n0va.one/
        </div>
        <Input 
          value={username}
          onChange={(e) => setUsername(e.target.value.replace(/[^a-zA-Z0-9-_]/g, ''))}
          className="pl-[85px] bg-zinc-800 border-zinc-700 relative transition-all duration-300 group-hover:border-purple-500"
          placeholder="username"
        />
      </div>
      <Link href={`/register?username=${username}`}>
        <Button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 animate-pulse">
          Claim Now
        </Button>
      </Link>
    </div>
  )
}

