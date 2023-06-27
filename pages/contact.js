import Center from "@/components/Center";
import Footer from "@/components/Footer";
import FormEmails from "@/components/FormEmails";
import Header from "@/components/Header";
import Link from "next/link";
import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5rem 0;
`;
const ContacInfo = styled.div`
  display: flex;
  flex-direction: column;
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
    font-size: 1.3rem;
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
  width: 8rem;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    100deg,
    rgb(189 189 189 / 7%),
    rgba(255, 255, 255, 0)
  );
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1);
`;
const SocialInfo = styled.div`
  margin-top: 2.5rem;
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
`;

const ContacPage = () => {
  return (
    <>
      <Header />
      <Center>
        <Container>
          <ContacInfo>
            <h3>Contact Info</h3>
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
                <span>Mail us</span>
                <h4>example@test.com</h4>
                <h4>example2@test.com</h4>
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
                <span>Contact us</span>
                <h4>example@test.com</h4>
                <h4>example2@test.com</h4>
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
                <h4>example@test.com</h4>
                <h4>example2@test.com</h4>
              </Info>
            </Content>
            <SocialInfo>
              <h3 className="social">Social info</h3>
              <LinksContainer>
                <LinkRRSS href={"/"}>
                  <svg
                    style={{ fill: "#ffff" }}
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                  </svg>
                </LinkRRSS>
                <LinkRRSS href={"/"}>
                  <svg
                    width="24"
                    height="24"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23 3.01006C23 3.01006 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 23 3.01006 23 3.01006Z"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </LinkRRSS>
                <LinkRRSS href={"/"}>
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
          <FormEmails />
        </Container>
      </Center>
      <Footer />
    </>
  );
};

export default ContacPage;
