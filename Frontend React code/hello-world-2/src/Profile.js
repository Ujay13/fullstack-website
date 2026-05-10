
import { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import './App.css';

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ fullname: "", email: "" });

  // Load user info from localStorage on page load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!storedUser || !token) {
      navigate("/login"); // Redirect to login if not logged in
      return;
    }

    const parsedUser = JSON.parse(storedUser);

    setUser({
      fullname: parsedUser.fullname || "",
      email: parsedUser.email || parsedUser.username || "" // fallback if 'email' missing
    });
  }, [navigate]);

  return (
    <div className="img">
      <Navbar />
      <br />
      <div id="cards" style={{ marginTop:'140px' }} className="card ProfileCard">
        <div id="table">
          <div>
            <h3 style={{ marginLeft: '95px' }}>
              <b className="card-title" style={{ color:'rgb(225,0,0)', marginRight:'20px' }}>User Profile</b>
            </h3>
          </div>
          <br />
          <table>
            <tbody>
              <tr>
                <td><label><b style={{ color:'rgb(225,0,0)' }}>Full Name</b></label></td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    className="form-control places"
                    value={user.fullname}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td><label><b style={{ color:'rgb(225,0,0)' }}>Email</b></label></td>
              </tr>
              <tr>
                <td>
                  <input
                    type="email"
                    className="form-control place"
                    value={user.email}
                    readOnly
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <button className="button" onClick={() => navigate("/password")} style={{ marginLeft:'30px' }} type="submit">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
