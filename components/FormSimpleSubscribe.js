import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react'
import styled from 'styled-components';
import Swal from 'sweetalert2';

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background:#ffffff;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  width: 100%;
  height: 100%;
  img{
    width: 6rem;
    margin: 0 auto;
  }
`;

const TitleIntroduction = styled.div`

  h1 {
    margin-bottom: 1.5rem;
color: #000000;
  }
  span{
    color: #f96e04;
    
  }
  p{
    color: #000000;
    opacity: 0.7;
    font-weight: 300;
  }
`;

const SubsCribeIntBut = styled.div`
display: flex;
gap: 1rem;
flex-direction: column;
justify-content: center;
input {
  text-align: start;
  font-size: 1.2rem;
  border: none;
  border-radius: 0.75rem;
  padding: 1rem;
  color: #000000;
  background-color: white; 
 border: 2px solid transparent;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    margin: 0;
    &:focus-visible {
 outline:none; /* Cambia el color del borde cuando el input está en focus */
 border: 2px solid #f96e04;
}
}
button{
  border: 0;
  background: #f96e04;
  border-radius: 0.75rem;
  padding: 1rem;
  color: #fff;
    border: 1px solid #f96e04;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    margin: 0;
    font-size: 1.2rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
     &:hover {
      background: #ffffff;
      color: #f96e04;
      border: 1px solid #f96e04;
    }
}
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const DetailEngagment = styled.p`
color: #f96e04;

`

const FormSimpleSubscribe = () => {

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

console.log(message)
  const handleSendComfirmation = async (userId) => {
    const data = { email, subject, message, userId }
    await axios.post("/api/sendComfirmation", data)

  }

  const handleSubscribe = async (ev) => {
    ev.preventDefault();
    const data = {
      email,
      verified: false,
    };

    try {
      const response = await axios.post("/api/userBlog", data);
      const userId = response.data._id;
      // Muestra la alerta de SweetAlert 2 en caso de éxito
      Swal.fire({
        icon: 'success',
        title: 'Thanks for subscribing!',
        html: `
        <p>In a few seconds, you will receive an email from me asking you to confirm your newsletter subscription.</p>
        <p>Please open your inbox and confirm your email address to finalize your subscription.</p>
        <p><strong>CHECK YOUR SPAM FOLDER:</strong> If you don't receive any confirmation email, check your spam folder 😅</p>
        <p>The email will come from <strong>juan.se.suarez.ra@gmail.com</strong></p>
      `,
      });
      handleSendComfirmation(userId)
      // Limpiar el input después de hacer clic en "OK"
      setEmail("");

    } catch (error) {
      console.error('Error during subscription:', error);
      // Muestra la alerta de SweetAlert 2 en caso de error
      Swal.fire({
        icon: 'error',
        title: 'Subscription Failed',
        text: 'It seems like you have already subscribed with this email address. Please try again with another email address.',
      });
    }
  };

  return (
    <ContainerForm>
      <Image
        src="/assets/logofinalpulido-black-3.png" // nota la barra inclinada al inicio
        alt="Logo"
        width={200}
        height={100}
      />
      <TitleIntroduction>
        <h1>
          This Week
          in
          <span> negiupp</span> <br />
        </h1>
        <p>The latest news directly in your inbox!</p>
      </TitleIntroduction>
      <SubsCribeIntBut>
        <input value={email} onChange={(ev) => setEmail(ev.target.value)} type="email" placeholder="email address" />
        <button onClick={handleSubscribe}>Subscribe Now!</button>
      </SubsCribeIntBut>
      <DetailEngagment>Join 552 readers | 1 email per week | 100% free!</DetailEngagment>
    </ContainerForm>
  )
}

export default FormSimpleSubscribe
