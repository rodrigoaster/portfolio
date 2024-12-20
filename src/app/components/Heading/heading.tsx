import * as S from "@/app/components/Heading/styles";
import Image from "next/image";
import Logo from "../../../../public/icon-aster.png"

export default function Heading() {
    return (
        <S.Container>
            <Image src={Logo} alt="Logo of developer" width={70} height={70}/>
            <S.NavContainer>
                <S.NavLink href="">Home</S.NavLink>
                <S.NavLink href="">About</S.NavLink>
                <S.NavLink href="">Certifications</S.NavLink>
            </S.NavContainer>             
        </S.Container>
    );
}