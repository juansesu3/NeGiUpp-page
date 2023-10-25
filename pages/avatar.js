import Layout from "@/components/Layout";
import { Canvas } from "@react-three/fiber";
import { Experience } from "@/components/Experience";
import styled from "styled-components";

const AvatarConatiner = styled.div`
  height: 50vh;
  margin-top: 3.5rem;
`;

const AvatarPage = () => {
  return (
    <Layout>
      <AvatarConatiner>
        <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
          <color attach="background" args={["#0f0f0f"]} />
          <Experience />
        </Canvas>
      </AvatarConatiner>
    </Layout>
  );
};

export default AvatarPage;
