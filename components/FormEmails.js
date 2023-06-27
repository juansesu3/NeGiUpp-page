import axios from "axios";
import React, { useState } from "react";
import { styled } from "styled-components";

const Conatiner = styled.div`
  width: 35rem;
  border-radius: 3rem;
  padding: 3rem;
  color: white;
  h1 {
    font-size: 3rem;
    span {
      color: #4d61fc;
    }
  }
  background: linear-gradient(
    100deg,
    rgb(189 189 189 / 7%),
    rgba(255, 255, 255, 0)
  );
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
`;
const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  input {
    font-size: 1.5rem;
    border: 0;
    border-radius: 1rem;
    padding: 1.5rem 1.5rem;
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
    color: #fff;

    height: 12rem;
    font-size: 1.5rem;
    font-family: "Inter", sans-serif;
    border: 0;
    border-radius: 1rem;
    padding: 1.5rem 1.5rem;
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
  button {
    padding: 1rem;
    border: 0;
    border-radius: 1rem;
    background-color: #323232;
    color: #fff;
    font-size: 1.5rem;
    transition: 0.3s;

    &:hover {
      background-color: #ffffff;
      color: #0f0f0f;
    }
  }
`;

const FormEmails = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const data = {
      name,
      email,
      subject,
      message,
    };
    await axios.post("/api/emails", data);
  };

  return (
    <Conatiner>
      <h1>
        Let&apos;s work <span>together.</span>
      </h1>
      <FormContainer onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          type="text"
          placeholder="Name *"
        />
        <input
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          type="mail"
          placeholder="Email *"
        />
        <input
          value={subject}
          onChange={(ev) => setSubject(ev.target.value)}
          type="text"
          placeholder="Your Subject *"
        />
        <textarea
          value={message}
          onChange={(ev) => setMessage(ev.target.value)}
          placeholder="Your Menssage*"
        ></textarea>
        <button type="submit">Send Message</button>
      </FormContainer>
    </Conatiner>
  );
};

export default FormEmails;
