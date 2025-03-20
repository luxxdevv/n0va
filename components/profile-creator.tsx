"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/hooks/use-auth"
import { createUserProfile } from "@/app/actions/create-profile"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProfileCreator() {
  const { user } = useAuth()
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const [attempts, setAttempts] = useState(0)

  useEffect(() => {
    async function checkAndCreateProfile() {
      if (!user) return

      try {
        setStatus("loading")
        const username = user.user_metadata?.username || `user_${user.id.substring(0, 8)}`
        const result = await createUserProfile(user.id, username)

        if (result.success) {
          setStatus("success")
          setMessage(result.message || "Profile created successfully")
        } else {
          setStatus("error")
          setMessage(result.error || "Failed to create profile")
        }
      } catch (error: any) {
        setStatus("error")
        setMessage(error.message || "An unexpected error occurred")
      }
    }

    if (user && status === "idle" && attempts < 3) {
      checkAndCreateProfile()
    }
  }, [user, status, attempts])

  if (status === "idle" || status === "loading") {
    return null
  }

  if (status === "success") {
    return (
      <Alert className="bg-green-950 text-green-400 border-green-900 mb-4">
        <CheckCircle2 className="h-4 w-4 text-green-400" />
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    )
  }

  return (
    <Alert variant="destructive" className="mb-4">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription className="flex flex-col gap-2">
        <div>{message}</div>
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            setStatus("idle")
            setAttempts(attempts + 1)
          }}
          className="self-start"
        >
          Retry
        </Button>
      </AlertDescription>
    </Alert>
  )
}

