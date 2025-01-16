import Image from "next/image";

export default function HeadingComponent() {
    return (
        <header className="flex justify-center py-8 px-[4rem]">
            <nav className="flex flex-1 items-center justify-between mx-auto max-w-[64rem]">
                <a href="/">
                    <Image className="hover:opacity-50 ease-in-out duration-300" src="/aster-icon.png" alt="Aster developer icon" width={70} height={70} />
                </a>
                <div>
                    <a className="pr-12 text-xl hover:text-gray-500 ease-in-out duration-300" href="/">Home</a>
                    <a className="pr-12 text-xl hover:text-gray-500 ease-in-out duration-300" href="/about">Sobre</a>
                    <a className="pr-12 text-xl hover:text-gray-500 ease-in-out duration-300" href="/certifications">Certificações</a>
                </div>
            </nav>
        </header>
    );
}