import { motion } from "motion/react";
import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 1654px;
  
  margin: 0 auto;
`;

export const SummaryContainer = styled(motion.section)`
  display: grid;
  grid-template-columns: 480px 480px;
  grid-template-rows: 480px;

  column-gap: 64px;
  
  margin-top: 72px;

  justify-content: center;
`;

export const PersonalInfosContainer = styled.div`
`;

export const SummaryImage = styled.img`
  width: 450px;
  height: auto;

  border: 1px solid #ccc;

  border-end-end-radius: 10%;
  border-bottom-left-radius: 10%;
  border-top-right-radius: 10%;
`;

export const SocialMediaLink = styled.a`
  padding-right: 20px;

`;

export const Title = styled.h1`
  font-size: 3.75rem;
  font-weight: 700;
`;

export const SubTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const DescriptionSummary = styled.p`
  font-size: 1.375rem;
  color: #878787;
`;