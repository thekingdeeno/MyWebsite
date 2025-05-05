import * as motion from "motion/react-client"
import type { Variants } from "motion/react"
import Image from "next/image"
import ReactLogo from "../../public/svg/ReactNativeLogo.svg"
import ExpressJSLogo from "../../public/images/ExpressJS-Logo.webp"
import GCPLogo from "../../public/images/GCP-Logo.png"
import JavaLogo from "../../public/images/java-logo-png.png"
import JSLogo from "../../public/images/JavaScript Logo.png"
import MysqlLogo from "../../public/images/MySQL_Logo.png"
import PostgresLogo from "../../public/images/postgres_logo.png"
import RedisLogo from "../../public/images/Redis Logo.png"
import NextJSLogo from "../../public/images/Next.js Logo.webp"
import NodeJSLogo from "../../public/images/nodejs-img.jpeg"
import ReactJSLogo from "../../public/images/ReactJsLogo.png"
import TSLogo from "../../public/images/TypeScript logo.png"
import MongoDBLogo from "../../public/images/MongoDB Logo.png"
import './TextStack.scss'

export default function ScrollTriggered() {
    return (
        <div style={container}>
            {food.map(([emoji, hueA, hueB], i) => (
                <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={i} />
            ))}
        </div>
    )
}

interface CardProps {
    emoji: string
    hueA: number
    hueB: number
    i: number
}

function Card({ emoji, i }: CardProps) {

    return (
        <motion.div
            className={`card-container-${i} card-container`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div style={{ ...splash, background: '#890506' }} />
            <motion.div style={{}} variants={cardVariants} className="card">
                <Image src={emoji} alt={""} className="card-image"/>
            </motion.div>
        </motion.div>
    )
}

const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
}

const container: React.CSSProperties = {
    display:'flex',
    margin: "100px auto",
    // maxWidth: 500,
    paddingBottom: 100,
    // width: "100%",
    overflow: 'scroll'
}

const cardContainer: React.CSSProperties = {
    // overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -120,
}

const splash: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const food: [string, number, number][] = [
    [JSLogo, 359, 359],
    [TSLogo, 359, 359],
    // [NodeJSLogo, 359, 359],
    [ExpressJSLogo, 359, 359],
    [JavaLogo, 359, 359],
    [MysqlLogo, 359, 359],
    [MongoDBLogo, 359, 359],
    [PostgresLogo, 359, 359],
    [RedisLogo, 359, 359],
    [GCPLogo, 359, 359],
    [NextJSLogo, 359, 359],
    [ReactLogo, 359, 359],
    [ReactJSLogo, 359, 359],
]
