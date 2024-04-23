import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Principal = styled.div`
  border-radius: 1rem;
  padding: 2rem;
 background:#f96e04;
  
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const ContainerMobileDesignes = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImageContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 310px;
  width: 100%;
  height: 650px;
  aspect-ratio: 2 / 3;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ContImg = styled.div`
  z-index: -1;
  position: absolute;
  top: 2%;
  left: 4%;
  width: 91%;
  height: 95%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }
`;

const SectionTitle = styled.h1`
  text-align: center;
  color: #fff;
  margin-top: 0;
 
`;

const ShowMobileDesign = ({ proyect }) => {
  //console.log("DEbug >> ", proyect.imagesMobile);
  return (
    <Principal>
      <SectionTitle>
        Responsive
        <br /> <span>Design</span>
      </SectionTitle>
      <ContainerMobileDesignes>
        {proyect.imagesMobile.map((imageMobile) => (
          <ImageContainer key={imageMobile}>
            <Image
              src={"/assets/mobile-case.png"}
              alt="Responsive design view"
              layout="fill"
              objectFit="cover"
            />
            <ContImg>
              <Image
                src={imageMobile}
                alt="Responsive design view"
                layout="fill"
              />
            </ContImg>
          </ImageContainer>
        ))}
      </ContainerMobileDesignes>
    </Principal>
  );
};

export default ShowMobileDesign;
