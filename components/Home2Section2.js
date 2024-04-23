import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MobileDevelop from "./icons/MobileDevelop";
import DeskTopDevelop from "./icons/DeskTopDevelop";
import WebDevelop from "./icons/WebDevelop";

const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  gap: 1rem;
  @media screen and (min-width: 920px) {
    flex-direction: row;
  }
`;

const IoT = styled(Link)`
  text-decoration: none;
  color: #000000;
  background:#ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 1.5rem;
  border-radius: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  .animation {
    opacity: 0.5;
  }
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
   
    .animation {
      transform: rotate(90deg);
      transition: transform 0.5s ease-in-out;
      opacity: 1;
    }
  }
`;
const ImageContIoT = styled.div`
   background:#ffffff;

box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  gap: 1.5rem;
  width: 100%;
  height: 11rem;

  @media screen and (min-width: 500px) {
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }
`;

const Services = styled.div`
   background:#ffffff;
color: #000000;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 1.5rem;
  border-radius: 1rem;
  position: relative;

  .animation {
    opacity: 0.5;
  }
  &:hover {
    .animation {
      transform: rotate(90deg);
      transition: transform 0.5s ease-in-out;
      opacity: 1;
    }
  }

  @media screen and (min-width: 920px) {
    width: 50%;
  }
`;

const ContFisrtServices = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  gap: 1rem;

  border-radius: 1rem;
  height: 11rem;
  margin-bottom: 1.5rem;
`;

const ContServices = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background:#ffffff;
color :#000000;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  height: auto;
   transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
   &:hover {
    transform: translateY(-5px);
      
      svg{
color: #f96e04;
      }
    }

`
const ServicesLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 5rem;

   @media screen and (min-width: 768px) {
    width: 7rem
  }
  padding: 1.5rem;
  text-decoration: none;
  svg {
    color: #000000;
    width: 100%;
    transition: 0.3s;
   transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
      color: #f96e04;
    }
  }
  span{
    color: #000000;
    opacity: .5;
  }
`;
const ProfilesDesktop = styled.div`
  background:#ffffff;

box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  border-radius: 1rem;
  position: relative;
  width: 100%;
color: #000000;
  @media screen and (min-width: 920px) {
    width: 30%;
  }
  .animation {
    opacity: 0.5;
  }

  &:hover {
    
    .animation {
      transform: rotate(90deg);
      transition: transform 0.5s ease-in-out;
      opacity: 1;
    }
  }
`;
const ProfilesMobile = styled.div`
  background:#ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 1.5rem;
  border-radius: 1rem;
  position: relative;
  color: #000000;

  @media screen and (min-width: 920px) {
    display: none;
  }
  .animation {
    opacity: 0.5;
  }

  &:hover {
    
    .animation {
      transform: rotate(90deg);
      transition: transform 0.5s ease-in-out;
      opacity: 1;
    }
  }
`;

const RrSs = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* dos columnas */
  grid-template-rows: 1fr 1fr; /* dos filas */
  gap: 0.5rem; /* espacio entre las celdas */
  margin: 0 auto;
  height: 11rem;
  margin-bottom: 1.5rem;
`;

const RssSecond = styled.div`
display: flex;
justify-content: space-between;
gap: 0.5rem;
a{
  width: 100%;
}
`

const LinkRRSS = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.8rem;
  cursor: pointer;
  background:#ffffff;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
color: #000000;
transition: background 0.5s ease-in-out, transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    background:#f96e04;

  }

  svg {
    color: #000000;
    height: 3rem;
    width: 3rem;
    
  }

`;

const Freelancer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`;

const Infos = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  p {
    margin: 0;
    color: #4d61fc;
  }
  h5 {
    margin: 0;
    text-transform: uppercase;
    opacity: 0.5;
    font-weight: 400;
    font-size: 0.7rem;
  }
  h4 {
    margin: 0;
    font-size: 1.2rem;
  }
`;

const IconDetail = styled.div`
  position: absolute;
  right: 8%;
  bottom: 10%;
`;

const LogoLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 1.6rem;
  img {
    width: 100%;
    position: relative;
    transform: rotate(90deg);
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: rotate(-0deg);
    }
  }

  @media screen and (min-width: 768px) {
  }
