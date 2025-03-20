"use server"

import { createServerClient } from "@/lib/supabase-server"
import { createSampleSocialLinks } from "@/lib/sample-data"

export async function createUserProfile(userId: string, username: string) {
  try {
    const supabase = createServerClient()

    // Check if profile exists
    const { data: existingProfile } = await supabase.from("profiles").select("id").eq("id", userId).single()

    if (existingProfile) {
      return { success: true, message: "Profile already exists" }
    }

    // Create profile
    const { error } = await supabase.from("profiles").insert([
      {
        id: userId,
        username,
        full_name: "",
        bio: "I am a new n0va user! This is my digital presence.",
      },
    ])

    if (error) {
      console.error("Server action - Error creating profile:", error)
      return { success: false, error: error.message }
    }

    // Create sample social links
    await createSampleSocialLinks(userId)

    return { success: true, message: "Profile created successfully" }
  } catch (error: any) {
    console.error("Server action - Unexpected error creating profile:", error)
    return { success: false, error: error.message || "An unexpected error occurred" }
  }
}

