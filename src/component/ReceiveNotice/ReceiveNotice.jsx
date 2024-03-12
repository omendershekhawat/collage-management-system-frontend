import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';

import '../ReceiveNotice/ReceiveNotice.css'
import axios from 'axios';

function ReceiveNotice() {
   

   

   

    return (
        <Container>
            <div className='notice-box'>
                <Container>
                <Row>
                <Col lg={4} md={6} sm={12}>
                            <div className='notice-recieve' key={index}>
                               
                                   
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Body>
                                            <Card.Text>Send Date : </Card.Text>
                                                <Card.Title>Subject : </Card.Title>
                                                <Card.Text>
                                                 content:   
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        
                                   
                            </div>
                            </Col>
                     
                  
                  </Row>
                </Container>
            </div>

        </Container>
    );
}

export default ReceiveNotice;