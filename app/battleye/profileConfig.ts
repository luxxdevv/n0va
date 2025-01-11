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
  username: "Battleye",
  uid: "3",
  description: "Owner @ Omni Services.",
  description1: "",
  profilePicture: "./profile-picture1.png",
  backgroundVideo: "./background.mp4",
  backgroundMusic: "./background-music.mp3",
  badges: [
    { icon: Calendar, label: "2025" },
    { icon: BanknoteIcon, label: "Thankful" }
  ],
  socials: [
    { icon: DiscordIcon, href: "https://discord.com/users/1322389041030762538", label: "DiscordUser" },
    { icon: DiscordIcon, href: "https://discord.com/users/1322389041030762538", label: "DiscordUser" },
    { icon: DiscordIcon, href: "https://discord.com/users/1322389041030762538", label: "DiscordUser" },
    { icon: DiscordIcon, href: "https://discord.com/users/1322389041030762538", label: "DiscordUser" },
    { icon: DiscordIcon, href: "https://discord.com/users/1322389041030762538", label: "DiscordUser" },
    { icon: DiscordIcon, href: "https://discord.com/users/1322389041030762538", label: "DiscordUser" },
    { icon: DiscordIcon, href: "https://discord.com/users/1322389041030762538", label: "DiscordUser" }
  ],
  imageActions: []
}

