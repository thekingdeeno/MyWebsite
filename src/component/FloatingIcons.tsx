"use client"
import Image from 'next/image';
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FileText } from "lucide-react"
import Link from 'next/link';
import LinkedInIcon from "../../public/images/LinkedIn_logo.png"
import GithubIcon from "../../public/images/github-logo.webp"
import InstagramIcon from "../../public/images/Instagram_icon.png.webp"
import XIcon from "../../public/images/twitter-icon.png"
import FiverIcon from "../../public/images/fiver-logo.png"
import UpworkIcon from "../../public/images/upwork.svg"
import SnapchatIcon from "../../public/images/snapchat-icon.png"
import TikTokIcon from "../../public/images/tiktok.webp"
import TwitchIcon from "../../public/images/twitch-logo.png"
import YouTubeIcon from "../../public/images/youtube-logo.webp"
import KickIcon from "../../public/images/kick-logo.jpg"
import DiscordIcon from "../../public/images/discord.svg"

export function FloatingIcons({ count = 5 }) {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])


  const socialMediaIcons = 
    [
        {
            name: "linkedIn",
            icon: LinkedInIcon,
            url: "https://www.linkedin.com/in/nwando-ifezue-979a99273/"
        },
        {
            name: "github",
            icon: GithubIcon,
            url: "https://github.com/thekingdeeno"
        },
        {
            name: "fiver",
            icon: FiverIcon,
            url: "https://www.fiverr.com/s/bdWRg9p"
        },        {
            name: "upwork",
            icon: UpworkIcon,
            url: "https://www.upwork.com/freelancers/~01900b00224f793c2e?viewMode=1"
        },
        {
            name: "instagram",
            icon: InstagramIcon,
            url: "https://www.instagram.com/ifezue_king/"
        },
        {
            name: "x",
            icon: XIcon,
            url: "https://x.com/ifezue_king"
        },
        {
            name: "snapchat",
            icon: SnapchatIcon,
            url: "https://snapchat.com/t/5Wr4k9qr"
        },
        {
            name: "tiktok",
            icon: TikTokIcon,
            url: "https://www.tiktok.com/@thekingdeeno?_t=ZM-8vUJ5euuuyU&_r=1"
        },
        {
            name: "twitch",
            icon: TwitchIcon,
            url: "https://www.twitch.tv/thekingdeeno"
        },
        {
            name: "youtube",
            icon: YouTubeIcon,
            url: "https://x.com/ifezue_king"
        },
        {
            name: "kick",
            icon: KickIcon,
            url: "https://kick.com/thekingdeeno"
        },
        {
            name: "discord",
            icon: DiscordIcon,
            url: "https://discord.com/invite/xmAkeAw6bp"
        },

    ]

  return (
    <div className="relative w-full h-full">
      {socialMediaIcons.map((val, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            x: [Math.random() * dimensions.width, Math.random() * dimensions.width, Math.random() * dimensions.width],
            y: [
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
            ],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="relative w-16 h-20 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center transform hover:scale-110 transition-transform">
          <Link href={val.url} target='blank'>
            <Image src={val.icon} alt={val.name} height={100} width={100}/>
          </Link>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
