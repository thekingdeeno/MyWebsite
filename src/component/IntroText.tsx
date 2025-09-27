"use client"

import { animate, AnimationGeneratorType, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"

interface animateProps {
    text: string,
    fontSize: number,
    type?: AnimationGeneratorType,
    delay?: number,
    duration?: number,
    bounce?: number

}

export function AnimateText({ text, fontSize, type = 'spring', delay = 0.15, duration = 2, bounce = 0 } : animateProps){
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!containerRef.current) return

            containerRef.current.style.visibility = "visible"

            const { words } = splitText(
                containerRef.current.querySelector("p")! 
            )

            animate(
                words,
                { opacity: [0, 1], y: [10, 0] },
                {
                    type,
                    duration,
                    bounce,
                    delay: stagger(delay),
                }
            )
        })
    }, [])

    return (
        <div className="container" ref={containerRef}>
            <p style={{fontSize: `${fontSize}px`}}>
               {text}
            </p>
            <Stylesheet />
        </div>
    )
}

function Stylesheet() {
    return (
        <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                // max-width: 420px;
                // text-align: left;
                visibility: hidden;
            }

            .split-word {
                will-change: transform, opacity;
            }
        `}</style>
    )
}
