import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import axios from 'axios';
import '../ReceivedComplaint/ReceivedComplaint.css'


function ReceivedComplaint() {
  
  

 




  return (
    <Container>
      <Row>
        
          <Col lg={4} md={6} sm={12} key={index}>

            <div className='ReciveComplain'>

              <Card className='complaint'>
            {/* <input type="checkbox" className='success' id='checkBox'/> */}

                <Card.Body>
                  <Card.Text>Name: </Card.Text>
                  <Card.Text>
                    Roll No:
                  </Card.Text>
                  <Card.Text>
                    Email:  
                  </Card.Text>
                  <Card.Text>
                    Mobile No: 
                  </Card.Text>
                  <Card.Text>
                    Complain: 
                  </Card.Text>
                  <Button 
                  >Resolved</Button>
                </Card.Body>
              </Card>

            </div>
          </Col>

       
      </Row>
    </Container>
  )
}

export default ReceivedComplaint


