import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, PositionalAudio } from '@react-three/drei'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import "./App.css";
import Scene from './Scene';




const App = () => {
  return (
    <>
      <Canvas flat camera={{ fov: 35 }}>
        <OrbitControls />
        <ambientLight />
        <Scene />
        <EffectComposer>
          <Bloom
            intensity={1.0} // The bloom intensity.
            // blurPass={undefined} // A blur pass.
            // kernelSize={KernelSize.LARGE} // blur kernel size
            luminanceThreshold={0.2} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0.1} // smoothness of the luminance threshold. Range is [0, 1]
            mipmapBlur={true} // Enables or disables mipmap blur.
            //resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
            //resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
          />
          {/* <ToneMapping adaptive /> */}
        </EffectComposer>
      </Canvas>
      <div className='w-full bg-[#15c0eb] py-20'>
        <h1 className='text-center text-cyan-800 font-medium font-mono text-2xl'>Welcome to My Portfolio!</h1>
      </div>
    </>
  );
}

export default App
