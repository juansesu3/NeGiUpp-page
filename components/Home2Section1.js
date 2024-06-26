import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled, { keyframes } from "styled-components";

const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: 920px) {
    flex-direction: row;
  }
`;

const Summary = styled(Link)`
  text-decoration: none;
  color: inherit;
  background:#f96e04;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 100%;
  padding: 2.5rem;
  border-radius: 1rem;
  color: #000000;
  
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .animation {
    opacity: 0.5;
  }
  transition: transform 0.3s  ease-in-out;
  &:hover {
    transform: translateY(-5px);
   
    .animation {
      transform: rotate(90deg);
      transition: transform 0.5s ease-in-out;
      opacity: 1;
      
    }
  }
  @media screen and (min-width: 920px) {
    width: 47%;
    justify-content: flex-end;
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
  @media screen and (min-width: 1050px) {
    width: 90%;
    justify-content: flex-end;
  }

  p {
    margin: 0;
color:  #ffffff;

  }
  h5 {
    margin: 0;
    text-transform: uppercase;
    opacity: 0.7;
    font-weight: 400;
    color: #ffffff;
  }
  h4 {
    margin: 0;
    font-size: 1.5rem;

    color: #ffffff;
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
    color: #00c8ff;
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
  position: absolute;
  bottom: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transform: scaleX(-1);

  @media screen and (min-width: 500px) and (max-width: 920px) {
    right: 120px;
  }

  @media screen and (min-width: 921px) {
    right: 120px;
  }
  @media screen and (min-width: 1100px) {
    right: 164px;
  }
  @media screen and (max-width: 460px) {
    right:142px;
    width: 15rem;
  }

  img {
    width: 11rem;
    border-radius: 2rem 0rem;
  }
`;


const NextToSummary = styled.div`
  width: 100%;
  border-radius: 2rem;
  color: #000000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: 920px) {
    width: 56%;
  }
`;
const moveLeftRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-105%);
  }
`;

const CredentAndProj = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`;

const Projects = styled(Link)`
  text-decoration: none;
  color: #000000;
  width: 100%;
  background:#ffffff;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  border-radius: 1rem;
  position: relative;
  cursor: pointer;
  @media screen and (min-width: 500px) {
    width: 50%;
  }
  .animation {
    opacity: 0.5;
  }
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
   
    .animation {
      transform: rotate(90deg);
      transition: transform 0.5s ease-in-out;
      opacity: 1;
    }
  }
`;
const ImageContProject = styled.div`

  background:#ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 2rem;
  gap: 1.5rem;

  height: 11rem;
  @media screen and (min-width: 500px) {
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }
`;

const Credentials = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  background:#ffffff;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  border-radius: 1rem;
  position: relative;
  cursor: pointer;
  @media screen and (min-width: 500px) {
    width: 50%;
  }
  .animation {
    opacity: 0.5;
  }
  transition: transform 0.3s ease-in-out;
  &:hover {
   
    transform: translateY(-5px);
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

  height: 13rem;
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
    <Section1 >
      <Summary href={"/about"} aria-label="about">
        <ContSummary>
          <ImageCont>
            <Image
              src="https://my-page-negiupp.s3.amazonaws.com/1713789684234.png"
              width={500}
              height={500}
              alt="profile image juan sebastian suarez ramirez"
            />
          </ImageCont>

          <InfoSummary>
            <h5>FullStack Developer</h5>
            <h4>Juan Sebastian Suarez</h4>
            <p>I&apos;m a passionate full stack web developer.</p>
          </InfoSummary>
        </ContSummary>

        <IconDetail>
          {" "}
          <LogoLink
            className="animation"
            href={"/"}
            aria-label="go to home section "
          >
            <Image
              src="/assets/logofinalpulido-black-3.png" // nota la barra inclinada al inicio
              alt="Logo negiupp"
              width={200}
              height={100}
            />
          </LogoLink>
        </IconDetail>
      </Summary>

      <NextToSummary>
        <CredentAndProj>
          <Credentials href={"/founders"} aria-label="go to founders section ">
            <ImageContCredent>
              <Image
                src={
                  "https://my-page-negiupp.s3.amazonaws.com/1688631092905.png"
                }
                alt="about-image"
                width={200}
                height={100}
              />
            </ImageContCredent>

            <Infos>
              <h5>More About Me</h5>
              <h4>Credential</h4>
            </Infos>
            <IconDetail>
              {" "}
              <LogoLink
                className="animation"
                href={"/founders"}
                aria-label="go to founders section "
              >
                <Image
                  src="/assets/logofinalpulido-black-3.png" // nota la barra inclinada al inicio
                  alt="Logo"
                  width={200}
                  height={100}
                />
              </LogoLink>
            </IconDetail>
          </Credentials>

          <Projects href={"/proyects"} aria-label="go to projects section ">
            <ImageContProject>
              <Image
                src={
                  "https://my-page-negiupp.s3.amazonaws.com/1691393721997.png"
                }
                width={200}
                height={100}
                alt="project-image"
              />
            </ImageContProject>

            <Infos>
              <h5>SHOWCASE</h5>
              <h4>Projects</h4>
            </Infos>
            <IconDetail>
              {" "}
              <LogoLink
                className="animation"
                href={"/proyects"}
                aria-label="go to projects section "
              >
                <Image
                  src="/assets/logofinalpulido-black-3.png" // nota la barra inclinada al inicio
                  alt="Logo"
                  width={200}
                  height={100}
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
