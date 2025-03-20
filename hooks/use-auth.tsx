"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { createContext, useContext, useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { createSampleSocialLinks } from "@/lib/sample-data"
import type { User } from "@supabase/supabase-js"

type AuthContextType = {
  user: User | null
  loading: boolean
  signUp: (
    email: string,
    password: string,
    username: string,
  ) => Promise<{
    error: any | null
    data: any | null
  }>
  signIn: (
    email: string,
    password: string,
  ) => Promise<{
    error: any | null
    data: any | null
  }>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<{
    error: any | null
    data: any | null
  }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser()
      setUser(data.user)
      setLoading(false)
    }

    getUser()

    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        setUser(session.user)
      } else if (event === "SIGNED_OUT") {
        setUser(null)
        router.push("/login")
      }
    })

    return () => {
      data.subscription.unsubscribe()
    }
  }, [router])

  const signUp = async (email: string, password: string, username: string) => {
    try {
      // Get the base URL for redirects
      const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://n0va.one"

      // First, create the auth user
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${baseUrl}/auth/callback`,
          data: {
            username,
          },
        },
      })

      if (error) {
        throw error
      }

      if (!data.user) {
        throw new Error("User creation failed")
      }

      // Create a profile for the new user
      const { error: profileError } = await supabase.from("profiles").insert([
        {
          id: data.user.id,
          username,
          full_name: "",
          bio: "I am a new n0va user! This is my digital presence.",
        },
      ])

      if (profileError) {
        console.error("Error creating profile:", profileError)
        // Continue even if profile creation fails - we can try again later
      } else {
        // Create sample social links only if profile creation succeeded
        await createSampleSocialLinks(data.user.id)
      }

      return { data, error: null }
    } catch (error) {
      console.error("Error in signup process:", error)
      return { error, data: null }
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (!error) {
        router.push("/dashboard")
      }

      return { data, error }
    } catch (error) {
      return { data: null, error }
    }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    router.push("/login")
  }

  const resetPassword = async (email: string) => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://n0va.one"

    return await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${baseUrl}/reset-password`,
    })
  }

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut, resetPassword }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

