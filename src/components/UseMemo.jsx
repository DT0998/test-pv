import React, { useMemo, useState } from "react";
import classes from './UseMemo.module.css'

function UseMemo() {
    const [num, setNum] = useState(0);
    const [light, setLight] = useState(true);
    
    const plusFive =  (num) => {
        console.log("mount plusfive");
        return num + 5;
    };
    const numPlusFive = plusFive(num);
    
    const lightHandle = () => {
        console.log("mount light");
        setLight(!light)
    }


    return (
        <React.Fragment>
            <div className={light ? classes.light : classes.dark}>
                <div>
                    <h1>Without useMemo</h1>
                    <h2>
                        Current number: {num}, Plus five: {numPlusFive}
                    </h2>
                    <div className={classes.button_container}>
                        <button
                            onClick={() => {
                                setNum(num + 1);
                            }}
                        >
                            Update Number{" "}
                        </button>
                        <button
                            onClick={lightHandle}
                        >
                            {" "}
                            Toggle the light{" "}
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}

export default UseMemo;