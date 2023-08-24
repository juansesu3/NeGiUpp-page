import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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

const ContainerProyectL = styled(Link)`
  text-decoration: none;
  color: #ffff;
  width: 100%;
`;

const FirstProyectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  gap: 1.5rem;
  justify-content: space-around;
  h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

const ContainerPro = styled.div`
  border-radius: 1rem;
  padding: 1rem;
  width: auto;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  @media screen and (min-width: 768px) {
    width: 19rem;
  }
`;

const ImageContainer = styled.div`
  height: 15rem;
  img {
    height: 100%;
    width: 100%;
    border-radius: 1rem;
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
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="..." />
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
          <FirstProyectsContainer>
            {FirstProyects.length > 0 &&
              FirstProyects.map((proyect, index) => (
                <RevealWrapper key={proyect._id} delay={index * 50}>
                  <ContainerPro>
                    <ContainerProyectL href={"/proyect/" + proyect._id}>
                      <ImageContainer>
                        <Image
                          src={proyect.images[0]}
                          alt="Trello logo"
                          width={500}
                          height={40}
                        />
                      </ImageContainer>
                      <div>
                        <h1>{proyect.title}</h1>
                      </div>
                    </ContainerProyectL>
                  </ContainerPro>
                </RevealWrapper>
              ))}
          </FirstProyectsContainer>
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
              <h1>All Proyects</h1>{" "}
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
                    <ContainerPro>
                      <ContainerProyectL href={"/proyect/" + proyect._id}>
                        <ImageContainer>
                          <Image
                            src={proyect.images[0]}
                            alt="Trello logo"
                            width={500}
                            height={40}
                          />
                        </ImageContainer>
                        <div>
                          <h1>{proyect.title}</h1>
                        </div>
                      </ContainerProyectL>
                    </ContainerPro>
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
