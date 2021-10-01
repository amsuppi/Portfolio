import React, {useState, useEffect} from 'react'
import { Card, Button } from 'react-bootstrap'
import { getInfo } from '../../Helpers/getInfo'
import { useFetchPoke } from '../../hooks/useFetchPoke'

const PokemonCard = ({ info })=>{
    console.log(info)
    const {data, loading } = useFetchPoke( info );

    return (
        <div>
            {/* {loading ? 'cargando' : "Listo"} */}
         <img src={data.sprites?.back_female}/>
         <h2>{data.name}</h2>
        </div>
    )
 
}

export default PokemonCard