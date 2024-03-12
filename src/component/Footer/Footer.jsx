import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Footer/Footer.css'
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Container, Row , Col } from 'react-bootstrap'




function Footer() {
 
  return (
    <div className="main-footer">
    <Container>
          <Row className='rows' >
            
    
            <Col className='cols' lg={4}  >
              <h2>Tagore P.G College</h2>
    
              <p>Tagore PG College Gudha Gorji, <br />Jhunjhunu is a very popular college  <br />in the state of Rajasthan.It is one of  the <br /> leading colleges  in Arts,Humanities and <br /> Social Scieces,etc.</p>
              
    
            </Col>
           
            <Col className='cols' lg={4}>
             <h2>Contact Us</h2>
             <p>Tagore PG College Gudha Gorji-333022,Jhunjhunu,Rajasthan</p>
             <p> <a href="tel:+91543212345">+91123454321</a></p>
             <p> <a href="tel:+91123454321">+91123454321</a></p>
             <p><a href="mailto:tagore@gmail.com">tagore@gmail.com</a></p>
            
    
            </Col>
            <Col className='cols' lg={4}>
             <h2>Social media</h2>
             <p> <EmailIcon/><a href="mailto:tagore@gmail.com">tagore@gmail.com</a></p>
             <p> <WhatsAppIcon/>
             <a href={`https://wa.me/+911234567890?text=${encodeURIComponent("Hello Sir")}`}>WhatsApp</a></p>
             <p><FacebookIcon/><a href="https://connect.facebook.net?Tagore PG College of Gudha,Jhunjhunu=${encodeURIComponent(Hii)}/">Facebook</a></p>
             <p><InstagramIcon/><a href="https://www.instagram.com/tagoregudha?=${encodeURIComponent(Hii)}/">Instagram</a></p>
             <p> <YouTubeIcon/><a href="https://www.youtube.com/@TagoreGudha" target="_blank">
            YouTube
        </a></p>
           
            </Col>
            
          </Row>
          
        </Container>
    </div>
  )
}

export default Footer