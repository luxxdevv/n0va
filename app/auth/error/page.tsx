"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, Sparkles } from "lucide-react"

export default function AuthErrorPage() {
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
              <AlertCircle className="h-12 w-12 text-red-500" />
              <CardTitle className="text-2xl">Authentication Error</CardTitle>
              <CardDescription>There was a problem with your authentication</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <p>
              The verification link may have expired or is invalid. Please try again or contact support if the issue
              persists.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center border-t border-zinc-800 px-6 py-4">
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
              <Button asChild variant="outline">
                <Link href="/login">Return to Login</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign Up Again</Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

