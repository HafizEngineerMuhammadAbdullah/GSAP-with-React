import { useGLTF } from '@react-three/drei'
import React from 'react'

const MacContainer = () => {

    let model = useGLTF("./mac.glb")
    return (
        // <mesh>
        //     <boxGeometry />
        // </mesh>

        <group position={[0,-10,20]}>
            <primitive object={model.scene} />
        </group>
    )
}

export default MacContainer
