import axios from "axios";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Header/header.css";
import Logo from "../Image/logo.jpeg";
import { Container } from "react-bootstrap";
import EmailIcon from "@mui/icons-material/Email";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function Header() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="mainnav">
        <div className="wapper sticky-navbar">
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <div className="back-arrow" onClick={handleGoBack}>
                <ArrowBackIosIcon />
              </div>
              <Navbar.Brand href="#home">
                <img src={Logo} alt="" />
              </Navbar.Brand>
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
                  <span>
                    {" "}
                    <EmailIcon color="dark" />{" "}
                    <a href="mailto:tagore@gmail.com">tagore@gmail.com</a>{" "}
                  </span>
                  <span>
                    {" "}
                    <AddIcCallIcon />
                    <a href="tel:+91123454321">+911234567890</a>
                  </span>
                  <button className="py-1">
                    <Link to="/employee-login">Employee Login</Link>
                  </button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>

      {/* ...............< Second-navbar >.................. */}

      <div className="wapper-sec ">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container className="my-2">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about-us">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/media-gallery">
                  Media
                </Nav.Link>
                <Nav.Link as={Link} to="/contact-us">
                  Contact
                </Nav.Link>
                <Nav.Link as={Link} to="/student-login">
                  Student Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
