import Link from "next/link";
import { css, styled } from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DowloadIcon from "./icons/DowloadIcon";
import Image from "next/image";
import BackArrow from "./icons/BackArrow";
import { Button, Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, MenuItem } from "@mui/material";
import Menu, { MenuProps } from '@mui/material/Menu';
import ArrowDown from "./icons/ArrowDown";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import WebDevelop from "./icons/WebDevelop";
import DeskTopDevelop from "./icons/DeskTopDevelop";
import MobileDevelop from "./icons/MobileDevelop";
import ArrowUp from "./icons/ArrowUp";

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
    background:#ffff;
  margin: 0 auto;
  position: relative;
  /* Estilos para tu componente */
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  height: ${(props) => (props.isVisible ? "auto" : "0")};
  transition: opacity 0.3s ease, height 0.3s ease; /* Agregar transiciones para opacidad y altura */
  overflow: hidden; /* Para ocultar el contenido del componente cuando está colapsado */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius:0.75rem ;
  padding: 1rem;
  margin: 0.5rem;
  margin-bottom: 0;
    @media screen and (min-width: 768px) {
    padding: 0.5rem;
  }


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
      display: flex;
      text-align: center;
      flex-direction: column;
      
`
      : `
          transform: translateX(100%);
              display: flex;
      text-align: center;
      flex-direction: column;
`}
transition: transform 0.5s ease-in-out;
  align-items: center;
  gap: 40px;
  position: fixed;
  top: 75px;
  bottom: 0;
  left: 0;
  right: 0;
  margin:0 0.5rem;
  padding: 30px 25px 25px;
  border-radius: 0.75rem;
  background-image: ${(props) =>
    props.isVisible
      ? "none"
      : "linear-gradient(to bottom right, #ffffff, #ffffff)"};
  background-color: ${(props) => (props.isVisible ? "#fff" : "#fff")};

  z-index: 10;
  gap: 1.5rem;
  @media screen and (min-width: 768px) {
    transform: translateX(0%);
    gap: 4rem;
    display: flex;
flex-direction: row;
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

const NavLinkOptions = styled.span`
  display: flex;
  gap: 0.35rem;
  justify-content: center;
  align-items: center;
  color: #000000;
  text-decoration: none;
  font-size: 1rem;
  transition: 0.3s;
  padding: 5px 0;
    display: none;
    cursor: pointer;
  &:hover {
    color: #f96e04;
  }
  @media screen and (min-width: 768px) {
display: flex;
  padding: 0;
  }
  ${(props) =>
    props.active === true &&
    css`
      color: #f96e04;
      text-decoration: underline;
      text-decoration-thickness: 0.15rem;
    `}

  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
  




`
const NavLink = styled(Link)`
  display: block;
  color: #000000;
  text-decoration: none;
  font-size: 1rem;
  transition: 0.3s;
  padding: 5px 0;
  &:hover {
    color: #f96e04;
  }
  @media screen and (min-width: 768px) {
    padding: 0;
  }
  ${(props) =>
    props.active === true &&
    css`
      color: #f96e04;
      text-decoration: underline;
      text-decoration-thickness: 0.15rem;
    `}

  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
