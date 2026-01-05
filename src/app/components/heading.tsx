"use client"

import { motion, useScroll, useMotionValueEvent } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { NavLink } from "./navlinks"

export default function HeadingComponent() {
  const { scrollY } = useScroll()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 0)
  })

  return (
    <motion.header
      layout="size"
      animate={{
        height: scrolled ? "4.5rem" : "6.5rem",
        backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
        backgroundColor: scrolled
          ? "rgba(11, 10, 11, 0.65)"
          : "rgba(11, 10, 11, 0)",
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`
        ${scrolled ? "fixed top-0 left-0 right-0 z-50" : "relative"}
        flex
        justify-center
        border-b
        border-white/10
      `}
    >
      <motion.nav
        layout
        className="
          flex
          flex-1
          items-center
          justify-between
          max-w-[64rem]
          px-4
          alternativeWidth:px-16
        "
      >
        <Link href="/">
          <Image
            src="/aster-icon.png"
            alt="Aster developer icon"
            width={50}
            height={55}
            className="hover:opacity-50 transition-opacity duration-300"
          />
        </Link>

        <div className="flex gap-12">
          <NavLink href="/" pathname={pathname}>
            Home
          </NavLink>
          <NavLink href="/about" pathname={pathname}>
            Sobre
          </NavLink>
          <NavLink href="/certifications" pathname={pathname}>
            Certificações
          </NavLink>
        </div>
      </motion.nav>
    </motion.header>
  )
}