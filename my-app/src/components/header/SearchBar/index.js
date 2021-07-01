import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Form, Button } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'

const SearchBar = ()=>{
    return (
        <Container>
            <Form>
                <Row>
                    <Col>
                    <Form.Control placeholder="City" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="State" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Zip" />
                    </Col>
                    <Col>
                    <Button>
                        <FontAwesomeIcon icon={faSearch}/>
                    </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )

}
export default SearchBar