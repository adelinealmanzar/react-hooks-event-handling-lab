import react from "react";

function EyesOnMe() {
    function focusCB() {
        console.log('Good!')
    }

    function blurCB() {
        console.log('Hey! Eyes on me!')
    }

    return <button onFocus={focusCB} onBlur={blurCB}>Eyes on me</button>
}

export default EyesOnMe