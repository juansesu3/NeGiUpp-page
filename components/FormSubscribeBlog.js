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
    font-weight: 600;
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

border-radius: 0.2rem;
border: none;
background-color: #646464;
transition:  0.3s ease-in-out;
    &:hover{
      background-color: #4d61fc;
      color: white;
    }
`;

const BackToSubscribe = styled.button`
width: 5rem;
padding: 0.5rem 1rem;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
color: white;

border-radius: 0.2rem;
border: none;
transition:  0.3s ease-in-out;
background-color: red;
    &:hover{
      background-color: #4d61fc;
      color: white;
    }
`

const ButtonsInputs = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
margin: 0;

@media screen and (min-width: 500px) {
  margin: 0.5rem 3rem;
  }
 


`;

const LoginEmailPassaword = styled.button`
background-color: #4d61fc;
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
    color: white;
    svg{
      width: 2rem;
      height: 2rem;
    }
    transition:  0.3s ease-in-out;
    &:hover{
      background-color: white;
      color: #000000;
    }

`;

const NextBack = styled.div`

display: flex;
justify-content: space-between;

`;

const Invalid = styled.p`
padding: 0.5rem;
color: white;
background-color: red;
border-radius: 0.2rem;

`;

const Question = styled.p`
 color: white;
 cursor: default;
 font-weight: 600;
span{
color: #4d61fc;
opacity: 1;
cursor: pointer;
  
}
`


const FormSubscribeBlog = () => {
  const [isHuman, setIsHuman] = useState(false);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const login = async (provider) => {
    await signIn(provider)
  }
  const handleNextClick = () => {
    setStep((prevStep) => prevStep + 1); // Avanzar al siguiente paso si hay servicios
  };
  const handleBackClick = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log('Data to login with Credentials >>>', { email, password })
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        setError(true);
        console.log(error);
        return;
      }
      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainerForm onSubmit={handleSubmit}>
      {/*
      <DontMiss>
        🎉 Special Bonus 🎉
        <br />
        Subscribe today and gain exclusive access to our free eBook:
        <br />
        <i>&quot;Top 5 Tips to Succeed in Web Development and AI.&quot;</i>
      </DontMiss> */}
      <Question>Haven&apos;t you subscribed?<span> Subscribe</span></Question>
      <ButtonsInputs>
        <SignButtonsToSubscribe type="button" onClick={() => login("google")} ><ColorGoogleIcon /> Google</SignButtonsToSubscribe>
        <SignButtonsToSubscribe type="button" onClick={() => login("github")} ><GithubIcon /> GitHub</SignButtonsToSubscribe>
        <Separator>
          <Line /> Or with email and password <Line />
        </Separator>
        {step === 1 && (
          <input value={email} onChange={(ev) => setEmail(ev.target.value)} type="email" placeholder="email address" />
        )}
        {step === 2 && (
          <input value={password} onChange={(ev) => setPassword(ev.target.value)} type="password" placeholder="password" />
        )}
        {step === 3 && (
          <>
            <ReCaptchaWrapper>
              <ReCAPTCHA
                sitekey="6LdkUhQoAAAAACk0K9Ex4pnMbkxQOiWiHzCI3Tpy"
                onChange={(value) => {
                  setIsHuman(value !== null);
                }}
              />
            </ReCaptchaWrapper>
            <LoginEmailPassaword type="submit" disabled={!isHuman}>
              Sign In
            </LoginEmailPassaword>
            {error && (
              <Invalid className="px-2 bg-red-500 text-white rounded-md">
                Invalid Credentials{" "}
              </Invalid>
            )}
          </>
        )}
        <NextBack>
          {step !== 3 && (
            <NextToSubscribe type="button" onClick={handleNextClick} >
              Next
            </NextToSubscribe>
          )
          }
          {step !== 1 && (
            <BackToSubscribe type="button" onClick={handleBackClick} >
              Back
            </BackToSubscribe>
          )
          }
        </NextBack>
      </ButtonsInputs>
    </ContainerForm>
  );
};

export default FormSubscribeBlog;
