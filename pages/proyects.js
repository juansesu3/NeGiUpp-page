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
  padding: 3rem 0.5rem;
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
  background:#ffffff;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
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
    color:#ffff;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease; // Añadida la transición de transform
    border-radius: 0.5rem;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    padding: 0.5rem 1rem;
    background: #f96e04;// Añadida la transición de transform
  }
  &:hover::before {
    opacity: 1;
    transform: translateX(-50%) translateY(-100%) rotateX(0deg); // Restaurar la posición original
  }
`;

const ImageContainer = styled.div`
 border-radius: 1rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
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
        text-transform: uppercase;
    color: #000;
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
    color: #000;
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
    color: #f96e04;
  }
  p {
       color: #000;
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
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                        <path d="M0 0 C0.66 0 1.32 0 2 0 C2.66 4.62 3.32 9.24 4 14 C6.64 10.37 9.28 6.74 12 3 C12.66 3.33 13.32 3.66 14 4 C12.02 8.29 10.04 12.58 8 17 C12.29 15.02 16.58 13.04 21 11 C21 11.99 21 12.98 21 14 C17.85162825 16.62551716 14.42318195 18.73214196 11 21 C15.62 21.66 20.24 22.32 25 23 C25 23.66 25 24.32 25 25 C20.38 25.66 15.76 26.32 11 27 C14.63 29.64 18.26 32.28 22 35 C21.505 35.99 21.505 35.99 21 37 C16.71 35.02 12.42 33.04 8 31 C9.98 35.29 11.96 39.58 14 44 C13.01 44 12.02 44 11 44 C8.37448284 40.85162825 6.26785804 37.42318195 4 34 C3.34 38.62 2.68 43.24 2 48 C1.34 48 0.68 48 0 48 C-0.66 43.38 -1.32 38.76 -2 34 C-4.64 37.63 -7.28 41.26 -10 45 C-10.66 44.67 -11.32 44.34 -12 44 C-10.02 39.71 -8.04 35.42 -6 31 C-10.29 32.98 -14.58 34.96 -19 37 C-19 36.01 -19 35.02 -19 34 C-15.85162825 31.37448284 -12.42318195 29.26785804 -9 27 C-13.62 26.34 -18.24 25.68 -23 25 C-23 24.34 -23 23.68 -23 23 C-16.07 22.01 -16.07 22.01 -9 21 C-12.63 18.36 -16.26 15.72 -20 13 C-19.67 12.34 -19.34 11.68 -19 11 C-12.565 13.97 -12.565 13.97 -6 17 C-7.98 12.71 -9.96 8.42 -12 4 C-11.01 4 -10.02 4 -9 4 C-6.37448284 7.14837175 -4.26785804 10.57681805 -2 14 C-1.34 9.38 -0.68 4.76 0 0 Z" fill="#6cdb00" transform="translate(12,12) scale(0.6)" />
                      </svg>
                    </span>
            <h1>All Projects</h1>{" "}
            <span>
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                        <path d="M0 0 C0.66 0 1.32 0 2 0 C2.66 4.62 3.32 9.24 4 14 C6.64 10.37 9.28 6.74 12 3 C12.66 3.33 13.32 3.66 14 4 C12.02 8.29 10.04 12.58 8 17 C12.29 15.02 16.58 13.04 21 11 C21 11.99 21 12.98 21 14 C17.85162825 16.62551716 14.42318195 18.73214196 11 21 C15.62 21.66 20.24 22.32 25 23 C25 23.66 25 24.32 25 25 C20.38 25.66 15.76 26.32 11 27 C14.63 29.64 18.26 32.28 22 35 C21.505 35.99 21.505 35.99 21 37 C16.71 35.02 12.42 33.04 8 31 C9.98 35.29 11.96 39.58 14 44 C13.01 44 12.02 44 11 44 C8.37448284 40.85162825 6.26785804 37.42318195 4 34 C3.34 38.62 2.68 43.24 2 48 C1.34 48 0.68 48 0 48 C-0.66 43.38 -1.32 38.76 -2 34 C-4.64 37.63 -7.28 41.26 -10 45 C-10.66 44.67 -11.32 44.34 -12 44 C-10.02 39.71 -8.04 35.42 -6 31 C-10.29 32.98 -14.58 34.96 -19 37 C-19 36.01 -19 35.02 -19 34 C-15.85162825 31.37448284 -12.42318195 29.26785804 -9 27 C-13.62 26.34 -18.24 25.68 -23 25 C-23 24.34 -23 23.68 -23 23 C-16.07 22.01 -16.07 22.01 -9 21 C-12.63 18.36 -16.26 15.72 -20 13 C-19.67 12.34 -19.34 11.68 -19 11 C-12.565 13.97 -12.565 13.97 -6 17 C-7.98 12.71 -9.96 8.42 -12 4 C-11.01 4 -10.02 4 -9 4 C-6.37448284 7.14837175 -4.26785804 10.57681805 -2 14 C-1.34 9.38 -0.68 4.76 0 0 Z" fill="#6cdb00" transform="translate(12,12) scale(0.6)" />
                      </svg>
                    </span>
          </TitleBoxMobile>
        
          <SeconConatiner>
            <TitleBox>
            <span>
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                        <path d="M0 0 C0.66 0 1.32 0 2 0 C2.66 4.62 3.32 9.24 4 14 C6.64 10.37 9.28 6.74 12 3 C12.66 3.33 13.32 3.66 14 4 C12.02 8.29 10.04 12.58 8 17 C12.29 15.02 16.58 13.04 21 11 C21 11.99 21 12.98 21 14 C17.85162825 16.62551716 14.42318195 18.73214196 11 21 C15.62 21.66 20.24 22.32 25 23 C25 23.66 25 24.32 25 25 C20.38 25.66 15.76 26.32 11 27 C14.63 29.64 18.26 32.28 22 35 C21.505 35.99 21.505 35.99 21 37 C16.71 35.02 12.42 33.04 8 31 C9.98 35.29 11.96 39.58 14 44 C13.01 44 12.02 44 11 44 C8.37448284 40.85162825 6.26785804 37.42318195 4 34 C3.34 38.62 2.68 43.24 2 48 C1.34 48 0.68 48 0 48 C-0.66 43.38 -1.32 38.76 -2 34 C-4.64 37.63 -7.28 41.26 -10 45 C-10.66 44.67 -11.32 44.34 -12 44 C-10.02 39.71 -8.04 35.42 -6 31 C-10.29 32.98 -14.58 34.96 -19 37 C-19 36.01 -19 35.02 -19 34 C-15.85162825 31.37448284 -12.42318195 29.26785804 -9 27 C-13.62 26.34 -18.24 25.68 -23 25 C-23 24.34 -23 23.68 -23 23 C-16.07 22.01 -16.07 22.01 -9 21 C-12.63 18.36 -16.26 15.72 -20 13 C-19.67 12.34 -19.34 11.68 -19 11 C-12.565 13.97 -12.565 13.97 -6 17 C-7.98 12.71 -9.96 8.42 -12 4 C-11.01 4 -10.02 4 -9 4 C-6.37448284 7.14837175 -4.26785804 10.57681805 -2 14 C-1.34 9.38 -0.68 4.76 0 0 Z" fill="#6cdb00" transform="translate(12,12) scale(0.6)" />
                      </svg>
                    </span>
              <h1>All Projects</h1>{" "}
              <span>
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                        <path d="M0 0 C0.66 0 1.32 0 2 0 C2.66 4.62 3.32 9.24 4 14 C6.64 10.37 9.28 6.74 12 3 C12.66 3.33 13.32 3.66 14 4 C12.02 8.29 10.04 12.58 8 17 C12.29 15.02 16.58 13.04 21 11 C21 11.99 21 12.98 21 14 C17.85162825 16.62551716 14.42318195 18.73214196 11 21 C15.62 21.66 20.24 22.32 25 23 C25 23.66 25 24.32 25 25 C20.38 25.66 15.76 26.32 11 27 C14.63 29.64 18.26 32.28 22 35 C21.505 35.99 21.505 35.99 21 37 C16.71 35.02 12.42 33.04 8 31 C9.98 35.29 11.96 39.58 14 44 C13.01 44 12.02 44 11 44 C8.37448284 40.85162825 6.26785804 37.42318195 4 34 C3.34 38.62 2.68 43.24 2 48 C1.34 48 0.68 48 0 48 C-0.66 43.38 -1.32 38.76 -2 34 C-4.64 37.63 -7.28 41.26 -10 45 C-10.66 44.67 -11.32 44.34 -12 44 C-10.02 39.71 -8.04 35.42 -6 31 C-10.29 32.98 -14.58 34.96 -19 37 C-19 36.01 -19 35.02 -19 34 C-15.85162825 31.37448284 -12.42318195 29.26785804 -9 27 C-13.62 26.34 -18.24 25.68 -23 25 C-23 24.34 -23 23.68 -23 23 C-16.07 22.01 -16.07 22.01 -9 21 C-12.63 18.36 -16.26 15.72 -20 13 C-19.67 12.34 -19.34 11.68 -19 11 C-12.565 13.97 -12.565 13.97 -6 17 C-7.98 12.71 -9.96 8.42 -12 4 C-11.01 4 -10.02 4 -9 4 C-6.37448284 7.14837175 -4.26785804 10.57681805 -2 14 C-1.34 9.38 -0.68 4.76 0 0 Z" fill="#6cdb00" transform="translate(12,12) scale(0.6)" />
                      </svg>
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
