import Image from "next/image";

import InstagramSvg from "../assets/svg/instagram-white-icon.svg"
import TwitterSvg from "../assets/svg/twitter-white-icon.svg"
import LinkedinSvg from "../assets/svg/linkedin-white-icon.svg"
import { SocialIcon } from "../components/social.icon";
import { motion } from "motion/react";
import { useIsMobile } from "../hooks/use.desktop.hook";

export default function HomePage() {
    const isMobile = useIsMobile();

    return (
        <section className="pt-[4.5rem] pb-[7.5rem] grid grid-cols-2 tablet_2:px-16 mobile:px-14">
            <div className="max-w-[30rem] sm_mobile:w-[300rem]">
                <h1 className="text-6xl font-extrabold tablet:text-4xl mobile:text-4xl">Rodrigo Aster</h1>
                <h2 className="text-2xl mt-3 tablet:text-xl mobile:text-xl">Software Engineer</h2>
                <div className="max-w-[23rem] mt-9 text-[#888686] tracking-[0.025rem] font-normal tablet:text-sm mobile:text-sm">
                    <p className="text-[1.375rem]">Compartilhando meu conhecimento como Web Engineer.</p>
                    <p className="text-[1.375rem] mt-6">Vamos falar sobre Arquitetura de Sistemas, Qualidade de Software e Experiências.</p>
                </div>
                <div className="flex items-center mt-16">
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
    );
}