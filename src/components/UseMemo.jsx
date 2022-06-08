import React, { useCallback, useEffect, useMemo, useState } from "react";
import SomeComp from "./SomeComp";
import classes from "./UseMemo.module.css";

function UseMemo() {
  const [num, setNum] = useState(0);
  const [light, setLight] = useState(true);
  const [calcNum, setCalcNum] = useState(0);
  // func + 5
  // const plusFive =  (num) => {
  //     console.log("mount plusfive normal");
  //     return num + 5;
  // };
  // func usecallback
  const plusFive = useCallback(() => {
    console.log("mount plusfive callback");
    return num + 5;
  }, [num]);
  // gọi function bth
  const numPlusFive = plusFive(num);
  // gọi function vs dùng usememo hook
  // const numPlusFive = useMemo(()=> plusFive(num),[num])

  const lightHandle = () => {
    console.log("mount light");
    setLight(!light);
  };

  return (
    <React.Fragment>
      <div className={light ? classes.light : classes.dark}>
        <div>
          <h1>Without useMemo</h1>
          <h2>
            Current number: {num},{/* Plus five: {numPlusFive} */}
            {/* usecallback component */}
            <SomeComp someFunc={plusFive} />
          </h2>
          <div className={classes.button_container}>
            <button
              onClick={() => {
                setNum(num + 1);
              }}
            >
              Update Number{" "}
            </button>
            <button onClick={lightHandle}> Toggle the light </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UseMemo;
