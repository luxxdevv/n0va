import { supabase } from "./supabase"

export async function createSampleSocialLinks(userId: string) {
  try {
    // Check if user already has social links
    const { data: existingLinks } = await supabase.from("social_links").select("id").eq("user_id", userId).limit(1)

    // If user already has links, don't create sample data
    if (existingLinks && existingLinks.length > 0) {
      return
    }

    // Create sample social links
    await supabase.from("social_links").insert([
      {
        user_id: userId,
        platform: "twitter",
        url: "https://twitter.com/yourusername",
        display_order: 0,
      },
      {
        user_id: userId,
        platform: "github",
        url: "https://github.com/yourusername",
        display_order: 1,
      },
      {
        user_id: userId,
        platform: "website",
        url: "https://yourwebsite.com",
        display_order: 2,
      },
    ])
  } catch (error) {
    console.error("Error creating sample social links:", error)
  }
}