`;

const LetsTalk = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  align-items: center;
  background-color: #f96e04;
  padding: 0.5rem 1.2rem;
  border-radius: 0.75rem;
  font-weight: 500;
  display: none;
  transition: 0.3s ease-in-out;
   border: 1px solid #f96e04;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #ffffff;
    color: #f96e04;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      border: 1px solid #f96e04;
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
const NavButton = styled.button`
  width: 25px;
  background-color: transparent;
  border: 0;
  color: #000000;
  padding: 5px 0px;

  cursor: pointer;
  svg {
    stroke: ${(props) => (props.isCross ? "#f96e04" : "currentColor")};
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
  color: #000000;
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
    rgba(0, 0, 0, 0.5),
    rgba(15, 15, 15, 0.5)
  );
  backdrop-filter: blur(10px);
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
 background-image: linear-gradient(110deg,#00c8ff,#00b4e6 19%,#00a0cc 27%,#008cb3 34%,#0080a3 41%,#0080a3 47%,#0080a3 53%,#0080a3 59%,#008ca8 66%,#009fad 73%,#00b3a7 81%,#02c097);
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

const ListStyled =styled(List)`

@media screen and (min-width: 768px) {
  display: none;
  }
`
const IconContainer = styled.div`
svg{
  width: 1.2rem;
  color: #f96e04;
}
`
const ArrowIconContainer = styled.div`
display: flex;
align-items: center;

svg{
  width: 1rem;
}

`



const LinkServices = styled(Link)`
display: flex;
align-items: center;
gap:1rem;
text-decoration: none;
padding: 0.5rem;
color: #000;
svg{
  width:1.5rem;
  color: #f96e04;
}

`
const LinkMobileServices = styled(Link)`
display: flex;
align-items: center;

text-decoration: none;

color: #000;
svg{
  width:1.5rem;
  color: #f96e04;
}

`


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
  const [anchorEl, setAnchorEl] = useState(null);
  const openPopUp = Boolean(anchorEl);




  const handleClickPopUp = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
              onClick={toggleCross}
            >
              Home
            </NavLink>
            <NavLink
              route={route}
              active={pathname === "/about" ? true : false}
              href={"/about"}
              onClick={toggleCross}
            >
              About
            </NavLink>
            <NavLink
              route={route}
              active={pathname === "/blog" ? true : false}
              href={"/blog"}
              onClick={toggleCross}
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
              onClick={toggleCross}
            >
              Projects
            </NavLink>

      


            <ListStyled
      

      aria-labelledby="nested-list-subheader"
  
    >    <ListItemButton sx={{display:'flex', justifyContent:'center', padding:'0'}} onClick={handleClick}>
   
Services
    {open ? <ExpandLess /> : <ExpandMore />}
  </ListItemButton >
  <Collapse in={open} timeout="auto" unmountOnExit>
    <List sx={{display:'flex', flexDirection:"column", alignItems:'center'}} component="div" disablePadding>
    <ListItemButton  onClick={toggleCross} sx={{width:'270px'}} >
      <LinkMobileServices href={'/desktopdevservices'}>

        <ListItemIcon>
          <IconContainer>
          <DeskTopDevelop />
          </IconContainer>
       
        </ListItemIcon>
        <ListItemText primary="DeskTop Development" />
        </LinkMobileServices>
      </ListItemButton>

      <ListItemButton  onClick={toggleCross} sx={{width:'270px'}}  >
      <LinkMobileServices href={'/responsiveServices'}>
        <ListItemIcon>
          <IconContainer>
          <MobileDevelop />
          </IconContainer>
       
        </ListItemIcon>
        <ListItemText primary="Mobile Development" />
        </LinkMobileServices>
      </ListItemButton>
     
      <ListItemButton  onClick={toggleCross} sx={{width:'270px'}}  >
      <LinkMobileServices href={'/webdevservices'}>
        <ListItemIcon>
          <IconContainer>
          <WebDevelop />
          </IconContainer>
       
        </ListItemIcon>
        <ListItemText primary="Web Develpment" />
        </LinkMobileServices>
      </ListItemButton>
    </List>
  </Collapse>
</ListStyled>
      <NavLinkOptions
      href={'/'}
        id="demo-customized-button"
        aria-controls={openPopUp ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openPopUp ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClickPopUp}
    
   
      >
        Services
        
        <ArrowIconContainer>
          {!openPopUp ? <ArrowDown /> : <ArrowUp/>}
   
        </ArrowIconContainer>
          
      </NavLinkOptions>
      <Menu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={openPopUp}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
         <LinkServices  href={'/webdevservices'} >
         <WebDevelop/>
        Web Development
        </LinkServices>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>

          <LinkServices href={'/responsiveServices'}  >
          <MobileDevelop/>
     
     Mobile Development
          </LinkServices>
 
        </MenuItem>
        <MenuItem  onClick={handleClose} disableRipple>
          <LinkServices href={'/desktopdevservices'} o>
          <DeskTopDevelop/>
        Desktop Development
          </LinkServices>
 

        </MenuItem>
      </Menu>


         
     {/*
            <NavLink route={route} href={"/"} onClick={goToStore}>
              Store
            </NavLink> */}
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
              src="/assets/logofinalpulido-black-3.png" // nota la barra inclinada al inicio
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
              src="/assets/logofinalpulido-black-3.png" // nota la barra inclinada al inicio
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
  {/*
      <Curriculum mobileNavActive={mobileNavActive}>
        <CurriculumMax>
          <TitleCur>
            <BackArrow />
          </TitleCur>
          <Dowload
            target="_blank"
            href="https://my-page-negiupp.s3.amazonaws.com/1704639419873.pdf"
          >
            Curriculum
            <DowloadIcon />
          </Dowload>
        </CurriculumMax>
      </Curriculum>
       */}
    </StyledHeader>
  );
};

export default Header;
