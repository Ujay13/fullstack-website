import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Password() {
  const navigate = useNavigate();

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('User not logged in.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage('❌ New password and confirm password do not match.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8080/api/changepassword',
        {
          oldPassword: oldPassword,
          newPassword: newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage('✅ ' + response.data);
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');

      // Redirect to profile after 1 second
      setTimeout(() => {
        navigate('/profile');
      }, 1000);

    } catch (error) {
      if (error.response) {
        setMessage('❌ ' + (error.response.data || 'Error changing password'));
      } else {
        setMessage('⚠️ Server not responding. Try again later.');
      }
    }
  };

  return (
    <div className='img'>
      <div id="cards" className="card PassCard" style={{marginTop:'140px'}} >
        <div id="table">
          <h3>
            <b className="card-title" style={{color:'rgb(225,0,0)'}}>Change Password</b>
          </h3>
          <br />

          <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td><label>Current Password</label></td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="password"
                      className="form-control places"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      required
                    />
                  </td>
                </tr>

                <tr>
                  <td><label>New Password</label></td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="password"
                      className="form-control places"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                  </td>
                </tr>

                <tr>
                  <td><label>Confirm New Password</label></td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="password"
                      className="form-control place"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <br />
            <button className="button"style={{marginLeft:'25px'}} type="submit">
              Save
            </button>
          </form>

          {message && (
            <p
              style={{
                color: message.includes('✅') ? 'green' : 'red',
                marginTop: '10px',
                fontWeight: 'bold',
              }}
            >
              {message}
            </p>
          )}
        </div>
      </div>

      <br />
      <button
        className="Back"
        onClick={() => navigate(-1)}
        style={{ marginLeft: '10px' }}
      >
        Back
      </button>
    </div>
  );
}

export default Password;