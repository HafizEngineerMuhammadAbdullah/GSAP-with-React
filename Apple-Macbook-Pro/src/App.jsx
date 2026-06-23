import { Canvas } from '@react-three/fiber'
import React from 'react';
import "./style.css"
import { Environment, OrbitControls } from '@react-three/drei';
import MacContainer from './MacContainer';

const App = () => {
  return (
    <Canvas camera={{ fov: 12, position: [0, -10, 220] }} >
      <OrbitControls />
      <Environment files={["/brown_photostudio_02_4k.exr"]} />
      {/* <Environment preset="city" /> */}
      {/* <Environment preset="sunset" />
      <Environment preset="warehouse" />
      <Environment preset="forest" />
      <Environment preset="night" />
      <Environment preset="dawn" />
      <Environment preset="apartment" />
      <Environment preset="park" />
      <Environment preset="lobby" /> */}
      <MacContainer />
    </Canvas>
  )
}

export default App
