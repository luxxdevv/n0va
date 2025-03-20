"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2, Sparkles } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function SignupPage() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [verificationSent, setVerificationSent] = useState(false)
  const { signUp } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (!username.trim()) {
      setError("Username is required")
      setLoading(false)
      return
    }

    // Validate username format (alphanumeric and underscores only)
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      setError("Username can only contain letters, numbers, and underscores")
      setLoading(false)
      return
    }

    try {
      const { error } = await signUp(email, password, username)

      if (error) {
        console.error("Signup error:", error)
        setError(typeof error === "string" ? error : error.message || "An error occurred during signup")
        setLoading(false)
      } else {
        setVerificationSent(true)
      }
    } catch (err: any) {
      console.error("Unexpected error during signup:", err)
      setError(err?.message || "An unexpected error occurred")
      setLoading(false)
    }
  }

  if (verificationSent) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-n0va-dark px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <div className="n0va-logo text-2xl">
                n<span>0</span>va.<span>one</span>
              </div>
            </div>
          </div>

          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <div className="flex flex-col items-center space-y-2 text-center">
                <CheckCircle2 className="h-12 w-12 text-green-500" />
                <CardTitle className="text-2xl">Account Created!</CardTitle>
                <CardDescription>Your account has been created successfully</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4">
                We've sent a verification link to your email ({email}). Please check your email and click the
                verification link to complete your registration.
              </p>
              <p className="text-sm text-zinc-400">If you don't see the email, check your spam folder.</p>
            </CardContent>
            <CardFooter className="flex justify-center border-t border-zinc-800 px-6 py-4">
              <Button asChild variant="outline" onClick={() => router.push("/dashboard")}>
                <Link href="/dashboard">Continue to Dashboard</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-n0va-dark px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <div className="n0va-logo text-2xl">
              n<span>0</span>va.<span>one</span>
            </div>
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight">
            Mark Your Digital <span className="text-primary">Presence</span>
          </h1>
          <p className="mt-2 text-sm text-zinc-400">Create your account to get started with n0va</p>
        </div>

        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle>Sign up</CardTitle>
            <CardDescription>Enter your details to create your account</CardDescription>
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
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="your_username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="border-zinc-800 bg-zinc-950"
                />
              </div>
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
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-zinc-800 bg-zinc-950"
                />
              </div>
              <Button type="submit" className="w-full btn-glow" disabled={loading}>
                {loading ? "Creating account..." : "Sign up"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center border-t border-zinc-800 px-6 py-4">
            <p className="text-sm text-zinc-400">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-primary hover:underline">
                Log in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

