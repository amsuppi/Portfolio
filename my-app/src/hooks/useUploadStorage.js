import React, { useEffect, useState } from "react";
import { getInfo } from "../Helpers/getInfo";


const useUpladStorage = (info)=>{
    const strData = localStorage.getItem('pokemon');
    const objData = JSON.parse(strData);

    const [newArray, setNewArray] = useState([objData]);
    

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
    useEffect(()=>{
        setNewArray(arr => [...arr, key])
    }, [info])

    console.log(newArray)
    localStorage.setItem('pokemon', JSON.stringify(newArray));

    return key

}
export default useUpladStorage;