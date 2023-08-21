import axios from "axios";
import React, { useEffect, useState } from "react";
import MyThreeComponent from "./MyThreeComponent";
import { css, keyframes, styled } from "styled-components";

const Suggestion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    const OutPrompt = {
      message: `${inputValue} `,
    };

    e.preventDefault();
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

      model: "gpt-3.5-turbo",
      temperature: 0.8,
      n: 1,
      stream: false,
      messages: [
        {
          role: "system",
          content: `Respond the user as my Guesst and say "I'm here to help you!" 
            Your behavior will be a responsible, 
            attentive, nice  assistent woman.
            Always you help the user to hire me.
            Limit the response to 200 caracters `,
        },
        {
          role: "user",
          content: `Hi there, provide of the following data:
          {${JSON.stringify("")}},
        {${JSON.stringify("")}}, 
        tell the user about my skills and wyh i'm the best candidate for the job .

         
          ${inputValue}`,
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

  const PrincipalContainer = styled.div`
    position: relative;
  `;

  const FormConatiner = styled.div`
    position: fixed;
    bottom: 30px;
    right: 10px;
    width: 16rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
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
              padding: 0.5rem 1rem;
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
              padding: 1rem;
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
  `;

  const StyledLoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
  `;

  const StyledInput = styled.input`
    margin: 0;
    padding: 0.25rem 0.5rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  `;

  const StyledButton = styled.button`
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #4d61fc;
    color: white;

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
    bottom: ${(props) => (props.isOpen ? ".5rem" : "2.5rem")};
    right: ${(props) => (props.isOpen ? ".5rem" : "2.5rem")};
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    background-color: #00bfff;
    cursor: pointer;

    ${({ isOpen }) =>
      isOpen &&
      css`
        animation: ${rotateAnimation} 0.3s ease;
      `}

    svg {
      width: 1rem;
      height: 1rem;
      color: white;
    }
  `;

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

        <StyledForm>
          <StyledLoadingContainer>
            <div>
              <MyThreeComponent
                containerWidth={60}
                containerHeight={60}
                isLoading={isLoading}
              />
            </div>
          </StyledLoadingContainer>
          <div style={{ display: "flex", gap: "0.25rem" }}>
            <StyledInput
              type="text"
              placeholder="How can I help you?"
              value={inputValue}
              onChange={(ev) => setInputValue(ev.target.value)}
            />
            <StyledButton onClick={handleSubmit} type="button">
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
          <MyThreeComponent
            containerWidth={containerWidth}
            containerHeight={containerHeight}
          />
        )}
      </StyledButtonn>
    </PrincipalContainer>
  );
};

export default Suggestion;
