import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import PokemonCard from "./components/PokemonCard";

const PokemonApp = ()=>{
    const [info, setInfo] = useState('');

    return(
        <>
            <SearchBar setInfo = {setInfo}/>
            <PokemonCard info={info}/>
        </>
    )
}

export default PokemonApp;
