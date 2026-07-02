"use client"

import {
 motion,
 useMotionValue,
 useReducedMotion,
 useSpring,
 useTransform,
} from "motion/react"

const VIEWBOX_WIDTH = 1056

export function SiteFooterInteractiveLogotype() {
 const shouldReduceMotion = useReducedMotion()

 const gradientX1Raw = useMotionValue(0.5)
 const gradientX1 = useSpring(
 useTransform(gradientX1Raw, [0, 1], [0, VIEWBOX_WIDTH]),
 {
 stiffness: 150,
 damping: 25,
 }
 )

 const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
 if (shouldReduceMotion) return

 const containerRect = event.currentTarget.getBoundingClientRect()
 gradientX1Raw.set(
 (event.clientX - containerRect.left) / containerRect.width
 )
 }

 const handleMouseLeave = () => {
 if (shouldReduceMotion) return
 gradientX1Raw.set(0.5)
 }

 return (
 <div className="screen-line-bottom after:z-1 after:bg-foreground/15">
 <div
 className="overflow-hidden"
 onMouseMove={handleMouseMove}
 onMouseLeave={handleMouseLeave}
 >
 <div className="flex w-full translate-y-[37.5%] items-center justify-center">
 <svg
 className="container size-full"
 viewBox="0 0 1056 258"
 fill="none"
 xmlns="http://www.w3.org/2000/svg"
 >
 <path
 fillRule="evenodd"
 clipRule="evenodd"
 d="M0 1h32v32h-32zM32 1h32v32h-32zM64 1h32v32h-32zM96 1h32v32h-32zM0 33h32v32h-32zM128 33h32v32h-32zM0 65h32v32h-32zM128 65h32v32h-32zM0 97h32v32h-32zM32 97h32v32h-32zM64 97h32v32h-32zM96 97h32v32h-32zM0 129h32v32h-32zM0 161h32v32h-32zM0 193h32v32h-32zM0 225h32v32h-32zM192 97h32v32h-32zM320 97h32v32h-32zM192 129h32v32h-32zM320 129h32v32h-32zM192 161h32v32h-32zM320 161h32v32h-32zM192 193h32v32h-32zM320 193h32v32h-32zM224 225h32v32h-32zM256 225h32v32h-32zM288 225h32v32h-32zM320 225h32v32h-32zM384 1h32v32h-32zM384 33h32v32h-32zM384 65h32v32h-32zM384 97h32v32h-32zM480 97h32v32h-32zM384 129h32v32h-32zM448 129h32v32h-32zM384 161h32v32h-32zM416 161h32v32h-32zM384 193h32v32h-32zM448 193h32v32h-32zM384 225h32v32h-32zM480 225h32v32h-32zM608 97h32v32h-32zM640 97h32v32h-32zM672 97h32v32h-32zM704 129h32v32h-32zM608 161h32v32h-32zM640 161h32v32h-32zM672 161h32v32h-32zM704 161h32v32h-32zM576 193h32v32h-32zM704 193h32v32h-32zM608 225h32v32h-32zM640 225h32v32h-32zM672 225h32v32h-32zM704 225h32v32h-32zM768 1h32v32h-32zM768 33h32v32h-32zM768 65h32v32h-32zM768 97h32v32h-32zM864 97h32v32h-32zM768 129h32v32h-32zM832 129h32v32h-32zM768 161h32v32h-32zM800 161h32v32h-32zM768 193h32v32h-32zM832 193h32v32h-32zM768 225h32v32h-32zM864 225h32v32h-32zM992 1h32v32h-32zM992 65h32v32h-32zM992 97h32v32h-32zM992 129h32v32h-32zM992 161h32v32h-32zM992 193h32v32h-32zM992 225h32v32h-32z"
 fill="url(#paint0_linear_1145_73)"
 />
 <path
 className="stroke-foreground/10"
 d="M0 1h32v32h-32zM32 1h32v32h-32zM64 1h32v32h-32zM96 1h32v32h-32zM0 33h32v32h-32zM128 33h32v32h-32zM0 65h32v32h-32zM128 65h32v32h-32zM0 97h32v32h-32zM32 97h32v32h-32zM64 97h32v32h-32zM96 97h32v32h-32zM0 129h32v32h-32zM0 161h32v32h-32zM0 193h32v32h-32zM0 225h32v32h-32zM192 97h32v32h-32zM320 97h32v32h-32zM192 129h32v32h-32zM320 129h32v32h-32zM192 161h32v32h-32zM320 161h32v32h-32zM192 193h32v32h-32zM320 193h32v32h-32zM224 225h32v32h-32zM256 225h32v32h-32zM288 225h32v32h-32zM320 225h32v32h-32zM384 1h32v32h-32zM384 33h32v32h-32zM384 65h32v32h-32zM384 97h32v32h-32zM480 97h32v32h-32zM384 129h32v32h-32zM448 129h32v32h-32zM384 161h32v32h-32zM416 161h32v32h-32zM384 193h32v32h-32zM448 193h32v32h-32zM384 225h32v32h-32zM480 225h32v32h-32zM608 97h32v32h-32zM640 97h32v32h-32zM672 97h32v32h-32zM704 129h32v32h-32zM608 161h32v32h-32zM640 161h32v32h-32zM672 161h32v32h-32zM704 161h32v32h-32zM576 193h32v32h-32zM704 193h32v32h-32zM608 225h32v32h-32zM640 225h32v32h-32zM672 225h32v32h-32zM704 225h32v32h-32zM768 1h32v32h-32zM768 33h32v32h-32zM768 65h32v32h-32zM768 97h32v32h-32zM864 97h32v32h-32zM768 129h32v32h-32zM832 129h32v32h-32zM768 161h32v32h-32zM800 161h32v32h-32zM768 193h32v32h-32zM832 193h32v32h-32zM768 225h32v32h-32zM864 225h32v32h-32zM992 1h32v32h-32zM992 65h32v32h-32zM992 97h32v32h-32zM992 129h32v32h-32zM992 161h32v32h-32zM992 193h32v32h-32zM992 225h32v32h-32z"
 strokeWidth="2"
 />
 <defs>
 <motion.linearGradient
 id="paint0_linear_1145_73"
 x1={gradientX1}
 y1="1"
 x2="528"
 y2="257"
 gradientUnits="userSpaceOnUse"
 >
 <stop
 offset="0.625"
 stopColor="var(--foreground)"
 stopOpacity="0"
 />
 <stop offset="1" stopColor="var(--foreground)" />
 </motion.linearGradient>
 </defs>
 </svg>
 </div>
 </div>

 <div
 className="pointer-events-none absolute bottom-0 left-1/2 hidden h-px w-[50%] max-w-full -translate-x-1/2 dark:block"
 style={{
 background:
 "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(228, 228, 231, 0.3) 50%, rgba(0, 0, 0, 0) 100%)",
 }}
 aria-hidden
 />
 </div>
 )
}
