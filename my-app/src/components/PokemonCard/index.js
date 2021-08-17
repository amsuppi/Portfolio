import React, {useState} from 'react'
import { Card } from 'react-bootstrap'

const PokemonCard = ({value})=>{
    console.log(`Este es mi valor ${value}`)
    return <h2>{value}</h2>
}

export default PokemonCard