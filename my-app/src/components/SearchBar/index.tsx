import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';

interface GetSetersFromInput {
    setInfo: Function;
    setLoad: Function;
}

const SearchBar: React.FC<GetSetersFromInput> = ({ setInfo, setLoad }) => {
    console.log("Seters", typeof setInfo, typeof setLoad)
    const [value, setValue] = useState<string>('');
    const [load] = useState<boolean>(true);

    const HandlerClick = (e) => {
        e.preventDefault();
        console.log(value)

        if(value.length > 2 ){
            setInfo(value) 
            setLoad(load) 
        }else{
            setInfo("Pokemon")
        }

    }

    function HandleChange(e) {
        setValue(e.target.value);
    }

    return (
        <>
    <Form className="search-form" onSubmit={ HandlerClick } >
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control 
                type="text" 
                placeholder="Enter your pokemon" 
                value={value} 
                onChange ={HandleChange}/>
            <Form.Control type="submit"/>
        </Form.Group>
    </Form>
    </>
    )

}


export default SearchBar;