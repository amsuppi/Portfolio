import React, {useState, useEffect} from 'react'
import { useFetchPoke } from '../../hooks/useFetchPoke'

interface GetElementsNecesary {
    info: string;
    load: boolean;
}

const PokemonCard: React.FC <GetElementsNecesary> = ({ info, load })=>{
   

    const data = {
        info: info,
        load: load
    }

    console.log("infooo", data)

    const {data:pokemon, loading } = useFetchPoke(data);
    console.log("Pokeekke", pokemon)
    console.log("loading", loading )

    pokemon?.map((img:any, id) => (
        console.log(img.name)
    ))

    return (
        <div>
            {loading && <h6>Loading...</h6>}

            {
                pokemon?.map((img:any, id) => (
                    <img key={id} src={img?.sprites?.front_default}/>
                ))
            }
         
         <h2>{info}</h2>
        </div>
    )
 
}

export default PokemonCard