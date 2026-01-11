'use client'

import HeadingComponent from "./components/heading";

import { motion } from "motion/react"
import HomePage from "./home/page";

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
      className="w-full overflow-x-hidden"
    >
      <div className="w-full max-w-[64rem] mx-auto px-4 sm:px-6 lg:px-8">
        <HeadingComponent />
        <HomePage />
      </div>
=    </motion.main>
  );
}