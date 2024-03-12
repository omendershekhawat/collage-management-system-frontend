import React, { useState, useContext, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import{ Row,Col,Container}from 'react-bootstrap';
import '../Notice/Notice.css'
import axios from "axios"




const NoticeForm = () => {
    


    

    return (
        <>
            <div className='heder'>
                <h1>Tagore P.G College Gudha Gorji </h1>
                <h2>NOTICE</h2>
                <Form >
                    <Form.Group controlId="formContent">
                        <Container>
                        <Row>
                            <Col lg={2}></Col>
                            <Col lg={4}>
                            <Form.Label className='sub'>Subject</Form.Label>
                        <Form.Control
                        className='noticePage'
                            required
                            type='text'
                             />
                            </Col>
                            <Col lg={4}>
                            <Form.Label className='sub'>Date</Form.Label>
                        <Form.Control
                        className='noticePage'
                            required
                            type='text'
                          />
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                        </Container>
                       
                      
                        
                        <Form.Control
                            className='textArea'
                            as="textarea"
                            // rows={3}
                            placeholder="Enter notice content"
                            />
                        <div className="photto">
                            <Form.Control
                                required
                                type="file"
                                />
                        </div>
                        <div className="btn2">
                            <Button 
                                type='submit'>Send</Button>
                        </div>
                    </Form.Group>

                </Form>
            </div>
        </>
    );
};

export default NoticeForm;
