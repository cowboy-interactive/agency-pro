import styled from "styled-components";
import { sizes } from "utils/variables";
import { motion } from "framer-motion";

export const Section = ({
  children,
  xl,
  lg,
  md,
  sm,
  xs,
  initial = {},
  whileInView = {},
  viewport = {},
  transition = {},
}) => {
  return (
    <Cont
      xl={xl}
      lg={lg}
      md={md}
      sm={sm}
      xs={xs}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </Cont>
  );
};

const Cont = styled(motion.section)`
  display: flex;
  justify-content: space-between;
  padding: 100px 10% 100px 10%;

  ${({ xl }) => xl};

  @media (max-width: ${sizes.lg}) {
    ${({ lg }) => lg};
  }

  @media (max-width: ${sizes.md}) {
    ${({ md }) => md};
    padding: 0px 5% 0 5%;
  }

  @media (max-width: ${sizes.sm}) {
    flex-direction: column;
    ${({ sm }) => sm};
  }

  @media (max-width: ${sizes.xs}) {
    ${({ xs }) => xs};
  }
`;
