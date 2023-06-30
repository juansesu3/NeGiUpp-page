import Link from "next/link";
import { css, styled } from "styled-components";
import Center from "./Center";
import { useRouter } from "next/router";

const StyledHeader = styled.header`
  background-color: #0f0f0f;
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
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const NavLink = styled(Link)`
  color: #676767;
  text-decoration: none;
  font-size: 1rem;
  transition: 0.3s;
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

const Header = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <LogoLink href={"/"}>
            <Logo
              src="https://my-page-negiupp.s3.amazonaws.com/1687424109024.png"
              alt="logo-image"
            />
          </LogoLink>
          <StyledNav>
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
        </Wrapper>
      </Center>
    </StyledHeader>
  );
};

export default Header;
