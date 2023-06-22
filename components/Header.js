import Link from "next/link";
import { styled } from "styled-components";
import Center from "./Center";

const StyledHeader = styled.header`
  background-color: #0f0f0f;
`;

const LogoLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const Logo = styled.img`
  width: 50px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Center>
        <LogoLink href={"/"}>
          <Logo
            src="https://my-page-negiupp.s3.amazonaws.com/1687424109024.png"
            alt="logo-image"
          />
        </LogoLink>
        <nav>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/proyects"}>Proyects</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
        <Link href={"/contact"}> Let&apos;s talk</Link>
      </Center>
    </StyledHeader>
  );
};

export default Header;
