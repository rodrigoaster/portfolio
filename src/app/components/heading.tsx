import Image from "next/image";

import { Ropa_Sans } from "next/font/google";

const ropaSansFont = Ropa_Sans({ subsets: ["latin"], weight: "400" })

export default function HeadingComponent() {
    return (
        <div className={ropaSansFont.className}>
            <header className="flex justify-center py-8 px-[4rem]">
            <nav className="flex flex-1 items-center justify-between mx-[15.188rem]">
                <a className="" href="/">
                    <Image className="hover:opacity-50 ease-in-out duration-300" src="/aster-icon.png" alt="Aster developer icon" width={70} height={70} />
                </a>
                <div className="">
                    <a className="pr-12 text-xl hover:text-gray-500 ease-in-out duration-300" href="/">HOME</a>
                    <a className="pr-12 text-xl hover:text-gray-500 ease-in-out duration-300" href="/about">SOBRE</a>
                    <a className="pr-12 text-xl hover:text-gray-500 ease-in-out duration-300" href="/certifications">CERTIFICAÇÕES</a>
                </div>
            </nav>
            </header>
        </div>
    );
}