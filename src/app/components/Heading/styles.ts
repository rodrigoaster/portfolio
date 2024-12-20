import { motion } from "motion/react";
import styled from "styled-components";

export const Container = styled(motion.div)`
  width: 100%;
  
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  padding: 20px 100px;

  position: fixed;
`;

export const NavContainer = styled(motion.nav)`
  
`;

export const NavLink = styled(motion.a)`
  padding: 0px 20px;
`;