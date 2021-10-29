import React from "react";
import Catalog from "./components/Catalog";

const PokeCatalog = ({img, texto})=>{

    //Subir la url de la imagen y el titulo al local host
    //traerlo y añadirlo en la carta
    //se tiene que ir creando una carta cada vez que se suba una nueva

    return (
        <div className="catalog">
        <h2> Poke Catalog</h2>
        <Catalog/>
        </div>
    )
}

export default PokeCatalog;