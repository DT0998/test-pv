import { useEffect, useState } from "react";

function SomeComp({someFunc}) {
    const [calcNum, setCalcNum] = useState(0);
    useEffect(() => {
       setCalcNum(someFunc());
    }, [someFunc]);
    return (
        <span> Plus five: {calcNum}</span>
      );
}

export default SomeComp;