import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react'
import styled from 'styled-components'
import Swal from 'sweetalert2';
const PrincipalContainer = styled.div`
  background:#ffffff;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    margin: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 1rem;
    color: white;
`;
const Title = styled.p`
color: #f96e04;
font-weight: 600;
font-size: 1.3rem;
`;

const InpBut = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
input {
  text-align: start;
  font-size: 1.2rem;
  border: 0;
  border-radius: 0.75rem;
  padding: 1rem;
  color: #000000;
  background:#ffffff;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0;
  width: 100%;
   border: 2px solid transparent;
   transition: color 0.3s ease-in-out, background 0.3s ease-in-out, border 0.3s ease-in-out;
    &:focus-visible {
 outline:none; /* Cambia el color del borde cuando el input está en focus */
 border: 2px solid #f96e04;
}
  @media screen and (min-width: 600px) {
    width: 60%;
  }
}
button{
  border: 0;
  background: #f96e04;;
  border-radius: 0.75rem;
  padding: 1rem;
  color: #fff;
 box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border:1px solid #f96e04;
  margin: 0;
  font-size: 1.2rem;
  cursor: pointer;
  width: 100%;
transition: color 0.3s ease-in-out, background 0.3s ease-in-out, border 0.3s ease-in-out;
  &:hover{
    background: #ffffff;
    color: #f96e04;
    border:1px solid #f96e04;
  }
  @media screen and (min-width: 600px) {
    width: 40%;
  }
}
@media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

const ProfileRecom = styled.div`
display: flex;
gap: 1rem;
align-items: center;

img{
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
}

`;
const ProfileInfo = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;
p{
  opacity: 0.5;
  color: #000000;
  margin: 0 ;
  font-weight: 300;
}
.name{
  opacity: 1;
  font-weight: 700;
  font-size: 1.2rem;
}
`;
const Engament = styled.p`
font-size: 1.3rem;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
color: #000;
span{
    color: #f96e04;
    font-family: cursive;
    font-size: 4rem;
    height: 3rem;
    line-height: 1;
    width: 3rem;
}
`;

const DontMissIt = () => {


  const [email, setEmail] = useState("");

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
    <PrincipalContainer>
        <Title>Don&apos;t miss the next email!</Title>
      <InpBut>
      <input value={email} onChange={(ev) => setEmail(ev.target.value)} type="email" placeholder="email address" />
        <button onClick={handleSubscribe}>Subscribe Now!</button>
      </InpBut>
      <div>


        <Engament><span>“</span>The impossible happenss when someone tries <span>”</span></Engament>
        <ProfileRecom>
          <Image src='https://my-page-negiupp.s3.amazonaws.com/1693303076439.jpg' alt='recomendation profile image' width={100} height={100}/>
          <ProfileInfo>
          <p className='name'><i>Juan Suarez</i></p>
          <p className='profesion'>FullStack Developer expert</p>
          </ProfileInfo>
        </ProfileRecom>

      </div>

    </PrincipalContainer>
  )
}

export default DontMissIt