`;

const Home2Section2 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 920);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 920);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Section2>
      <Mobile>
        <IoT href={"/notfound"}>
          <ImageContIoT>
            {" "}
            <Image
              src={"https://my-page-negiupp.s3.amazonaws.com/1697188125252.jpg"}
              width={200}
              height={100}
              alt="project-image"
            />
          </ImageContIoT>
          <Infos>
            <h5>IoT</h5>
            <h4>Arduino and Node.js</h4>
          </Infos>
          <IconDetail>
            {" "}
            <LogoLink className="animation" href={"/"}>
              <Image
                src="/assets/logofinalpulido-black-3.png" // nota la barra inclinada al inicio
                alt="Logo"
                width={200}
                height={100}
              />
            </LogoLink>
          </IconDetail>
        </IoT>

        {isMobile ? (
          <ProfilesMobile>
            <RrSs>
            <LinkRRSS
              href={"https://www.linkedin.com/in/juan-s-suarez/"}
              target="_blank"
            >
             <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48"><path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"/><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"/><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"/><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"/></svg>
            </LinkRRSS>
<RssSecond >
<LinkRRSS href={"https://github.com/juansesu3"} target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#fff" d="M41,24c0,9.4-7.6,17-17,17S7,33.4,7,24S14.6,7,24,7S41,14.6,41,24z"/><path fill="#455a64" d="M21 41v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-6.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h1.8c.2-.3.2-.6.2-1.1V36c0-2.2-1.9-5.2-4.3-5.2h-2.5c-2.3 0-4.3 3.1-4.3 5.2v3.9c0 .4.1.8.2 1.1L21 41 21 41zM40.1 26.4C40.1 26.4 40.1 26.4 40.1 26.4c0 0-1.3-.4-2.4-.4 0 0-.1 0-.1 0-1.1 0-2.9.3-2.9.3-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2-.3 3.1-.3 1.1 0 2.4.4 2.5.4.1 0 .1.1.1.2C40.2 26.3 40.2 26.4 40.1 26.4zM39.8 27.2C39.8 27.2 39.8 27.2 39.8 27.2c0 0-1.4-.4-2.6-.4-.9 0-3 .2-3.1.2-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2.2-.2 3.1-.2 1.3 0 2.6.4 2.6.4.1 0 .1.1.1.2C39.9 27.1 39.9 27.2 39.8 27.2zM7.8 26.4c-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.2.8-.2 2.4-.5 3.3-.5.8 0 3.5.2 3.6.2.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0-2.7-.2-3.5-.2C10.1 26 8.6 26.2 7.8 26.4 7.8 26.4 7.8 26.4 7.8 26.4zM8.2 27.9c0 0-.1 0-.1-.1 0-.1 0-.1 0-.2.1 0 1.4-.8 2.9-1 1.3-.2 4 .1 4.2.1.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0 0 0 0 0 0 0-2.8-.3-4.1-.1C9.6 27.1 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9z"/><path fill="#455a64" d="M14.2,23.5c0-4.4,4.6-8.5,10.3-8.5c5.7,0,10.3,4,10.3,8.5S31.5,31,24.5,31S14.2,27.9,14.2,23.5z"/><path fill="#455a64" d="M28.6 16.3c0 0 1.7-2.3 4.8-2.3 1.2 1.2.4 4.8 0 5.8L28.6 16.3zM20.4 16.3c0 0-1.7-2.3-4.8-2.3-1.2 1.2-.4 4.8 0 5.8L20.4 16.3zM20.1 35.9c0 0-2.3 0-2.8 0-1.2 0-2.3-.5-2.8-1.5-.6-1.1-1.1-2.3-2.6-3.3-.3-.2-.1-.4.4-.4.5.1 1.4.2 2.1 1.1.7.9 1.5 2 2.8 2 1.3 0 2.7 0 3.5-.9L20.1 35.9z"/><path fill="#00bcd4" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z M24,40c-8.8,0-16-7.2-16-16S15.2,8,24,8 s16,7.2,16,16S32.8,40,24,40z"/></svg>
            </LinkRRSS>
            <LinkRRSS
              href={"https://www.instagram.com/juanser___/"}
              target="_blank"
            >
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"/><stop offset=".328" stop-color="#ff543f"/><stop offset=".348" stop-color="#fc5245"/><stop offset=".504" stop-color="#e64771"/><stop offset=".643" stop-color="#d53e91"/><stop offset=".761" stop-color="#cc39a4"/><stop offset=".841" stop-color="#c837ab"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"/><stop offset=".999" stop-color="#4168c9" stop-opacity="0"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"/><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/></svg>
            </LinkRRSS>
</RssSecond>
           
           
           
            </RrSs>
            <Infos>
              <h5>STAY WITH ME</h5>
              <h4>Profiles</h4>
            </Infos>
            <IconDetail>
              {" "}
              <LogoLink className="animation" href={"/"}>
                <Image
                  src="/assets/logofinalpulido-black-3.png" // nota la barra inclinada al inicio
                  alt="Logo"
                  width={200}
                  height={100}
                />
              </LogoLink>
            </IconDetail>
          </ProfilesMobile>
        ) : (
          <></>
        )}
      </Mobile>

      <Services>
        <ContFisrtServices ><ContServices> <ServicesLink href={"/desktopdevservices"}>
           
           <DeskTopDevelop/>
            <span>desktop</span>
          </ServicesLink></ContServices>
         <ContServices>
         <ServicesLink href={"/responsiveServices"}>
       <MobileDevelop/>
            <span>mobile</span>
          </ServicesLink>
         </ContServices>
   <ContServices>
   <ServicesLink href={"/webdevservices"}>
         <WebDevelop/>
            <span>web</span>
          </ServicesLink>
   </ContServices>
        
        </ContFisrtServices >

        <Infos>
          <h5>SPECIALIZATION</h5>
          <h4>Services Offering</h4>
        </Infos>
        <IconDetail>
          {" "}
          <LogoLink className="animation" href={"/"}>
            <Image
              src="/assets/logofinalpulido-black-3.png" // nota la barra inclinada al inicio
              alt="Logo"
              width={200}
              height={100}
            />
          </LogoLink>
        </IconDetail>
      </Services>
      {isMobile ? (
        <></>
      ) : (
        <ProfilesDesktop>
          <RrSs>
            <LinkRRSS
              href={"https://www.linkedin.com/in/juan-s-suarez/"}
              target="_blank"
            >
             <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48"><path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"/><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"/><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"/><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"/></svg>
            </LinkRRSS>
<RssSecond>


            <LinkRRSS href={"https://github.com/juansesu3"} target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#fff" d="M41,24c0,9.4-7.6,17-17,17S7,33.4,7,24S14.6,7,24,7S41,14.6,41,24z"/><path fill="#455a64" d="M21 41v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-6.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h1.8c.2-.3.2-.6.2-1.1V36c0-2.2-1.9-5.2-4.3-5.2h-2.5c-2.3 0-4.3 3.1-4.3 5.2v3.9c0 .4.1.8.2 1.1L21 41 21 41zM40.1 26.4C40.1 26.4 40.1 26.4 40.1 26.4c0 0-1.3-.4-2.4-.4 0 0-.1 0-.1 0-1.1 0-2.9.3-2.9.3-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2-.3 3.1-.3 1.1 0 2.4.4 2.5.4.1 0 .1.1.1.2C40.2 26.3 40.2 26.4 40.1 26.4zM39.8 27.2C39.8 27.2 39.8 27.2 39.8 27.2c0 0-1.4-.4-2.6-.4-.9 0-3 .2-3.1.2-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2.2-.2 3.1-.2 1.3 0 2.6.4 2.6.4.1 0 .1.1.1.2C39.9 27.1 39.9 27.2 39.8 27.2zM7.8 26.4c-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.2.8-.2 2.4-.5 3.3-.5.8 0 3.5.2 3.6.2.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0-2.7-.2-3.5-.2C10.1 26 8.6 26.2 7.8 26.4 7.8 26.4 7.8 26.4 7.8 26.4zM8.2 27.9c0 0-.1 0-.1-.1 0-.1 0-.1 0-.2.1 0 1.4-.8 2.9-1 1.3-.2 4 .1 4.2.1.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0 0 0 0 0 0 0-2.8-.3-4.1-.1C9.6 27.1 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9z"/><path fill="#455a64" d="M14.2,23.5c0-4.4,4.6-8.5,10.3-8.5c5.7,0,10.3,4,10.3,8.5S31.5,31,24.5,31S14.2,27.9,14.2,23.5z"/><path fill="#455a64" d="M28.6 16.3c0 0 1.7-2.3 4.8-2.3 1.2 1.2.4 4.8 0 5.8L28.6 16.3zM20.4 16.3c0 0-1.7-2.3-4.8-2.3-1.2 1.2-.4 4.8 0 5.8L20.4 16.3zM20.1 35.9c0 0-2.3 0-2.8 0-1.2 0-2.3-.5-2.8-1.5-.6-1.1-1.1-2.3-2.6-3.3-.3-.2-.1-.4.4-.4.5.1 1.4.2 2.1 1.1.7.9 1.5 2 2.8 2 1.3 0 2.7 0 3.5-.9L20.1 35.9z"/><path fill="#00bcd4" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z M24,40c-8.8,0-16-7.2-16-16S15.2,8,24,8 s16,7.2,16,16S32.8,40,24,40z"/></svg>
            </LinkRRSS>
            <LinkRRSS
              href={"https://www.instagram.com/tianking_/"}
              target="_blank"
            >
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"/><stop offset=".328" stop-color="#ff543f"/><stop offset=".348" stop-color="#fc5245"/><stop offset=".504" stop-color="#e64771"/><stop offset=".643" stop-color="#d53e91"/><stop offset=".761" stop-color="#cc39a4"/><stop offset=".841" stop-color="#c837ab"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"/><stop offset=".999" stop-color="#4168c9" stop-opacity="0"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"/><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/></svg>
            </LinkRRSS>
            </RssSecond>
          </RrSs>
          <Infos>
            <h5>STAY WITH ME</h5>
            <h4>Profiles</h4>
          </Infos>
          <IconDetail>
            {" "}
            <LogoLink className="animation" href={"/"}>
              <Image
                src="/assets/logofinalpulido-black-3.png" // nota la barra inclinada al inicio
                alt="Logo"
                width={200}
                height={100}
              />
            </LogoLink>
          </IconDetail>
        </ProfilesDesktop>
      )}
    </Section2>
  );
};

export default Home2Section2;
