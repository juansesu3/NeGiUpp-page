import CardCEO from "@/components/CardCEO";
import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import moment from "moment";

const ContainerFounders = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  margin-top: 5rem;
  color: white;
  height: 40rem;
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
    background-color: #888; /* Color de la barra de desplazamiento */
    border-radius: 4px; /* Ajusta el radio de borde según tus preferencias */
  }
  h2 {
    color: #ffff;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
  p {
    opacity: 0.8;
    line-height: 1.56;
  }
`;

const FoundersPage = () => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    axios.get("/api/profile").then((response) => {
      setProfile(response.data);
    });
  }, []);
  console.log(profile);

  return (
    <>
      <Header />
      <Center>
        {profile.length > 0 &&
          profile.map((pro) => (
            <ContainerFounders key={pro._id}>
              <CardCEO />

              <AboutMe>
                <h2>About me</h2>
                <div>
                  <p>{pro.introYourSelf}</p>
                  {/* <p>
                    Throughout my professional journey, I&apos;ve worked on
                    challenging projects that have allowed me to gain a solid
                    understanding of a wide range of technologies and tools.
                  </p>
                  <p>
                    {" "}
                    My expertise spans from client-side development using HTML,
                    CSS, and JavaScript to server-side implementation of
                    business logic and databases using technologies like Node.js
                    and both relational and non-relational databases.
                  </p>
                  <p>
                    {" "}
                    I&apos;m a strong advocate for best development practices,
                    focusing on writing clean, modular, and highly maintainable
                    code.
                  </p>
                  <p>
                    I have experience with popular frameworks and libraries such
                    as React.js, Next.js, Express, Django, as well as
                    integrating third-party APIs and cloud services. What truly
                    drives me is the ability to tackle new challenges and
                    continuously learn.
          </p>*/}
                </div>
                <div>
                  <h2>Language</h2>
                  {pro.languages.length > 0 &&
                    pro.languages.map((lang) => (
                      <p key={lang}>
                        {lang.language.replace(/^\w/, (c) => c.toUpperCase())}
                      </p>
                    ))}
                </div>
                <div>
                  <h2>Experiences</h2>
                  {pro.experinces.length > 0 &&
                    pro.experinces.map((exp) => (
                      <div key={exp.startDateExp}>
                        {`${moment(exp.startDateExp)
                          .utc()
                          .format("MM/DD/YYYY")} - 
                        
                              ${moment(exp.endDateExp)
                                .utc()
                                .format("MM/DD/YYYY")}`}
                        <h3>{exp.position}</h3>
                        <p>{exp.company}</p>
                      </div>
                    ))}
                </div>
                <div>
                  <h2>Skills</h2>
                  <div>
                    {pro.skills.length > 0 &&
                      pro.skills.map((skill) => (
                        <h3 key={skill.skill}>{skill.skill}</h3>
                      ))}
                  </div>
                </div>
              </AboutMe>
            </ContainerFounders>
          ))}
      </Center>
      <Footer />
    </>
  );
};

export default FoundersPage;
