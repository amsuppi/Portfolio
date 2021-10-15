import React from "react";
import LocalStorageCard from "./components/LocalStorageCard";

const PokeHistory = ({img, texto})=>{

    //Subir la url de la imagen y el titulo al local host
    //traerlo y añadirlo en la carta
    //se tiene que ir creando una carta cada vez que se suba una nueva

    return (
        <>
        <h2> Poke history</h2>
        <LocalStorageCard />
        </>
    )
}

export default PokeHistory;