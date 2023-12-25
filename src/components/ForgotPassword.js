
import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
//import { db } from "../firebase.js";
import { auth, db,firebaseAuthInstance } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import {getAuth, sendSignInLinkToEmail } from "firebase/auth";
//import { auth } from "../firebase.js";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
//import { useNavigate } from "react-router-dom";
// Keyframes for animation
const colorAnimation = keyframes`
  0% { background-color: #f3d8e6; }
  50% { background-color: #dbe6f3; }
  100% { background-color: #f3d8e6; }
`;

// Styled components for styling with animation
const ForgotPasswordContainer = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  animation: ${colorAnimation} 10s infinite; /* Apply animation to create motion */
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`;

const ResetButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

function ForgotPassword() {
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailVal = e.target.email.value;
    sendPasswordResetEmail(firebaseAuthInstance, emailVal)
      .then((data) => {
        alert("Check your email");
        history("/");
      })
      .catch((err) => {
        alert(err.code);
      });
//   };
// const handleSubmit = async(e) => {
//     const emailVal = e.target.email.value;
//     if (!emailVal) {
//       alert("Please enter your email address.");
//       return;
//     }
  
//     sendPasswordResetEmail(auth, emailVal)
//       .then(() => {
//         alert("Password reset email has been sent. Please check your email.");
        
//       })
//       .catch((err) => {
//         if (err.code === "auth/user-not-found") {
//           alert("There is no user corresponding to the given email. Please check the email address.");
//         } else if (err.code === "auth/invalid-email") {
//           alert("Please enter a valid email address.");
//         } else {
//           alert("An error occurred while sending the password reset email. Please try again later.");
//           console.error(err);
//         }
        
//       });
  };
  return (
    <ForgotPasswordContainer>
      <Title>Forgot Password</Title>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Input name="email" /><br/><br/>
        <ResetButton>Reset</ResetButton>
      </Form>
    </ForgotPasswordContainer>
  );
}

export default ForgotPassword;
