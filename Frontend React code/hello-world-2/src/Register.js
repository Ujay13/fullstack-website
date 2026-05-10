
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./App.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();

    if (password !== passwordConf) {
      setErrorMessage("Passwords do not match");
      return;
    }

    const user = { fullname: name, email, password };

    axios
      .post("http://localhost:8080/api/register", user)
      .then((response) => {
        if (response.data.status === "success") {
          setErrorMessage("");
          navigate("/login");
        } else {
          setErrorMessage(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(
          error.response?.data?.message || "Failed to connect to API"
        );
      });
  };

  return (
    <div className="img d-flex justify-content-center align-items-center min-vh-100">
      <div
        id="card"
        className="card shadow-lg register-card"
      >
        <div id="table">
          <h3 className="card-title text-center mb-4 mr-5" style={{color:'rgb(225,0,0)'}} >
            <b>Sign Up</b>
          </h3>

          {errorMessage && (
            <div className="alert alert-danger text-center">{errorMessage}</div>
          )}

          <form onSubmit={registerUser}>
            <div className="form-group mb-3">
              <label><b>Enter User Name</b></label>
              <input
                type="text"
                className="form-control place"
                value={name}
                onInput={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label><b>Enter Your Email</b></label>
              <input
                type="email"
                className="form-control place"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label><b>Enter Your Password</b></label>
              <input
                type="password"
                className="form-control place"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label><b>Confirm Your Password</b></label>
              <input
                type="password"
                className="form-control place"
                value={passwordConf}
                onInput={(e) => setPasswordConf(e.target.value)}
                required
              />
            </div>

            <div className="text-center mt-4">
              <button className="button " type="submit" style={{width:'300px',marginRight:'65px'}}>
                Sign Up
              </button>
            </div>
          </form>

          <hr />

          <div className="text-center mt-3">
            <h6>Already have an account?</h6>
            <Link to="/login" className="no-underline-link" style={{marginRight:'130px'}}>
              <b id="login" style={{ color: "red" }}>
                Login
              </b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
