'use client'

import { Inter } from "next/font/google";
import Heading from "./components/Heading/heading";
import Image from "next/image";

const inter = Inter({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
      <Heading />
      <div>
        <Image width={100} height={100} src="/aster-photo.png" alt="Developer photo."/>
      </div>
    </main>
  );
}
