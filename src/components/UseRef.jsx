import React, { forwardRef} from "react";

const UseRef = (props,ref) =>{
    return (  
    <React.Fragment>
        <span>Current Ref : {props.value} </span>
    </React.Fragment>
    );
}



export default forwardRef(UseRef);