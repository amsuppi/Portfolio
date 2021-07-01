import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const CardInfo = ()=>{
    const key = 'KW52Zf3-K8qe_dy38upD-vzHmG9Q48SPA-VAsR5mssOj_L3YV743w4DaiQncWLozm0oENn6NE6ddJGtCobZBGQV7KUyzdLmWzeufz6wNksIDaDUwOuNPrth16bHXYHYx'
    const clientId = 'gNTopG23qqjd5TYA1xDUUQ'

    const [data, setData] = useState({});

    useEffect(()=>{
        fetch("https://api.yelp.com/v3/businesses/north-india-restaurant-san-francisco", {
            method: 'GET',
            mode: 'no-cors',
            headers:{
                'Authorization': `Bearer${key}`,
                'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
    }
    )
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