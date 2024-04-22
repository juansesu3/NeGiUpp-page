import styled from "styled-components";
import Home2Section1 from "./Home2Section1";
import Home2Section2 from "./Home2Section2";
import Home2Section3 from "./Home2Section3";
import { RevealWrapper } from "next-reveal";

const PrincipalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  padding: 0 0.5rem;
`;

const Home2 = () => {
  return (
    <RevealWrapper>
      <PrincipalContainer>
        <Home2Section1 />
        <Home2Section2 />
        <Home2Section3 />
      </PrincipalContainer>
    </RevealWrapper>
  );
};

export default Home2;
