"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, CheckCircle2, Trash2, Plus } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { supabase } from "@/lib/supabase"
import type { SocialLink, SocialPlatform } from "@/lib/types"

// Social platforms with their icons
const socialPlatforms: SocialPlatform[] = [
  { id: "twitter", name: "Twitter", icon: "twitter" },
  { id: "instagram", name: "Instagram", icon: "instagram" },
  { id: "facebook", name: "Facebook", icon: "facebook" },
  { id: "linkedin", name: "LinkedIn", icon: "linkedin" },
  { id: "github", name: "GitHub", icon: "github" },
  { id: "youtube", name: "YouTube", icon: "youtube" },
  { id: "twitch", name: "Twitch", icon: "twitch" },
  { id: "tiktok", name: "TikTok", icon: "tiktok" },
  { id: "website", name: "Website", icon: "globe" },
  { id: "other", name: "Other", icon: "link" },
]

export default function SocialLinksPage() {
  const { user } = useAuth()
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  // New social link form
  const [newPlatform, setNewPlatform] = useState("")
  const [newUrl, setNewUrl] = useState("")
  const [adding, setAdding] = useState(false)

  useEffect(() => {
    async function getSocialLinks() {
      if (!user) return

      try {
        const { data, error } = await supabase
          .from("social_links")
          .select("*")
          .eq("user_id", user.id)
          .order("display_order", { ascending: true })

        if (error) {
          throw error
        }

        setSocialLinks(data || [])
      } catch (error) {
        console.error("Error fetching social links:", error)
      } finally {
        setLoading(false)
      }
    }

    getSocialLinks()
  }, [user])

  const addSocialLink = async () => {
    if (!user) return
    if (!newPlatform || !newUrl) {
      setError("Please select a platform and enter a URL")
      return
    }

    setAdding(true)
    setError(null)
    setSuccess(null)

    try {
      // Get the next display order
      const nextOrder = socialLinks.length > 0 ? Math.max(...socialLinks.map((link) => link.display_order)) + 1 : 0

      const { data, error } = await supabase
        .from("social_links")
        .insert([
          {
            user_id: user.id,
            platform: newPlatform,
            url: newUrl,
            display_order: nextOrder,
          },
        ])
        .select()

      if (error) {
        throw error
      }

      setSocialLinks([...socialLinks, data[0]])
      setNewPlatform("")
      setNewUrl("")
      setSuccess("Social link added successfully")
    } catch (error: any) {
      setError(error.message || "Failed to add social link")
    } finally {
      setAdding(false)
    }
  }

  const deleteSocialLink = async (id: string) => {
    if (!user) return

    try {
      const { error } = await supabase.from("social_links").delete().eq("id", id).eq("user_id", user.id)

      if (error) {
        throw error
      }

      setSocialLinks(socialLinks.filter((link) => link.id !== id))
      setSuccess("Social link deleted successfully")
    } catch (error: any) {
      setError(error.message || "Failed to delete social link")
    }
  }

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Social Links</h1>
        <p className="text-zinc-400">Manage your social media links</p>
      </div>

      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle>Add New Social Link</CardTitle>
          <CardDescription>Add a new social media link to your profile</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert variant="default" className="bg-green-950 text-green-400 border-green-900">
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}

          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="platform">Platform</Label>
              <Select value={newPlatform} onValueChange={setNewPlatform}>
                <SelectTrigger className="border-zinc-800 bg-zinc-950">
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent className="border-zinc-800 bg-zinc-950">
                  {socialPlatforms.map((platform) => (
                    <SelectItem key={platform.id} value={platform.id}>
                      {platform.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="url">URL</Label>
              <div className="flex gap-2">
                <Input
                  id="url"
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  placeholder="https://..."
                  className="border-zinc-800 bg-zinc-950"
                />
                <Button type="button" onClick={addSocialLink} disabled={adding} className="shrink-0">
                  <Plus className="h-4 w-4 mr-2" />
                  Add
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle>Your Social Links</CardTitle>
          <CardDescription>Manage your existing social media links</CardDescription>
        </CardHeader>
        <CardContent>
          {socialLinks.length === 0 ? (
            <p className="text-center py-4 text-zinc-500">You haven't added any social links yet</p>
          ) : (
            <div className="space-y-4">
              {socialLinks.map((link) => {
                const platform = socialPlatforms.find((p) => p.id === link.platform) || {
                  id: "other",
                  name: "Other",
                  icon: "link",
                }

                return (
                  <div key={link.id} className="flex items-center justify-between border-b border-zinc-800 pb-4">
                    <div>
                      <p className="font-medium">{platform.name}</p>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        {link.url}
                      </a>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => deleteSocialLink(link.id)}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

