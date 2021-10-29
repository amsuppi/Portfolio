import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import PokemonCard from '../PokemonCard';
import './styles.scss';

const SearchBar = ({ setInfo, setLoad }) => {
    const [value, setValue] = useState('');

    const handlerClick = (e) => {
        let load = true;
        e.preventDefault();
        console.log(value)

        if(value.length > 2 ){
            setInfo(value) 
            setLoad(load) 
        }else{
            setInfo("Pokemon")
        }

        
    }

    return (
        <>
    <Form className="search-form" onSubmit={ handlerClick } >
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control 
                type="text" 
                placeholder="Enter your pokemon" 
                value={value} 
                onChange ={e => setValue(e.target.value)}/>
            <Form.Control type="submit"/>
        </Form.Group>
    </Form>
    </>
    )
}

export default SearchBar;
