import React, { useRef, useState } from 'react';
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

  // useGSAP(() => {
  //   gsap.from(squareRef.current,{
  //     scale: 0,
  //     rotate: 720,
  //     duration: 0.5,
  //     delay: 1
  //   })
  // }, {scope: ".container2"})

  // useGSAP(() => {
  //   gsap.from(".square",{
  //     scale: 0,
  //     rotate: 720,
  //     duration: 0.5,
  //     delay: 1
  //   })
  // }, {scope: ".container2"})


  // const container = useRef();

  // useGSAP(() => {
  //   gsap.from(".square", {
  //     scale: 0,
  //     rotate: 720,
  //     duration: 0.5,
  //     delay: 1
  //   })
  // }, { scope: container })



  const [xVal, setXVal] = useState(0);
  const [rotateX, setRotateX] = useState(0);
  const rotate = gsap.utils.random(-360, 360, 45);
  const randomX = gsap.utils.random(-500, 500, 100);


  useGSAP(() => {
    gsap.to(".square", {
      x: xVal,
      duration: 0.3,
      rotate: rotateX
    })
  }, [xVal, rotateX])

  return (
    <main>
      {/* <div ref={gsapRef} id="box">

      </div> */}

      {/* <div ref={container} className="container1">
        <div className="circle"></div>
        <div ref={squareRef} className="square"></div>
      </div>
      <div className="container2">
        <div className="circle"></div>
        <div className="square"></div>
      </div> */}

      {/* <div className="circle"></div> */}
      <div className="square"></div>
      <button onClick={() => {
        setXVal(randomX);
        setRotateX(rotate)
      }} >Animate</button>
    </main>
  )
}

export default App
