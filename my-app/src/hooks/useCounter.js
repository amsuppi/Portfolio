import React, { useState } from "react";

const useCounter = () =>{
    const [state, setState] = useState(1);
    const [load, setLoad] = useState(true);

    const stateIncrement = () => {
        setState(state + 1)
        setLoad(true)
    }

    const stateDecrement = () => {
        setState(state - 1)
        setLoad(true)
    }
    console.log(load)
    return {
        state,
        load,
        stateIncrement,
        stateDecrement,
    }
}

export default useCounter;