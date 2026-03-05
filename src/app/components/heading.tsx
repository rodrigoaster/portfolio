"use client"

import { motion, useScroll, useMotionValueEvent } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { NavLink } from "./navlinks"
import ThemeToggle from "./theme.toggle"

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
          ? "var(--header-bg)"
          : "transparent",
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`
        ${scrolled ? "fixed top-0 left-0 right-0 z-50" : "relative"}
        flex
        justify-center
        border-b
        border-[color:var(--border)]
      `}
    >
      <motion.nav
        layout
        className="
          grid
          grid-cols-3
          flex-1
          items-center
          max-w-[64rem]
          px-4
          alternativeWidth:px-16
        "
      >
        <div className="justify-self-start">
          <Link href="/">
            <Image
              src="/aster-icon.png"
              alt="Aster developer icon"
              width={50}
              height={55}
              className="hover:opacity-50 transition-opacity duration-300"
            />
          </Link>
        </div>

        <div className="justify-self-center flex gap-12 sm_mobile:gap-6 text-lg font-medium">
          <NavLink href="/" pathname={pathname}>
            Home
          </NavLink>
          <NavLink href="/projects" pathname={pathname}>
            Projetos
          </NavLink>
          <NavLink href="/about" pathname={pathname}>
            Sobre
          </NavLink>
        </div>

        <div className="justify-self-end">
          <ThemeToggle />
        </div>
      </motion.nav>
    </motion.header>
  )
}
