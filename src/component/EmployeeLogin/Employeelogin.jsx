import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import cap from '../Image/cap.png'
import '../EmployeeLogin/Employeelogin.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons"


function FormExample() {
  
    // const serverLink = useContext(context)
 
    const [passShow, setPassShow] = useState(false);
   

 

    return (
        <>


            <div className='main'>
                <div className="container">
                    <div className="Adminreg">
                        <h1>EMPLOYEE LOGIN FORM</h1>
                        <h6>Enter your login information below</h6>
                        <button><Link to='/adminreg'>New Registration</Link></button>
                    </div>
                </div>


                <Form noValidate >
                    <div className="container">
                        <Row className="mb-3">



                            <Form.Group as={Col} md="7" controlId="validationCustom01">
                                <Form.Label>UserName </Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter your usrername"
                                    />
                            </Form.Group>

                        </Row>
                        <Row className="mb-3">


                        <Form.Label>Password</Form.Label>

                            <Form.Group as={Col} md="7" controlId="validationCustom02" className='Input'>
                                <Form.Control className='passInput' type={!passShow ? "password" : "text"}
                                    placeholder="Enter your Password"
                                    required />
                                <div className="eyeicon" onClick={()=> setPassShow(!passShow)}>
                                   {!passShow ? "Show" :"Hide"}
                                </div>
                                
                            </Form.Group>



                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <div className='employloginbutton'>
                            <Button type="submit" >Submit</Button>
                        </div>

                    </div>
                </Form>
            </div >
        </>
    );
}

export default FormExample;