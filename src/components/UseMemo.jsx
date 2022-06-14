import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
// import SomeComp from "./SomeComp";
// import UseEffect from "./UseEffect";
import classes from "./UseMemo.module.css";
import UseRef from "./UseRef";

function UseMemo() {
  // const [num, setNum] = useState(0);
  const [light, setLight] = useState(true);
  const [count,setCount] = useState(60)
  const countRef = useRef(0)
  const prevCount = useRef()
  console.log(countRef);

  // use effect tutorial
  const [toggle, setToggle] = useState(false);
  // func + 5
  // const plusFive =  (num) => {
  //     console.log("mount plusfive normal");
  //     return num + 5;
  // };

  // use ref 
  useEffect(()=>{
    prevCount.current = count
  },[count])

  const handleStart = () =>{
    countRef.current = setInterval(() => {
      setCount(prevCount => prevCount - 1)
    }, 1000);
    console.log("Start",countRef.current);
  }

  const handleStop = () =>{
    clearInterval(countRef.current)
    console.log("Stop", countRef.current);
  }
  
  console.log(count,prevCount.current);

  // func khi dùng usecallback
  // const plusFive = useCallback(() => {
  //   console.log("mount plusfive callback");
  //   return num + 5;
  // }, [num]);
  // gọi function bth
//   const numPlusFive = plusFive(num);
  // gọi function khi dùng usememo hook
  // const numPlusFive = useMemo(()=> plusFive(num),[num])

  const lightHandle = () => {
    console.log("mount light");
    setLight(!light);
  };
  const toggleHandle = () =>{
    setToggle(!toggle)
  }

  return (
    <React.Fragment>
      <div className={light ? classes.light : classes.dark}>
        <div>
          {/* <h1>Without useMemo</h1> */}
          <h1>With useRef</h1>
          {/* <button onClick={toggleHandle}>Toggle</button> */}
          <button onClick={handleStart}>start ref</button>
          <button onClick={handleStop}>end ref</button>
          <h2>
            {/* Current number: {num}, */}
            {/* Plus five: {numPlusFive} */}
            {/* usecallback component */}
            {/* <SomeComp someFunc={plusFive} /> */}
          </h2>
          {/* {toggle && <UseEffect/> } */}
          <UseRef value={count}/> 
          <div className={classes.button_container}>
            {/* <button
              onClick={() => {
                setNum(num + 1);
              }}
            >
              Update Number{" "}
            </button> */}
         
            {/* <button onClick={lightHandle}> Toggle the light </button> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UseMemo;
