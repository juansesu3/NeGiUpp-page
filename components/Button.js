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

  ${(props) =>
    props.artbutton &&
    css`
      margin: 0 auto;
    `}

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
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      &:hover {
        background-color: #4d61fc;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      }
    `}
  ${(props) =>
    props.primary &&
    css`
      background-color: #4d61fc;
      color: white;
      &:hover {
        background-color: #4d41fc;
      }
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
