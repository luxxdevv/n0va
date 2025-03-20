import { supabase } from "./supabase"
import { createSampleSocialLinks } from "./sample-data"

export async function ensureUserProfile(userId: string, username?: string) {
  try {
    // Check if profile exists
    const { data: existingProfile } = await supabase.from("profiles").select("id").eq("id", userId).single()

    if (existingProfile) {
      return { success: true }
    }

    // Profile doesn't exist, create it
    const { error: profileError } = await supabase.from("profiles").insert([
      {
        id: userId,
        username: username || `user_${userId.substring(0, 8)}`,
        full_name: "",
        bio: "I am a new n0va user! This is my digital presence.",
      },
    ])

    if (profileError) {
      console.error("Error creating profile:", profileError)
      return { success: false, error: profileError }
    }

    // Create sample social links
    await createSampleSocialLinks(userId)

    return { success: true }
  } catch (error) {
    console.error("Error ensuring user profile:", error)
    return { success: false, error }
  }
}

