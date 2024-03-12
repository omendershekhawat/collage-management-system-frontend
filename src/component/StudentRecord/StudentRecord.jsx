import React from 'react'
import '../StudentRecord/StudentRecord.css'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useContext } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



function StudentRecord() {
    // const { serverLink } = useContext(context)
    // const [Firstname, setFirstname] = useState('')
    // const [Lastname, setLastname] = useState('')
    // const [Dob, setDob] = useState('')
    // const [Phone, setPhone] = useState('')
    // const [Fathername, setFathername] = useState('')
    // const [Mothername, setMothername] = useState('')
    // const [Email, setEmail] = useState('')
    // const [Course, setCourse] = useState('')
    // const [Photo, setPhoto] = useState('')
    // const [Gender, setGender] = useState('')
    // const [ParentNo, setParentNo] = useState('')
    // const [Idproof, setIdproof] = useState('')
    // const [LocalAddress, setLocalAddress] = useState('')
    // const [PermanentAddress, setPermanentAddress] = useState('')
    // const [RegistrationDate, setRegistrationDate] = useState('')
    // const [City, setCity] = useState('')
    // const [State, setState] = useState('')
    // const [PinCode, setPinCode] = useState('')
    // const [DataAdded, setDataAdded] = useState(false)
    // const [validated, setValidated] = useState(false);



    return (
        <>
            <div className="student-form">
                <h2>STUDENT FORM</h2>
                <Container>
                    <Form noValidate >
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label className='std'>First name :</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                   // defaultValue="Mark"
                                />
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='std'>Last name :</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                    />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='std'>D.O.B :</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                    placeholder="Date of Birth"
                                   />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='std'>Father's name :</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Father's name"
                                   />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='std'>Mother's name :</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Mother's name"
                                   />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='std'>Phone No.</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Phone no."
                                  />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='std'>Parents No.</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Parents number"
                                    />
                            </Form.Group>

                            <Form.Group as={Col} md="4">
                                <Form.Label className='std'>Course</Form.Label>
                                <Form.Select md="4" aria-label="Default select example" >
                                    <option >Course</option>
                                    <option value="B.A-1st">B.A-1st</option>
                                    <option value="B.A-2nd">B.A-2nd</option>
                                    <option value="B.A-3rd">B.A-3rd</option>

                                    <option value="B.SC-1st">B.SC-1st</option>
                                    <option value="B.SC-2nd">B.SC-2nd</option>
                                    <option value="B.SC-3rd">B.SC-3rd</option>

                                    <option value="BCA-1st">BCA-1st</option>
                                    <option value="BCA-2nd">BCA-2nd</option>
                                    <option value="BCA-3rd">BCA-3rd</option>

                                    <option value="BBA-1st">BBA-1st</option>
                                    <option value="BBA-2nd">BBA-2nd</option>
                                    <option value="BBA-3rd">BBA-3rd</option>

                                    <option value="M.Sc-1st">M.Sc-1st</option>
                                    <option value="M.Sc-2nd">M.Sc-2nd</option>

                                    <option value="M.A-1st">M.A-1st</option>
                                    <option value="M.A-2nd">M.A-2nd</option>

                                    <option value="M.Com-1st">M.Com-1st</option>
                                    <option value="M.Com-2nd">M.Com-2nd</option>


                                </Form.Select>
                            </Form.Group>


                            <Form.Group as={Col} md="4">
                                <Form.Label htmlFor="" className='std'>Gender</Form.Label>
                                <Form.Select md="4" aria-label="Default select example" 
                                   >
                                    <option >Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">others</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='std'>Local address.</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="local addres"
                                    />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='std'>Permanent address.</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Permanent address"
                                    />
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='std'>Email .</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="Email"
                                    />
                            </Form.Group>
                            <Form.Group as={Col} md="4" >
                                <Form.Label className='std'>Photo</Form.Label>
                                <Form.Control
                                    required
                                    type="File" >
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} md="4" >
                                <Form.Label className='std'>Aadhar Card</Form.Label>
                                <Form.Control
                                    required
                                    type="File"
                                 >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='std'>Registration Date :</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                    placeholder="Date of Birth"
                                     />
                            </Form.Group>



                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom03">
                                <Form.Label className='std'>City</Form.Label>
                                <Form.Control type="text" placeholder="City" required
                                   />
                                
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom04">
                                <Form.Label className='std'>State</Form.Label>
                                <Form.Control type="text" placeholder="State"
                                    required />
                               

                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom05">
                                <Form.Label className='std'>Pin-Code</Form.Label>
                                <Form.Control type="text" placeholder="Pin-Code"
                                    required
                                />
                                
                            </Form.Group>
                        </Row>

                        <Button type="submit" onClick={(e) => {
                            e.preventDefault()
                        }}>Submit form</Button>
                    </Form>

                </Container>
            </div>
        </>
    )
}

export default StudentRecord