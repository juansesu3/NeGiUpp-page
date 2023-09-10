import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";
import { keyframes } from "styled-components";
import MyThreeComponent from "@/components/MyThreeComponent";
import { useRouter } from "next/router";

const falling = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const fadeOuts = keyframes`
  0% {
    display: flex;
  }
  100% {
    display: none;
    
  }
`;

const ConfettiPiece = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: ${(props) => props.color};
  opacity: ${(props) => Math.random()};
  top: ${(props) => Math.random() * 100}%;
  left: ${(props) => Math.random() * 100}%;
  animation: ${falling} 3s ease-out, ${fadeOuts} 2s ease-out;
  transform: rotate(${(props) => Math.random() * 360}deg);
`;
const colors = ["red", "green", "blue", "yellow", "pink", "orange"];

const ConfettiExplosion = () => {
  return (
    <div>
      {Array.from({ length: 100 }).map((_, index) => (
        <ConfettiPiece key={index} color={colors[index % colors.length]} />
      ))}
    </div>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.2);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.9);
  }
`;

const PrincipalContainer = styled.div`
  height: auto;
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    margin-top: 3.5rem;
  }
`;

const Message = styled.div`
  position: relative;
  max-width: 26rem;
  margin: 0 0.5rem;
  color: #bcbcbc;
  letter-spacing: 0.3px;
  font-size: 18px;
  padding: 1rem;
  text-align: center;
  border-radius: 1rem;
  background-color: #121212;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  ${(props) =>
    props.one &&
    css`
      display: none;
    `}
  ${(props) =>
    props.two &&
    css`
      display: none;
    `}
    ${(props) =>
    props.third &&
    css`
      display: none;
    `}
    h2 {
    margin: 0;
    margin-top: 1rem;
  }
`;
const InputContainer = styled.div`
  input {
    display: flex;

    font-size: 1.2rem;
    text-align: center;
    border: 0;
    border-radius: 0.2rem;
    padding: 1rem;
    width: 19rem;
    outline: none;
    margin: 0 auto;
    margin-top: 0.8rem;
    @media screen and (min-width: 768px) {
      padding: 1rem;
    }
    color: #fff;
    background: linear-gradient(
      100deg,
      rgb(189 189 189 / 7%),
      rgba(255, 255, 255, 0)
    );
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
      /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
      /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
      /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  }
  textarea {
    display: flex;
    font-size: 1.2rem;
    text-align: center;
    border: 0;
    border-radius: 0.2rem;
    padding: 1rem;
    width: 19rem;
    outline: none;
    margin: 0 auto;
    margin-top: 0.8rem;
    @media screen and (min-width: 768px) {
      padding: 1rem;
    }
    color: #fff;
    background: linear-gradient(
      100deg,
      rgb(189 189 189 / 7%),
      rgba(255, 255, 255, 0)
    );
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
      /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
      /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
      /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  }
  label {
    color: #4d61fc;
    font-weight: 500;
  }
`;

const ButtonNext = styled.button`
  border: none;
  margin-top: 2rem;
  padding: 1rem 2rem;
  border-radius: 0.18rem;
  width: 19rem;
  background-color: #4d61fc;
  color: white;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    background-color: #3950ff;
  }
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
`;
const FormMission = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  animation: ${(props) => (props.ready ? fadeOut : fadeIn)} 0.8s forwards;

  ${(props) =>
    props.ready &&
    css`
      animation-fill-mode: forwards;
      animation-iteration-count: 1;
      visibility: hidden; // O puedes usar display: none aquí si no te importa la transición
    `}
`;
const Info = styled.label`
  margin: 0;
  font-size: 15px;
  opacity: 0.8;
  letter-spacing: 0px;
  padding: 0 1rem;
`;

const TitleEnd = styled.h3`
  color: #4d61fc;
`;
const MessageEnd = styled.p``;
const Counter = styled.p`
  font-size: 50px;
  margin: 0;
  color: #4d61fc;
  padding: 1;
