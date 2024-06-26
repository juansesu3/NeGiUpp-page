import Layout from "@/components/Layout";
import ShowMobileDesign from "@/components/ShowMobileDesign";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { RevealWrapper } from "next-reveal";

const Intro = styled.div`
  margin-top: 3rem;
  p {
    color: #000;
    text-transform: uppercase;
    opacity: 0.7;
  }
  h1 {
   
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
  }
  span {
    color:  #f96e04;
  }
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const LandindPageConatiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const ContainerSect = styled.div`
  display: flex;
  padding: 1rem;
  gap: 1.5rem;
  flex-direction: column;
  border-radius: 1rem;
  background:#ffffff;
  
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  border-radius: 1rem;
  color: #ffff;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;
const AboutInfo = styled.div`
  padding: 1.5rem;
  border-radius: 1rem;
  width: 100%;
  color: #ffff;

  h3 {
    color: #f96e04;

    

  }
  p {
    color: #000;
    opacity: 0.8;
    letter-spacing: 0.5px;
    line-height: 1.56;
  }
 background:#ffffff;
  
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

const ImageContainer = styled.div`
  max-width: 70rem;

  img {
    width: 100%;
    max-height: 40rem;
    object-fit: cover;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
border-radius: 1rem;
    padding: 0;
  }
`;
const DescriptionConatiner = styled.div`
  width: 90%;
      display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
  h3 {
  color:  #f96e04;
  }
  p {
    color: #000;
  
    letter-spacing: 0.5px;
    line-height: 1.56;
  }
`;
const MoreDetail = styled.div`
  padding: 1rem 1.5rem;
  width: 100%;
  border-radius: 1rem;
  color: #ffff;
  text-align: center;
 background:#ffffff;
  
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  div {
    padding: 1rem 0;
  }

  p {
  color:  #f96e04;

    text-transform: capitalize;
    margin: 0 0 10px 0;
    font-size: 1.1rem;
  }
  h4 {
    margin: 0;
    color: #000;
    opacity: 0.9;
    font-size: 1.1rem;
    font-weight: 500;
    text-transform: capitalize;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    font-size: 1.2rem;
 color: #ffffff;
  text-decoration: none;
  align-items: center;
  background-color: #f96e04;
  padding: 0.5rem 1.2rem;
  border-radius: 0.75rem;
  font-weight: 500;
  transition: 0.3s ease-in-out;
   border: 1px solid #f96e04;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    color: #f96e04;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      border: 1px solid #f96e04;
  }
  
  }
`;
const IconsTech = styled.div`
  display: flex;
  justify-content: center;
`;
const ImageIconTechContainer = styled.div`
  width: 4rem;
  img {
    width: 100%;
  }
`;
const ContainerTech = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 1rem;
  color: #f96e04;
  padding: 1.5rem;
  width: 100%;
 background:#ffffff;
  
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  h3 {
 text-align: center;

    font-weight: 500;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;
const ImagesProyectsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
  }
`;
const ContImgPro = styled.div`
  img {
        object-fit: cover;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
border-radius: 1rem;
    width: 98.5%;
    @media screen and (min-width: 600px) {
      width: 100%;
    }
  }
`;
const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${(props) => (props.up ? "3rem" : "0rem")};
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;
const ContainerTechOnce = styled.div`
  display: flex;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 1rem;
  
  padding: 1.5rem;
  width: 100%;
  height: 100%;

  h3 {
    opacity: 0.5;
    margin-top: 0;
    font-weight: 400;
  }
  @media screen and (min-width: 768px) {
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
const LinkCodDep = styled.a`
  text-decoration: none;
  color: white;
  background:#f96e04;
  padding: 0.5rem 1rem;
  margin: 1rem;
  border-radius: 0.75rem;
  border: 1px solid   #f96e04;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: color .3s ease-in-out, background  .3s ease-in-out;
  &:hover {
  background:#fff;
  color: #f96e04;
  }
