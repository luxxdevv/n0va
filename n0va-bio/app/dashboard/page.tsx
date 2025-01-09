'use client'

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function Dashboard() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navbar />
      <div className="container mx-auto px-4 pt-32">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-white mb-6">Dashboard Login</h1>
          <form className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-zinc-800 border-zinc-700 text-white"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-zinc-800 border-zinc-700 text-white"
              />
            </div>
            <Button className="w-full bg-purple-500 hover:bg-purple-600">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

