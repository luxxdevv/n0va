"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Sparkles } from "lucide-react"

export default function AuthSuccessPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const next = searchParams.get("next") || "/dashboard"
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          router.push(next)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router, next])

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
              <CardTitle className="text-2xl">Success!</CardTitle>
              <CardDescription>Your email has been verified successfully</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <p>You will be redirected to your dashboard in {countdown} seconds.</p>
          </CardContent>
          <CardFooter className="flex justify-center border-t border-zinc-800 px-6 py-4">
            <Button onClick={() => router.push(next)}>Continue to Dashboard</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

