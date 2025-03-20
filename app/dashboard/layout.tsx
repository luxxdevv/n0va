"use client"

import type React from "react"

import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarProvider } from "@/components/ui/sidebar"
import { DashboardNav } from "@/components/dashboard-nav"
import { UserNav } from "@/components/user-nav"
import { Sparkles } from "lucide-react"
import { ensureUserProfile } from "@/lib/ensure-profile"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [profileChecked, setProfileChecked] = useState(false)

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  useEffect(() => {
    async function checkAndCreateProfile() {
      if (user && !profileChecked) {
        await ensureUserProfile(user.id, user.user_metadata?.username)
        setProfileChecked(true)
      }
    }

    checkAndCreateProfile()
  }, [user, profileChecked])

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-n0va-dark">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-n0va-dark">
        <Sidebar className="border-r border-zinc-800">
          <SidebarHeader className="flex h-14 items-center border-b border-zinc-800 px-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <div className="n0va-logo">
                n<span>0</span>va.<span>one</span>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <DashboardNav />
          </SidebarContent>
          <SidebarFooter className="border-t border-zinc-800 p-4">
            <UserNav />
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1">
          <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-zinc-800 bg-n0va-dark px-4 sm:px-6">
            <div className="ml-auto flex items-center gap-2">
              <UserNav />
            </div>
          </header>
          <main className="flex-1 p-4 sm:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}

