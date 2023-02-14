import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
var lerp = require("lerp");

export default function Ball({ px, py, pz, ry, scrollTop, transparent, color = "blue" }) {
  const group = useRef();
  useFrame(
    (state) => (
      (group.current.position.x = px),
      (group.current.position.y = lerp(
        group.current.position.y,
        py + scrollTop * 0.05,
        0.1
      )),
      (group.current.position.z = lerp(
        group.current.position.z,
        pz + scrollTop * 0.05,
        0.1
      )),
      (group.current.rotation.y += 0.005),
      (group.current.rotation.x += 0.005)
    )
  );
  const { nodes, materials } = useGLTF("/ball.glb");
  return (
    <group rotation={[0, 1, 0]} ref={group} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        scale={3}
        rotation={[0, -0.45, 0]}
      />
      <meshStandardMaterial color="blue" transparent={transparent} opacity={transparent ? "0" : "0.5"} />
    </group>
  );
}

useGLTF.preload("/ball.glb");
