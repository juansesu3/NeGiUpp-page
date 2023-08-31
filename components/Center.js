import { css, styled } from "styled-components";

const StyledDiv = styled.div`
  max-width: 980px;
  margin: 0 auto;
  position: relative;
  padding: 0 0.1rem;
`;

const Center = ({ children, route }) => {
  return (<StyledDiv>{children}</StyledDiv>);
};

export default Center;
