import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import { Environment, OrbitControls } from "@react-three/drei";

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

  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding: 1rem;
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
  flex-direction: column-reverse;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const TextIntroduction = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;
const Discover = styled.p`
  opacity: 0.65;
  font-size: 1.2rem;
`;
const DontMiss = styled.p`
  font-size: 1.2rem;
  margin-top: 3rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const AvatarConatiner = styled.div`
  width: 100%;
  transform: scaleX(-1);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 50%;
    transform: scaleX(1);
  }
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
            Discover, learn, and grow with the Negiupp blog. Dive into enriching
            articles about web development, artificial intelligence, and
            e-commerce. With each click, unlock a door to new skills and
            knowledge. Start your journey with us today!
          </Discover>
          <DontMiss>
            Don&apos;t miss out! Subscribe now to comment and engage in our
            articles.
          </DontMiss>
          <FormSubscribeBlog />
        </TextIntroduction>
        <AvatarConatiner>
          <Canvas
            style={{
              width: `${containerWidth}px`,
              height: `${containerHeight}px`,
              margin: "0 auto",
            }}
            dpr={[0, 2]}
            gl={{ alpha: true }}
            shadows
            camera={{ position: [0, 0, 8], fov: 42 }}
          >
            <GradientBackground />
            <OrbitControls enabled={false} />
            <Suspense fallback={<MyLoader />}>
              <AvatarBlog />
            </Suspense>
            <Environment background={null} preset="sunset" />
          </Canvas>
        </AvatarConatiner>
      </IntroduccionContent>
    </ContainerBlogIntroduction>
  );
};

export default BlogIntroduction;
