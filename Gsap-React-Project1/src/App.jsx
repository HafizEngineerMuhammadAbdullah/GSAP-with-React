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



  // const [xVal, setXVal] = useState(0);
  // const [yVal, setYVal] = useState(0);
  // const [rotateX, setRotateX] = useState(0);
  // const rotate = gsap.utils.random(-360, 360, 45);
  // const randomX = gsap.utils.random(-500, 500, 100);
  // const randomY = gsap.utils.random(-500, 500, 100);


  // const imageRef = useRef();


  // useGSAP(() => {
  //   gsap.to(".square", {
  //     x: xVal,
  //     duration: 0.3,
  //     rotate: rotateX
  //   })
  // }, [xVal, rotateX])


  // useGSAP(() => {
  //   gsap.to(imageRef.current, {
  //     x: xVal,
  //     y: yVal,
  //     duration: 0.3,
  //     rotate: rotateX
  //   })
  // }, [xVal, rotateX, yVal]);


  //  useGSAP(() => {
  //   gsap.to(imageRef.current, {
  //     x: xVal,
  //     y: yVal,
  //     duration: 0.3,
  //     rotate: rotateX
  //   })
  // }, {scope: 'main', dependencies:[xVal,yVal,rotateX]});

  const squareRef = useRef();
  const { contextSafe } = useGSAP();

  const rotateBox = contextSafe(() => {
    gsap.to(squareRef.current, {
      rotate: "+=360",
      duration: 0.6,
    })
  });

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
      {/* <div className="square"></div> */}
      {/* <img onClick={() => {
        setXVal(randomX);
        setYVal(randomY);
        setRotateX(rotate)
      }} ref={imageRef} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuzbf8PiDmtpyNe_inEs3XHkzJvGHq-iwEwFqyDN3uYw&s=10" alt="" /> */}
      <button onClick={rotateBox}>Animate</button>
      <div ref={squareRef} className="square"></div>

    </main>
  )
}

export default App
