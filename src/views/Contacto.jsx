import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function Contacto() {
    return (
        <Container>
            <Row>
                <Col className='mt-5'>
                    <h1 className='text-center'>Cuentanos, ¿en que te podemos ayudar?</h1>
                    <div className='mt-4 form-custom m-auto'>
                        <InputGroup className="mb-3">
                            <InputGroup.Text >Correo</InputGroup.Text>
                            <Form.Control
                                placeholder="name@example.com"
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Text>Descripción</InputGroup.Text>
                            <Form.Control as="textarea" aria-label="With textarea" />
                        </InputGroup>
                        <div className='w-100 d-flex justify-content-center mt-3'>
                            <Button variant="success">Enviar</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Contacto