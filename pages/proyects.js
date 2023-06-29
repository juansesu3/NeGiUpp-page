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
  img {
    width: 100%;
    border-radius: 1.5rem;
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
            <h1>All proyects</h1>
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
