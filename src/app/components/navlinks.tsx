import { motion } from "motion/react"
import Link from "next/link"

export function NavLink({
  href,
  pathname,
  children,
}: {
  href: string
  pathname: string
  children: React.ReactNode
}) {
  const isActive = pathname === href

  return (
    <motion.div
      animate={{
        color: isActive ? "#ffffff" : "#7a7a7a",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Link
        href={href}
        className="text-xl hover:text-white transition-colors duration-300 mobile:text-sm"
      >
        {children}
      </Link>
    </motion.div>
  )
}