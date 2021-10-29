import { useState, useEffect } from "react"
import { getInfo } from "../Helpers/getInfo";

export const useFetchPoke = ( info, load )=>{
    const [state, setState] = useState({
        data:[],
        loading: true
    });

     useEffect(()=>{
        setState({
            data:[],
            loading: load
        })

        getInfo(info).then(
            poke => 
            setTimeout(()=>{
                console.log(poke)
                setState({
                    data:[poke],
                    loading: false
                })
            }, 3000)
        )
    }, [info])
    
    return state
}
