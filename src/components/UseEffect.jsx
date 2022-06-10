import React, { useEffect } from "react";

function UseEffect() {
//    useeffect(callback)
useEffect(()=>{
    console.log("mounted");
})
//    useeffect(callback,[])
//    useeffect(callback,[deps])


    
    return ( 
        <React.Fragment>
            <div>Hello ae</div>
        </React.Fragment>
     );
}

export default UseEffect;