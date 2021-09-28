import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import PokemonCard from '../PokemonCard';

const SearchBar = ({ setInfo }) => {
    const [value, setValue] = useState('');

    const handlerClick = (e) => {
        e.preventDefault();
        console.log(value)

        value.length > 2 ? setInfo(value) : setInfo("Pokemon")
        
        
    }

    return (
        <>
    <Form onSubmit={ handlerClick } >
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control 
                type="text" 
                placeholder="Enter your pokemon" 
                value={value} 
                onChange ={e => setValue(e.target.value)}/>
            <Form.Control type="submit"/>
        </Form.Group>
    </Form>
    
    <PokemonCard setValue={setValue}/>
    </>
    )
}

export default SearchBar;
