"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useAuth } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [resetSent, setResetSent] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Always call the hook
  const auth = useAuth()

  // Use useEffect to detect client-side rendering
  useEffect(() => {
    setIsClient(true)
  }, [])

  // If we're on the server during static generation, return a minimal UI
  if (!isClient && typeof window === "undefined") {
    return (
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle>Forgot Password</CardTitle>
          <CardDescription>Loading...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] flex items-center justify-center">Loading...</div>
        </CardContent>
      </Card>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!auth) return

    setLoading(true)
    setError(null)

    try {
      const { error } = await auth.resetPassword(email)
      if (error) {
        setError(error.message)
        setLoading(false)
      } else {
        setResetSent(true)
      }
    } catch (err) {
      setError("Failed to send reset email. Please try again.")
      setLoading(false)
    }
  }

  if (resetSent) {
    return (
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <div className="flex flex-col items-center space-y-2 text-center">
            <CheckCircle2 className="h-12 w-12 text-green-500" />
            <CardTitle className="text-2xl">Check Your Email</CardTitle>
            <CardDescription>We've sent a password reset link to your email</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">Please check your email ({email}) and click the password reset link.</p>
          <p className="text-sm text-zinc-400">If you don't see the email, check your spam folder.</p>
        </CardContent>
        <CardFooter className="flex justify-center border-t border-zinc-800 px-6 py-4">
          <Button asChild variant="outline">
            <Link href="/login">Return to Login</Link>
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="border-zinc-800 bg-zinc-900">
      <CardHeader>
        <CardTitle>Forgot Password</CardTitle>
        <CardDescription>We'll send you an email with a link to reset your password</CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-zinc-800 bg-zinc-950"
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading || !auth}>
            {loading ? "Sending..." : "Send Reset Link"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center border-t border-zinc-800 px-6 py-4">
        <p className="text-sm text-zinc-400">
          Remember your password?{" "}
          <Link href="/login" className="font-medium text-primary hover:underline">
            Log in
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}

