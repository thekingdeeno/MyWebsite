"use client"

import { frame, motion, useSpring } from "motion/react"
import { RefObject, useEffect, useRef } from "react"

export default function Drag() {
    const ref = useRef<HTMLDivElement>(null)
    const { x, y } = useFollowPointer(ref)

    return <motion.div ref={ref} style={{ ...ball, x, y }} />
}

const spring = { damping: 30, stiffness: 10, restDelta: 0.001 }

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
    const x = useSpring(0, spring)
    const y = useSpring(0, spring)

    useEffect(() => {
        if (!ref.current) return

        const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
            const element = ref.current!

            frame.read(() => {
                x.set(clientX - element.offsetLeft - element.offsetWidth / 2)
                y.set(clientY - element.offsetTop - element.offsetHeight / 2)
            })
        }

        window.addEventListener("pointermove", handlePointerMove)

        return () =>
            window.removeEventListener("pointermove", handlePointerMove)
    },)

    return { x, y }
}

const ball = {
    zIndex: 999,
    width: 50,
    height: 50,
    backgroundColor: "#890506",
    borderRadius: "50%",
}
