import React, {useState, useEffect} from 'react'
import { useFetchPoke } from '../../hooks/useFetchPoke'

interface GetElementsNecesary {
    info: String;
    load: Boolean;
}

const PokemonCard: React.FC <GetElementsNecesary> = ({ info, load })=>{
    console.log("infooo", load)

    const {data:pokemon, loading } = useFetchPoke(info, load);
    console.log("Pokeekke", pokemon)
    console.log("loading", loading )

    // pokemon?.map((img, id):any => (
    //     console.log(img?.name)
    // ))

    return (
        <div>
            {loading && <h6>Loading...</h6>}

            {/* {
                pokemon?.map(img => (
                    <img key={img?.name} src={img?.sprites?.front_default}/>
                ))
            } */}
         
         <h2>{info}</h2>
        </div>
    )
 
}

export default PokemonCard