import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { styled } from "styled-components";


const Intro = styled.div`
p{
  color:#BCBCBC;
  text-transform: uppercase;
  opacity: 0.7;
}
h1{
  color: white;
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 600;
}
`

const LandindPageConatiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const ContainerSect = styled.div`
  display: flex;
  padding: 1.5rem;
  gap: 1.5rem;

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
`;
const Technologies = styled.div`
  padding: 1.5rem;
  width: 50%;
  border-radius: 30px;
  color: #ffff;
  background: linear-gradient(
    100deg,
    rgb(189 189 189 / 7%),
    rgba(255, 255, 255, 0)
  );
`;
const AboutInfo = styled.div`
  padding: 1.5rem;
  border-radius: 30px;
  width: 50%;
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
  width: 50%;
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
  }
`;

const ProyectPage = () => {
  const [proyect, setProyect] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/proyects?id=" + id).then((response) => {
      setProyect(response.data);
    });
  }, [id]);
  console.log(proyect);

  return (
    <>
      <Header />
      <Center>
        <Intro>
        <p>Branding - E-commerce</p>
        <h1>AESTHETIC DESIGN FOR BRAND NEW STARTUP</h1>
        </Intro>
        {!!proyect && (
          <>
            <LandindPageConatiner>
              <ImageContainer>
                <img src={proyect?.images} alt="image-proyect" />
              </ImageContainer>

              <ContainerSect>
                <Technologies>Stack of technologies</Technologies>
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
              <div>
                <button>Next Proyect</button>
              </div>
            </LandindPageConatiner>
          </>
        )}
      </Center>
      <Footer />
    </>
  );
};

export default ProyectPage;