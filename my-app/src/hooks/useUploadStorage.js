import React, { useEffect, useState } from "react";
import { getInfo } from "../Helpers/getInfo";


const useUpladStorage = (info)=>{
    const [key, setKey] = useState({
        nombre: "",
        imgUrl: ""
    });
    useEffect(()=>{
        getInfo(info).then(
            poke =>{
                setKey({
                    nombre: poke.name,
                    imgUrl: poke.sprites?.front_default
                })
            }
        )
    }, [info])

    console.log(key)

    localStorage.setItem('pokemon', JSON.stringify(key));

    return key

}
export default useUpladStorage;