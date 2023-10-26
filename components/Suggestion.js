import { Canvas } from "@react-three/fiber";
import axios from "axios";
import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";

import { css, keyframes, styled } from "styled-components";
import { GradientBackground } from "./BlogIntroduction";
import { Environment, OrbitControls } from "@react-three/drei";
import MyLoader from "./MyLoader";
import AvatarWelcome from "./avatars/AvatarWelcome";

const PrincipalContainer = styled.div`
  position: relative;
`;

const FormConatiner = styled.div`
  position: fixed;
  bottom: 10px;
  left: 5px;
  width: 16rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.8rem;
  border-radius: 0.375rem;
  background-color: #1d1d1f;
  margin-bottom: 20px;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: translateY(${({ isOpen }) => (isOpen ? "0" : "100%")});
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

const StyledChatContainer = styled.div`
  max-height: 20rem;
  overflow-y: auto;
`;

const StyledMessageContainer = styled.div`
  ${({ messageType }) =>
    messageType === "user"
      ? css`
          text-align: end;
          color: white;

          & + & {
            margin-top: 0.5rem;
          }

          .message {
            background-color: #4d61fc;
            color: white;
            text-align: right;
            padding: 0.5rem 0.5rem;
            border-radius: 0.375rem;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
          }
        `
      : css`
          text-align: start;
          color: #4d61fc;

          & + & {
            margin-top: 1rem;
          }

          .message {
            background-color: white;
            color: #4d61fc;
            text-align: left;
            padding: 0.4rem;
            border-radius: 0.375rem;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
          }
        `}
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 0.375rem;
  background-color: transparent;
  p {
    text-align: center;
    color: #0df7fe;
    margin: 0;
  }
  span {
    color: #4d61fc;

    opacity: 1;
    text-align: center;
  }
`;

const StyledLoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 70px;
  height: 70px;
  margin: auto;
  img {
    width: 100%;
  }
`;

const StyledInput = styled.input`
  margin: 0;
  width: 100%;
  padding: 0.25rem 0.5rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 3px 0px 0px 3px;
`;

const StyledButton = styled.button`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #4d61fc;
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.5rem;
  margin: 0;
  border-radius: 0px 3px 3px 0px;

  svg {
    width: 1rem;
    height: 1rem;
  }
`;
const rotateAnimation = keyframes`
from {
transform: rotate(0deg);
}
to {
transform: rotate(90deg);
}
`;

const StyledButtonn = styled.button`
  position: fixed;
  bottom: ${(props) => (props.isOpen ? "-1rem" : "2rem")};
  left: ${(props) => (props.isOpen ? "-1rem" : ".5rem")};
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  border: none;
  ${({ isOpen }) =>
    isOpen &&
    css`
      animation: ${rotateAnimation} 0.3s ease;
    `}

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: red;
    font-weight: 500;
  }
`;
const AIContainer = styled.div``;

const ColorAnimation = keyframes`
  0% {
    color: #1a5de9;
    font-weight: 700;
  }

  50% {
    color: #0df7fe;
    font-weight: 700;
  }
  100% {
    color: #1a5de9;
    font-weight: 700;
  }
`;
const InfoAi = styled.div`
  text-align: center;
  color: #0df7fe;
  margin: 0;

  ${({ isLoading }) =>
    isLoading &&
    css`
      animation: ${ColorAnimation} 2s ease-out infinite; /* Cambia el valor de '2s' para ajustar la velocidad */
    `}
`;
const Suggestion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [proyects, setProyects] = useState([]);
  const [profile, setProfile] = useState({});
  const [technologies, setTecnologies] = useState([]);

  useEffect(() => {
    axios.get("/api/proyects").then((response) => {
      setProyects(response.data);
    });
    axios.get("/api/profile").then((response) => {
      setProfile(response.data);
    });
    axios.get("/api/technologies").then((response) => {
      setTecnologies(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const OutPrompt = {
      message: `${inputValue} `,
    };

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: OutPrompt.message },
    ]);
    sendMessage(inputValue);
    setInputValue("");
  };
  const sendMessage = (message) => {
    const url = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    };
    const data = {
      /*model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],*/

      model: "gpt-4",
      temperature: 0.8,
      n: 1,
      stream: false,
      messages: [
        {
          role: "system",
          content: `You are the Juan's assitent!
          -Respond the user "I'm here to help you get to know Juan better!" 
          -Your behavior will be a: responsible, 
            attentive, nice  assistent woman.
          -Always you help the user get to know juan better
            and them hire Juan.
          -Limit the response to 200 caracters `,
        },
        {
          role: "user",
          content: `Hi there, provide of the following Professional profile data from Juan:
          Juan profile:{${JSON.stringify(profile)}},
          proyects:{${JSON.stringify(proyects)}},
          technologies:{${JSON.stringify(technologies)}},
          -Sometimes Tell the user Juan is the best candidate for the job.
          -Provide some questions them the user can do.
          -Provide my email: juan.se.suarez.ra@gmail.com
          -Provide my phone: +34 642 76 3395
          -Here is a user question: "${inputValue}"
          -answer user's question.
          `,
        },
      ],
    };

    setIsLoading(true);
    axios
      .post(url, data, { headers: headers })
      .then((response) => {
        console.log(response);
        setChatLog((prevChatLog) => [
          ...prevChatLog,
          { type: "bot", message: response.data.choices[0].message.content },
        ]);
        console.log(chatLog);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };
  const containerWidth = 80; // Define el ancho del contenedor según tus necesidades
  const containerHeight = 80; // Define la altura del contenedor según tus necesidades

  return (
    <PrincipalContainer>
      <FormConatiner isOpen={isOpen}>
        <StyledChatContainer>
          {chatLog.map((message, index) => (
            <StyledMessageContainer key={index} messageType={message.type}>
              <div className="message-type">
                {message.type.replace("bot", "Geniuss: ").replace("user", `me`)}
              </div>
              <div className="message">{message.message}</div>
            </StyledMessageContainer>
          ))}
        </StyledChatContainer>

        <StyledForm onSubmit={handleSubmit}>
          <InfoAi isLoading={isLoading}>
            {isLoading
              ? "Give me a moment..."
              : "I'm here to help you get to know Juan better!"}
          </InfoAi>
          <StyledLoadingContainer>
            <Image
              src="https://juan-sesu-ecommerce.s3.amazonaws.com/1693293993081.png"
              width={200}
              height={100}
              alt="logo chatbot AI"
            />
          </StyledLoadingContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: ".2rem",
            }}
          >
            <StyledInput
              type="text"
              placeholder="ask me questions about juan"
              value={inputValue}
              onChange={(ev) => setInputValue(ev.target.value)}
            />
            <StyledButton type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </StyledButton>
          </div>
        </StyledForm>
      </FormConatiner>
      <StyledButtonn
        isOpen={isOpen}
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <>
            <AIContainer>
              <Canvas
                dpr={[0, 2]}
                gl={{ alpha: true }}
                shadows
                camera={{ position: [0, 0, 8], fov: 42 }}
              >
                <GradientBackground />
                <OrbitControls enabled={false} />
                <Suspense fallback={<MyLoader />}>
                  <AvatarWelcome />
                </Suspense>
                <Environment background={null} preset="sunset" />
              </Canvas>
            </AIContainer>
          </>
        )}
      </StyledButtonn>
    </PrincipalContainer>
  );
};

export default Suggestion;
