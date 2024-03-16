import React from 'react'
import Form from 'react-bootstrap/Form';
import {Container, Row , Col } from 'react-bootstrap'
import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Ankita from '../Image/Ankita.jpg'
import './ShowDetails.css'


function ShowDetails() {
   
  return (
    <>
      <div className='student-record'>
        <Container>

        <div className='std-rcd'>
        <h1>STUDENT-RECORD</h1>
       </div>

      <div className='img-box'>
          <img src={Ankita} alt="" />
      </div>

           
       <Form noValidate >

      <Row className="mb-3">


        <Form.Group as={Col} md="5" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
          />
     
        </Form.Group>
        <Form.Group as={Col} md="5" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
          />
     
        </Form.Group>
      </Row>
      <Row className="mb-3">


      <Form.Group as={Col} md="5" controlId="validationCustom01">
          <Form.Label>Father's name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            // defaultValue="Bhagirath Mal Saini"
          />
    
      
        </Form.Group>
        <Form.Group as={Col} md="5" controlId="validationCustom02">
          <Form.Label>Mother's name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            // defaultValue="Sushila Devi"
          />
     
        </Form.Group>
      </Row>


      
      <Row className="mb-3">
        <Form.Group as={Col} md="5" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            // defaultValue="Ankita"
          />
     
        </Form.Group>
        <Form.Group as={Col} md="5" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            // defaultValue="Priya"
          />
     
        </Form.Group>
      </Row>    
    </Form>
        </Container>
      </div>
    </>
  
  )
}

export default ShowDetails