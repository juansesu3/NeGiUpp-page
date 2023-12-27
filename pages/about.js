import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { styled, keyframes } from "styled-components";
import moment from "moment";
import Image from "next/image";
import Layout from "@/components/Layout";
import Head from "next/head";
import { RevealWrapper } from "next-reveal";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.5rem 0.5rem;
  gap: 1rem;
`;

const AboutCont = styled.div`
  @media screen and (min-width: 805px) {
    width: 80%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 1.5rem;
  border-radius: 1rem;
  background-image: linear-gradient(to bottom right, #000000, #131313);
  border: 1px solid #2b2b2b0f;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  transform: scaleX(-1);
  img {
    width: 100%;
    border-radius: 1rem;
  }
  margin: 0 auto;

  @media screen and (min-width: 400px) {
    width: 19rem;
  }
`;

const ContainerSec = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #ffff;

  @media screen and (min-width: 805px) {
    flex-direction: row;
  }
`;
const Title = styled.span`
  display: none;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1rem;
  white-space: nowrap;
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
  @media screen and (min-width: 805px) {
    display: flex;
  }
`;
const TitleMobile = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  white-space: nowrap;
  position: relative;
  h1 {
    margin: 0;
    text-transform: uppercase;
    font-size: 2rem;
  }
  span {
    width: 2rem;
  }
  img {
    width: 100%;
  }
  @media screen and (min-width: 805px) {
    display: none;
    h1 {
      font-size: 3rem;
    }
  }
`;

const InfoAboutContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 1rem;
  margin: auto 0;
  gap: 1rem;
  h2 {
    margin: 0;
  }
  p {
    color: #ffff;
    opacity: 0.8;
    line-height: 2rem;
    margin-bottom: 0;
  }
  @media screen and (min-width: 805px) {
    p {
      line-height: 1.8rem;
      letter-spacing: 0.02rem;
      font-size: 1rem;
    }
    h2 {
      margin: 1rem 0;
    }
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
  padding: 2rem;
  border-radius: 1rem;
  background-image: linear-gradient(to bottom right, #000000, #131313);
  border: 1px solid #2b2b2b0f;
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
  @media screen and (min-width: 805px) {
    width: 100%;
  }
  transition: 0.3s;
    &:hover {
    transform: translateY(-5px);
    color: #3950ff;
  }
`;
const WorkTogetheContainer = styled(Link)`
  text-decoration: none;
  color: #ffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 2rem;
  border-radius: 1rem;
  background-image: linear-gradient(to bottom right, #000000, #131313);
  border: 1px solid #2b2b2b0f;
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
  transition: 0.3s;
    &:hover {
    transform: translateY(-5px);
    svg {
      color: #ffff;
    }
    span {
      color: #3950ff;
    }
  }
  @media screen and (min-width: 805px) {
    width: 50%;
  }
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  }
  50% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  }
`;
const StartContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffff;
  padding: 2rem;
  background-image: linear-gradient(to bottom right, #000000, #131313);
  border: 1px solid #2b2b2b0f;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  border-radius: 1rem;
  animation: ${pulseAnimation} 2.5s infinite;
  transform-origin: center;
  
  p {
    color: #ffff;
    opacity: 0.8;
    line-height: 1.6rem;
    font-size: 1rem;
    margin: 0;
    text-transform: uppercase;
  }
  h2 {
    margin: 0;
    font-weight: 500;
    font-size: 2rem;
    color: #4d61fc;
  }
   transition: 0.3s;
    &:hover {
    transform: translateY(-5px);
    background-color: #3950ff;
    h2 {
      color: white;
    }
  }

  img {
    margin-bottom: 0.5rem;
  }

  @media screen and (min-width: 805px) {
    width: 50%;
  }
`;
const InfoCultureHitosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 1rem;
  background-image: linear-gradient(to bottom right, #000000, #131313);
  border: 1px solid #2b2b2b0f;
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
    line-height: 1.8rem;
    letter-spacing: 0.07rem;
    margin: 0;
  }
  h3 {
    margin: 0;
    color: #4d61fc;
    font-weight: 600;
  }
  h4 {
    margin: 0.3rem 0;
    font-weight: 500;
  }
  @media screen and (min-width: 805px) {
    width: 50%;
    gap: 1rem;

    p {
      color: #ffff;
      opacity: 0.6;
      line-height: 1.6rem;
      letter-spacing: 0.03rem;
      margin: 0;
      font-weight: 400;
      font-size: inherit;
    }
    h3 {
      margin: 0;
      color: #4d61fc;
      font-weight: 500;
    }
  }
`;
const Credential = styled.div`
  width: 15rem;
  img {
    width: 100%;
  }
`;
const ContainerThirdSec = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: 805px) {
    flex-direction: row;
  }
`;

const Detail = styled.div`
background-image: linear-gradient(to bottom right, #000000, #131313);
  border: 1px solid #2b2b2b0f;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */

  border-radius: 1rem;
  padding: 2rem;

  @media screen and (min-width: 805px) {
    padding: 0.8rem 2rem;
  }
`;
const ExpSelBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InfoCultureHitosContainerExpe = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 1rem;
  background-image: linear-gradient(to bottom right, #000000, #131313);
  border: 1px solid #2b2b2b0f;
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
    line-height: 1.8rem;
    letter-spacing: 0.07rem;
    margin: 0;
  }
  h3 {
    margin: 0;
    color: #4d61fc;
    font-weight: 600;
  }
  h4 {
    margin: 0.3rem 0;
    font-weight: 500;
  }
  @media screen and (min-width: 805px) {
    gap: 1rem;

    p {
      color: #ffff;
      opacity: 0.6;
      line-height: 1.6rem;
      letter-spacing: 0.03rem;
      margin: 0;
      font-weight: 400;
      font-size: inherit;
    }
    h3 {
      margin: 0;
      color: #4d61fc;
      font-weight: 500;
    }
  }
`;
const LogoLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  align-items: center;
  width: 8.3rem;
  img {
    width: 100%;
    position: relative;
    z-index: 20;
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const AboutPage = () => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    axios.get("/api/profile").then((response) => {
      setProfile(response.data);
    });
  }, []);

  return (
    <>
      <Head>
        <title>About Me | Juan Sebastian Suarez Ramirez</title>
        <meta
          name="description"
          content="Learn more about Juan Sebastian Suarez Ramirez, a full-stack web developer specialized in AI, deep learning, and machine learning."
        />
        <meta
          name="keywords"
          content="Juan Sebastian Suarez Ramirez, Full-Stack Developer, Artificial Intelligence, Deep Learning, Machine Learning"
        />
        <link rel="canonical" href="https://negiupp.com/about" />
        <html lang="en" />

        <meta
          property="og:title"
          content="Juan Sebastian Suarez Ramirez - About Me"
        />
        <meta
          property="og:description"
          content="Learn more about Juan Sebastian Suarez Ramirez, a full-stack web developer specialized in AI, deep learning, and machine learning."
        />
        <meta
          property="og:image"
          content="https://my-page-negiupp.s3.amazonaws.com/1696629533343.png"
        />
        <meta property="og:url" content="https://negiupp.com/about" />
      </Head>
      <Layout>
        <RevealWrapper>
          {profile.length > 0 &&
            profile.map((prof) => (
              <AboutContainer key={prof._id}>
                {/*First section */}

                <ContainerSec>
                  <TitleMobile>
                    <span>
                      <Image
                        src={
                          "https://my-page-negiupp.s3.amazonaws.com/1688122773024.png"
                        }
                        alt="about-image"
                        width={200}
                        height={100}
                      />
                    </span>
                    <h1>Self summary</h1>
                    <span>
                      <Image
                        src={
                          "https://my-page-negiupp.s3.amazonaws.com/1688122773024.png"
                        }
                        alt="about-image"
                        width={200}
                        height={100}
                      />
                    </span>
                  </TitleMobile>

                  <ImageContainer>
                    <Image
                      src={
                        "https://my-page-negiupp.s3.amazonaws.com/1688550234499.jpg"
                      }
                      alt="about-image"
                      width={200}
                      height={100}
                    />
                  </ImageContainer>

                  <AboutCont>
                    <Title>
                      <span>
                        <Image
                          src={
                            "https://my-page-negiupp.s3.amazonaws.com/1688122773024.png"
                          }
                          alt="about-image"
                          width={200}
                          height={100}
                        />
                      </span>

                      <h1>Self summary</h1>

                      <span>
                        <Image
                          src={
                            "https://my-page-negiupp.s3.amazonaws.com/1688122773024.png"
                          }
                          alt="about-image"
                          width={200}
                          height={100}
                        />
                      </span>
                    </Title>

                    <InfoAboutContainer>
                      <Detail>
                        <h2>{prof.greeting}</h2>
                        <p>{prof.shortIntro}</p>
                      </Detail>
                    </InfoAboutContainer>
                  </AboutCont>
                </ContainerSec>

                {/*Second section */}

                <ContainerSec>
                  <ExpSelBrand>
                    <CeoContainer href={"/negiupp"}>
                      <LogoLink href={"/negiupp"}>
                        <Image
                          src="/assets/logofinalpulido-white-3.png" // nota la barra inclinada al inicio
                          alt="Logo"
                          width={200}
                          height={100}
                        />
                      </LogoLink>
                      <h1>What is NeGiUpp?</h1>
                    </CeoContainer>
                    <InfoCultureHitosContainerExpe>
                      <h2>Experiences</h2>
                      {prof.experinces.length > 0 &&
                        prof.experinces.map((exp, indexExp) => (
                          <div key={indexExp}>
                            <p>
                              {`${moment(exp.startDateExp)
                                .utc()
                                .format("MM/DD/YYYY")
                                .split("/")
                                .pop()} - 

                              ${moment(exp.endDateExp)
                                .utc()
                                .format("MM/DD/YYYY")
                                .split("/")
                                .pop()}`}
                            </p>
                            <h3>{exp.position}</h3>
                            <h4 className="company">{exp.company}</h4>
                          </div>
                        ))}
                    </InfoCultureHitosContainerExpe>
                  </ExpSelBrand>

                  <InfoCultureHitosContainer>
                    <h2>Education</h2>
                    {prof.education.length > 0 &&
                      prof.education.map((edu, indexEdu) => (
                        <div key={indexEdu}>
                          <p>
                            {moment(edu.gotDate)
                              .utc()
                              .format("MM/DD/YYYY")
                              .split("/")
                              .pop()}
                          </p>
                          <h3>{edu.certificationName}</h3>
                          <h4>{edu.institutionName}</h4>
                        </div>
                      ))}
                  </InfoCultureHitosContainer>
                </ContainerSec>
                <ContainerThirdSec>
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
                    <Credential>
                      <Image
                        src={
                          "https://my-page-negiupp.s3.amazonaws.com/1688631092905.png"
                        }
                        alt="about-image"
                        width={200}
                        height={100}
                      />
                    </Credential>
                    <p>more about me</p>
                    <h2>Credentials</h2>
                  </StartContainer>
                </ContainerThirdSec>
                {/*Third section */}
              </AboutContainer>
            ))}
        </RevealWrapper>
      </Layout>
    </>
  );
};

export default AboutPage;
