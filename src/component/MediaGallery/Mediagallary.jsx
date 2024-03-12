import React, { useContext, useEffect, useState } from 'react';
import '../MediaGallery/Mediagallary.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
// import { context } from '../../App';



function ResponsiveExample() {
  

 


 

  return (
    <>
      <div className="Mediaheading">
        <h1>Media/Gallery</h1>
      </div>
      <hr />
      <Container>
        <Row>
         
            <Col lg={4} md={6} sm={12} >
              <div className='mediaPhotos'>
                
              </div>
            </Col>
        
        </Row>


        <div className='addPhoto'>
        <label htmlFor="Photo">Photo :</label>
        <input type="file"  />
        
      </div>
      </Container>
      <div className="Addbtn">
        <button >Add</button>

      </div>
    </>
  );
}

export default ResponsiveExample;