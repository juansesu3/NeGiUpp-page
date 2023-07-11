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
const ContainerExpEdu = styled.div`
  margin-top: 2.5rem;
  h2 {
    margin: 0;
  }
  h3 {
    color: #4d61fc;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-weight: 400;
  }
  h4 {
    color: #bcbcbc;
    opacity: 0.6;
    font-weight: 500;
    margin: 0.5rem 0;
    letter-spacing: 0.01rem;
  }
  h5 {
    color: #bcbcbc;
    opacity: 0.6;
    font-weight: 400;
    font-size: 0.9;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  p {
    margin: 0;
  }
`;
const Cont = styled.div`
  margin-top: 2.5rem;
`;
const ContainerSkills = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 1.5rem;


`
const ContSkil = styled.div`
width: 50%;
span{
  color:#BCBCBC;
  opacity: .6;
  font-weight: 500;
 font-size: .9rem;

}
h3{
  color: #ffff;
  opacity: .9;
  font-weight: 500;
  margin-bottom: 0;
  margin-top: .5rem;
}
p{
  color:#BCBCBC;
  opacity: .6;
  margin: 0;
}
`

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
                  <p>{pro.introYourSelf.split("tools.").shift() + " tools."}</p>
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
                <div>
                  <h2>Language</h2>
                  {pro.languages.length > 0 &&
                    pro.languages.map((lang) => (
                      <p key={lang}>
                        {lang.language.replace(/^\w/, (c) => c.toUpperCase())}
                      </p>
                    ))}
                </div>
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
                <h2>Education</h2>
                <ContainerExpEdu>
                 
                  {pro.education.length > 0 &&
                    pro.education.map((edu) => (
                      <Cont key={edu.gotDate}>
                        <h4>
                          {`${moment(edu.gotDate).utc().format("MM/DD/YYYY")}`}
                        </h4>
                        <h3>{edu.certificationName}</h3>
                        <h5>{edu.institutionName}</h5>
                        <div>
                          <img src="/" alt="image certification" />
                        </div>
                      </Cont>
                    ))}
                </ContainerExpEdu>

                <h2>Skills</h2>
                <ContainerSkills>
                 
                  
                    {pro.skills.length > 0 &&
                      pro.skills.map((skill) => (
                        <ContSkil key={skill.skill}>
                        <span>100%</span>
                        <h3 >{skill.skill}</h3>
                        <p>
                          Non enim praeesent
                        </p>
                        </ContSkil>
                      ))}
                  </ContainerSkills>
                
              </AboutMe>
            </ContainerFounders>
          ))}
      </Center>
      <Footer />
    </>
  );
};

export default FoundersPage;
