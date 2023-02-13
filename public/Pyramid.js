import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
var lerp = require("lerp");

export default function Pyramid({ px, py, pz, ry, scrollTop, color }) {
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
  const { nodes, materials } = useGLTF("/pyramid.glb");
  return (
    <group rotation={[0, 1, 0]} ref={group} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone.geometry}
        rotation={[0, -0.45, 0]}
        scale={3}
        >
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/pyramid.glb");
