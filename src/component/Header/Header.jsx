import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Header/header.css'
import Logo from '../Image/logo.jpeg'
import { useState, useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { Link } from 'react-router-dom';
// import { context } from '../../App';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



function Header() {
  const navigate = useNavigate()
  // const adminId = location.pathname.split("/")[2]
  // console.log(localStorage.getItem("adminData"));
  // console.log("isAdminLoggedIn: " + isAdminLoggedIn)
  // console.log("isStudentLoggedIn: " + isStudentLoggedIn)
  
  const handleGoBack = () => {
    navigate(-1);

  };
  return (
    // <>
     
    //         <div className='second-navbar'>
    //           <Navbar expand="lg" className="bg-body-tertiary">
    //             <Container>
    //             <div className="back-arrow" onClick={handleGoBack}>
    //             <ArrowBackIosIcon  color='orange'/>
    //             </div>
    //               <div className="name">
    //                 <div className="hin">
    //                   <h1>Hii!!!</h1>
    //                 </div>
    //                 <div className="eng">
    //                   {/* <h3>{adminName.UserName}</h3> */}
    //                   {/* <h3>{JSON.parse(localStorage.getItem("adminData")).UserName}</h3> */}
    //                 </div>
    //               </div>
    //               <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //               <Navbar.Collapse id="basic-navbar-nav">
    //                 <Nav className="ms-auto">
    //                   <button className='logout' >
    //                     <Link to="/">Logout</Link>
    //                   </button>


    //                 </Nav>
    //               </Navbar.Collapse>
    //             </Container>
    //           </Navbar>
    //         </div>

    //         {/* ...................second-navbar................................ */}
    //         <div className="wapper-sec">
    //           <Navbar expand="lg" className="bg-body-tertiary">
    //             <Container>
    //               {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
    //               <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //               <Navbar.Collapse id="basic-navbar-nav">
    //                 <Nav className="m-auto">
    //                   <Nav.Link href="#home"><Link to='/AdminRecord'>Add-Self-Record</Link></Nav.Link>
    //                   <Nav.Link href="#link"><Link to='/Notice'>Send Notice</Link></Nav.Link>
    //                   <Nav.Link href="#link"><Link to='/ReceiveComplaint'>Complain-Corner</Link></Nav.Link>
    //                   <Nav.Link href="#link"><Link to='/AddStdRecord'>Add StudentRecord</Link></Nav.Link>
    //                   <Nav.Link href="#link"><Link to='/AllStdRecord'>Students Details</Link></Nav.Link>

    //                 </Nav>
    //               </Navbar.Collapse>
    //             </Container>
    //           </Navbar>

    //         </div>
         

    //       <>
    //         <div className='second-navbar'>
    //           <Navbar expand="lg" className="bg-body-tertiary">
    //             <Container>
    //             <div className="back-arrow" onClick={handleGoBack}>
    //             <ArrowBackIosIcon  color='orange'/>
    //             </div>
    //               <div className="name">
    //                 <div className="hin">
    //                   <h1>Hii!!!</h1>
    //                 </div>
    //                 <div className="eng">
    //                   {/* <h3>{JSON.parse(localStorage.getItem("userData")).Username}</h3> */}
    //                 </div>
    //               </div>
    //               <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //               <Navbar.Collapse id="basic-navbar-nav">
    //                 <Nav className="ms-auto">
    //                   <button className='logout'>  <Link to="/" id="log" >Logout</Link></button>

    //                 </Nav>
    //               </Navbar.Collapse>
    //             </Container>
    //           </Navbar>
    //         </div>



    //         {/* ...................second-navbar................................ */}



    //         <div className="wapper-sec">
    //           <Navbar expand="lg" className="bg-body-tertiary">
    //             <Container>
    //               {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
    //               <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //               <Navbar.Collapse id="basic-navbar-nav">
    //                 <Nav className="m-auto">
    //                   <Nav.Link href="#home"><Link to='/stdRecord'>Personal-info</Link></Nav.Link>
    //                   <Nav.Link href="#link">Attendance</Nav.Link>
    //                   <Nav.Link href="#link">Marks</Nav.Link>
    //                   <Nav.Link href="#link"><Link to='/ComBox'>Complaint-box</Link></Nav.Link>
    //                   <Nav.Link href="#link"><Link to='/ReceiveNotice'>Notice</Link></Nav.Link>
    //                 </Nav>
    //               </Navbar.Collapse>
    //             </Container>
    //           </Navbar>

    //         </div>
    //       </>
      

     
     
          <>
          <div className="mainnav">
            <div className="wapper sticky-navbar">
              <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                <div className="back-arrow" onClick={handleGoBack}>
                <ArrowBackIosIcon/>
                </div>
                  <Navbar.Brand href="#home"><img src={Logo} alt="" /></Navbar.Brand>
                  <div className="name">
                    <div className="hin">
                      <h3>टैगोर पी.जी महाविद्यालय,गुढ़ा गोरजी</h3>
                    </div>
                    <div className="eng">
                      <h3>Tagore P.G College,Gudha Gorji</h3>
                    </div>
                  </div>
    
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                      <span> <EmailIcon color='dark' /> <a href="mailto:tagore@gmail.com">tagore@gmail.com</a> </span>
                      <span> <AddIcCallIcon /><a href="tel:+91123454321">+911234567890</a></span>
                      <button><Link to='/adminlog'>Login</Link></button>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
    
          </div>
    
                
             
    
          {/* ...............< Second-navbar >.................. */}
    
    
          <div className="wapper-sec ">
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="m-auto">
                    <Nav.Link href="#link"><Link to='/home'>Home</Link></Nav.Link>
                    <Nav.Link href="#link"><Link to='/about'>About</Link> </Nav.Link>
                    <Nav.Link href="#link"><Link to='/mediagallery'>Media</Link></Nav.Link>
                    <Nav.Link href="#link"><Link to='/contactus'>Contact</Link></Nav.Link>
                    <Nav.Link href="#link"> <Link to='/stdlogin'> Student Login</Link></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
    
        </>
  );
}

export default Header;