import Image from "next/image";
import Link from "next/link";

export default function HeadingComponent() {
    return (
        <header className="flex justify-center py-8 max-w-[64rem] mx-auto">
            <nav className="flex flex-1 items-center justify-between mx-auto">
                <Link href="/">
                    <Image className="hover:opacity-50 ease-in-out duration-300" src="/aster-icon.png" alt="Aster developer icon" width={60} height={65} />
                </Link>
                <div>
                    <Link className="pr-12 text-xl hover:text-gray-500 ease-in-out duration-300" href="/">Home</Link>
                    <Link className="pr-12 text-xl hover:text-gray-500 ease-in-out duration-300" href="/about">Sobre</Link>
                    <Link className="pr-12 text-xl hover:text-gray-500 ease-in-out duration-300" href="/certifications">Certificações</Link>
                </div>
            </nav>
        </header>
    );
}