import { useState, useEffect } from "react"
import { getInfo } from "../Helpers/getInfo";

export const useFetchPoke = ( info )=>{
    const [state, setState] = useState({
        data:[],
        loading: true
    });

     useEffect(()=>{
        getInfo(info).then(
            poke => 
            setTimeout(()=>{
                setState({
                    data:[poke],
                    loading: false
                })
            }, 3000)
        )
    }, [info])
    
    return state
}
