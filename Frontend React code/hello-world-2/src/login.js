
import { useState } from "react";
import axios from "axios";
import "./App.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function attemptLogin(event) {
    event.preventDefault();

    axios
      .post("http://localhost:8080/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        setErrorMessage("");

        localStorage.setItem("token", response.data.token);
        localStorage.setItem(
          "user",
          JSON.stringify({
            fullname: email.split("@")[0],
            email: email,  // Save the email here as well
          })
        );

        navigate("/Home");
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          if (error.response.data.errors) {
            setErrorMessage(Object.values(error.response.data.errors).join(" "));
          } else if (error.response.data.message) {
            setErrorMessage(error.response.data.message);
          } else {
            setErrorMessage("Failed to login user. Please contact admin.");
          }
        } else {
          setErrorMessage("Server not responding. Try again later.");
        }

        setPassword("");
      });
  }

  return (
    <div className="img d-flex justify-content-center align-items-center min-vh-100">
      <div id="cards" className="card shadow-lg login-card">
        <div className="card-body">
          <h2 className="text-center" style={{ color: "rgb(225,0,0)" }}>
            <b>Login</b>
          </h2>

          {errorMessage && (
            <div className="alert alert-danger text-center mt-3">
              {errorMessage}
            </div>
          )}

          <form onSubmit={attemptLogin} className="mt-4">
            <div className="mb-3">
              <label>
                <b>Email</b>
              </label>
              <input
                type="email"
                className="form-control place"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label>
                <b>Password</b>
              </label>
              <input
                type="password"
                className="form-control place"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="button "
                style={{ width: "300px", marginRight: "65px" }}
              >
                Login
              </button>
            </div>
          </form>

          <hr />

          <div className="text-center mt-3">
            <p style={{ color: "#333" }}>
              Don’t have an account? <br></br>
              <a href="/register" className="no-underline-link">
                <b style={{ color: "red" }}>Sign Up</b>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
