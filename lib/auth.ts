"use client"

import { createContext, useContext, useState } from "react"
import { supabase } from "@/lib/supabase"

// Create a properly typed context
type AuthContextType = {
  user: any | null
  login: (userData: any) => void
  logout: () => void
  resetPassword: (email: string) => Promise<{ error: any | null }>
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = (userData) => {
    setUser(userData)
  }

  const logout = () => {
    setUser(null)
  }

  const resetPassword = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      })
      return { error }
    } catch (error) {
      return { error }
    }
  }

  const value = {
    user,
    login,
    logout,
    resetPassword,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

