import Image from "next/image";

import InstagramSvg from "../assets/svg/instagram-white-icon.svg"
import TwitterSvg from "../assets/svg/twitter-white-icon.svg"
import LinkedinSvg from "../assets/svg/linkedin-white-icon.svg"

export default function HomePage() {
    return (
        <section className="pt-[4.5rem] pb-[7.5rem] grid grid-cols-2">
            <div className="max-w-[30rem]">
                <h1 className="text-6xl font-extrabold">Rodrigo Aster</h1>
                <h2 className="text-2xl mt-3">Software Engineer</h2>
                <div className="max-w-[23rem] mt-9 text-[#888686] tracking-[0.025rem] font-normal">
                    <p className="text-[1.375rem]">Compartilhando meu conhecimento como Web Engineer.</p>
                    <p className="text-[1.375rem] mt-6">Vamos falar sobre Arquitetura de Sistemas, Qualidade de Software e Experiências.</p>
                </div>
                <div className="flex items-center mt-16">
                    <a className="mr-8 hover:opacity-50 ease-in-out duration-300" href="https://www.instagram.com/rodrigaster/" target="_blank">
                        <Image className="" src={InstagramSvg} alt="" width={25} height={25} />
                    </a>
                    <a className="mr-8 hover:opacity-50 ease-in-out duration-300" href="https://x.com/rodrigoasterbr" target="_blank">
                        <Image className="" src={TwitterSvg} alt="" width={25} height={25} />
                    </a>
                    <a className="mr-8 hover:opacity-50 ease-in-out duration-300" href="https://www.linkedin.com/in/rodrigoaster/" target="_blank">
                        <Image className="" src={LinkedinSvg} alt="" width={25} height={25} />
                    </a>
                </div>
            </div>
            <div className="">
                <Image className="bg-[#0b0a0b] rounded-b-[10%] rounded-e-[10%] border border-t-1 border-l-1 border-r-0 border-b-0 border-[#8886866b]" src="/aster-profile.png" alt="" width={450} height={450}/>
            </div>
        </section>
    );
}