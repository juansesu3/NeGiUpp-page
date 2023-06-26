import Link from "next/link";
import { css, styled } from "styled-components";

const StyledButton = styled(Link)`
  text-align: center;
  width: 8rem;
  padding: 0.5rem 1rem;
  color: #4d61fc;
  text-decoration: none;
  border-color: #bcbcbc;
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  ${(props) =>
    props.read &&
    !props.outline &&
    css`
      background: linear-gradient(
        100deg,
        rgb(189 189 189 / 7%),
        rgba(255, 255, 255, 0)
      );
    `}

  ${(props) =>
    props.read &&
    props.outline &&
    css`
      background-color: transparent;
      color: white;
      border: 1px solid #4d61fc;
    `}
  ${(props) =>
    props.primary &&
    css`
      background-color: #4d61fc;
      color: white;
    `}
  ${(props) =>
    props.size === "l" &&
    css`
      font-size: 1.2rem;
    `}
`;
const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
