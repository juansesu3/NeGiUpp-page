import CardCEO from "@/components/CardCEO";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import Link from "next/link";
import { RevealWrapper } from "next-reveal";
import Head from "next/head";
import Layout from "@/components/Layout";

const ContainerFounders = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  color: white;
  padding: 3rem 0.7rem 0rem 0.7rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 38rem;
    padding: 3rem 1rem 0rem 1rem;
  }
`;
const AboutMe = styled.div`
  flex: 1;
  overflow-y: scroll;
  scrollbar-width: thin; /* Oculta la barra de desplazamiento en navegadores que lo soporten */
  -ms-overflow-style: none; /* Oculta la barra de desplazamiento en Internet Explorer y Microsoft Edge */

  /* Estilos específicos para la barra de desplazamiento en navegadores WebKit (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 8px; /* Ajusta el ancho según tus preferencias */
    background-color: transparent; /* Oculta el fondo de la barra de desplazamiento */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f96e04; /* Color de la barra de desplazamiento */
    border-radius: 4px; /* Ajusta el radio de borde según tus preferencias */
  }
  h2 {
    color: #f96e04;
    font-size: 1.2rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
  }
  p {
    font-size: 16px;
    color: #000;
    opacity: 0.8;
    line-height: 1.56;
  }
`;
const ContainerExpEdu = styled.div`
  margin-top: 2rem;
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  h3 {
    color: #f96e04;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    font-weight: 400;
  }
  h4 {
    color: #000;
    opacity: 0.6;
    font-weight: 300;
    margin: 0.25rem 0;
    letter-spacing: 0.01rem;
  }
  h5 {
    color: #000;
    opacity: 0.8;
    font-weight: 500;
    font-size: 0.95rem;
    margin-top: 0.25rem;
    margin-bottom: 0.8rem;
  }
  p {
    margin: 0;
  }
`;
const Cont = styled.div`
  margin-bottom: 2rem;
  a {
    text-decoration: none;
  }
`;
const ContainerSkills = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`;
const ContSkil = styled.div`
  width: 50%;
  span {
    color: #000000;
    opacity: 1;
    font-weight: 500;
    font-size: 0.9rem;
  }
  h3 {
    color:#f96e04;
    opacity: 1;
    font-weight: 500;
    margin-bottom: 0;
    margin-top: 0rem;
  }
  p {
    color: #000000;
    opacity: 1;
    font-weight: 300;
    margin: 0;
  }
`;

const ContainerLenguages = styled.div`
  margin-top: 2rem;
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;
const ContainerLanguge = styled.div`
  margin-top: 0;
  margin-bottom: 0.5rem;
  h3 {
    color: #000;
    margin: 0;
    font-weight: 500;
  }
  p {
    color: #f96e04;
    opacity: 1;
    font-size: 0.9rem;
    margin: 0;
  }
`;

const FoundersPage = () => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    axios.get("/api/profile").then((response) => {
      setProfile(response.data);
    });
  }, []);
  //console.log(profile);

  return (
    <>
      <Head>
        <title>Negiupp Founder - Full-Stack Developer & AI Enthusiast</title>
        <meta
          name="description"
          content="Learn more about the founder of Negiupp, specialized in full-stack development, artificial intelligence, and more."
        />
      </Head>
      <Layout>
        {profile.length > 0 &&
          profile.map((pro) => (
            <RevealWrapper key={pro._id} delay={200} duration={1000}>
              <ContainerFounders>
                <CardCEO />

                <AboutMe>
                  <h2>About me</h2>
                  <div>
                    <p>
                      {pro.introYourSelf.split("tools.").shift() + " tools."}
                    </p>
                    <p>{`${(
                      pro.introYourSelf.split("databases.").shift() +
                      " databases."
                    )
                      .split("tools.")
                      .pop()}`}</p>
                    <p>
                      {pro.introYourSelf
                        .split("databases.")
                        .pop()
                        .split("code.")
                        .shift() + " code."}
                    </p>
                    <p>{pro.introYourSelf.split("code.").pop()}</p>
                  </div>
                  <ContainerLenguages>
                    <h2>Language</h2>
                    {pro.languages.length > 0 &&
                      pro.languages.map((lang) => (
                        <ContainerLanguge key={lang}>
                          <h3>
                            {lang.language.replace(/^\w/, (c) =>
                              c.toUpperCase()
                            )}
                          </h3>
                          <p>Level - {lang.levelLang}</p>
                        </ContainerLanguge>
                      ))}
                  </ContainerLenguages>
                  <ContainerExpEdu>
                    <h2>Experiences</h2>
                    {pro.experinces.length > 0 &&
                      pro.experinces.map((exp) => (
                        <Cont key={exp.startDateExp}>
                          <h4>
                            {`${moment(exp.startDateExp)
                              .utc()
                              .format("MM/DD/YYYY")} - 
                        
                              ${moment(exp.endDateExp)
                                .utc()
                                .format("MM/DD/YYYY")}`}
                          </h4>

                          <h3>{exp.position}</h3>
                          <h5>{exp.company}</h5>
                          <p>{exp.roldescription}</p>
                        </Cont>
                      ))}
                  </ContainerExpEdu>

                  <ContainerExpEdu>
                    <h2>Education</h2>
                    {pro.education.length > 0 &&
                      pro.education.map((edu) => (
                        <Cont key={edu.gotDate}>
                          <h4>
                            {`${moment(edu.gotDate)
                              .utc()
                              .format("MM/DD/YYYY")}`}
                          </h4>
                          <Link href={"/"}>
                            {" "}
                            <h3>{edu.certificationName} </h3>
                          </Link>
                          <Link href={"/"}>
                            {" "}
                            <h5>{edu.institutionName}</h5>
                          </Link>
                        </Cont>
                      ))}
                  </ContainerExpEdu>

                  <h2>Skills</h2>
                  <ContainerSkills>
                    {pro.skills.length > 0 &&
                      pro.skills.map((skill) => (
                        <ContSkil key={skill.skill}>
                          <span>{skill.progress}%</span>
                          <h3>{skill.skill}</h3>
                          <p>with practice every day better</p>
                        </ContSkil>
                      ))}
                  </ContainerSkills>
                </AboutMe>
              </ContainerFounders>
            </RevealWrapper>
          ))}
      </Layout>
    </>
  );
};

export default FoundersPage;
