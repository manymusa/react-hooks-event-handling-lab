// Code EyesOnMe Component Here
import React from "react";

function buttonFocus(){
    return console.log("Good!")
}

function buttonBlur(){
    return console.log('Hey! Eyes on me!')
}



function EyesOnMe(){
    return <div>
                <button onFocus={buttonFocus} onBlur={buttonBlur}>"Eyes on me"</button>
         </div>
}

export default EyesOnMe