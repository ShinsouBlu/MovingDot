import React, { useState, useEffect } from 'react'



const Block = () => {
  
  const[x,setX]=useState(window.innerWidth/2);
  const[y,setY]=useState(window.innerHeight/2);
  const[speed,setSpeed]=useState(3);
  const[moving,setMoving]=useState(false);
  const[direction,setDirection]=useState("up");

  const changeLocation = () => {
    //console.log("Changing the location");
    if(moving){
      switch(direction){
        case "right":console.log("going right");setX(x+speed);break;
        case "left":setX(x-speed);break;
        case "up":setY(y-speed);break;
        case "down":setY(y+speed);break;
        default:break;
      }
   }
   if(isTouchingSides()){
    //console.log("X location:"+x+" Width:"+window.innerWidth)
    //console.log("X location:"+y+" Width:"+window.innerHeight)
    //console.log("Hit the wall");
    setMoving(false);
   }
  }

  const isTouchingSides = () => {
    //console.log("Comparing "+x+"for width and "+y+" for height");
    return x >= window.innerWidth || x <= 0 || y >=window.innerHeight || y <= 0;
  }

  const updateSpeed = () => {
    //console.log("Speed is being updated");
    //setSpeed(speed+5);
  }

  const resetPosition = () => {
    setX(window.innerWidth/2);
    setY(window.innerHeight/2);
    setSpeed(3);
    setMoving(false);
  }

  //Keyboard Listeners
  useEffect(() => {
    function keyDown(e){
      //console.log("You just pressed " + e.code+ ", didn't you?");
      switch(e.code){
        case "ArrowRight":if(!moving){
          setMoving(true);
        }
        setDirection('right');
        break;
        case "ArrowLeft":
          if(!moving){
            setMoving(true);
          }
          setDirection('left');
          break;
        case "ArrowUp":
          if(!moving){
            setMoving(true);
          }
          setDirection('up');
          break;
        case "ArrowDown":
          if(!moving){
            setMoving(true);
          }
          setDirection('down');
          break;
        default:break;
      }
    }
    
    document.addEventListener('keydown',keyDown);
    //remove event listener to prevent event listener from being rerendered multiple times
    return () => document.removeEventListener("keydown",keyDown)
  });
  //Create Interval to move dot around the screen
  useEffect(() => {
    const id=setInterval(changeLocation,50);
    return () => clearInterval(id);
  });
  useEffect(() => {
    const id=setInterval(updateSpeed,10000);
    return () => clearInterval(id);
  });

  useEffect(() => {
    const id=setInterval(updateSpeed,10000);
    return () => clearInterval(id);
  });
  useEffect(() => {
    document.getElementById("resetButton").addEventListener("click",resetPosition);
    return () => document.getElementById("resetButton").removeEventListener("click",resetPosition);
  });


  
  
  
  return (
    <>
    <div id="playerDot"
    style={{
      postion:'inline-flex',
      width:'50px',
      height:'50px',
      backgroundColor:'red',
      transform: `translate(${x}px,${y}px)`,
    }}></div>
    </>
  )
}

export default Block