`;
const ProyectPage = () => {
  const [proyect, setProyect] = useState(null);
  const router = useRouter();
  const [technologies, setTechnologies] = useState([]);
  const { id } = router.query;
  const [proyects, setProyects] = useState([]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0); // Nuevo estado para el índice del proyecto actual

  useEffect(() => {
    //get proyects from ID
    axios.get("/api/proyects?id=" + id).then((response) => {
      setProyect(response.data);
      fetchingTech(response.data?.selectedTech);
    });
    //get proyects for pagination
    axios.get("/api/proyects").then((response) => {
      setProyects(response.data);
    });
  }, [id]);

  const fetchingTech = async (techIds) => {
    let data = [];
    for (const tectId of techIds) {
      await axios.get("/api/technologies?id=" + tectId).then((response) => {
        data.push(response.data);
      });
    }
    setTechnologies(data);
  };

  const handleNextProject = () => {
    const newIndex = (currentProjectIndex + 1) % proyects.length;
    setCurrentProjectIndex(newIndex);

    if (proyects.length > 0) {
      setProyect(proyects[newIndex]);
      if (proyects[newIndex].selectedTech.length > 0) {
        fetchingTech(proyects[newIndex].selectedTech);
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePreviousProject = () => {
    const newIndex =
      (currentProjectIndex - 1 + proyects.length) % proyects.length;
    setCurrentProjectIndex(newIndex);

    if (proyects.length > 0) {
      setProyect(proyects[newIndex]);
      if (proyects[newIndex].selectedTech.length > 0) {
        fetchingTech(proyects[newIndex].selectedTech);
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlehire = () => {
    router.push("/contact");
  };
  //console.log(proyect);
  return (
    <>
      <Head>
        <title>Project - {proyect?.title}</title>
        <meta name="description" content="..." />
      </Head>
      <Layout>
        <RevealWrapper>
          {!!proyect && (
            <>
              <Intro>
                <p>Branding - {proyect.title}</p>
                <h1>
                  AESTHETIC DESIGN FOR <span>{proyect.title}</span> App
                </h1>
              </Intro>
              <ContainerButtons>
                <LinkCodDep href={proyect.linkCode} target="_blank">
                  Code
                </LinkCodDep>
                <LinkCodDep href={proyect.linkDeploy} target="_blank">
                  Deploy
                </LinkCodDep>
              </ContainerButtons>
              <LandindPageConatiner>
                <ImageContainer>
                  <a
                    href={proyect?.images[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={proyect?.images[0]}
                      alt="image-proyect"
                      width={1500}
                      height={500}
                    />
                  </a>
                </ImageContainer>
                <ContainerSect>
                  <ContainerTech>
                    <h3>Technologies Stack</h3>
                    <ContainerTechOnce>
                      <Technologies>
                        {technologies.length > 0 &&
                          technologies.map((technology) => (
                            <IconsTech key={technology?._id}>
                              <ImageIconTechContainer>
                                <img
                                  src={technology?.images}
                                  alt="image tech"
                                />
                              </ImageIconTechContainer>
                            </IconsTech>
                          ))}
                      </Technologies>
                    </ContainerTechOnce>
                  </ContainerTech>
                  <AboutInfo>
                    <h3>About</h3>
                    <p>{proyect.about}</p>
                  </AboutInfo>
                </ContainerSect>

                <ShowMobileDesign proyect={proyect} />

                <ImageContainer>
                  <a
                    href={proyect?.images[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={proyect?.images[1]}
                      alt="image-proyect"
                      width={1500}
                      height={500}
                    />
                  </a>
                </ImageContainer>

                <ImagesProyectsContainer>
                  {proyect.images.slice(2).map((link) => (
                    <ContImgPro className="" key={link}>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        <Image
                          src={link}
                          alt="image-proyect"
                          width={1500}
                          height={500}
                        />
                      </a>
                    </ContImgPro>
                  ))}
                </ImagesProyectsContainer>
                <ContainerSect>
                  <MoreDetail>
                    <div>
                      <p>Realese Date</p>
                      <h4>{proyect.releaseDate}</h4>
                    </div>
                    <div>
                      <p>Client</p>
                      <h4>{proyect.client}</h4>
                    </div>
                    <div>
                      <p>Service</p>
                      <h4>{proyect.service}</h4>
                    </div>
                    <div>
                      <p>Proyect type</p>
                      <h4>{proyect.proyectType}</h4>
                    </div>
                  </MoreDetail>
                  <DescriptionConatiner>
                    <h3>Description</h3>
                    <p>{proyect.description}</p>
                  </DescriptionConatiner>
                </ContainerSect>
                <ImageContainer>
                  <Image
                    src={proyect?.images[0]}
                    alt="image-proyect"
                    width={1500}
                    height={500}
                  />
                </ImageContainer>
                <Pagination>
                  <ContainerButton>
                    <button onClick={handlePreviousProject}>Prev</button>
                  </ContainerButton>
                  <ContainerButton>
                    <button onClick={handlehire}>Hire me</button>
                  </ContainerButton>
                  <ContainerButton>
                    <button onClick={handleNextProject}>Next</button>
                  </ContainerButton>
                </Pagination>
              </LandindPageConatiner>
            </>
          )}
        </RevealWrapper>
      </Layout>
    </>
  );
};

export default ProyectPage;
