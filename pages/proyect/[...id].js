import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const Intro = styled.div`
  p {
    color: #bcbcbc;
    text-transform: uppercase;
    opacity: 0.7;
  }
  h1 {
    color: white;
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 600;
  }
  span{
    color: #4d61fc;
  }
`;

const LandindPageConatiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const ContainerSect = styled.div`
  display: flex;
  padding: 1.5rem;
  gap: 1.5rem;
  flex-direction: column;
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
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const Technologies = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  width: 100%;
  border-radius: 30px;
  color: #ffff;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;
const AboutInfo = styled.div`
  padding: 1.5rem;
  border-radius: 30px;
  width: 100%;
  color: #ffff;

  h3 {
    opacity: 0.5;
    margin-top: 0;
    font-weight: 400;
  }
  p {
    color: #fff;
    opacity: 0.8;
    letter-spacing: 0.5px;
    line-height: 1.56;
  }
  background: linear-gradient(
    100deg,
    rgb(189 189 189 / 7%),
    rgba(255, 255, 255, 0)
  );
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

const ImageContainer = styled.div`
  max-width: 70rem;

  img {
    width: 100%;
    max-height: 40rem;
  }
`;
const DescriptionConatiner = styled.div`
  width: 90%;
  color: #bcbcbc;
  h3 {
    opacity: 0.5;
    margin-top: 0;
    font-weight: 400;
  }
  p {
    color: #fff;
    opacity: 0.8;
    letter-spacing: 0.5px;
    line-height: 1.56;
  }
`;
const MoreDetail = styled.div`
  padding: 1rem 3rem;
  width: 100%;
  border-radius: 30px;
  color: #ffff;
  background: linear-gradient(
    100deg,
    rgb(189 189 189 / 7%),
    rgba(255, 255, 255, 0)
  );
  div {
    padding: 1rem 0;
  }

  p {
    color: #bcbcbc;
    opacity: 0.6;
    text-transform: capitalize;
    margin: 0 0 10px 0;
    font-size: 1.1rem;
  }
  h4 {
    margin: 0;
    color: #ffff;
    opacity: 0.9;
    font-size: 1.1rem;
    font-weight: 500;
    text-transform: capitalize;
  }
  @media screen and (min-width: 768px){
    width: 50%;
    
  }
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;

  button {
    border: 0;
    padding: 2rem 3rem;
    border-radius: 15px;
    cursor: pointer;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.05)
    );
    color: #ffff;
    opacity: 0.9;
    font-size: 2.5rem;
    font-weight: 500;
    transition: 0.4s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
      /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
      /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
      /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
    &:hover {
      background-color: white;
      color: black;
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
  gap: 1rem;
  border-radius: 30px;
  color: #ffff;
  padding: 1.5rem;
  width: 100%;
  background: linear-gradient(
    100deg,
    rgb(189 189 189 / 7%),
    rgba(255, 255, 255, 0)
  );
  h3 {
    opacity: 0.5;
    margin-top: 0;
    font-weight: 400;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

const ProyectPage = () => {
  const [proyect, setProyect] = useState([]);
  const router = useRouter();
  const [technologies, setTechnologies] = useState([]);
  const { id } = router.query;
  const fetchingTech = async (techIds) => {
    let data = [];
    for (const tectId of techIds) {
      await axios.get("/api/technologies?id=" + tectId).then((response) => {
        data.push(response.data);
        
      });
      setTechnologies(data);
    }
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/proyects?id=" + id).then((response) => {
      setProyect(response.data);
      fetchingTech(response.data.selectedTech);
    });
  }, [id]);

  console.log(technologies);

  return (
    <>
      <Header />
      <Center>
        {!!proyect && (
          <>
            <Intro>
              <p>Branding - {proyect.title}</p>
              <h1>AESTHETIC DESIGN FOR <span>{proyect.title}</span> App</h1>
            </Intro>
            <LandindPageConatiner>
              <ImageContainer>
                <img src={proyect?.images} alt="image-proyect" />
              </ImageContainer>

              <ContainerSect>
                <ContainerTech>
                  <h3>Technologies Stack</h3>
                  <Technologies>
                    {technologies.length > 0 &&
                      technologies.map((technology) => (
                        <IconsTech key={technology._id}>
                          <ImageIconTechContainer>
                            <img src={technology.images} />
                          </ImageIconTechContainer>
                        </IconsTech>
                      ))}
                  </Technologies>
                </ContainerTech>
                <AboutInfo>
                  <h3>About</h3>
                  <p>{proyect.about}</p>
                </AboutInfo>
              </ContainerSect>
              <ImageContainer>
                <img src={proyect?.images} alt="image-proyect" />
              </ImageContainer>

              <div>
                <div>1</div>
                <div>2</div>
                <div>2</div>
                <div>4</div>
              </div>

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
                <img src={proyect?.images} alt="image-proyect" />
              </ImageContainer>
              <ContainerButton>
                <button>Next Proyect</button>
              </ContainerButton>
            </LandindPageConatiner>
          </>
        )}
      </Center>
      <Footer />
    </>
  );
};

export default ProyectPage;
