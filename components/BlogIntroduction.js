import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import { Environment, OrbitControls } from "@react-three/drei";

const ContainerBlogIntroduction = styled.div`
  margin-top: 3.5rem;
  color: white;
  text-align: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
 
`;

const TitleIntroduction = styled.div`
  h1 {
    margin-bottom: 1.5rem;
  }
  span {
    color: #4d61fc;
  }
`;

const IntroduccionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
 

  @media screen and (min-width: 768px) {
    flex-direction: row;
    
  }
`;

const TextIntroduction = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
   gap: 1rem;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;
const Discover = styled.div`
  padding: 1rem;
  opacity: 0.65;
  font-size: 1.2rem;
  background-image: linear-gradient(to bottom right, #212121, #131313);
  border: 1px solid #212121;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  border-radius: 1rem;
  min-height: 15rem;
    display: flex;
   align-items: center;
   justify-content: center;
`;

const AvatarConatiner = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

const SpecialPhrase = styled.div`
  font-size: 1.2rem;
  padding: 1rem;
  color: #4d61fc;
  background-image: linear-gradient(to bottom right, #212121, #131313);
  border: 1px solid #212121;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  border-radius: 1rem;
   min-height: 11.5rem;
   display: flex;
   align-items: center;
   justify-content: center;
`;

import { useEffect } from "react";
import { ShaderMaterial, PlaneGeometry, Mesh } from "three";
import MyLoader from "./MyLoader";

const AvatarBlog = React.lazy(() => import("./avatars/AvatarBlog"));
import FormSubscribeBlog from "./FormSubscribeBlog";

export const GradientBackground = () => {
  useEffect(() => {
    const material = new ShaderMaterial({
      vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }`,
      fragmentShader: `
      varying vec2 vUv;
      void main() {
        gl_FragColor = mix(vec4(0.105, 0.105, 0.105, 1.0), vec4(0.075, 0.075, 0.075, 1.0), vUv.y);
      }`,
    });
    const geometry = new PlaneGeometry(10, 10);
    const mesh = new Mesh(geometry, material);
    mesh.position.z = -5;
    // Add mesh to your scene
  }, []);

  return null;
};
const containerWidth = 350; // Define el ancho del contenedor según tus necesidades
const containerHeight = 300; // Define la altura del contenedor según tus necesidades

const BlogIntroduction = () => {
  return (
    <ContainerBlogIntroduction>
      <TitleIntroduction>
        <h1>
          Start Your Journey <br />
          with
          <br />
          <span>NeGiupp</span> <br />
        </h1>
      </TitleIntroduction>

      <IntroduccionContent>
        <TextIntroduction>
          <Discover>
            Looking to elevate your skills in web development, artificial
            intelligence, or e-commerce? Welcome to the NeGiupp blog. Dive into
            enriching articles that will take you from foundational knowledge to
            advanced mastery in these exciting fields.
          </Discover>
          <SpecialPhrase>
            <i>
              &quot;The man who can move mountains started by moving small
              stones. The only difference is that he never stopped trying.&quot;
            </i>
          </SpecialPhrase>
        </TextIntroduction>
        <AvatarConatiner>
          <FormSubscribeBlog />
        </AvatarConatiner>
      </IntroduccionContent>
    </ContainerBlogIntroduction>
  );
};

export default BlogIntroduction;
