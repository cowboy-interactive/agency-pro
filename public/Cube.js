import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
var lerp = require("lerp");

export default function Cube({ px, py, pz, ry, scrollTop }) {
  const group = useRef();
  useFrame(
    (state) => (
      (group.current.position.x = px),
      (group.current.position.y = lerp(
        group.current.position.y,
        py + scrollTop * 0.05,
        0.1
      )),
      (group.current.position.z = pz),
      (group.current.rotation.y += 0.005),
      (group.current.rotation.x += 0.005)
    )
  );
  const { nodes, materials } = useGLTF("/cube.glb");
  return (
    <group rotation={[0, 1, 0]} ref={group} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.001"]}
        scale={2}
        rotation={[0, -0.45, 0]}
      />
    </group>
  );
}

useGLTF.preload("/cube.glb");
