import Link from "next/link";
import { css, styled } from "styled-components";
import Center from "./Center";
import { useRouter } from "next/router";
import Bars from "./icons/Bars";
import { useState } from "react";

const StyledHeader = styled.header`
  background-color: #0f0f0f;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding-right:.5rem; 
  height: 100%;
  position: relative;
     
`;

const LogoLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 70px;
`;

const Logo = styled.img`
  width: 100%;
  position: relative;
  z-index: 20;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const StyledNav = styled.nav`
  ${(props) =>
    props.mobileNavActive
      ? `
      display: block;
      text-align: center;
`
      : `
      display: none;
`}
  transition: 1s;
  align-items: center;
  gap: 40px;
  position: fixed;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 80px 25px 25px;

  background-color: #0f0f0f;
  z-index: 10;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const NavLink = styled(Link)`
  display: block;
  color: #676767;
  text-decoration: none;
  font-size: 1rem;
  transition: 0.3s;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
  ${(props) =>
    props.active === true &&
    css`
      color: #ffff;
      text-decoration: underline;
    `}
  &:hover {
    color: #ffffff;
  }
`;

const LetsTalk = styled(Link)`
  display: flex;
  color: #ffffff;
  text-decoration: none;
  align-items: center;
  background-color: #323232;
  padding: 12px 36px;
  border-radius: 16px;
  font-weight: 500;
  transition: 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  &:hover {
    background-color: #ffffff;
    color: #0f0f0f;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 40px;
  height: 40px;
  border: 0;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  position: relative;
  z-index: 20;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const router = useRouter();
  const { pathname } = router;
  const [mobileNavActive, setMobileNavActive] = useState(false);

  return (
    <StyledHeader>
      
        <Wrapper>
          <LogoLink href={"/"}>
            <Logo
              src="https://my-page-negiupp.s3.amazonaws.com/1687424109024.png"
              alt="logo-image"
            />
          </LogoLink>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink active={pathname === "/" ? true : false} href={"/"}>
              Home
            </NavLink>
            <NavLink
              active={pathname === "/about" ? true : false}
              href={"/about"}
            >
              About
            </NavLink>
            <NavLink
              active={pathname === "/proyects" ? true : false}
              href={"/proyects"}
            >
              Proyects
            </NavLink>
            <NavLink
              active={pathname === "/blog" ? true : false}
              href={"/blog"}
            >
              Blog
            </NavLink>
            <NavLink
              active={pathname === "/contact" ? true : false}
              href={"/contact"}
            >
              Contact
            </NavLink>
          </StyledNav>
          <LetsTalk href={"/contact"}> Let&apos;s talk</LetsTalk>

          <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
            <Bars />
          </NavButton>
        </Wrapper>
     
    </StyledHeader>
  );
};

export default Header;
