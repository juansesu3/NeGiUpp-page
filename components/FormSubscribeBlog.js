import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";
import { signIn, signOut, useSession } from "next-auth/react";
import ColorGoogleIcon from "./icons/ColorGoogleIcon";
import GithubIcon from "./icons/GithubIcon";

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  gap: 0.5rem;
  background-image: linear-gradient(to bottom right, #000000, #131313);
  border: 1px solid #2b2b2b0f;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  border-radius: 1rem;
  padding: 1rem;
  width: 100%;
  height: 100%;
  input {
    max-width: 23rem;
    text-align: center;
    font-size: 1.2rem;
    border: 0;
    border-radius: 0.2rem;
    padding: 1rem;
    color: #fff;
    background: linear-gradient(
      100deg,
      rgb(189 189 189 / 7%),
      rgba(255, 255, 255, 0)
    );
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.4),
      4px 0 4px rgba(0, 0, 0, 0.1), -4px 0 4px rgba(0, 0, 0, 0.1);
  }
`;
const ReCaptchaWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: start;

  @media screen and (max-width: 768px) {
    transform: scale(0.9);
    transform-origin: 0 0;
  }
`;

const DontMiss = styled.p`
  font-size: 1rem;
  width: 19rem;
  margin: 0 auto;
`;

const Separator = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 0.3rem;

`;

const Line = styled.div`
height: 1px;
background-color: white;
width: 15%;
`;
const SignButtonsToSubscribe = styled.button`
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.4),
      4px 0 4px rgba(0, 0, 0, 0.1), -4px 0 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    border: none;
    border-radius: 0.2rem;
    padding: 0.5rem;
    color: gray;
    svg{
      width: 2rem;
      height: 2rem;
    }
    transition:  0.3s ease-in-out;
    &:hover{
      background-color: #4d61fc;
      color: white;
    }
`
const NextToSubscribe = styled.button`
width: 5rem;
padding: 0.5rem 1rem;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
color: white;
background-color: #646464;
border-radius: 0.2rem;
border: none;
transition:  0.3s ease-in-out;
    &:hover{
      background-color: #4d61fc;
      color: white;
    }


`;

const ButtonsInputs = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
margin: 0;

@media screen and (min-width: 500px) {
  margin: 0.5rem 3rem;
  }
 


`


const FormSubscribeBlog = () => {
  const [isHuman, setIsHuman] = useState(false);

  const login = async (provider) => {
    await signIn(provider)
  }


  const handleSubmit = (ev) => {
    ev.preventDefault();
    alert("Congratulations, you are part of the future");
  };

  return (
    <ContainerForm onSubmit={handleSubmit}>
      <DontMiss>
        🎉 Special Bonus 🎉
        <br />
        Subscribe today and gain exclusive access to our free eBook:
        <br />
        <i>&quot;Top 5 Tips to Succeed in Web Development and AI.&quot;</i>
      </DontMiss>
      <ButtonsInputs>

      
      <SignButtonsToSubscribe type="button" onClick={() => login("google")} ><ColorGoogleIcon /> Google</SignButtonsToSubscribe>
      <SignButtonsToSubscribe type="button" onClick={() => login("github")} ><GithubIcon /> GitHub</SignButtonsToSubscribe>
      <Separator>
        <Line /> Or with email and password <Line />
      </Separator>

      <input type="email" placeholder="email address" />
      {/*<input type="email" placeholder="email" />
      <ReCaptchaWrapper>
        <ReCAPTCHA
          sitekey="6LdkUhQoAAAAACk0K9Ex4pnMbkxQOiWiHzCI3Tpy"
          onChange={(value) => {
            setIsHuman(value !== null);
          }}
        />
      </ReCaptchaWrapper>*/}
      <NextToSubscribe type="submit" disabled={!isHuman}>
        Next
      </NextToSubscribe>
      </ButtonsInputs>
    </ContainerForm>
  );
};

export default FormSubscribeBlog;
