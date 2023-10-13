import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media screen and (min-width: 920px) {
    flex-direction: row;
  }
`;

const Summary = styled(Link)`
  text-decoration: none;
  color: inherit;
  background-image: linear-gradient(to bottom right, #212121, #131313);
  border: 1px solid #212121;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  position: relative;
  width: 100%;
  padding: 2.5rem;
  border-radius: 2rem;
  color: white;

  cursor: pointer;
  .animation {
    opacity: 0.5;
  }
  &:hover {
    .animation {
      transform: rotate(90deg);
      transition: transform 0.5s ease-in-out;
      opacity: 1;
    }
  }

  @media screen and (min-width: 920px) {
    width: 50%;
  }
`;

const ContSummary = styled.div`
  display: flex;
  justify-content: end;
  flex-direction: row;
  gap: 1.5rem;
  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`;
const InfoSummary = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;

  p {
    margin: 0;
    color: #4d61fc;
  }
  h5 {
    margin: 0;
    text-transform: uppercase;
    opacity: 0.5;
    font-weight: 400;
  }
  h4 {
    margin: 0;
    font-size: 1.5rem;
  }
`;

const Infos = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  p {
    margin: 0;
    color: #4d61fc;
  }
  h5 {
    margin: 0;
    text-transform: uppercase;
    opacity: 0.5;
    font-weight: 400;
    font-size: 0.7rem;
  }
  h4 {
    margin: 0;
    font-size: 1.2rem;
  }
`;

const IconDetail = styled.div`
  position: absolute;
  right: 8%;
  bottom: 10%;
`;
const ImageCont = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  transform: scaleX(1);

  left: 2%;
  bottom: 10%;
  @media screen and (min-width: 500px) {
    width: 15rem;
    transform: scaleX(1);
  }

  img {
    width: 10rem;
    border-radius: 2rem 0rem;
  }
`;

const NextToSummary = styled.div`
  width: 100%;
  border-radius: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media screen and (min-width: 920px) {
    width: 50%;
  }
`;
const LastNews = styled.div`
  background-image: linear-gradient(to bottom right, #212121, #131313);
  border: 1px solid #212121;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  padding: 1rem 2rem;
  border-radius: 2rem;
  text-align: center;
`;

const CredentAndProj = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`;

const Projects = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  background-image: linear-gradient(to bottom right, #212121, #131313);
  border: 1px solid #212121;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  padding: 1.5rem;
  border-radius: 2rem;
  position: relative;
  cursor: pointer;
  @media screen and (min-width: 500px) {
    width: 50%;
  }
  .animation {
    opacity: 0.5;
  }
  &:hover {
    .animation {
      transform: rotate(90deg);
      transition: transform 0.5s ease-in-out;
      opacity: 1;
    }
  }
`;
const ImageContProject = styled.div`
  background-image: linear-gradient(to bottom right, #212121, #131313);
  border: 1px solid #212121;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  border-radius: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 1rem;
  gap: 1.5rem;
 
  height: 11rem;
  @media screen and (min-width: 500px) {
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }
`;

const Credentials = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  background-image: linear-gradient(to bottom right, #212121, #131313);
  border: 1px solid #212121;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  padding: 1.5rem;
  border-radius: 2rem;
  position: relative;
  cursor: pointer;
  @media screen and (min-width: 500px) {
    width: 50%;
  }
  .animation {
    opacity: 0.5;
  }
  &:hover {
    .animation {
      transform: rotate(90deg);
      transition: transform 0.5s ease-in-out;
      opacity: 1;
    }
  }
`;

const ImageContCredent = styled.div`
  border-radius: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  gap: 1.5rem;
  width: 11rem;
  height: 12rem;
  img {
    width: 100%;
    border-radius: 1rem;
  }
`;

const LogoLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 1.6rem;
  img {
    width: 100%;
    position: relative;
    transform: rotate(90deg);
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: rotate(-0deg);
    }
  }

  @media screen and (min-width: 768px) {
  }
`;
const Home2Section1 = () => {
  return (
    <Section1>
      <Summary href={"/about"}>
        <ContSummary>
          <ImageCont>
            <img src="https://my-page-negiupp.s3.amazonaws.com/1696629533343.png" />
            {/**<ContScore>
              <Score1>some here</Score1>
              <Score2>some here</Score2>
              <Score3>some here</Score3>
              </ContScore>/ */}
          </ImageCont>

          <InfoSummary>
            <h5>FullStack Developer</h5>
            <h4>Juan Sebastian Suarez</h4>
            <p>I&apos;m a passionate full stack web developer.</p>
          </InfoSummary>
        </ContSummary>

        <IconDetail>
          {" "}
          <LogoLink className="animation" href={"/"}>
            <Image
              src="/assets/logofinalpulido-white-3.png" // nota la barra inclinada al inicio
              alt="Logo"
              width={400}
              height={200}
            />
          </LogoLink>
        </IconDetail>
      </Summary>

      <NextToSummary>
        <LastNews>This area is being developed.</LastNews>

        <CredentAndProj>
          <Credentials href={"/founders"}>
            <ImageContCredent>
              <Image
                src={
                  "https://my-page-negiupp.s3.amazonaws.com/1688631092905.png"
                }
                alt="about-image"
                width={500}
                height={500}
              />
            </ImageContCredent>

            <Infos>
              <h5>More About Me</h5>
              <h4>Credential</h4>
            </Infos>
            <IconDetail>
              {" "}
              <LogoLink className="animation" href={"/founders"}>
                <Image
                  src="/assets/logofinalpulido-white-3.png" // nota la barra inclinada al inicio
                  alt="Logo"
                  width={400}
                  height={200}
                />
              </LogoLink>
            </IconDetail>
          </Credentials>

          <Projects href={"/proyects"}>
            <ImageContProject>
              <Image
                src={
                  "https://my-page-negiupp.s3.amazonaws.com/1696690456951.png"
                }
                width={500}
                height={500}
                alt="project-image"
              />
            </ImageContProject>

            <Infos>
              <h5>SHOWCASE</h5>
              <h4>Projects</h4>
            </Infos>
            <IconDetail>
              {" "}
              <LogoLink className="animation" href={"/proyects"}>
                <Image
                  src="/assets/logofinalpulido-white-3.png" // nota la barra inclinada al inicio
                  alt="Logo"
                  width={400}
                  height={200}
                />
              </LogoLink>
            </IconDetail>
          </Projects>
        </CredentAndProj>
      </NextToSummary>
    </Section1>
  );
};

export default Home2Section1;