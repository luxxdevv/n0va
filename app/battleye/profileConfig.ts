import { BanknoteIcon, Crown, Star, Video, Calendar, Snowflake, User, Trophy, Sparkles, XIcon } from 'lucide-react'
import { GithubIcon, CashAppIcon, YoutubeIcon, SoundCloudIcon, DiscordIcon, TikTokIcon, RobloxIcon, SnapchatIcon, InstagramIcon, XTwitIcon } from "./icons"

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
  username: "Hiro",
  uid: "2",
  description: "Student Athlete, Class of 29, Gamer.",
  description1: "taken by luxx 🫶, U14 Brampton SC",
  profilePicture: "./profile-picture.jpg",
  backgroundVideo: "./0103.mp4",
  backgroundMusic: "./background-music1.mp3",
  badges: [
    { icon: Crown, label: "Mine <3" },
    { icon: Video, label: "Content Creator" },
    { icon: Calendar, label: "2025" },
    { icon: BanknoteIcon, label: "Thankful" }
  ],
  socials: [
    { icon: SnapchatIcon, href: "https://github.com/add/plsdtb", label: "Snapchat Profile" },
    { icon: TikTokIcon, href: "https://tiktok.com/@srsolarr", label: "TikTok profile" },
    { icon: YoutubeIcon, href: "https://youtube.com/@foreverhiro", label: "YouTube Channel" },
    { icon: RobloxIcon, href: "https://roblox.com/users/734931142", label: "Roblox Profile" },
    { icon: DiscordIcon, href: "https://discord.com/users/824025014818045983", label: "DiscordUser Profile" },
    { icon: InstagramIcon, href: "https://instagram.com/solarstoledchristmas", label: "Instagram" },
    { icon: XTwitIcon, href: "https://x.com/Vasityyy4n", label: "Twiter (X)" }
  ],
  imageActions: []
}

