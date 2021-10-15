import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import PokemonCard from "./components/PokemonCard";

const PokemonApp = ()=>{
    const [info, setInfo] = useState('butterfree');

    return(
        <div className="container">
            <h1>Search Your Pokemon</h1>
            <SearchBar setInfo = {setInfo}/>
            <PokemonCard info={info}/>
        </div>
    )
}

export default PokemonApp;
