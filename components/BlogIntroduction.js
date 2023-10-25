import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
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
  height: auto;
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
  justify-content: space-between;
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
          Start Your Journey with Negiupp: Decrypting the World of Web
          Development, AI, and E-Commerce
        </h1>
      </TitleIntroduction>

      <IntroduccionContent>
        <TextIntroduction>
          <p>
            Discover, learn, and grow with the Negiupp blog. Dive into enriching
            articles about web development, artificial intelligence, and
            e-commerce. With each click, unlock a door to new skills and
            knowledge. Start your journey with us today!
          </p>
          <p>
            Don&apos;t miss out! Subscribe now to comment and engage in our articles.
          </p>
          <input type="email" placeholder="email "/>
        </TextIntroduction>
        <AvatarConatiner>
          <Image
            src="https://my-page-negiupp.s3.amazonaws.com/1696629533343.png"
            width={200}
            height={100}
            alt="profile image juan sebastian suarez ramirez"
          />
          {/*     <Canvas shadows camera={{ position: [0, 0, 8], fov: 30 }}>
            <OrbitControls />
            <mesh>
              <boxGeometry args={[3, 3, 3]}/>
              <meshNormalMaterial />
            </mesh>
          </Canvas>*/}
        </AvatarConatiner>
      </IntroduccionContent>
    </ContainerBlogIntroduction>
  );
};

export default BlogIntroduction;
