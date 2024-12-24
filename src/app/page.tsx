'use client'

import { Inter } from "next/font/google";
import Heading from "./components/Heading/heading";
import Image from "next/image";
import { DescriptionSummary, SocialMediaLink, SubTitle, SummaryContainer, SummaryImage, PersonalInfosContainer, Title, MainContainer } from "./style";
import InstagramSvg from "../../public/instagram-black-icon.svg"
import TwitterSvg from "../../public/twitter-black-icon.svg"
import LinkedinSvg from "../../public/linkedin-black-icon.svg"

const inter = Inter({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <MainContainer className={inter.className}>
      <Heading />
      <SummaryContainer>
        <PersonalInfosContainer>
          <Title>Rodrigo Aster</Title><br />
          <SubTitle>Software Developer</SubTitle><br /><br />
          <DescriptionSummary>Buscando contribuir ao máximo no mundo do Desenvolvimento Web.</DescriptionSummary><br />
          <DescriptionSummary>Falaremos sobre Desenvolvimento Back-end, qualidade de 
          código e minha experiência como desenvolvedor.</DescriptionSummary><br /><br />
          <nav>
            <SocialMediaLink target="_blank" href="https://www.instagram.com/rodrigaster/">
              <Image width={25} height={25} src={InstagramSvg} alt="Instagram icon" />
            </SocialMediaLink>
            <SocialMediaLink target="_blank" href="https://x.com/rodrigaster">
              <Image width={25} height={25} src={TwitterSvg} alt="X icon" />
            </SocialMediaLink>
            <SocialMediaLink target="_blank" href="https://www.linkedin.com/in/rodrigoaster/">
              <Image width={25} height={25} src={LinkedinSvg} alt="Linkedin icon" />
            </SocialMediaLink>
          </nav>
        </PersonalInfosContainer>
        <SummaryImage 
          src="/aster-photo.png" 
          alt="Developer photo."
        />
      </SummaryContainer>
    </MainContainer>
  );
}
