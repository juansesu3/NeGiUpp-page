import React from "react";
import styled from "styled-components";

const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  margin: 2rem 1.5rem 3rem 1.5rem;
  input {
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    border: 0;
    border-radius: 0.5rem 0rem 0rem 0.5rem;
    padding: 1rem;
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

  button {
    font-size: 1.2rem;
    border: 0;
    border-radius: 0rem 0.5rem 0.5rem 0rem;
    padding: 1rem;
    @media screen and (min-width: 768px) {
      padding: 1rem;
    }
    color: #fff;
    background-color: #4d61fc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
      /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
      /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
      /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
    cursor: pointer;
  }
`;

const FormSubscribeBlog = () => {
  return (
    <ContainerForm>
      {" "}
      <input type="email" placeholder="email " />
      <button>subscribe</button>
    </ContainerForm>
  );
};

export default FormSubscribeBlog;
