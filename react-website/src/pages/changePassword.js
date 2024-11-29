import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:8080/auth/changePassword', { email }, { withCredentials: true })
          .then(res => {
              if (res.data.message === "Password change email sent successfully") {
                  alert("Check your email for the password reset link!");
                  navigate('/login'); // Navigate to login after showing alert
              } else {
                  alert(res.data.message); // Show error message from server
              }
          }).catch(err => {
              console.log(err);
              alert("An error occurred. Please try again."); // Show a user-friendly error
          });
  }
  

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h4>Forgot Password</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0" disabled={loading}>
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                    {message && <div className="mt-3 text-danger">{message}</div>}
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
