import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const CardInfo = () => {
    const [data, setData] = useState([]);
    const [pokemon, setPokemon] = useState({});

    async function laFuncion() {
        const requestOptions = {
            method: 'GET',
          };

             fetch(`https://pokeapi.co/api/v2/pokemon/`, requestOptions)
            .then(response => response.json())
            .then((result) => {
                setData(result.results)
                data.map(item => {
                    fetch(item.url)
                    .then(response => response.json())
                    .then(res => console.log(res));
                })
            })
            .catch(error => console.log('error', error));
          
          
    }

    useEffect(() => {
        laFuncion()
    }, []);


    return (
        <>
            <Card  key="name">
            <Card.Img variant="top" />
            <Card.Body>
                <Card.Title></Card.Title>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </>
      
    )
}

export default CardInfo