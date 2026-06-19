import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const App = () => {


  // const gsapRef = useRef();

  // useGSAP(() => {
  //   gsap.to(gsapRef.current, {
  //     x: 1500,
  //     duration: 2,
  //     delay: 1,
  //     rotate: 720,
  //   })
  // })
  // useGSAP(() => {
  //   gsap.to("#box", {
  //     x: 1000,
  //     duration: 2,
  //     delay: 1
  //   })
  // })
  // useGSAP(() => {
  //   gsap.from(".square",{
  //     x: 300,
  //     opacity: 0,
  //     rotate: 720,
  //     duration: 2,
  //     delay: 1
  //   })
  // })


  const squareRef = useRef();

  useGSAP(() => {
    gsap.from(squareRef.current,{
      rotate: 360,
      duration: 2,
      delay: 1
    })
  })

  return (
    <main>
      {/* <div ref={gsapRef} id="box">

      </div> */}

      <div className="container1">
        <div className="circle"></div>
        <div ref={squareRef} className="square"></div>
      </div>
      <div className="container2">
        <div className="circle"></div>
        <div className="square"></div>
      </div>
    </main>
  )
}

export default App
