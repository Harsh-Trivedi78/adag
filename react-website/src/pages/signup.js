import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../signup.css'; // Import the CSS file

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  }

  const handleError = (error) => {
    toast.error(error);
  };

  const handleSuccess = (message) => {
    toast.success(message);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      handleError('Name, email, and password are required');
      return; // Exit early if fields are empty
    }
    try {
      const url = `http://localhost:8080/auth/signup`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupInfo)
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError(err);
    }
  }

  return (
    <div className="container55">
      <div className="signup-box">
        <h1 className="signup-title">Signup</h1>
        <form onSubmit={handleSignup}>
          <label htmlFor='name' className="input-label">Name</label>
          <input
            onChange={handleChange}
            type='text'
            name='name'
            autoFocus
            placeholder='Enter your name...'
            value={signupInfo.name}
            className="input-field"
          />
          <label htmlFor='email' className="input-label">Email</label>
          <input
            onChange={handleChange}
            type='email'
            name='email'
            placeholder='Enter your email...'
            value={signupInfo.email}
            className="input-field"
          />
          <label htmlFor='password' className="input-label">Password</label>
          <input
            onChange={handleChange}
            type='password'
            name='password'
            placeholder='Enter your password...'
            value={signupInfo.password}
            className="input-field"
          />
          <button type='submit' className="signup-button">Signup</button>
          <p className="signup-footer">
            Already have an account? <Link to="/login" className="link">Login</Link>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  )
}

export default Signup;
