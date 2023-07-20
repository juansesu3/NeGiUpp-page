import { styled } from "styled-components";

const StyledDiv = styled.div`
  width: fit-content;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
`;

const Center = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Center;
