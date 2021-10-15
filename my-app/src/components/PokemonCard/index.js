import React, {useState, useEffect} from 'react'
import { Card, Button } from 'react-bootstrap'
import { getInfo } from '../../Helpers/getInfo'
import { useFetchPoke } from '../../hooks/useFetchPoke'
import useUpladStorage from '../../hooks/useUploadStorage'

const PokemonCard = ({ info })=>{
    console.log("infooo", info)
    const {data:pokemon, loading } = useFetchPoke( info );
    useUpladStorage(info)
    
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