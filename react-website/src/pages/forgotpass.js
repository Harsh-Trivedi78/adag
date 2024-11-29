import React from 'react';  
import styled from 'styled-components';  
  
const ForgotPasswordContainer = styled.div`  
  background-color: #2F4F7F;  
  display: flex;  
  justify-content: center;  
  align-items: center;  
  height: 100vh;  
`;  
  
const ForgotPasswordBox = styled.div`  
  background-color: #333333;  
  padding: 2rem;  
  border-radius: 8px;  
  width: 300px;  
`;  
  
const Title = styled.h1`  
  color: white;  
  text-align: center;  
`;  
  
const Input = styled.input`  
  width: 100%;  
  padding: 0.5rem;  
  margin-bottom: 1rem;  
  border: none;  
  border-radius: 4px;  
`;  
  
const Button = styled.button`  
  width: 100%;  
  padding: 0.5rem;  
  background-color: #4CAF50;  
  color: white;  
  border: none;  
  border-radius: 4px;  
  cursor: pointer;  
`;  
  
const ForgotPasswordForm = () => {  
  return (  
   <ForgotPasswordContainer>  
    <ForgotPasswordBox>  
      <Title>FORGOT PASSWORD</Title>  
      <p>Please enter your email to reset your password!</p>  
      <Input type="email" placeholder="Email" />  
      <Button>SEND RESET LINK</Button>  
      <p>Remember your password? <a href="#">Log In</a></p>  
    </ForgotPasswordBox>  
   </ForgotPasswordContainer>  
  );  
};  
  
export default ForgotPasswordForm;
