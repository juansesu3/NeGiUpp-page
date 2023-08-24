import Link from "next/link";
import { css, styled } from "styled-components";
import { useRouter } from "next/router";
import Bars from "./icons/Bars";
import { useEffect, useState, useRef } from "react";
import DowloadIcon from "./icons/DowloadIcon";
import Image from "next/image";

const StyledHeader = styled.header`
  background-color: ${(props) => (props.isVisible ? "#181819" : "transparent")};
  position: sticky;
  top: 0;
  z-index: 10;
  height: 48px;
`;

const LogoLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: none;
  align-items: center;
  width: 50px;
  img {
    width: 100%;
    position: relative;
    z-index: 20;
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;


const WrapperFull = styled.div`
  background-color: ${(props) => (props.isVisible ? "#1d1d1f" : "transparent")};
  margin: 0 auto;
  position: relative;
  /* Estilos para tu componente */
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  height: ${(props) => (props.isVisible ? "auto" : "0")};
  transition: opacity 0.3s ease, height 0.3s ease; /* Agregar transiciones para opacidad y altura */
  overflow: hidden; /* Para ocultar el contenido del componente cuando está colapsado */
`;
const WrapperMax = styled.div`
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0rem 0.5rem;

  @media screen and (min-width: 900px) {
    padding: 0.3rem 0.5rem;
  }
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
  padding: 40px 25px 25px;
  background-color: #1d1d1f;
  z-index: 10;
  gap: 4rem;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const NavLink = styled(Link)`
  display: block;
  color: #c1c1c3;
  text-decoration: none;
  font-size: 1rem;
  transition: 0.3s;
  padding: 5px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
  ${(props) =>
    props.active === true &&
    css`
      color: #ffff;
      text-decoration: underline;

      text-decoration-thickness: 0.15rem;
    `}
  &:hover {
    color: #ffffff;
  }
`;

const LetsTalk = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  align-items: center;
  background-color: #323232;
  padding: 10px 36px;
  border-radius: 0.6rem;
  font-weight: 500;
  display: none;
  transition: 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  &:hover {
    background-color: #ffffff;
    color: #0f0f0f;
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
const NavButton = styled.button`
  width: 25px;
  background-color: transparent;
  border: 0;
  color: #f5f5f7;
  padding: 5px 0px;
  cursor: pointer;
  svg {
    stroke: ${(props) => (props.isCross ? "#4d61fc" : "currentColor")};
    transition: stroke 0.3s ease-in-out;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const LogoMobile = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f5f5f7;
  padding: 0;
`;
const Curriculum = styled.div`
  z-index: 10;
  width: 100%;
  padding: 0 ;
  background-color: #121212f5;
  color: white;
  ${(props) =>
    props.mobileNavActive === true &&
    css`
      top: 0px;
    `}
`;
const CurriculumMax = styled.div`
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.5rem;
`;

const Dowload = styled.button`
  background-color: #4d61fc;
  width: 35%;
  border: none;
  border-radius: 0.9rem;
  padding: 0.3rem;
  color: white;

  @media screen and (min-width: 768px) {
    width: 8rem;
  }
`;
const TitleCur = styled.div`
  width: 65%;
  @media screen and (min-width: 768px) {
    width: 75%;
  }
  display: flex;
  justify-content: space-between;
  color: #e4e4e6;
  h2 {
    margin: 0;
    letter-spacing: inherit;
    line-height: inherit;
    font-size: 18px;
    font-weight: 700;
  }
`;

const Header = ({ route }) => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [mobileNavActive, setMobileNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      prevScrollY.current = currentScrollY;
    };

    let prevScrollY = { current: window.scrollY };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const router = useRouter();
  const { pathname } = router;

  const [isCross, setIsCross] = useState(false);

  const toggleCross = () => {
    setMobileNavActive((prev) => !prev);
    setIsCross((prevIsCross) => !prevIsCross);
  };

  return (
    <StyledHeader>
      <WrapperFull route={route} isVisible={scrollDirection === "up"}>
        <WrapperMax>
          <LogoLink route={route} href={"/"}>
            <Image
              src="https://my-page-negiupp.s3.amazonaws.com/1690838289355.png"
              alt="logo-image"
              width={100}
              height={100}
            />
          </LogoLink>
          <StyledNav route={route} mobileNavActive={mobileNavActive}>
            <NavButton route={route} onClick={toggleCross} isCross={isCross}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                {isCross ? (
                  <path d="M4.75 4.75l14.5 14.5M4.75 19.25l14.5-14.5" />
                ) : (
                  <path d="M3.75 9h16.5m-16.5 6.75h16.5" />
                )}
              </svg>
            </NavButton>
            <NavLink
              route={route}
              active={pathname === "/" ? true : false}
              href={"/"}
            >
              Home
            </NavLink>
            <NavLink
              route={route}
              active={pathname === "/about" ? true : false}
              href={"/about"}
            >
              About
            </NavLink>
            <NavLink
              route={route}
              active={pathname === "/proyects" ? true : false}
              href={"/proyects"}
            >
              Proyects
            </NavLink>
            {/*
          <NavLink
            route={route}
            active={pathname === "/blog" ? true : false}
            href={"/blog"}
          >
            Blog
          </NavLink> */}
            <NavLink
              route={route}
              active={pathname === "/contact" ? true : false}
              href={"/contact"}
            >
              Contact
            </NavLink>
          </StyledNav>
          <LetsTalk href={"/contact"}> Let&apos;s talk</LetsTalk>
          <NavButton route={route} onClick={toggleCross} isCross={isCross}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isCross ? (
                <path d="M4.75 4.75l14.5 14.5M4.75 19.25l14.5-14.5" />
              ) : (
                <path d="M3.75 9h16.5m-16.5 6.75h16.5" />
              )}
            </svg>
          </NavButton>
          <LogoMobile>negiupp.com</LogoMobile>
        </WrapperMax>
      </WrapperFull>
      <Curriculum mobileNavActive={mobileNavActive}>
        <CurriculumMax>
          <TitleCur>
            <h2>Curriculum</h2>
          </TitleCur>
          <Dowload>Download CV</Dowload>
        </CurriculumMax>
      </Curriculum>
    </StyledHeader>
  );
};

export default Header;
