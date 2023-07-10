import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import React from "react";
import { styled } from "styled-components";

const AboutContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const AboutCont = styled.div`
  width: 60%;
`;

const ImgCont = styled.div`
  width: 40%;
`;

const ImageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 30px;
  background: linear-gradient(
    100deg,
    rgb(189 189 189 / 7%),
    rgba(20, 20, 20, 100%)
  );
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  img {
    width: 100%;
    border-radius: 30px;
  }
`;

const ContainerSec = styled.div`
  display: flex;
  gap: 1.5rem;
  color: #ffff;
`;
const Title = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1rem;
  h1 {
    margin: 0;
    text-transform: uppercase;
    font-size: 3rem;
  }
  span {
    width: 2rem;
  }
  img {
    width: 100%;
  }
`;

const InfoAboutContainer = styled.div`
  padding: 2rem;
  border-radius: 30px;
  background: linear-gradient(
    100deg,
    rgb(189 189 189 / 7%),
    rgba(20, 20, 20, 100%)
  );
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */

  p {
    color: #ffff;
    opacity: 0.8;
    line-height: 1.6rem;
    letter-spacing: 0.03rem;
  }
`;

const CeoContainer = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 15rem;
  padding: 2rem;
  border-radius: 30px;
  background: linear-gradient(
    100deg,
    rgb(189 189 189 / 7%),
    rgba(20, 20, 20, 100%)
  );
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */

  p {
    color: #ffff;
    opacity: 0.8;
    line-height: 1.6rem;
    letter-spacing: 0.03rem;
  }
  span {
    color: #4d61fc;
  }
`;
const WorkTogetheContainer = styled(Link)`
  text-decoration: none;
  color: #ffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  width: 40%;
  height: 15rem;
  padding: 2rem;
  border-radius: 30px;
  background: linear-gradient(
    100deg,
    rgb(189 189 189 / 7%),
    rgba(20, 20, 20, 100%)
  );
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */

  p {
    color: #ffff;
    opacity: 0.8;
    line-height: 1.6rem;
    letter-spacing: 0.03rem;
  }
  span {
    color: #4d61fc;
  }
  svg {
    width: 3rem;
    color: gray;
  }
  &:hover {
    svg {
      color: #ffff;
    }
  }
`;
const StartContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: end;

  color: #ffff;
  width: 30%;
  height: 15rem;
  padding: 2rem;
  border-radius: 30px;
  background: linear-gradient(
    100deg,
    rgb(189 189 189 / 7%),
    rgba(20, 20, 20, 100%)
  );
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */

  p {
    color: #ffff;
    opacity: 0.8;
    line-height: 1.6rem;
    font-size: 0.8rem;
    margin: 0;
    text-transform: uppercase;
  }
  h2 {
    margin: 0;
    font-weight: 500;
  }
  img {
    margin-bottom: 0.5rem;
  }
`;
const InfoCultureHitosContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 30px;
  background: linear-gradient(
    100deg,
    rgb(189 189 189 / 7%),
    rgba(20, 20, 20, 100%)
  );
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  h2 {
    margin: 0;
  }

  p {
    color: #ffff;
    opacity: 0.6;
    line-height: 1.6rem;
    letter-spacing: 0.03rem;
    margin: 0;
    font-weight: 400;
  }
  h3 {
    margin: 0;
    color: #ffff;
    opacity: 0.9;
  }
`;

const AboutPage = () => {
  return (
    <div>
      <Header />
      <Center>
        <AboutContainer>
          {/*First section */}
          <RevealWrapper delay={200}>
            <ContainerSec>
              <ImgCont>
                <ImageContainer>
                  <img
                    src="https://my-page-negiupp.s3.amazonaws.com/1688550234499.jpg"
                    alt="about-image"
                  />
                </ImageContainer>
              </ImgCont>
              <AboutCont>
                <Title>
                  <span>
                    <img src="https://my-page-negiupp.s3.amazonaws.com/1688122773024.png" />
                  </span>

                  <h1>Self summary</h1>

                  <span>
                    <img src="https://my-page-negiupp.s3.amazonaws.com/1688122773024.png" />
                  </span>
                </Title>

                <InfoAboutContainer>
                  <h2> Hi there!</h2>
                  <p>
                    I&apos;m Juan Sebastian Suarez Ramirez, a passionate full stack
                    web developer with over two years of experience in creating
                    high-quality, functional web applications. I thrive on
                    building innovative solutions and collaborating with diverse
                    teams to achieve common goals.
                  </p>
          
                </InfoAboutContainer>
              </AboutCont>
            </ContainerSec>
          </RevealWrapper>
          {/*Second section */}
          <RevealWrapper delay={100}>
            <ContainerSec>
              <InfoCultureHitosContainer>
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
              </InfoCultureHitosContainer>
              <InfoCultureHitosContainer>
                <h2>Education</h2>
                <div>
                  <p>06/23/2023</p>
                  <h3>Python developer</h3>
                  <p>Edutim</p>
                </div>
                <div>
                  <p>06/23/2023</p>
                  <h3>JavaScript algoritms & Data structure </h3>
                  <p>FreeCodeCamp</p>
                </div>
              </InfoCultureHitosContainer>
            </ContainerSec>
          </RevealWrapper>
          {/*Third section */}
          <RevealWrapper delay={100}>
            <ContainerSec>
              <CeoContainer href={"/contact"}>
                <h1>Profiles</h1>
              </CeoContainer>
              <WorkTogetheContainer href={"/contact"}>
                <h1>
                  Let&apos;s
                  <br /> work <span>together</span>
                </h1>
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
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>
              </WorkTogetheContainer>
              <StartContainer href={"/founders"}>
                <img src="https://my-page-negiupp.s3.amazonaws.com/1688631092905.png" />

                <p>more about me</p>
                <h2>Credentials</h2>
              </StartContainer>
            </ContainerSec>
          </RevealWrapper>
        </AboutContainer>
      </Center>
      <Footer />
    </div>
  );
};

export default AboutPage;
/*
 <ImageContainer>
              <img
                src="https://my-page-negiupp.s3.amazonaws.com/1687962628674.png"
                alt="about-image"
              />
            </ImageContainer> */

/*  <img
                src="https://my-page-negiupp.s3.amazonaws.com/1687953985230.png"
                alt="about-image"
              />
              
                <img
                  src="https://my-page-negiupp.s3.amazonaws.com/1687962653621.png"
                  alt="about-image"
                />
              

                 <img
                src="https://my-page-negiupp.s3.amazonaws.com/1687962641400.png"
                alt="about-image"
              />
              



               <img
                src="https://my-page-negiupp.s3.amazonaws.com/1687962620230.png"
                alt="about-image"
              />
              */
