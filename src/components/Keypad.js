// Code Keypad Component Here
import React from "react";


function keypadChange(){
    return console.log('Entering password...')
}

function Keypad (){
    return (
        <div>
            <input onChange = {keypadChange} type="password"></input>
        </div>
    )
}

export default Keypad;