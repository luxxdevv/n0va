"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/hooks/use-auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"
import type { Profile, SocialLink } from "@/lib/types"
import { User, LinkIcon, Settings } from "lucide-react"
import Link from "next/link"
import { ProfileCreator } from "@/components/profile-creator"

export default function DashboardPage() {
  const { user } = useAuth()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getProfileData() {
      if (!user) return

      try {
        // Get profile
        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single()

        if (profileError) {
          throw profileError
        }

        setProfile(profileData)

        // Get social links
        const { data: linksData, error: linksError } = await supabase
          .from("social_links")
          .select("*")
          .eq("user_id", user.id)
          .order("display_order", { ascending: true })

        if (linksError) {
          throw linksError
        }

        setSocialLinks(linksData || [])
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    getProfileData()
  }, [user])

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
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-zinc-400">Welcome to your N0va dashboard, {profile?.username || "User"}!</p>
      </div>

      {!profile && <ProfileCreator />}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle>Profile</CardTitle>
              <User className="h-4 w-4 text-primary" />
            </div>
            <CardDescription>Manage your personal information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Username:</strong> {profile?.username || "Not set"}
              </p>
              <p>
                <strong>Name:</strong> {profile?.full_name || "Not set"}
              </p>
              <p>
                <strong>Bio:</strong> {profile?.bio || "Not set"}
              </p>
              <Link href="/dashboard/profile" className="mt-4 inline-block text-primary hover:underline">
                Edit Profile →
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle>Social Links</CardTitle>
              <LinkIcon className="h-4 w-4 text-primary" />
            </div>
            <CardDescription>Manage your social media links</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {socialLinks.length > 0 ? (
                <div className="space-y-1">
                  {socialLinks.slice(0, 3).map((link) => (
                    <p key={link.id} className="text-sm truncate">
                      <span className="font-medium">{link.platform}:</span> {link.url}
                    </p>
                  ))}
                  {socialLinks.length > 3 && (
                    <p className="text-sm text-zinc-500">+{socialLinks.length - 3} more links</p>
                  )}
                </div>
              ) : (
                <p className="text-sm text-zinc-400">No social links added yet.</p>
              )}
              <Link href="/dashboard/social-links" className="mt-4 inline-block text-primary hover:underline">
                Manage Social Links →
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle>Settings</CardTitle>
              <Settings className="h-4 w-4 text-primary" />
            </div>
            <CardDescription>Manage your account settings</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-400">Update your account settings and preferences.</p>
            <Link href="/dashboard/settings" className="mt-4 inline-block text-primary hover:underline">
              Go to Settings →
            </Link>
          </CardContent>
        </Card>
      </div>

      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle>Your n0va.one Link</CardTitle>
          <CardDescription>Share your digital presence with the world</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between rounded-md border border-zinc-800 bg-zinc-950 p-3">
            <div className="font-medium">n0va.one/{profile?.username}</div>
            <button
              className="text-primary hover:underline"
              onClick={() => {
                navigator.clipboard.writeText(`n0va.one/${profile?.username}`)
              }}
            >
              Copy
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

