"use client"

import type { Variants } from "framer-motion"
import { AnimatePresence, motion } from "framer-motion"
import { ny } from "~/lib/utils"

interface SlightFlipProps {
   word: string
   duration?: number
   delayMultiple?: number
   framerProps?: Variants
   className?: string
}

export default function SlightFlip({
   word,
   duration = 0.5,
   delayMultiple = 0.08,
   framerProps = {
      hidden: { rotateX: -90, opacity: 0 },
      visible: { rotateX: 0, opacity: 1 },
   },
   className,
}: SlightFlipProps) {
   return (
      <div className="flex justify-center space-x-2">
         <AnimatePresence mode="wait">
            {word.split("").map((char, i) => (
               <motion.span
                  key={i}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={framerProps}
                  transition={{ duration, delay: i * delayMultiple }}
                  className={ny("origin-center drop-shadow-sm", className)}
               >
                  {char}
               </motion.span>
            ))}
         </AnimatePresence>
      </div>
   )
}
