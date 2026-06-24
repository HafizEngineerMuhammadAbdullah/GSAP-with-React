import { Canvas } from '@react-three/fiber'
import React from 'react';
import "./style.css"
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';
import MacContainer from './MacContainer';

const App = () => {
  return (
    <div className='h-screen w-full'>
      <nav className='navbar line flex gap-7 pt-10 pb-3 absolute top-0 left-1/2 -translate-x-1/2 font-["Helvetica_Now_Display"]'>
        {["iPhone", "iPad", "Services", "ios", "Mac", "Products", "iPhone", "iPad", "Services", "ios", "Mac", "Products"].map((e, idx) => (
          <a key={idx} href="" className='text-white font-[400] text-md capitalize'>
            {e}
          </a>
        ))}
      </nav>
      <div className='absolute flex flex-col items-center text-white top-20 left-1/2 -translate-x-1/2'>
        <h3 className='masked text-7xl font-[700] tracking-tighter'>Macbook pro.</h3>
        <h5>Oh so pro !</h5>
        <p className='text-center w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur laboriosam quibusdam.</p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }} >
        <OrbitControls />
        <Environment files={["/brown_photostudio_02_4k.exr"]} />
        <Environment preset="city" />
        <Environment preset="sunset" />
        <Environment preset="warehouse" />
        <Environment preset="forest" />
        <Environment preset="night" />
        <Environment preset="dawn" />
        <Environment preset="apartment" />
        <Environment preset="park" />
        <Environment preset="lobby" />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App
