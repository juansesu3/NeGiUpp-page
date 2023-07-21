import { css, styled } from "styled-components";

const StyledDiv = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 10px;
`;

const Center = ({ children, route }) => {
  return <StyledDiv route={route}>{children}</StyledDiv>;
};

export default Center;
