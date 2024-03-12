import React, { useState, useEffect, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import '../AllStdRecord/AllStdRecord.css'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios';
import { Link } from 'react-router-dom';





function AllStdRecord() {
  

    return (
        <>
            <div className="Alldetails">
                <Container>
                    <Row>
                        <Col className='cols' lg={2}></Col>
                        <Col className='cols' lg={8}>
                            <Form.Group md="4" >
                                <Form.Label>Select Class</Form.Label>
                                <Form.Select aria-label="Default select example" >
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

                               
                                        <Table striped bordered hover className='StdClass'>
                                            <thead>
                                                <tr>
                                                    <th>S.no</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Phone no</th>
                                                    <th>Class</th>
                                                    <th>Details</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                               
                                                    <tr >
                                                        <td>1</td>
                                                        <td>Firstname</td>
                                                        <td>Lastname</td>
                                                        <td>Phone</td>
                                                        <td>Course</td>
                                                        <td className='MoreDetails'>
                                                            {/* <Link to={`/ShowStdDetail/${student._id}`}>Show Details</Link> */}
                                                        </td>
                                                    </tr>
                                               
                                            </tbody>
                                        </Table>
                                  

                            </Form.Group>
                        </Col>
                        <Col className='cols' lg={2}></Col>

                    </Row>
                </Container>
            </div>

        </>
    )
}

export default AllStdRecord






