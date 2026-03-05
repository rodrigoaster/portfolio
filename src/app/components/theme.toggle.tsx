"use client"

import { useTheme } from "@/app/providers/theme.provider"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Alternar tema"
      className="theme-toggle"
    >
      {theme === "dark" ? "Dark" : "Light"}
    </button>
  )
}
