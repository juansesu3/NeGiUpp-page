import styled from "styled-components";
import Home2Section1 from "./Home2Section1";
import Home2Section2 from "./Home2Section2";
import Home2Section3 from "./Home2Section3";

const PrincipalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3.5rem;
  padding: 0 0.5rem;
`;

const Home2 = () => {
  return (
    <PrincipalContainer>
      <Home2Section1 />
      <Home2Section2 />
      <Home2Section3 />
    </PrincipalContainer>
  );
};

export default Home2;
