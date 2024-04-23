import axios from "axios";
import React, { useState } from "react";
import { styled } from "styled-components";
import { withSwal } from "react-sweetalert2";
import { useRouter } from "next/router";

const Conatiner = styled.div`
  width: 100%;

  border-radius: 1rem;
  padding: 1rem;
  color: white;
  h1 {
    color: #000;
    font-size: 2.5rem;
    text-align: center;
    @media screen and (min-width: 768px) {
      font-size: 3rem;
    }
    span {
      color:#f96e04;
    }
  }
  background: #ffff;

box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);


  @media screen and (min-width: 768px) {
    padding: 3rem;
  }
`;
const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  input {
    font-size: 1rem;
    border: 0;
    border-radius: 0.75rem;
    padding: 1rem;
    border: 2px solid transparent;
    transition: border 0.3s ease-in-out;
    @media screen and (min-width: 768px) {
      padding: 1rem;
    }

    &:focus-visible {
 outline:none; /* Cambia el color del borde cuando el input está en focus */
 border: 2px solid #f96e04;
    }

    color: #000;
    background: #fff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    
  }
  textarea {
    color: #000;

    height: 12rem;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    border: 0;
    border-radius: 0.6rem;
    padding: 1rem 0.8rem;
background: #fff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border: 2px solid transparent;
    transition: border 0.3s ease-in-out;
    &:focus-visible {
 outline:none; /* Cambia el color del borde cuando el input está en focus */
 border: 2px solid #f96e04;
    }
  }
  button {
    padding: 0.8rem;
    border: 0;
    border-radius: 0.75rem;
    background:#f96e04;
    color: #fff;
    font-size: 1.3rem;
    transition: 0.3s;
    margin-bottom: 1rem;
    border: 1px solid #f96e04;
    cursor: pointer;
    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
      padding: 0.8rem;
    }

    &:hover {
      background-color: #ffffff;
      color: #f96e04;
      
    }
    
  }
`;

const FormEmails = ({ swal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    swal.fire({
      title: "The message was sended ",
      text: `We will be in touch soon!`,
      timer: "2500",
    });

    const data = {
      name,
      email,
      subject,
      message,
    };
    await axios.post("/api/emails", data);
    router.push("/");
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
          placeholder="Your Name *"
        />
        <input
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          type="mail"
          placeholder="Your Email *"
        />
        <input
          value={subject}
          onChange={(ev) => setSubject(ev.target.value)}
          type="text"
          placeholder="Subject *"
        />
        <textarea
          value={message}
          onChange={(ev) => setMessage(ev.target.value)}
          placeholder="Your Message"
        ></textarea>
        <button type="submit">Send Message</button>
      </FormContainer>
    </Conatiner>
  );
};

export default withSwal(({ swal }, ref) => <FormEmails swal={swal} />);
