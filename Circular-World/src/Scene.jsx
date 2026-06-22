import { useTexture } from '@react-three/drei'
import React, { useRef } from 'react'
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';
import image from "./assets/image1.jpg";

const Scene = () => {
    let tex = useTexture(image);
    let cyl = useRef(null);
    useFrame((state, delta) => {
        if (cyl.current) {
            cyl.current.rotation.y += delta;
        }
    });

    return (
        <group rotation={[0, 1.4, 0.5]}>
            {/* <mesh> → contains one geometry and one material */}
            <mesh ref={cyl}>
                <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
                <meshStandardMaterial map={tex}  transparent side={THREE.DoubleSide} />
            </mesh>
        </group>
    )
}

export default Scene
