import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react'
import styled from 'styled-components';
import Swal from 'sweetalert2';

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-image: linear-gradient(110deg,#00c8ff,#00b4e6 19%,#00a0cc 27%,#008cb3 34%,#0080a3 41%,#0080a3 47%,#0080a3 53%,#0080a3 59%,#008ca8 66%,#009fad 73%,#00b3a7 81%,#02c097);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
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
  border: 0;
  border-radius: 0.2rem;
  padding: 1rem;
  color: #000000;
  background-color: white; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.4),
    4px 0 4px rgba(0, 0, 0, 0.1), -4px 0 4px rgba(0, 0, 0, 0.1);
    margin: 0;
}
button{
  border: 0;
  background-color: #00365c;
  border-radius: 0.2rem;
  padding: 1rem;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.4),
    4px 0 4px rgba(0, 0, 0, 0.1), -4px 0 4px rgba(0, 0, 0, 0.1);
    margin: 0;
    font-size: 1.2rem;
    cursor: pointer;
}
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const FormSimpleSubscribe = () => {

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


  const handleSendComfirmation = async ()=>{
    const data = {email, subject, message}
    await axios.post("/api/sendComfirmation", data)

  }

  const handleSubscribe = async (ev) => {
    ev.preventDefault();
    const data = {
      email,
      verified: false,
    };

    try {
      await axios.post("/api/userBlog", data);
      // Muestra la alerta de SweetAlert 2 en caso de éxito
      Swal.fire({
        icon: 'success',
        title: 'Thanks for subscribing!',
        html: `
        <p>In a few seconds, you will receive an email from me asking you to confirm your newsletter subscription.</p>
        <p>Please open your inbox and confirm your email address to finalize your subscription.</p>
        <p><strong>CHECK YOUR SPAM FOLDER:</strong> If you don't receive any confirmation email, check your spam folder 😅</p>
        <p>The email will come from <strong>juan@negiupp.com</strong></p>
      `,
      });
      handleSendComfirmation()
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
        src="/assets/logofinalpulido-white-3.png" // nota la barra inclinada al inicio
        alt="Logo"
        width={200}
        height={100}
      />
      <TitleIntroduction>
        <h1>
          This Week
          in
          <span> Negiupp</span> <br />
        </h1>
        <p>The latest news directly in your inbox!</p>
      </TitleIntroduction>
      <SubsCribeIntBut>
        <input value={email} onChange={(ev) => setEmail(ev.target.value)} type="email" placeholder="email address" />
        <button onClick={handleSubscribe}>Subscribe Now!</button>
      </SubsCribeIntBut>
      <p>Join 552 readers | 1 email per week | 100% free!</p>
    </ContainerForm>
  )
}

export default FormSimpleSubscribe
