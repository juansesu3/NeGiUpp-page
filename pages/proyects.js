import Layout from "@/components/Layout";
import axios from "axios";
import { RevealWrapper } from "next-reveal";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const ContainerAllProyects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3.5rem 0.5rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const FirstProyectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1rem;
  
  h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }
  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: start;
  }
`;

const SecondProyectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

const ContainerPro = styled.div`
   position: relative;
  min-width: 21.2rem;
  min-height: 23rem;
  border-radius: 1rem;
  padding: 1rem;
 background-image: linear-gradient(to bottom right, #000000, #131313);
  border: 1px solid #2b2b2b0f;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  @media screen and (min-width: 450px) {
    width: 20rem;
  }
    transition: 0.3s;
    position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, opacity 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    
  }
  &::before {
     content: 'View'; // Texto que se mostrará
    position: absolute;
    top: 42.5%; // Cambiado a 100%
    left: 50%;
    transform: translateX(-50%) translateY(-50%) rotateX(180deg); // Añadido rotateX
    font-size: 1rem; // Tamaño del texto
    font-weight: bold; // Puedes ajustar según tu preferencia
    color:#00c8ff;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease; // Añadida la transición de transform
    border: 1px solid white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
    padding: 0.5rem 1rem;
    background-color: #ffffff;// Añadida la transición de transform
  }
  &:hover::before {
    opacity: 1;
    transform: translateX(-50%) translateY(-100%) rotateX(0deg); // Restaurar la posición original
  }
`;

const ImageContainer = styled.div`

  height: 15rem;
  img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    object-fit: cover;
    
  }
 
  
`;

const TitleBox = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  margin: 0 auto;
  white-space: nowrap;

  h1 {
    font-size: 2.2rem;
    color: white;
    text-transform: uppercase;
  }
  svg {
    width: 2.5rem;
    color: white;
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
const TitleBoxMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  margin: 0 auto;
  white-space: nowrap;

  h1 {
    font-size: 1.6rem;
    color: white;
    text-transform: uppercase;
  }
  svg {
    width: 1rem;
    color: white;
  }
  @media screen and (min-width: 768px) {
    display: none;
    h1 {
      font-size: 2.95rem;
    }
    svg {
      width: 3rem;
    }
  }
`;
const SeconConatiner = styled.div`
  width: 100%;
`;

const CardFace = styled.div`
  

`;

const IconDetail = styled.div`
  position: absolute;
  right: 7%;
  bottom: 7%;
  backface-visibility: hidden;
`;

const LogoLink = styled.div`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 1.6rem;
  img {
    width: 100%;
    position: relative;
  }

  @media screen and (min-width: 768px) {
  }
`;
const Name = styled.div`
  h1 {
    margin-top: 0rem;
    margin-bottom: 0.5rem;
  }
  p {
    opacity: 0.5;
    text-transform: uppercase;
    margin-top: 1rem;
    margin-bottom: 0.25rem;
  }
`;

const ProyectsPage = () => {
  const [proyects, setProyects] = useState([]);

  useEffect(() => {
    axios.get("/api/proyects").then((response) => {
      setProyects(response.data);
    });
  }, []);

  const SecondProyects = proyects;

  return (
    <>
      <Head>
        <title>
          Negiupp Portfolio - Full-Stack Web Development & High-Quality Digital
          Products
        </title>
        <meta
          name="description"
          content="Explore Negiupp's portfolio, specializing in Full-Stack Web Development, Digital Products, and Artificial Intelligence solutions. Discover projects that blend innovation and quality."
        />
      </Head>
      <Layout>
        <ContainerAllProyects>
          <TitleBoxMobile>
            <span>
              <Image
                src={
                  "https://my-page-negiupp.s3.amazonaws.com/1688122773024.png"
                }
                alt="Trello logo"
                width={40}
                height={40}
              />
            </span>
            <h1>All Projects</h1>{" "}
            <span>
              <Image
                src={
                  "https://my-page-negiupp.s3.amazonaws.com/1688122773024.png"
                }
                alt="Trello logo"
                width={40}
                height={40}
              />
            </span>
          </TitleBoxMobile>
        
          <SeconConatiner>
            <TitleBox>
              <span>
                <Image
                  src={
                    "https://my-page-negiupp.s3.amazonaws.com/1688122773024.png"
                  }
                  alt="Trello logo"
                  width={40}
                  height={40}
                />
              </span>
              <h1>All Projects</h1>{" "}
              <span>
                <Image
                  src={
                    "https://my-page-negiupp.s3.amazonaws.com/1688122773024.png"
                  }
                  alt="Trello logo"
                  width={40}
                  height={40}
                />
              </span>
            </TitleBox>

            <SecondProyectsContainer>
              {SecondProyects.length > 0 &&
                SecondProyects.map((proyect, index) => (
                  <RevealWrapper key={proyect._id} delay={index * 50}>
                    <Link style={{textDecoration:'none',color:'#ffffff'}} href={"/proyect/" + proyect._id}>
                    <ContainerPro>               
                        {/* Aquí iría el frente de tu tarjeta */}
                        <ImageContainer>
                          <Image
                            src={proyect.images[0]}
                            alt="Trello logo"
                            width={500}
                            height={400} // Ajusta el tamaño según necesites
                          />
                        </ImageContainer>
                        <Name>
                          <p>{proyect.service}</p>
                          <h1>{proyect?.title}</h1>
                        </Name>
                      <IconDetail>
                        <LogoLink className="animation" href={"/proyects"}>
                          <Image
                            src="/assets/logofinalpulido-white-3.png" // nota la barra inclinada al inicio
                            alt="Logo"
                            width={400}
                            height={200}
                          />
                        </LogoLink>
                      </IconDetail>
                    </ContainerPro>
                    </Link>
                  </RevealWrapper>
                ))}
            </SecondProyectsContainer>
          </SeconConatiner>
        </ContainerAllProyects>
      </Layout>
    </>
  );
};

export default ProyectsPage;
