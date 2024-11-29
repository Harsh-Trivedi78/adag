import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {GoogleLogin} from 'react-google-login'

// import '../App.css'
// Container styles


const clientId = "316197304295-rpp5joramj7pbku5oht3m56t0e41uq6s.apps.googleusercontent.com"
const LoginContainer = styled.div`
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  padding: 2rem; /* Padding for spacing */
`;

// Box styles
const LoginBox = styled.div`
  background-color: #0e1b56;
  padding: 2rem;
  border-radius: 8px;
  width: 100%; /* Full width */
  max-width: 600px; /* Set a max width for a "fat" look */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Shadow for depth */
`;

// Title styles
const Title = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem; /* Increased font size for visibility */
`;

// Input styles
const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem; /* Increased font size for better readability */
`;

// Button styles
const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: background-color 0.3s;
  font-size: 1rem; /* Increased font size for better readability */

  &:hover {
    background-color: #45a049;
  }
`;

// Social login styles
const SocialLogin = styled.div`
  display: flex;
  flex-direction: column; /* Stacked layout for social buttons */
  align-items: flex-end; /* Align buttons to the right */
  margin-top: 1rem;
  color: #0e1b56;
`;

// Social button styles
const SocialButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #db4437; /* Google Red Color */
  color: white;
  padding: 0.6rem 1rem; /* Adjusted padding */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  max-width: 300px; /* Set a max width */
  transition: background-color 0.3s;
  margin-bottom: 1rem;
  font-size: 1rem; /* Increased font size for better readability */

  &:hover {
    background-color: #c13528; /* Darker shade on hover */
  }

  .icon {
    width: 20px; /* Set width for icon */
    height: 20px; /* Set height for icon */
    margin-right: 0.5rem; /* Space between icon and text */
  }
`;

// Toggle button styles
const ToggleButton = styled(Button)`
  background-color: ${(props) => (props.isActive ? '#4caf50' : '#333')};
  margin-right: 0.5rem; /* Spacing between toggle buttons */
`;

// Login Component
function Login() {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const [loginMode, setLoginMode] = useState('User');
  const navigate = useNavigate();


const onSuccess = (res) =>{
  console.log("Login  Success" , res.profileObj);

}
const onFailure = (res) =>{
  console.log("Login Failed" , res.profileObj);
}



  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError('Email and password are required');
    }
    try {
      const url = loginMode === 'Admin'
        ? `http://localhost:8080/auth/login`
        : `http://localhost:8080/auth/login`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
      });
      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;

      if (success) {
        handleSuccess(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);
        setTimeout(() => {
          navigate('/home');
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
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Title>{loginMode} Login</Title>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
          <ToggleButton
            onClick={() => setLoginMode('User')}
            style={{
              backgroundColor: loginMode === 'User' ? '#4caf50' : '#333',
            }}
          >
            User
          </ToggleButton>
          <ToggleButton
            onClick={() => setLoginMode('Admin')}
            style={{
              backgroundColor: loginMode === 'Admin' ? '#4caf50' : '#333',
            }}
          >
            Admin
          </ToggleButton>
        </div>
        <form onSubmit={handleLogin}>
          <Input type="email" name="email" placeholder="Email" value={loginInfo.email} onChange={handleChange} />
          <Input type="password" name="password" placeholder="Password" value={loginInfo.password} onChange={handleChange} />
          <Button type="submit">LOGIN</Button>
        </form>


            <div id='signInButton'>
              <GoogleLogin
              clientId={clientId}
              buttonText="Sign in with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
/>
            </div>
        {/* <SocialLogin>
          <SocialButton>
            <img src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo-thumbnail.png" alt="Google Logo" className="icon" />
            Google
          </SocialButton>
          <SocialButton style={{ backgroundColor: '#3b5998' }}>
            <FontAwesomeIcon icon={faGithub} className="icon" />
            Github
          </SocialButton> */}
          {/* <SocialButton style={{ backgroundColor: '#1DA1F2' }}>
            <FontAwesomeIcon icon={faTwitter} className="icon" />
            Login With Twitter
          </SocialButton> */}
        {/* </SocialLogin> */}
        <p style={{ textAlign: 'center', marginTop: '1rem' }}>
          Don't have an account? <Link to="/sign-up">Sign Up</Link>
        </p>
        <ToastContainer />
      </LoginBox>
    </LoginContainer>
  );
}

export default Login;
