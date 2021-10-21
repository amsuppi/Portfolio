import React from "react";
import useCounter from "../../hooks/useCounter";
import { useFetchPoke } from "../../hooks/useFetchPoke";

const Catalog = ()=>{
    const {stateIncrement, stateDecrement, state} = useCounter();
    const {data:pokemon, loading} = useFetchPoke(state)

    const imgList = pokemon.map(img => (
        <img key={state} src={img.sprites?.front_default}/>
    ))
    
    const nameList = pokemon.map(name => (
        <h2 key = {state}>{name.name}</h2>
    ))

    console.log(pokemon, loading)
    
    
    return(
        <>
        <button onClick={stateDecrement}>-1</button>
        <div className="PokeCard">
            {imgList}
            {nameList}
        </div>
        <button onClick={stateIncrement}>+1</button>
        </>
    )
}

export default Catalog;