import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react'
import styled from 'styled-components'
import Swal from 'sweetalert2';
const PrincipalContainer = styled.div`
     background-image: linear-gradient(110deg,#00c8ff,#00b4e6 19%,#00a0cc 27%,#008cb3 34%,#0080a3 41%,#0080a3 47%,#0080a3 53%,#0080a3 59%,#008ca8 66%,#009fad 73%,#00b3a7 81%,#02c097);
    margin: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 0.2rem;
    color: white;
`;
const Title = styled.p`
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
  border-radius: 0.2rem;
  padding: 1rem;
  color: #000000;
  background-color: white; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.4),
    4px 0 4px rgba(0, 0, 0, 0.1), -4px 0 4px rgba(0, 0, 0, 0.1);
  margin: 0;
  width: 100%;

  @media screen and (min-width: 600px) {
    width: 60%;
  }
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
  width: 100%;
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
  margin: 0 ;
}
.name{
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
span{
    color: #f1efe6;
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
        <Title>Don&apos;t miss the next eamil!</Title>
      <InpBut>
      <input value={email} onChange={(ev) => setEmail(ev.target.value)} type="email" placeholder="email address" />
        <button onClick={handleSubscribe}>Subscribe Now!</button>
      </InpBut>
      <div>


        <Engament><span>“</span> If you are not signed-up, you are missing out <span>”</span></Engament>
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
