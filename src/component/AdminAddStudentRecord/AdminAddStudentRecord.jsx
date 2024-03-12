import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row , Col } from 'react-bootstrap'
import '../AdminAddStudentRecord/AdminAddStudentRecord.css'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';

export default function AdminAddStudentRecord() {
  return (
    <>
        <div className='student-back'>
          <div className='student'>
            <h5>***Honest self-reflection opens your mind to reprogramming, change ,success and freedom.***</h5>
            <h2>Student-Record</h2>
          </div>        
       
        <div className='lower-box'>
          <Container>
            <Row className="below">
              <Col className="lower" lg={2}>

              </Col>
              <Col className="lower" lg={3}>
                <HowToRegIcon/>
                <h2><Link to='/Attendence'>Attendance</Link></h2>
              </Col>
              <Col className="lower" lg={3}>
                <AssignmentIcon/>
                <h2><Link to='/Result'>Result</Link></h2>
              </Col>
              <Col className="lower" lg={2}>
              </Col>
            </Row>
          </Container>
        </div>
        </div>


    </>

  )
}
