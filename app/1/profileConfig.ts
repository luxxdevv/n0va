import { BanknoteIcon, Crown, Star, Video, Calendar, Snowflake, User, Trophy, Sparkles } from 'lucide-react'
import { GithubIcon, CashAppIcon, YoutubeIcon, SoundCloudIcon } from "./icons"

export interface ProfileConfig {
  username: string
  uid: string
  description: string
  profilePicture: string
  backgroundVideo: string
  backgroundMusic: string
  badges: Array<{
    icon: React.ElementType
    label: string
  }>
  socials: Array<{
    icon: React.ElementType
    href: string
    label: string
  }>
  imageActions: Array<{
    icon: React.ElementType
    label: string
  }>
}

export const defaultProfile: ProfileConfig = {
  username: "Luxx",
  uid: "1",
  description: "developing something cool... :3",
  description1: "Owner @ n0va.one",
  profilePicture: "profile-picture.png",
  backgroundVideo: "background.mp4",
  backgroundMusic: "background-music.mp3",
  badges: [
    { icon: User, label: "Owner" },
    { icon: Crown, label: "Premium" },
    { icon: Video, label: "Content Creator" },
    { icon: Calendar, label: "2025" },
    { icon: Snowflake, label: "Winter 2024" },
    { icon: BanknoteIcon, label: "Thankful" }
  ],
  socials: [
    { icon: GithubIcon, href: "https://github.com/mintybich", label: "GitHub Profile" },
    { icon: CashAppIcon, href: "https://cash.app/$El1Albino", label: "Send Money" },
    { icon: YoutubeIcon, href: "https://youtube.com/@M-GFN", label: "YouTube Channel" },
    { icon: SoundCloudIcon, href: "https://soundcloud.com/c1nxlmao", label: "SoundCloud" }
  ],
  imageActions: []
}

