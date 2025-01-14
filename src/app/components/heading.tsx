import Image from "next/image";

export default function HeadingComponent() {
    return (
       <header className="mt-8 flex justify-around items-center">
        <a href="/">
            <Image className="hover:opacity-50 ease-in-out duration-300" src="/aster-icon.png" alt="Aster developer icon" width={70} height={70} />
        </a>
        <nav>
            <a className="pr-12 text-xl hover:text-gray-500 ease-in-out duration-300" href="/">Home</a>
            <a className="pr-12 text-xl hover:text-gray-500 ease-in-out duration-300" href="/about">Sobre</a>
            <a className="pr-12 text-xl hover:text-gray-500 ease-in-out duration-300" href="/certifications">Certificações</a>
        </nav>
       </header>
    );
}