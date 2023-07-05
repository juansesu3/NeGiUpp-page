import CardCEO from "@/components/CardCEO";
import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import React from "react";
import { styled } from "styled-components";

const ContainerFounders = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  margin-top: 5rem;
  color: white;
  height: 40rem;
`;
const AboutMe = styled.div`
  flex: 1;
  overflow-y: scroll;
  scrollbar-width: thin; /* Oculta la barra de desplazamiento en navegadores que lo soporten */
  -ms-overflow-style: none; /* Oculta la barra de desplazamiento en Internet Explorer y Microsoft Edge */

  /* Estilos específicos para la barra de desplazamiento en navegadores WebKit (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 8px; /* Ajusta el ancho según tus preferencias */
    background-color: transparent; /* Oculta el fondo de la barra de desplazamiento */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888; /* Color de la barra de desplazamiento */
    border-radius: 4px; /* Ajusta el radio de borde según tus preferencias */
  }
  h2 {
    color: #ffff;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
  p {
    opacity: 0.8;
    line-height: 1.56;
  }
`;

const FoundersPage = () => {
  return (
    <>
      <Header />
      <Center>
        <ContainerFounders>
          <CardCEO />

          <AboutMe>
            <h2>About me</h2>
            <p>
              NeGiUpp digital consulting, we have created an exclusive
              membership model to provide you with tailored full stack web
              development services. We are here to drive your online business
              and ensure you achieve the best results. Our team of expert web
              developers will take care of all your digital needs. Whether you
              need a website from scratch, ongoing improvements, or digital
              marketing strategies, we are ready to work with you. By joining
              our membership, you will gain exclusive access to highly
              functional and visually appealing solutions.
            </p>
            <h2>About me</h2>
            <p>
              NeGiUpp digital consulting, we have created an exclusive
              membership model to provide you with tailored full stack web
              development services. We are here to drive your online business
              and ensure you achieve the best results. Our team of expert web
              developers will take care of all your digital needs. Whether you
              need a website from scratch, ongoing improvements, or digital
              marketing strategies, we are ready to work with you. By joining
              our membership, you will gain exclusive access to highly
              functional and visually appealing solutions.
            </p>
            <h2>About me</h2>
            <p>
              NeGiUpp digital consulting, we have created an exclusive
              membership model to provide you with tailored full stack web
              development services. We are here to drive your online business
              and ensure you achieve the best results. Our team of expert web
              developers will take care of all your digital needs. Whether you
              need a website from scratch, ongoing improvements, or digital
              marketing strategies, we are ready to work with you. By joining
              our membership, you will gain exclusive access to highly
              functional and visually appealing solutions.
            </p>
            <h2>About me</h2>
            <p>
              NeGiUpp digital consulting, we have created an exclusive
              membership model to provide you with tailored full stack web
              development services. We are here to drive your online business
              and ensure you achieve the best results. Our team of expert web
              developers will take care of all your digital needs. Whether you
              need a website from scratch, ongoing improvements, or digital
              marketing strategies, we are ready to work with you. By joining
              our membership, you will gain exclusive access to highly
              functional and visually appealing solutions.
            </p>
            <h2>About me</h2>
            <p>
              NeGiUpp digital consulting, we have created an exclusive
              membership model to provide you with tailored full stack web
              development services. We are here to drive your online business
              and ensure you achieve the best results. Our team of expert web
              developers will take care of all your digital needs. Whether you
              need a website from scratch, ongoing improvements, or digital
              marketing strategies, we are ready to work with you. By joining
              our membership, you will gain exclusive access to highly
              functional and visually appealing solutions.
            </p>
          </AboutMe>
        </ContainerFounders>
      </Center>
      <Footer />
    </>
  );
};

export default FoundersPage;
