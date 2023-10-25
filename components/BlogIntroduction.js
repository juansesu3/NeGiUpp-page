import Image from "next/image";
import React from "react";
import styled from "styled-components";

const ContainerBlogIntroduction = styled.div`
  margin-top: 3.5rem;
  color: white;
  background-image: linear-gradient(to bottom right, #212121, #131313);
  border: 1px solid #212121;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  border-radius: 1rem;
  text-align: center;
  height: 35rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding: 1rem;
`;

const TitleIntroduction = styled.div`
  h1 {
  }
`;

const IntroduccionContent = styled.div`
  display: flex;
`;

const TextIntroduction = styled.div`
  width: 50%;
`;

const AvatarConatiner = styled.div`
  width: 50%;
  transform: scaleX(-1);
`;

const BlogIntroduction = () => {
  return (
    <ContainerBlogIntroduction>
      <TitleIntroduction>
        <h1>
          Inicia tu Viaje con <br/> Negiupp <br/>Descifrando el Mundo del Desarrollo Web,
          IA y E-Commerce
        </h1>
      </TitleIntroduction>

      <IntroduccionContent>
        <TextIntroduction>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </TextIntroduction>
        <AvatarConatiner>
          <Image
            src="https://my-page-negiupp.s3.amazonaws.com/1696629533343.png"
            width={200}
            height={100}
            alt="profile image juan sebastian suarez ramirez"
          />
        </AvatarConatiner>
      </IntroduccionContent>
    </ContainerBlogIntroduction>
  );
};

export default BlogIntroduction;
