import React, {useState, useEffect} from 'react'
import { Card, Button } from 'react-bootstrap'
import { getInfo } from '../../Helpers/getInfo'
import { useFetchPoke } from '../../hooks/useFetchPoke'

const PokemonCard = ({ info })=>{
    console.log(info)
    const {data:pokemon, loading } = useFetchPoke( info );

    console.log(pokemon)

    return (
        <div>
            {loading && <h6>Loading...</h6>}

            {
                pokemon.map(img => (
                    <img key={img.name} src={img.sprites?.front_default}/>
                ))
            }
         
         <h2>{info}</h2>
        </div>
    )
 
}

export default PokemonCard