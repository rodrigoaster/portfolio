import { motion } from "motion/react";
import styled from "styled-components";

export const Container = styled(motion.div)`
  width: 100%;
  
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  padding: 25px 100px;

  position: fixed;
`;

export const NavContainer = styled(motion.nav)`
  
`;

export const NavLink = styled(motion.a)`
  padding: 0px 25px;

  color: #000;
  font-size: 20px;

  &:hover { 
    color: rgb(117, 117, 117);
    transition: 0.2s ease-in-out;
   }
`;