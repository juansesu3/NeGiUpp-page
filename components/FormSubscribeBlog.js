import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";
import { signIn, signOut, useSession } from "next-auth/react";
import ColorGoogleIcon from "./icons/ColorGoogleIcon";
import GithubIcon from "./icons/GithubIcon";
import Swal from "sweetalert2";
import ReactDOM from "react-dom";



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
`;

const LogOut = styled.button`
width: 7rem;
border: none;
padding: 0.2rem 0rem;
margin: 0 auto;
margin-top: 1rem;
display: flex;
justify-content: center;
align-items: center;
gap: 0.5rem;
background-color: red;
color: white;
font-weight: 600;
svg{
  width: 2rem;
  height: 2rem;
}
`;


const FormSubscribeBlog = () => {
  const [isHuman, setIsHuman] = useState(false);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { data: session, status } = useSession();
  //console.log("Data session after sign >>>>", session)
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
    //console.log('Data to login with Credentials >>>', { email, password })
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

  const showSubscriptionPopup = () => {
    Swal.fire({
      title: 'Subscribe to Our Blog',
      html: `
        <!-- Aquí puedes colocar tu formulario de suscripción -->

        <button type="button" class="swal2-confirm swal2-styled" id="google-sign-in-btn">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 48 48"
      >
        <path
          fill="#FFC107"
          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
        ></path>
        <path
          fill="#FF3D00"
          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
        ></path>
        <path
          fill="#4CAF50"
          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
        ></path>
        <path
          fill="#1976D2"
          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
        ></path>
      </svg>
     Google
        </button>
  
        <button type="button" class="swal2-confirm swal2-styled" id="github-sign-in-btn">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
        <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
    </svg>
    GitHub
        </button>
        <p> Or with email and password </p>
      
        <input type="email" placeholder="Enter your email" id="swal-input1" class="swal2-input">
        <input type="password" placeholder="Enter your password" id="swal-input2" class="swal2-input">
        <div id="recaptcha-container"></div>
        <div class="swal2-space"></div> <!-- Espacio entre los campos de entrada y los botones -->
  
      `,
      showCancelButton: true,
      confirmButtonText: 'Subscribe',
      preConfirm: () => {
        // Lógica para procesar los datos del formulario
        const email = Swal.getPopup().querySelector('#swal-input1').value;
        const password = Swal.getPopup().querySelector('#swal-input2').value;

        // Realizar la suscripción o el manejo de los datos según tus necesidades
        //console.log('Email:', email);
        //console.log('Password:', password);
      }
    });
    const recaptchaContainer = document.getElementById('recaptcha-container');
    if (recaptchaContainer) {
      // eslint-disable-next-line react/no-deprecated
      ReactDOM.render(
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPCHA_GOOGLE}
          onChange={(value) => {
            setIsHuman(value !== null);
          }}
          hl="en"
        />,
        recaptchaContainer
      );
    }

    // Configurar los eventos para los botones de inicio de sesión con Google y GitHub
    const googleSignInBtn = document.getElementById('google-sign-in-btn');
    const githubSignInBtn = document.getElementById('github-sign-in-btn');

    googleSignInBtn.addEventListener('click', () => {
      // Lógica para iniciar sesión con Google
      login('google');
      Swal.close(); // Cerrar el pop-up después de iniciar sesión
    });

    githubSignInBtn.addEventListener('click', () => {
      // Lógica para iniciar sesión con GitHub
      login('github');
      Swal.close(); // Cerrar el pop-up después de iniciar sesión
    });
  };

  const logout = async () => {
    
    await signOut();
  };

  return (
    <ContainerForm >

      {session ? (
        <>
 
          <h1>Welcome <br/>to the <br/>NeGiupp blog</h1>
          <h2>{session.user.name}</h2>
          <DontMiss>
            🎉 Congratulations 🎉
            <br />
            for Subscribe today you gain exclusive access to our free eBook:
            <br />
            <i>&quot;Top 5 Tips to Succeed in Web Development and AI.&quot;</i>
          </DontMiss>
          {/*
          <LogOut type="button" onClick={logout}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
          </svg>
            Log Out</LogOut> */}
        </>
      ) : (
        <>
          <Question>Haven&apos;t you subscribed?<span onClick={showSubscriptionPopup}> Subscribe</span></Question>
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
                    sitekey={process.env.NEXT_PUBLIC_RECAPCHA_GOOGLE}
                    onChange={(value) => {
                      setIsHuman(value !== null);
                    }}
                    hl="en"
                  />
                </ReCaptchaWrapper>
                <LoginEmailPassaword type="button" disabled={!isHuman} onClick={handleSubmit}>
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
        </>
      )}

    </ContainerForm>
  );
};

export default FormSubscribeBlog;
