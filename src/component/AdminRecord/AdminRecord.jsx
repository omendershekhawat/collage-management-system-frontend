import React from 'react'
import '../AdminRecord/AdminRecord.css'
import Container from 'react-bootstrap/Container';
import { useState, useContext ,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';



function AdminRecord() {
    // const { serverLink } = useContext(context)
    // const [Firstname, setFirstname] = useState('')
    // const [Lastname, setLastname] = useState('')
    // const [Dob, setDob] = useState('')
    // const [Phoneno, setPhoneno] = useState('')
    // const [Fathername, setFathername] = useState('')
    // const [Mothername, setMothername] = useState('')
    // const [Email, setEmail] = useState('')
    // const [Qualification, setQualification] = useState('')
    // const [Subject, setSubject] = useState('')
    // const [Photo, setPhoto] = useState('')
    // const [Idproof, setIdproof] = useState('')
    // const [Signature, setSignature] = useState('')
    // const [Salary, setSalary] = useState('')
    // const [Designation, setDesignation] = useState('')
    // const [LocalAddress, setLocalAddress] = useState('')
    // const [PermanentAddress, setPermanentAddress] = useState('')
    // const [City, setCity] = useState('')
    // const [State, setState] = useState('')
    // const [PinCode, setPinCode] = useState('')
    // const [Time, setTime] = useState('')
    // const [DataAdded, setDataAdded] = useState(false);
    // const [validated, setValidated] = useState(false);


   


    return (
        <>
            <div className="student-form">
                <h2>EMPLOYEE FORM</h2>
                <Container>
                   <Form noValidate >
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label className='emplo'>First name :</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                   />
                               
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='emplo'>Last name :</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                  />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='emplo'>D.O.B :</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                    placeholder="Date of Birth"
                                   />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='emplo'>Father's name :</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Father's name"
                                    />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='emplo'>Mother's name :</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Mother's name"
                                   />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='emplo'>Phone No.</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Phone no."
                                    />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='emplo'>Email .</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="Email"
                                   />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='emplo'>Qualification</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter your qualification"
                                    />
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='emplo'>Subjects:</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Subject you can teach (Enter , seperated value)"
                                   />
                            </Form.Group>

                            <Form.Group as={Col} md="4" >
                                <Form.Label className='emplo'> Photo</Form.Label>
                                <Form.Control
                                    required
                                    type="File"
                                   >
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} md="4" >
                                <Form.Label className='emplo'>Aadhar Card</Form.Label>
                                <Form.Control
                                    required
                                    type="File"
                                   >
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} md="4" >
                                <Form.Label className='emplo'>Signature</Form.Label>
                                <Form.Control
                                    required
                                    type="File"
                                  >
                                </Form.Control>
                            </Form.Group>


                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='emplo'>Salary:</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last drown salary"
                                   />
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='emplo'>Designation (Post):</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="your post"
                                   />
                            </Form.Group>



                            <Form.Group as={Col} md="4">
                                <Form.Label htmlFor="" className='emplo'>Time</Form.Label>
                                <Form.Select md="4" aria-label="Default select example" >
                                    <option>Time</option>
                                    <option value="Half time">Half time</option>
                                    <option value="Full time">Full time</option>
                                    {/* <option value="3"></option> */}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='emplo'>Local address.</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="local addres"
                                   />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Permanent address.</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Permanent address"
                                  />
                            </Form.Group>

                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom03">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="City"  required />
                                <Form.Control.Feedback type="invalid">

                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom04">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="State"
                                    
                                    required />
                                <Form.Control.Feedback type="invalid">

                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom05">
                                <Form.Label>Pin-Code</Form.Label>
                                <Form.Control type="text" placeholder="Pin-Code"
                                    required />
                                <Form.Control.Feedback type="invalid">

                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Button type="submit"
                            
                        >Submit form</Button>
                    </Form>

                </Container>
            </div>
        </>
    )
}

export default AdminRecord