import { css, styled } from "styled-components";

const StyledDiv = styled.div`
  max-width: 70em;
  margin: 0 auto;
  padding: 0 0.5em;
  position: relative;
`;

const Center = ({ children, route }) => {
  return (<StyledDiv>{children}</StyledDiv>);
};

export default Center;
