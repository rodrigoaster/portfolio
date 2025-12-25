'use client'

import HeadingComponent from "./components/heading";
import HomePage from "./pages/home";
import TimelinePage from "./pages/timeline";

import { motion } from "motion/react"

const variantsSection = {
  first: { opacity: 0 },
  last: { opacity: 1 },
}

export default function App() {
  return (
    <motion.main
      initial="first"
      whileInView="last"
      viewport={{ once: true, amount: 0.2 }}
      variants={variantsSection}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <div className="max-w-[64rem] mx-auto">
        <HeadingComponent />
        <HomePage />
      </div>
      <TimelinePage />
    </motion.main>
  );
}
