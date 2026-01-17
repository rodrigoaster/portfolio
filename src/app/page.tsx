'use client'

import { motion } from "motion/react"

import Image from "next/image";

import InstagramSvg from "./assets/svg/instagram-white-icon.svg"
import TwitterSvg from "./assets/svg/twitter-white-icon.svg"
import LinkedinSvg from "./assets/svg/linkedin-white-icon.svg"
import MailSvg from "./assets/svg/email-white-icon.svg"


import EventJobTwoImage from "./assets/images/1764966800734.jpg"
import EventJobImage from "./assets/images/1700194212386.jpeg"
import EventStartImage from "./assets/images/1701126770283.jpeg"

import { SocialIcon } from "./components/social.icon";
import { useIsMobile } from "./hooks/usedesktop.hook";
import EventComponent from "./components/event/event";
import HeadingComponent from "./components/heading";

const variantsSection = {
  first: { opacity: 0 },
  last: { opacity: 1 },
}

export default function App() {
  const isMobile = useIsMobile();

  return (
    <motion.main
      initial="first"
      whileInView="last"
      viewport={{ once: true, amount: 0.2 }}
      variants={variantsSection}
      transition={{ type: "spring", stiffness: 50 }}
      className="w-full overflow-x-hidden"
    >
      <HeadingComponent />
      <div className="w-full max-w-[64rem] mx-auto px-4 sm:px-6 lg:px-8">
        <section className="pt-[4.5rem] pb-[7.5rem] grid grid-cols-2 tablet_2:px-16 mobile:grid-cols-1 mobile:px-8">
          <div className="max-w-[30rem] mobile:max-w-full mobile:text-center mobile:mx-auto">
            <h1 className="text-6xl font-extrabold tablet:text-4xl mobile:text-5xl sm:text-4xl">Rodrigo Aster</h1>
            <h2 className="text-2xl mt-3 tablet:text-xl mobile:text-2xl sm:text-xl">Software Engineer</h2>
            <div className="max-w-[23rem] mt-9 text-[#888686] tracking-[0.025rem] font-normal mobile:max-w-full mobile:text-base sm:text-sm">
              <p className="text-[1.375rem] mobile:text-lg sm:text-base">Compartilhando meu conhecimento como Web Engineer.</p>
              <p className="text-[1.375rem] mt-6 mobile:text-lg sm:text-base">Vamos falar sobre Arquitetura de Sistemas, Qualidade de Software e Experiências.</p>
            </div>
            <div className="flex items-center mt-16 mobile:justify-center">
              <SocialIcon href="https://www.instagram.com/rodrigaster/" icon={InstagramSvg} />
              <SocialIcon href="https://x.com/rodrigoasterbr" icon={TwitterSvg} />
              <SocialIcon href="https://www.linkedin.com/in/rodrigoaster/" icon={LinkedinSvg} />
            </div>
          </div>
          {
            !isMobile ? (
              <motion.div
                className="relative w-full max-w-[480px] aspect-square"
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, type: "tween" }}
              >
                <Image
                  src="/aster-profile.png"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="
                        object-cover
                        bg-[#0b0a0b]
                        rounded-b-[10%]
                        rounded-e-[10%]
                        border
                        border-t
                        border-l
                        border-r-0
                        border-b-0
                        border-[#8886866b]
                        "
                />
              </motion.div>
            ) : <div />
          }
        </section>
        <section className="bg-[#0a0b0b] flex flex-col justify-center text-center pt-[6rem] mx-auto border border-b-0 border-r-0 border-l-0 border-t-[#37415179]">
          <h3 className="text-[3rem] font-bold tracking-[-1.2px] mb-16">Timeline</h3>
          <EventComponent
            imageEvent={EventJobTwoImage}
            yearTitle="2025"
            eventTitle="🧙🏼 Assumindo cargo como Custom Software Engineer"
            descriptionEvent="Novas responsabilidades em novo cargo."
          />
          <EventComponent
            imageEvent={EventJobImage}
            yearTitle="2023"
            eventTitle="🧙🏼 Software Engineer com foco em Back-end na Accenture Brasil"
            descriptionEvent="Início de carreira como desenvolvedor na multi-nacional Accenture Brasil."
          />
          <EventComponent
            imageEvent={EventStartImage}
            yearTitle="2022"
            eventTitle="📕 Finalização e formação no programa START"
            descriptionEvent="Participação e formação em um dos melhores cursos gratuitos de programação de Pernambuco."
          />
        </section>
      </div>
      <footer className="flex p-10 justify-center">
          <SocialIcon href="https://www.instagram.com/rodrigaster/" icon={InstagramSvg} />
          <SocialIcon href="https://x.com/rodrigoasterbr" icon={TwitterSvg} />
          <SocialIcon href="https://www.linkedin.com/in/rodrigoaster/" icon={LinkedinSvg} />
          <SocialIcon href="mailto:rodrigoasterdev@gmail.com" icon={MailSvg} />
      </footer>
    </motion.main>
  );
}