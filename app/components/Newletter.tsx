"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence} from "motion/react";

const DURATION = 0.3;
const DELAY = DURATION;
const EASE_OUT = "easeOut";
const EASE_OUT_OPACITY = [0.25, 0.46, 0.45, 0.94] as const;
const SPRING = {
    type: "spring" as const,
    stiffness: 60,
    damping: 10,
    mass: 0.8,
};

export const Newletter = () => {

    const [isOpen, setIsOpen] = useState(false);

    const isInitialRender = useRef(true);

    useEffect(() => {
        return () => {3
            isInitialRender.current = false;
        };
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div className="flex overflow-hidden relative flex-col gap-4 justify-center items-center pt-10 w-full h-full short:lg:pt-10
        pb-footer-safe-area 2xl:pt-footer-safe-area px-sides short:lg:gap-4 lg:gap-8">
            <motion.div layout="position" transition={{  duration: DURATION, ease: EASE_OUT }}>
                <h1 className="font-serif text-5xl italic short:lg:text-8xl sm:text-8xl text-foreground">Fail</h1>
            </motion.div>

            <div className="flex flex-col items-center min-h-0 shrink">
                <AnimatePresence>
                    {!isOpen && (
                        <motion.div key="newsletter" initial={isInitialRender.current ? false : "hidden"} animate="visible" exit="exit" variants={{ 
                            visible: {
                                scale: 1, transition: {
                                    delay: DELAY,
                                    duration: DURATION,
                                    ease: EASE_OUT,
                                },
                            },

                            hidden: {
                                scale: 0.9,
                                transition: {
                                    duration: DURATION,
                                    ease: EASE_OUT,
                                },
                            },
                            exit: {
                                y: -150,
                                scale: 0.9,
                                transition: { duration: DURATION, ease: EASE_OUT }, 
                            },
                         }}>
                            <div className="flex flex-col gap-4 w-full max-w-xl md:gap-6 lg:gap-8">
                                
                            </div>
                         </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}