`;

const TypingMessage = ({ message, onDone, color }) => {
  const [displayMessage, setDisplayMessage] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < message.length) {
      const timer = setTimeout(() => {
        setDisplayMessage((prev) => prev + message[index]);
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    } else if (onDone) {
      onDone();
    }
  }, [index, message, onDone]);

  return <p style={{ color }}>{displayMessage}</p>;
};

const Start = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageUser, setMessageUser] = useState("");

  const [firstMessageDone, setFirstMessageDone] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [secondMessageDone, setSecondMessageDone] = useState(false);
  const [thridMessageDone, setThirdMessageDone] = useState(false);

  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(true);
  const [third, setThird] = useState(true);

  const [contador, setContador] = useState(10);

  const router = useRouter();

  useEffect(() => {
    setOne(false);
  }, []);

  const handleClick = (ev) => {
    ev.preventDefault();
    setSecondMessageDone(true);
    setShowConfetti(true);

    setTwo(false);
    handleThridMessageDone();
  };
  const handleClickDos = (ev) => {
    ev.preventDefault();
    setThird(false);

    const intervalo = setInterval(() => {
      setContador((prevContador) => prevContador - 1);
    }, 1000);

    // Limpieza: detiene el intervalo cuando el componente se desmonta o el contador llega a 0
    return () => {
      clearInterval(intervalo);
    };
  };
  if (contador === 0) {
    router.push("/proyects");
  }

  const handleFirstMessageDone = () => {
    setFirstMessageDone(true);
  };
  const handleSecondMessageDone = () => {};
  const handleThridMessageDone = () => {
    setThirdMessageDone(true);
  };
  const containerWidth = 80; // Define el ancho del contenedor según tus necesidades
  const containerHeight = 80; // Define la altura del contenedor según tus necesidades

  return (
    <>
      <Head>
        <title>Start</title>
        <meta name="description" content="..." />
      </Head>
      <Layout>
        <PrincipalContainer>
          {/*} <MyThreeComponent
            containerWidth={containerWidth}
            containerHeight={containerHeight}
          />*/}
          <Message one={one}>
            <TypingMessage
              message="Hello, I am Juan's AI assistant 🤓 and he has entrusted me with a very important mission 😎"
              onDone={handleFirstMessageDone}
            />
            {firstMessageDone && (
              <>
                <TypingMessage message="¡I need to know you're the one!" />
                <FormMission firstMessageDone={firstMessageDone}>
                  <InputContainer>
                    <label>What is your name?</label>
                    <input
                      value={name}
                      onChange={(ev) => setName(ev.target.value)}
                      placeholder="NAME"
                    />
                  </InputContainer>

                  <ReCAPTCHA
                    sitekey="6LdkUhQoAAAAACk0K9Ex4pnMbkxQOiWiHzCI3Tpy"
                    onChange={(value) => {
                      // Si el valor no es nulo, entonces el usuario ha pasado la prueba de reCAPTCHA.
                      setIsHuman(value !== null);
                    }}
                  />
                  <Info>
                    If you are not a robot you will be part of the mission
                  </Info>

                  <ButtonNext
                    type="button"
                    disabled={!isHuman} // Deshabilita el botón si el usuario no es humano.
                    onClick={handleClick}
                  >
                    Verify Identity
                  </ButtonNext>
                </FormMission>
              </>
            )}
          </Message>
          <Message two={two}>
            {/*{showConfetti && <ConfettiExplosion />}*/}
            {secondMessageDone && (
              <TypingMessage
                message="¡You're the one!"
                color="#4d61fc"
                onDone={handleSecondMessageDone}
              />
            )}
            <h2>{name.toLocaleUpperCase()}</h2>
            <p>&#128073;&#128100;</p>

            {thridMessageDone && (
              <>
                <TypingMessage
                  message="I have waited for you for a long time, so we have no time to waste. My mission is to connect you with Juan"
                  onDone={handleSecondMessageDone}
                />
                <FormMission secondMessageDone={secondMessageDone}>
                  <InputContainer>
                    <label>What is your email?</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(ev) => setEmail(ev.target.value)}
                      placeholder="EMAIL"
                    />
                  </InputContainer>
                  <InputContainer>
                    <label> Message for Juan</label>(optional)
                    <textarea
                      value={messageUser}
                      onChange={(ev) => setMessageUser(ev.target.value)}
                      placeholder="MESSAGE"
                    />
                  </InputContainer>
                  <ButtonNext
                    disabled={!isHuman} // Deshabilita el botón si el usuario no es humano.
                    onClick={handleClickDos}
                  >
                    ¡Accepted Mission!
                  </ButtonNext>
                </FormMission>
              </>
            )}
          </Message>
          <Message third={third}>
            <TitleEnd>¡Mission is Done!</TitleEnd>

            <MessageEnd>This message will self-destruct in...</MessageEnd>
            <Counter>{contador}</Counter>
            <MessageEnd>
              I&apos;m going to redirect you to Juan&apos;s projects but feel free to
              explore my entire app.
            </MessageEnd>
          </Message>
        </PrincipalContainer>
      </Layout>
    </>
  );
};

export default Start;
