import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const CardInfo = () => {
    const [data, setData] = useState([]);

    async function laFuncion() {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          await fetch("https://pokeapi.co/api/v2/ability/?limit=20&offset=20", requestOptions)
            .then(response => response.json())
            .then(result => setData(result.results))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        laFuncion()
    }, []);


    return (
        <div>
        {data.map(item => (
            <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
          ))}
        </div>
      
    )
}

export default CardInfo