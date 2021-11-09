import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import PokemonCard from "./components/PokemonCard";

const PokemonApp = ()=>{
    const [info, setInfo] = useState<string>('butterfree');
    const [load, setLoad] = useState<boolean>(false);

    return(
        <div className="container">
            <h1>Search Your Pokemon</h1>
            <SearchBar setInfo = {setInfo} setLoad = {setLoad}/>
            <PokemonCard info={info} load={load}/>
        </div>
    )

}


export default PokemonApp;