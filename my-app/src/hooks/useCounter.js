import React, { useState } from "react";

const useCounter = () =>{
    const [state, setState] = useState(1);

    const stateIncrement = () => {
        setState(state + 1)
    }

    const stateDecrement = () => {
        setState(state - 1)
    }
    return {
        state,
        stateIncrement,
        stateDecrement,
    }
}

export default useCounter;