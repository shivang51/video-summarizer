import React, { useEffect, useRef, useState } from 'react'
import { Scene } from 'three';



function Home() {
  useEffect(()=>{
    VANTA.NET({
      el: '#home_net',
      mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x3f60ff,
  backgroundColor: 0x21214a,
  points: 20.00,
  maxDistance: 24.00
    });
  }, [])


    function onClick(e){
      const el = document.getElementById("splash_screen");
      el.style.display = "none";
      
    } 

return
      <div id="home_net">
        <div id="splash_screen"> 
      <h1>Video Summarizer</h1>
      <button onClick={onClick}><a href="/content">Start</a></button>
</div></div>
}

export default Home
