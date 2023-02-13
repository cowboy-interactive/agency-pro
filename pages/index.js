import { useState } from "react";
import { Button } from "components/Button/Button";
import { Card } from "components/Card/Card";
import { Container } from "components/Container/Container";
import { Column } from "components/Container/Column";
import { Section } from "components/Container/Section";
import { Grid } from "components/Grid/Grid";
import { Img } from "components/Img/Img";
import { H1 } from "components/Text/H1";
import { H2 } from "components/Text/H2";
import { H3 } from "components/Text/H3";
import { Text } from "components/Text/Text";
import useScrollTop from "hooks/useScrollTop";
import useWindowSize from "hooks/useWindowSize";

import dynamic from "next/dynamic";
import { useTheme } from "utils/provider";
const Scene = dynamic(() => import("components/Scene"), { ssr: true });

export default function Home() {
  const scrollTop = useScrollTop();
  const windowSize = useWindowSize();
  const [position] = useState({ x: 0, y: 0 });

  const { theme } = useTheme();

  return (
    <>
      <Scene scrollTop={scrollTop} windowSize={windowSize} />
      <Column
        xl={`padding-top: 100px;
            backdrop-filter: blur(${theme == "dark" ? "0px" : "50px"});`}
      >
        <Section xl="justify-content: center;">
          <Column xl="margin: 0 0 60px 0; align-items: center; text-align: center; max-width: 650px; min-width: 0px;">
            <H1>Your One Stop Solution For All Your Marketing Needs</H1>
            <Text>
              We are a full-service marketing agency with a passion for
              delivering results that matter. Our team of experts is dedicated
              to helping businesses like yours reach their fullest potential
              through effective and innovative marketing strategies.
            </Text>
            <Button
              xl="
            background: none;"
            >
              Contact Us
            </Button>
          </Column>
        </Section>

        <Section xl="height: 1000px;"></Section>
      </Column>
    </>
  );
}
