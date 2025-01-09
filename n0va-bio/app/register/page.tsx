'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"

const socialPlatforms = [
  'Twitch', 'CashApp', 'Twitter', 'OnlyFans', 'YouTube', 'TikTok', 'Kick',
  'Instagram', 'Facebook', 'LinkedIn', 'GitHub', 'Discord', 'Snapchat', 'Pinterest'
]

export default function Register() {
  const searchParams = useSearchParams()
  const [username, setUsername] = useState('')
  const [socials, setSocials] = useState<Record<string, string>>({})
  const [quote, setQuote] = useState('')
  const [backgroundUrl, setBackgroundUrl] = useState('')

  useEffect(() => {
    setUsername(searchParams.get('username') || '')
  }, [searchParams])

  const handleSocialChange = (platform: string, value: string) => {
    setSocials(prev => ({ ...prev, [platform]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    // For this example, we'll just log it to the console
    console.log({ username, socials, quote, backgroundUrl })

    // Example of sending to a Discord webhook
    const webhookUrl = 'YOUR_DISCORD_WEBHOOK_URL'
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: `New registration:\nUsername: ${username}\nQuote: ${quote}\nSocials: ${JSON.stringify(socials)}`,
      }),
    })

    if (response.ok) {
      alert('Registration successful!')
    } else {
      alert('Registration failed. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white" style={{
      backgroundImage: `url(${backgroundUrl || '/placeholder.svg'})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <Navbar />
      <div className="container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-zinc-800/80 backdrop-blur-sm p-8 rounded-lg shadow-lg"
        >
          <h1 className="text-3xl font-bold mb-6 text-center">Register Your n0va.one Profile</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-zinc-700"
              />
            </div>
            <div>
              <Label htmlFor="quote">Your Quote</Label>
              <Textarea
                id="quote"
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                className="bg-zinc-700"
                placeholder="Enter a quote that represents you..."
              />
            </div>
            <div>
              <Label htmlFor="background">Background Image URL</Label>
              <Input
                id="background"
                value={backgroundUrl}
                onChange={(e) => setBackgroundUrl(e.target.value)}
                className="bg-zinc-700"
                placeholder="https://example.com/your-image.jpg"
              />
            </div>
            <div className="space-y-4">
              <Label>Social Media Links</Label>
              {socialPlatforms.map((platform) => (
                <div key={platform}>
                  <Label htmlFor={platform}>{platform}</Label>
                  <Input
                    id={platform}
                    value={socials[platform] || ''}
                    onChange={(e) => handleSocialChange(platform, e.target.value)}
                    className="bg-zinc-700"
                    placeholder={`Your ${platform} URL`}
                  />
                </div>
              ))}
            </div>
            <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600">
              Register
            </Button>
          </form>
        </motion.div>
      </div>
      <style jsx global>{`
        body {
          cursor: none;
        }
        .custom-cursor {
          width: 20px;
          height: 20px;
          border: 2px solid white;
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9999;
        }
      `}</style>
      <div className="custom-cursor" id="custom-cursor"></div>
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('mousemove', (e) => {
            const cursor = document.getElementById('custom-cursor');
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
          });
        `
      }} />
    </div>
  )
}

