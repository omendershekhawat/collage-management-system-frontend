import React, { useEffect, useState, useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../ShowStudentDetails/ShowStudentDetails.css'
import axios from 'axios';




function ShowStudentDetails() {
    


   


    return (
        <>
            <Container>
                <Form >
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" className='images' >
                            <Form.Label className='stdshow'>Photo</Form.Label>
                            
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label className='stdshow'>First name :</Form.Label>
                            <Form.Control
                   />

                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='stdshow'>Last name :</Form.Label>
                            <Form.Control

                              />
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='stdshow'>Father's name :</Form.Label>
                            <Form.Control

                                 />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='stdshow'>Mother's name :</Form.Label>
                            <Form.Control

                                />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='stdshow'>Phone No.</Form.Label>
                            <Form.Control

                                />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='stdshow'>Parents No.</Form.Label>
                            <Form.Control
                                 />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='stdshow'>D.O.B :</Form.Label>
                            <Form.Control
                               />
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Label className='stdshow'>Course</Form.Label>

                            <Form.Control  />
                        </Form.Group>


                        <Form.Group as={Col} md="4">
                            <Form.Label className='stdshow'>Gender</Form.Label>
                            <Form.Control  />


                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='stdshow'>Local address.</Form.Label>
                            <Form.Control

                                 />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='stdshow'>Permanent address.</Form.Label>
                            <Form.Control

                                 />
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='stdshow'>Email</Form.Label>
                            <Form.Control

                                 />
                        </Form.Group>



                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='stdshow'>Registration Date :</Form.Label>
                            <Form.Control

                              />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom03">
                            <Form.Label className='stdshow'>City</Form.Label>
                            <Form.Control
                                 />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom04">
                            <Form.Label className='stdshow'>State</Form.Label>
                            <Form.Control
                                 />
                        </Form.Group>

                    </Row>
                    <Row className="mb-3">



                        <Form.Group as={Col} md="4" controlId="validationCustom05">
                            <Form.Label className='stdshow'>Pin-Code</Form.Label>
                            <Form.Control
                                />

                        </Form.Group>
                    </Row>
                </Form>


            </Container>

        </>
    )
}

export default ShowStudentDetails