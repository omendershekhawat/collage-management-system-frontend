import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../EmployeeLogin/Employeelogin.css";
import { context } from "../../App";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function StudentLogin() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [passShow, setPassShow] = useState(false);
  const [keepLogged, setKeepLogged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { serverLink } = useContext(context);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    let response = {};
    try {
      await axios
        .post(`${serverLink}/auth/student/login`, credentials)
        .then((res) => {
          response = res;
        })
        .catch((error) => {
          response = error.response;
        });
      if (response.status === 200) {
        toast.success(response.message);
        const tokenData = response.data;
        localStorage.setItem("studentData", JSON.stringify(tokenData));
        navigate("/student-panel");
      } else if (response.status >= 400 && response.status <= 499) {
        toast.error("Login failed");
        const errors = response?.data?.errors;
        if (typeof errors === "string") toast.error(errors);
        else handleErrors(errors);
        toast.success("sssss");
      } else if (response.status >= 500) {
        toast.error("Internal Server Error");
      }
    } catch (error) {
      console.log("error", error);
    }
    setLoading(false);
  };

  const handleErrors = (errors) => {
    if (Array.isArray(errors)) {
      errors.map((e) => {
        setErrors({ ...errors, [`${e.path}`]: e.msg });
      });
    } else {
      console.log("Errors is not an array");
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      const err = errors;
      delete err[e.target.name];
      setErrors(err);
    }
  };

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="Adminreg pt-2">
            <h3>Student Login Form</h3>
          </div>
        </div>

        <Form noValidate>
          <div className="container">
            <Row className="mb-3">
              <Form.Group as={Col} md="7" controlId="validationCustom01">
                <Form.Label>Email </Form.Label>
                <Form.Control
                  required
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-danger mx-3">{errors.email}</p>
                )}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Group
                as={Col}
                md="7"
                controlId="validationCustom02"
                className="Input"
              >
                <Form.Control
                  className="passInput"
                  type={!passShow ? "password" : "text"}
                  placeholder="Enter your Password"
                  required
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                />
                <div className="eyeicon" onClick={() => setPassShow(!passShow)}>
                  {!passShow ? "Show" : "Hide"}
                </div>
              </Form.Group>
              {errors.password && (
                <p className="text-danger mx-3">{errors.password}</p>
              )}
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Keep me logged in"
                value={keepLogged}
                name=""
                onChange={() => setKeepLogged(!keepLogged)}
                feedback="Keep logged"
                feedbackType="invalid"
              />
            </Form.Group>
            <div className="employloginbutton">
              <Button type="submit" onClick={handleLogin}>
                {loading ? "Logging-in" : "Submit"}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}

export default StudentLogin;
