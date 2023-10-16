import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

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
  color: inherit;
  background-image: linear-gradient(to bottom right, #212121, #131313);
  border: 1px solid #212121;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  width: 100%;
  padding: 1.5rem;
  border-radius: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

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
const ImageContIoT = styled.div`
  background-image: linear-gradient(to bottom right, #212121, #131313);
  border: 1px solid #212121;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  border-radius: 2rem;
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
    border-radius: 2rem;
  }
`;

const Services = styled.div`
  background-image: linear-gradient(to bottom right, #212121, #131313);
  border: 1px solid #212121;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  width: 100%;
  padding: 1.5rem;
  border-radius: 2rem;
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

const ContServices = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-image: linear-gradient(to bottom right, #212121, #131313);
  border: 1px solid #212121;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  border-radius: 2rem;
  height: 11rem;
  margin-bottom: 1.5rem;
`;
const ServicesLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 7rem;
  padding: 1.5rem;
  svg {
    color: white;
    width: 100%;
    transition: 0.3s;
    &:hover {
      color: #4d61fc;
    }
  }
`;
const ProfilesDesktop = styled.div`
  background-image: linear-gradient(to bottom right, #212121, #131313);
  border: 1px solid #212121;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  padding: 1.5rem;
  border-radius: 2rem;
  position: relative;
  width: 100%;

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
  background-image: linear-gradient(to bottom right, #212121, #131313);
  border: 1px solid #212121;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  width: 100%;
  padding: 1.5rem;
  border-radius: 2rem;
  position: relative;

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
  grid-template-columns: 1fr 1fr; /* dos columnas */
  grid-template-rows: 1fr 1fr; /* dos filas */
  gap: 0.5rem; /* espacio entre las celdas */
  margin: 0 auto;
  height: 11rem;
  margin-bottom: 1.5rem;
`;

const LinkRRSS = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  background-image: linear-gradient(to bottom right, #212121, #131313);
  border: 1px solid #212121;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */

  transition: background-image 0.3s ease-in-out;
  &:hover {
    background-image: linear-gradient(to bottom right, #4d61fc, #4d61fc);
  }

  svg {
    color: #ffff;
    height: 2.5rem;
    width: 2.5rem;
  }
  div img {
    height: 2.5rem;
    width: 2.5rem;
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
const ImageCont = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  transform: scaleX(1);

  left: 2%;
  bottom: 10%;
  @media screen and (min-width: 500px) {
    width: 15rem;
    transform: scaleX(1);
  }

  img {
    width: 10rem;
    border-radius: 2rem 0rem;
  }
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
        <IoT href={"notfound"}>
          <ImageContIoT>
            {" "}
            <Image
              src={"https://my-page-negiupp.s3.amazonaws.com/1697188125252.jpg"}
              width={500}
              height={500}
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
                src="/assets/logofinalpulido-white-3.png" // nota la barra inclinada al inicio
                alt="Logo"
                width={400}
                height={200}
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
                <svg
                  style={{ fill: "#ffff" }}
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </LinkRRSS>

              <LinkRRSS href={"https://github.com/juansesu3"} target="_blank">
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 -3.5 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin meet"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g fill="#ffffff">
                      {" "}
                      <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />{" "}
                      <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" />{" "}
                    </g>{" "}
                  </g>
                </svg>
              </LinkRRSS>
              <LinkRRSS
                href={"https://www.instagram.com/juanser___/"}
                target="_blank"
              >
                {" "}
                <svg
                  width="24"
                  height="24"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <path
                    d="M17.5 6.51L17.51 6.49889"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </LinkRRSS>
              <LinkRRSS
                href={"https://www.freelancer.com/u/negiupp"}
                target="_blank"
              >
                {" "}
                <Freelancer>
                  <img src="https://my-page-negiupp.s3.amazonaws.com/1696597738262.png" />
                </Freelancer>
              </LinkRRSS>
            </RrSs>
            <Infos>
              <h5>STAY WITH ME</h5>
              <h4>Profiles</h4>
            </Infos>
            <IconDetail>
              {" "}
              <LogoLink className="animation" href={"/"}>
                <Image
                  src="/assets/logofinalpulido-white-3.png" // nota la barra inclinada al inicio
                  alt="Logo"
                  width={400}
                  height={200}
                />
              </LogoLink>
            </IconDetail>
          </ProfilesMobile>
        ) : (
          <></>
        )}
      </Mobile>

      <Services>
        <ContServices>
          <ServicesLink href={"/desktopdevservices"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
              />
            </svg>
          </ServicesLink>
          <ServicesLink href={"/responsiveServices"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          </ServicesLink>
          <ServicesLink href={"/webdevservices"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
          </ServicesLink>
        </ContServices>

        <Infos>
          <h5>SPECIALIZATION</h5>
          <h4>Services Offering</h4>
        </Infos>
        <IconDetail>
          {" "}
          <LogoLink className="animation" href={"/"}>
            <Image
              src="/assets/logofinalpulido-white-3.png" // nota la barra inclinada al inicio
              alt="Logo"
              width={400}
              height={200}
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
              <svg
                style={{ fill: "#ffff" }}
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </LinkRRSS>

            <LinkRRSS href={"https://github.com/juansesu3"} target="_blank">
              <svg
                width="800px"
                height="800px"
                viewBox="0 -3.5 256 256"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g fill="#ffffff">
                    {" "}
                    <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />{" "}
                    <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" />{" "}
                  </g>{" "}
                </g>
              </svg>
            </LinkRRSS>
            <LinkRRSS
              href={"https://www.instagram.com/juanser___/"}
              target="_blank"
            >
              {" "}
              <svg
                width="24"
                height="24"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M17.5 6.51L17.51 6.49889"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </LinkRRSS>
            <LinkRRSS
              href={"https://www.freelancer.com/u/negiupp"}
              target="_blank"
            >
              {" "}
              <Freelancer>
                <img src="https://my-page-negiupp.s3.amazonaws.com/1696597738262.png" />
              </Freelancer>
            </LinkRRSS>
          </RrSs>
          <Infos>
            <h5>STAY WITH ME</h5>
            <h4>Profiles</h4>
          </Infos>
          <IconDetail>
            {" "}
            <LogoLink className="animation" href={"/"}>
              <Image
                src="/assets/logofinalpulido-white-3.png" // nota la barra inclinada al inicio
                alt="Logo"
                width={400}
                height={200}
              />
            </LogoLink>
          </IconDetail>
        </ProfilesDesktop>
      )}
    </Section2>
  );
};

export default Home2Section2;
