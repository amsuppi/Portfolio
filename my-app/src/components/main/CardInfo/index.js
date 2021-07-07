import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const CardInfo = ()=>{
    const key = '3spc-3F32L8ntwDk92OnR5RaibXGi6LYUeVTplI3SUB5PP_m9iQ5Jt9HEVezgoMdOSpylrGhE6evLERC9FBq8I78AlpZTjJcNMc3adQDVLpyp9CZY6Zi1WCh1eM7X3Yx'
    const clientId = 'gNTopG23qqjd5TYA1xDUUQ'

    const [data, setData] = useState({});

        useEffect( () => {
            const laFuncion = async()=>{ var myHeaders = new Headers();
            myHeaders.append("Access-Control-Allow-Origin", "http://localhost:3000");
            myHeaders.append("Authorization", `Bearer ${key}`);
            myHeaders.append("Content-Type", "application/json");
            

            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
            };

            await fetch("https://api.yelp.com/v3/businesses/north-india-restaurant-san-francisco", requestOptions)
            .then(response => response.json())
            .then(result => setData(result.data))
            .catch(error => console.log('error', error));
         
        }
        laFuncion();
            
          });

    
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default CardInfo