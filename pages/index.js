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
const Scene = dynamic(() => import("components/Scene"), { ssr: true });

export default function Home() {
  const scrollTop = useScrollTop();
  const windowSize = useWindowSize();
  const [position] = useState({ x: 0, y: 0 });

  return (
    <>
      <Scene scrollTop={scrollTop} windowSize={windowSize} />
      <Column
        xl="padding-top: 100px;
            backdrop-filter: blur( 50px );"
      >
        <Section xl="justify-content: center;" md="flex-direction: column;">
          <Column xl="margin: 0 0 60px 0; align-items: center; text-align: center; max-width: 600px; min-width: 0px;">
            <H1>Web Design and Development for Your Business</H1>
            <Text>
              At Grindstone Renovation & Contracting Inc, we have been serving
              hundreds of clients across the Lower Mainland for over 17 years.
            </Text>
            <Button>Contact Us</Button>
          </Column>
        </Section>

        <Section xl="height: 1000px;"></Section>
      </Column>
    </>
  );
}
