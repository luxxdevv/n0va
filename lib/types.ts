export type Profile = {
  id: string
  username: string
  full_name: string | null
  bio: string | null
  avatar_url: string | null
  created_at: string
  updated_at: string
}

export type SocialLink = {
  id: string
  user_id: string
  platform: string
  url: string
  display_order: number
  created_at: string
  updated_at: string
}

export type SocialPlatform = {
  id: string
  name: string
  icon: string
}

