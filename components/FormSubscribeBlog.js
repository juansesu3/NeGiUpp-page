import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  margin: 2rem 1.5rem 3rem 1.5rem;

  input,
  button {
    margin: 0 auto;
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    border: 0;
    border-radius: 0.5rem;
    padding: 1rem;
    color: #fff;
  }

  input {
    background: linear-gradient(
      100deg,
      rgb(189 189 189 / 7%),
      rgba(255, 255, 255, 0)
    );
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.4),
      4px 0 4px rgba(0, 0, 0, 0.1), -4px 0 4px rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: 768px) {
    input,
    button {
      width: 19rem;
      padding: 1rem;
    }
  }

  button {
    background-color: #4d61fc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.4),
      4px 0 4px rgba(0, 0, 0, 0.1), -4px 0 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
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
const FormSubscribeBlog = () => {
  const [isHuman, setIsHuman] = useState(false);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    alert("Congratulations, you are part of the future");
  };

  return (
    <ContainerForm onSubmit={handleSubmit}>
      <input type="text" placeholder="name" />
      <input type="email" placeholder="email" />
      <ReCaptchaWrapper>
        <ReCAPTCHA
          sitekey="6LdkUhQoAAAAACk0K9Ex4pnMbkxQOiWiHzCI3Tpy"
          onChange={(value) => {
            setIsHuman(value !== null);
          }}
        />
      </ReCaptchaWrapper>
      <button type="submit" disabled={!isHuman}>
        subscribe
      </button>
    </ContainerForm>
  );
};

export default FormSubscribeBlog;
