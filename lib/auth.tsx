"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { supabase } from "@/lib/supabase"

// Create a properly typed context
type AuthContextType = {
  user: any | null
  login: (userData: any) => void
  logout: () => void
  resetPassword: (email: string) => Promise<{ error: any | null }>
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | null>(null)

type AuthProviderProps = {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<any | null>(null)

  const login = (userData: any) => {
    setUser(userData)
  }

  const logout = () => {
    setUser(null)
  }

  const resetPassword = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: typeof window !== "undefined" ? `${window.location.origin}/reset-password` : undefined,
      })
      return { error }
    } catch (error) {
      return { error }
    }
  }

  const value: AuthContextType = {
    user,
    login,
    logout,
    resetPassword,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

