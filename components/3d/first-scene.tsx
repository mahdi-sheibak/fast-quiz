"use client";

import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

interface BoxProps {
	position: [number, number, number];
}

const Box = ({ position }: BoxProps) => {
	const meshRef = useRef<THREE.Mesh>(null);

	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);

	useFrame((_state, delta) => {
		const currentRotation = meshRef.current?.rotation;

		if (!currentRotation) return;

		meshRef.current.rotation.set(
			currentRotation.x + delta,
			currentRotation.y,
			currentRotation.z
		);
	});

	return (
		<mesh
			position={position}
			ref={meshRef}
			scale={active ? 1.5 : 1}
			onClick={() => setActive(!active)}
			onPointerOver={() => setHover(true)}
			onPointerOut={() => setHover(false)}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
		</mesh>
	);
};

export const FirstScene = () => {
	return (
		<Canvas style={{ width: "500px", height: "700px" }}>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<OrbitControls enableDamping enablePan enableRotate enableZoom />
			<Box position={[-1.2, 0, 0]} />
			<Box position={[1.2, 0, 0]} />
		</Canvas>
	);
};
