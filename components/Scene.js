import React from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { themes } from "utils/variables";
import { useTheme } from "utils/provider";
import Ball from "public/Ball";
import Cube from "public/Cube";
import Pyramid from "public/Pyramid";

export default function Scene({ scrollTop, windowSize }) {
  const { theme } = useTheme();

  return (
    <Canvas
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        zIndex: -100,
        background: themes[theme].primary,
      }}
    >
      <PerspectiveCamera
        fov={10}
        makeDefault
        rotation={[0, 0, 0]}
        position={windowSize.width > 500 ? [0, 0, 0] : [0, 0, 10]}
      />
      <ambientLight />
      <pointLight position={[-10, -10, 100]} />
      <Cube px={-2.2} py={-2} pz={-10 - scrollTop} ry={2} scrollTop={0} color={"#ffbf1c"}/>
      <Cube px={2.2} py={-2} pz={-10 - scrollTop} ry={2} scrollTop={0} color={"#cfadf0"}/>
      <Cube px={2.2} py={2} pz={-10 - scrollTop} ry={2} scrollTop={0} color={"#7bbeff"}/>
      <Cube px={-2.2} py={2} pz={-10 - scrollTop} ry={2} scrollTop={0} color={"#ffcb7f"}/>

    </Canvas>
  );
}
