import react from "react";

function Keypad() {
    function changeCb() {
        console.log('Entering password...')
    }

    return <input type='password' onChange={changeCb}/>
}

export default Keypad