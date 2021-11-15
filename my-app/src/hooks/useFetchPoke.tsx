import { useState, useEffect } from "react";
import { getInfo } from "../Helpers/getInfo";

interface ResponseObj {
    data: any[];
    loading: boolean;
}

interface Obj {
        info: string | number;
        load: boolean;
}

export const useFetchPoke:any = ( props: Obj ) =>{
    // const { info, load } = props.dataObj;
     console.log("traeme la info pa", props.info)
     console.log("traeme la info pa", props.load)

    const [state, setState] = useState<ResponseObj>({
        data:[],
        loading: true
    });

     useEffect(()=>{
        setState({
            data:[],
            loading: props.load
        })

        getInfo(props.info).then(
            (poke:any) => 
            setTimeout(()=>{
                console.log(poke)
                setState({
                    data:[poke],
                    loading: false
                })
            }, 1200)
        )
    }, [props.info])
    
    return state
}
