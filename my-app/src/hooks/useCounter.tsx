import React, { useState } from "react";

const useCounter = () =>{
    const [state, setState] = useState<number>(1);
    const [load] = useState<boolean>(true);

    const stateIncrement = () => {
        setState(state + 1)
    }

    const stateDecrement = () => {
        setState(state - 1)
    }

    return {
        state,
        load,
        stateIncrement,
        stateDecrement,
    }
}

export default useCounter;