import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const BckGro = styled.div`
  width: 100%;
  background-image: linear-gradient(to bottom right, #000000, #131313);
  color: #fff;
  display: flex;
  flex-direction: column;

  border-top: 1px solid #24242463;
  margin-top: 2rem;
  padding-top: 3rem;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const First = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 0;
  gap: 5rem;
  padding: 0 1rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24.5rem;
  }
`;
const Second = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1.5rem;
  color: gray;

  span {
    color: #00c8ff;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
  z-index: -1;

  h4 {
    margin: 0;
  }
`;
const LinkFooter = styled(Link)`
  text-decoration: none;
  color: white;
  opacity: 0.6;
  transition: 0.3s;
  &:hover {
    color: #00c8ff;
    opacity: 1;
  }
`;

const LangLog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const LogoLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  width: 6rem;
  padding-top: 0.2rem;
  @media screen and (min-width: 768px) {
    width: 6rem;
  }
  img {
    width: 100%;
  }
`;

const LinkRRSS = styled.a`
  height: 2rem;
  width: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1);
  svg {
    color: #ffff;
    width: 100%;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ContFotter = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 1080px) {
    width: 1080px;
  }
`;
const Footer = () => {
  return (
    <BckGro>
      <ContFotter>
        <First>
          <Section>
            <h4>About me</h4>
            <LinkFooter href={"/founders"} passHref>
              Who I am?
            </LinkFooter>
            <LinkFooter href={"/negiupp"} passHref>
              What is negiupp?
            </LinkFooter>
            <LinkFooter href={"/contact"} passHref>
              Work together!
            </LinkFooter>
          </Section>
          <Section>
            <LangLog>
              <LogoLink href={"/"}>
                <Image
                  src="https://my-page-negiupp.s3.amazonaws.com/1690838289355.png"
                  alt="logo-image"
                  width={200}
                  height={100}
                />
              </LogoLink>
              <LinksContainer>
                <LinkRRSS
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://www.linkedin.com/in/juan-s-suarez/"}
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
                <LinkRRSS
                  target="_blank"
                  href={"https://github.com/juansesu3"}
                  rel="noopener noreferrer"
                >
                  <svg
                    width="800px"
                    height="800px"
                    viewBox="0 -3.5 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMinYMin meet"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                  target="_blank"
                  href={"https://www.instagram.com/juanser___/"}
                  rel="noopener noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M17.5 6.51L17.51 6.49889"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </LinkRRSS>
              </LinksContainer>
            </LangLog>
          </Section>
        </First>
        <Second>
          <h5>
            © 2023 <span>negiupp.com</span> | All rigth reserved
          </h5>
        </Second>
      </ContFotter>
    </BckGro>
  );
};

export default Footer;
