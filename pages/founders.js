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
            <div>
              <p>
                Throughout my professional journey, I&apos;ve worked on challenging
                projects that have allowed me to gain a solid understanding of a
                wide range of technologies and tools.
              </p>
              <p>
                {" "}
                My expertise spans from client-side development using HTML, CSS,
                and JavaScript to server-side implementation of business logic
                and databases using technologies like Node.js and both
                relational and non-relational databases.
              </p>
              <p>
                {" "}
                I&apos;m a strong advocate for best development practices, focusing
                on writing clean, modular, and highly maintainable code.
              </p>
              <p>
                I have experience with popular frameworks and libraries such as
                React.js, Next.js, Express, Django, as well as integrating
                third-party APIs and cloud services. What truly drives me is the
                ability to tackle new challenges and continuously learn.
              </p>
            </div>
            <div>
              <h2>Language</h2>
              <p>Spanis</p>
              <p>English</p>
              <p>French</p>
            </div>
            <div>
              <h2>Experiences</h2>
              <div>
                <p>06/23/2021</p>
                <h3>BootCamp</h3>
                <p>Start in the IT</p>
              </div>
              <div>
                <p>06/23/2022</p>
                <h3>Talent.com</h3>
                <p>Web Scrapper</p>
              </div>
              <div>
                <p>06/23/2022</p>
                <h3>Freelancer</h3>
                <p>FullStack web developer</p>
              </div>
            </div>
            <div>
              <h2>Education</h2>
              <div>
                <p>06/23/2023</p>
                <h3>Python developer</h3>
                <p>Edutim</p>
              </div>
              <div>
                <p>06/23/2023</p>
                <h3>Data structure & algoritms</h3>
                <p>FreeCodeCamp</p>
              </div>
            </div>
            <div>
              <h2>Skills</h2>
              <div>
                <h3>JavaScript</h3>
                <h3>JavaScript</h3>
                <h3>JavaScript</h3>
              </div>
            </div>
          </AboutMe>
        </ContainerFounders>
      </Center>
      <Footer />
    </>
  );
};

export default FoundersPage;
