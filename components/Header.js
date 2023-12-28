import Link from "next/link";
import { css, styled } from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DowloadIcon from "./icons/DowloadIcon";
import Image from "next/image";
import BackArrow from "./icons/BackArrow";

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
  width: 30px;
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
    background-image: linear-gradient(to bottom right, #000000, #131313);
  margin: 0 auto;
  position: relative;
  /* Estilos para tu componente */
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  height: ${(props) => (props.isVisible ? "auto" : "0")};
  transition: opacity 0.3s ease, height 0.3s ease; /* Agregar transiciones para opacidad y altura */
  overflow: hidden; /* Para ocultar el contenido del componente cuando está colapsado */

`;
const WrapperMax = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  padding: 0rem 0.5rem;

  @media screen and (min-width: 768px) {
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
   transition: height 0.5s ease; 
  align-items: center;
  gap: 40px;
  position: fixed;
  top: 38px;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px 25px 25px;
  background-image: ${(props) =>
    props.isVisible
      ? "none"
      : "linear-gradient(to bottom right, #000000, #131313)"};
  background-color: ${(props) => (props.isVisible ? "transparent" : "inherit")};

  z-index: 10;
  gap: 4rem;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
    background-image: ${(props) =>
      props.isVisible
        ? "linear-gradient(to bottom right, #212121, #131313)"
        : "none"};
    background-color: ${(props) =>
      props.isVisible ? "inherit" : "transparent"};
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
  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
`;

const LetsTalk = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  align-items: center;
  background-color: #323232;
  padding: 0.2rem 1.2rem;
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
  left: 27.5px;
  transform: translate(-50%, -50%);
  color: #f5f5f7;
  padding: 0;
  font-size: 15px;
  @media screen and (min-width: 768px) {
    display: none;
  }
  width: 30px;
  img {
    width: 100%;
    position: relative;
    z-index: 20;
  }
`;
const LogoStore = styled.svg`
  width: 18px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 45%;
  left: 82%;
  transform: translate(-50%, -50%);
  color: #f5f5f7;
  padding: 0;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const LogoSearch = styled.svg`
  width: 18px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 45%;
  left: 70%;
  transform: translate(-50%, -50%);
  color: #f5f5f7;
  padding: 0;
`;
const Curriculum = styled.div`
  z-index: 10;
  width: 100%;
  padding: 0;
  background-image: linear-gradient(
    to bottom right,
    rgba(0, 0, 0, 0.7),
    rgba(15, 15, 15, 0.7)
  );
  color: white;
  ${(props) =>
    props.mobileNavActive === true &&
    css`
      top: 0px;
    `}
`;

const CurriculumMax = styled.div`
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.65rem;
  @media screen and (min-width: 768px) {
    padding: 0.5rem 0.5rem;
  }
`;

const Dowload = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background-color: #4d61fc;
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.5px;
  border: none;
  border-radius: 0.5rem;
  padding: 0.4rem 1.2rem;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #3950ff;
  }
  @media screen and (min-width: 768px) {
    width: 8.5rem;
  }
`;
const TitleCur = styled.div`
  width: 65%;
  @media screen and (min-width: 768px) {
    width: 75%;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  const goToStore = () => {
    window.open("https://negiupp.myshopify.com/", "_blank");
  };

  return (
    <StyledHeader>
      <WrapperFull route={route} isVisible={scrollDirection === "up"}>
        <WrapperMax>
          <LetsTalk href={"/contact"}> Let&apos;s Talk</LetsTalk>
          <StyledNav route={route} mobileNavActive={mobileNavActive}>
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
              active={pathname === "/blog" ? true : false}
              href={"/blog"}
            >
              Blog
            </NavLink>
{/*
            <NavLink
              route={route}
              active={pathname === "/avatar" ? true : false}
              href={"/avatar"}
            >
              Avatar
            </NavLink> */}

            <NavLink
              route={route}
              active={pathname === "/proyects" ? true : false}
              href={"/proyects"}
            >
              Projects
            </NavLink>
            <NavLink route={route} href={"/"} onClick={goToStore}>
              Store
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
          <LogoLink route={route} href={"/"}>
            <Image
              src="/assets/logofinalpulido-white-3.png" // nota la barra inclinada al inicio
              alt="Logo"
              width={400}
              height={200}
            />
          </LogoLink>

          <NavButton route={route} onClick={toggleCross} isCross={isCross}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
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

          <LogoMobile>
            {" "}
            <Image
              src="/assets/logofinalpulido-white-3.png" // nota la barra inclinada al inicio
              alt="Logo"
              width={400}
              height={200}
            />
          </LogoMobile>
          <LogoStore onClick={goToStore}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                clipRule="evenodd"
              />
            </svg>
          </LogoStore>
        </WrapperMax>
      </WrapperFull>

    <Curriculum mobileNavActive={mobileNavActive}>
        <CurriculumMax>
          <TitleCur>
            <BackArrow />
          </TitleCur>
          <Dowload
            target="_blank"
            href="https://my-page-negiupp.s3.amazonaws.com/1703144853217.pdf"
          >
            Curriculum
            <DowloadIcon />
          </Dowload>
        </CurriculumMax>
      </Curriculum>


  
    </StyledHeader>
  );
};

export default Header;
