import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { styled, keyframes } from "styled-components";
import moment from "moment";
import Image from "next/image";
import Layout from "@/components/Layout";
import Head from "next/head";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.5rem 0.5rem;
  @media screen and (min-width: 768px) {
    padding: 2.5rem 0.5rem;
  }
`;

const AboutCont = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;

const ImgCont = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 40%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: #121212;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  img {
    width: 100%;
    border-radius: 1rem;
  }
`;

const ContainerSec = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: #ffff;
  padding-top: 1.5rem;
  @media screen and (min-width: 768px) {
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
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
const TitleMobile = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  white-space: nowrap;

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
  @media screen and (min-width: 768px) {
    display: none;
    h1 {
      font-size: 3rem;
    }
  }
`;

const InfoAboutContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-radius: 1rem;
  margin: auto 0;
  background-color: #121212;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  h2 {
    margin: 0;
  }
  p {
    color: #ffff;
    opacity: 0.8;
    line-height: 2rem;
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    height: 22.25rem;
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
  background-color: #121212;
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
  @media screen and (min-width: 768px) {
    width: 30%;
  }
  transition: 0.3s;
  &:hover {
    color: #4d61fc;
  }
`;
const WorkTogetheContainer = styled(Link)`
  text-decoration: none;
  color: #ffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  padding: 2rem;
  border-radius: 1rem;
  background-color: #121212;
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
    svg {
      color: #ffff;
    }
  }
  @media screen and (min-width: 768px) {
    width: 40%;
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
  background-color: #121212;
  border-radius: 1rem;
  animation: ${pulseAnimation} 2.5s infinite;
  transform-origin: center;
  transition: 0.3s;
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
  &:hover {
    background-color: #4d61fc;
    h2 {
      color: white;
    }
  }

  img {
    margin-bottom: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    width: 30%;
  }
`;
const InfoCultureHitosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: #121212;
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
  @media screen and (min-width: 768px) {
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
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const AboutPage = () => {
  const router = useRouter();
  const [profile, setProfile] = useState({});
  useEffect(() => {
    axios.get("/api/profile").then((response) => {
      setProfile(response.data);
    });
  }, []);

  return (
    <>
         <Head>
        <title>About</title>
        <meta name="description" content="..." />
      </Head>
      <Layout>
        {profile.length > 0 &&
          profile.map((prof) => (
            <AboutContainer key={prof._id}>
              {/*First section */}
              <RevealWrapper delay={200} duration={1000}>
                <ContainerSec>
                  <TitleMobile>
                    <span>
                      <Image
                        src={
                          "https://my-page-negiupp.s3.amazonaws.com/1688122773024.png"
                        }
                        alt="about-image"
                        width={100}
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
                        width={100}
                        height={100}
                      />
                    </span>
                  </TitleMobile>
                  <ImgCont>
                    <ImageContainer>
                      <Image
                        src={
                          "https://my-page-negiupp.s3.amazonaws.com/1688550234499.jpg"
                        }
                        alt="about-image"
                        width={800}
                        height={100}
                      />
                    </ImageContainer>
                  </ImgCont>
                  <AboutCont>
                    <Title>
                      <span>
                        <Image
                          src={
                            "https://my-page-negiupp.s3.amazonaws.com/1688122773024.png"
                          }
                          alt="about-image"
                          width={100}
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
                          width={100}
                          height={100}
                        />
                      </span>
                    </Title>

                    <InfoAboutContainer>
                      <div>
                        <h2>{prof.greeting}</h2>
                        <p>{prof.shortIntro}</p>
                      </div>
                    </InfoAboutContainer>
                  </AboutCont>
                </ContainerSec>
              </RevealWrapper>
              {/*Second section */}
              <RevealWrapper delay={200} duration={1000}>
                <ContainerSec>
                  <InfoCultureHitosContainer>
                    <h2>Experiences</h2>
                    {prof.experinces.length > 0 &&
                      prof.experinces.map((exp, indexExp) => (
                        <div key={indexExp}>
                          <p>
                            {`${moment(exp.startDateExp)
                              .utc()
                              .format("MM/DD/YYYY")} - 

                              ${moment(exp.endDateExp)
                                .utc()
                                .format("MM/DD/YYYY")}`}
                          </p>
                          <h3>{exp.position}</h3>
                          <h4 className="company">{exp.company}</h4>
                        </div>
                      ))}
                  </InfoCultureHitosContainer>
                  <InfoCultureHitosContainer>
                    <h2>Education</h2>
                    {prof.education.length > 0 &&
                      prof.education.map((edu, indexEdu) => (
                        <div key={indexEdu}>
                          <p>
                            {moment(edu.gotDate).utc().format("MM/DD/YYYY")}
                          </p>
                          <h3>{edu.certificationName}</h3>
                          <h4>{edu.institutionName}</h4>
                        </div>
                      ))}
                  </InfoCultureHitosContainer>
                </ContainerSec>
                <ContainerThirdSec>
                  <CeoContainer href={"/negiupp"}>
                    <h1>What is NeGiUpp?</h1>
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
                    <Credential>
                      <Image
                        src={
                          "https://my-page-negiupp.s3.amazonaws.com/1688631092905.png"
                        }
                        alt="about-image"
                        width={500}
                        height={100}
                      />
                    </Credential>
                    <p>more about me</p>
                    <h2>Credentials</h2>
                  </StartContainer>
                </ContainerThirdSec>
              </RevealWrapper>
              {/*Third section */}
            </AboutContainer>
          ))}
      </Layout>
    </>
  );
};

export default AboutPage;
