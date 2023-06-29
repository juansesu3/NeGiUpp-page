import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const ContainerAllProyects = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const ContainerProyectL = styled(Link)`
  text-decoration: none;
  color: #ffff;
  width: 100%;
`;

const FirstProyectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SecondProyectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

const ContainerPro = styled.div`
  border-radius: 1.5rem;
  padding: 1rem;
  width: 20rem;
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

const ImageContainer = styled.div`
  height: 15rem;
  img {
    height: 100%;
    width: 100%;
    border-radius: 1.5rem;
  }
`;

const TitleBox = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;

  h1 {
    font-size: 2.95rem;
    color: white;
    text-transform: uppercase;
  }
  svg {
    width: 3rem;
    color: white;
  }
`;

const ProyectsPage = () => {
  const [proyects, setProyects] = useState([]);

  useEffect(() => {
    axios.get("/api/proyects").then((response) => {
      setProyects(response.data);
    });
  }, []);

  const FirstProyects = proyects.slice(0, 2);

  const SecondProyects = proyects.slice(2);

  return (
    <div>
      <Header />
      <Center>
        <ContainerAllProyects>
          <FirstProyectsContainer>
            {FirstProyects.length > 0 &&
              FirstProyects.map((proyect) => (
                <ContainerPro key={proyect._id}>
                  <ContainerProyectL href={"/"}>
                    <ImageContainer>
                      <img src={proyect.images[0]} alt="proyect image" />
                    </ImageContainer>
                    <div>
                      <h1>{proyect.title}</h1>
                    </div>
                  </ContainerProyectL>
                </ContainerPro>
              ))}
          </FirstProyectsContainer>
          <div>
            <TitleBox>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
              <h1>All proyects</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </TitleBox>

            <SecondProyectsContainer>
              {SecondProyects.length > 0 &&
                SecondProyects.map((proyect) => (
                  <ContainerPro key={proyect._id}>
                    <ContainerProyectL href={"/"}>
                      <ImageContainer>
                        <img src={proyect.images[0]} alt="proyect image" />
                      </ImageContainer>
                      <div>
                        <h1>{proyect.title}</h1>
                      </div>
                    </ContainerProyectL>
                  </ContainerPro>
                ))}
            </SecondProyectsContainer>
          </div>
        </ContainerAllProyects>
      </Center>
      <Footer />
    </div>
  );
};

export default ProyectsPage;
