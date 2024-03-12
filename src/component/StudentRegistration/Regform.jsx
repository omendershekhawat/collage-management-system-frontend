import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../StudentRegistration/Regform.css'



function FormExample() {
    // const { serverLink } = useContext(context)
    // const navigate = useNavigate()
    // const [validated, setValidated] = useState(false);
    // const [firstName, setFirstname] = useState('');
    // const [lastName, setLastname] = useState('');
    // const [userName, setUsername] = useState('');
    // const [fathersName, setFathername] = useState('');
    // const [mothersName, setMothername] = useState('');
    // const [phoneNo, setPhoneNo] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    


    



    return (
        <>
            <div className='container'>
                <div className="hadding">
                    <h1>COLLEGE REGISTRATION FORM</h1>
                    <h6>Enter your registration information below</h6>
                </div>
            </div>

            <Form noValidate  >
                <div className="container">
                    <Row className=" mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label className='emploreg'>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"    
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='emploreg'>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"  
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validation">
                            <Form.Label className='emploreg'>UserName </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Create a username"  
                            />
                            
                        </Form.Group>
                       
                    </Row>
                    <Row className=" mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label className='emploreg'>Father's Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Father's name"  />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='emploreg'>Mother's name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Mother's name"
                                 />

                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validation">
                            <Form.Label className='emploreg'>Phone Number </Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Enter your phone no."
                                   />
                        </Form.Group>

                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom06">
                            <Form.Label className='emploreg'>Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter your Email"  />
                            
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom07">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="Password" placeholder="Create your Password"
                                required />
                            <Form.Control.Feedback type="invalid">

                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                                id='CheckCondition'
                            />
                        </Form.Group>
                    </Row>

                    <Button type="submit" >Submit</Button>
                </div>


            </Form>
        </>
    );
}

export default FormExample;