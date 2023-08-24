import Center from "@/components/Center";
import Footer from "@/components/Footer";
import FormEmails from "@/components/FormEmails";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { RevealWrapper } from "next-reveal";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.5rem 1rem;
  margin-top: 2.5rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 1.5rem 0.5rem;
  }
`;
const ContacInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: space-between;
  h3 {
    font-size: 1.5rem;
    opacity: 0.8;
    color: #ffff;
    margin: 0;
    text-transform: uppercase;
  }

  h4 {
    color: #ffff;
    font-size: 1.1rem;
    opacity: 0.8;
    margin: 0;
  }
  span {
    font-size: 1.5rem;
    color: #bcbcbc;
    text-transform: uppercase;
  }
`;

const Content = styled.div`
  display: flex;
  gap: 1.5rem;

  svg {
    width: 5rem;
    color: #ffff;
  }
`;
const IconContainer = styled.div`
  width: 5rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(
    100deg,
    rgb(189 189 189 / 7%),
    rgba(255, 255, 255, 0)
  );
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1);
  svg {
    width: 100%;
  }
`;
const SocialInfo = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const LinkRRSS = styled(Link)`
  height: 5rem;
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(
    100deg,
    rgb(189 189 189 / 7%),
    rgba(255, 255, 255, 0)
  );
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1);
  svg {
    color: #ffff;
    width: 2.5rem;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  justify-content: center;
  color: #c1c1c3;
  h4 {
    font-size: 1rem;
    font-weight: 400;
  }
  span {
    font-size: 1rem;
    font-weight: 500;
    color: white;
  }
  @media screen and (min-width: 450px) {
    h4 {
      font-size: 1.3rem;
    }
    span {
      font-size: 1.3rem;
    }
  }
`;

const ContacPage = () => {
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <>
          <Head>
        <title>Contact</title>
        <meta name="description" content="..." />
      </Head>
      <Layout>
        <Container>
          <RevealWrapper delay={100}>
            <ContacInfo>
              <h4>Contact Info</h4>
              <Content>
                <IconContainer>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </IconContainer>
                <Info>
                  <span>Mail</span>
                  <h4>juan.se.suarez.ra@gmail.com</h4>
                </Info>
              </Content>
              <Content>
                <IconContainer>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </IconContainer>
                <Info>
                  <span>Contact me</span>
                  <h4>+34 642 76 33 95</h4>
                </Info>
              </Content>
              <Content>
                <IconContainer>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </IconContainer>
                <Info>
                  <span>Location</span>
                  <h4>Valencia - Spain</h4>
                </Info>
              </Content>
              <SocialInfo>
                <h3 className="social">Social info</h3>
                <LinksContainer>
                  <LinkRRSS
                    href={"#"}
                    onClick={() =>
                      handleLinkClick(
                        "https://www.linkedin.com/in/juan-s-suarez/"
                      )
                    }
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
                    href={"#"}
                    onClick={() =>
                      handleLinkClick("https://github.com/juansesu3")
                    }
                  >
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
                    href={"#"}
                    onClick={() =>
                      handleLinkClick("https://github.com/juansesu3")
                    }
                  >
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
                </LinksContainer>
              </SocialInfo>
            </ContacInfo>
          </RevealWrapper>
          <RevealWrapper delay={300}>
            <FormEmails />
          </RevealWrapper>
        </Container>
      </Layout>
    </>
  );
};

export default ContacPage;
