import * as S from "@/app/components/Heading/styles";
import Image from "next/image";

export default function Heading() {
    return (
        <S.Container>
            <Image src="/icon-aster-outlined.png" alt="Logo of developer" width={70} height={70}/>
            <nav>
                <S.NavLink href="">Home</S.NavLink>
                <S.NavLink href="">About</S.NavLink>
                <S.NavLink href="">Certifications</S.NavLink>
            </nav>             
        </S.Container>
    );
}