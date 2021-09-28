import React, {useState, useEffect} from 'react'
import { Card, Button } from 'react-bootstrap'

const PokemonCard = ({ info })=>{
    const [pokemon, setPokemon] = useState("")

    async function getInfo(){
        const url = `https://pokeapi.co/api/v2/pokemon/butterfree/`;
        const resp = await fetch(url);
        const data = await resp.json();

        setPokemon(data)
    }

    useEffect(()=> {
        getInfo();  
    }, [])

    return (
        <div>
         <img src={pokemon.sprites?.back_female}/>
         <h2>{pokemon.name}</h2>
        </div>
    )
 
}

export default PokemonCard