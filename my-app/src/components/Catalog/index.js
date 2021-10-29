import React from "react";
import useCounter from "../../hooks/useCounter";
import { useFetchPoke } from "../../hooks/useFetchPoke";
import './styles.scss';

const Catalog = ()=>{
    const {stateIncrement, stateDecrement, state, load} = useCounter();
    const {data:pokemon, loading} = useFetchPoke(state, load)
    console.log("load", load)

    const imgList = pokemon.map(img => (
        <img key={state} src={img.sprites?.front_default}/>
    ))
    
    const nameList = pokemon.map(name => (
        <h2 key = {state}>{name.name}</h2>
    ))

    console.log(pokemon, loading)
    
    
    return(
        <div className="carousel">
        <button onClick={stateDecrement}>{'<'}</button>
        
        {loading && <h6>Loading...</h6>}


        <div className="pokeCard">
            {imgList}
            {nameList}
        </div>
        <button onClick={stateIncrement}>{'>'}</button>
        </div>
    )
}

export default Catalog;