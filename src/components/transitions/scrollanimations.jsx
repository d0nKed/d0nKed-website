import React, { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

const animationConfig = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
}

const FadeIn = ({ children }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false })
    const controls = useAnimation()
    useEffect(() => {
        if (isInView) {
            controls.start("animate")
        } else {
            controls.start("exit")
        }
    }, [isInView])

    return (
        <div ref={ref}>
            <motion.div
                variants={animationConfig}
                initial="initial"
                animate={controls}
                exit="exit"
                transition={{ ease: "easeOut", duration: 0.7, delay: 0.3 }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default FadeIn