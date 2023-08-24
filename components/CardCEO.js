import Image from "next/image";
import Link from "next/link";
import React from "react";
import { styled } from "styled-components";

const CardContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 1.5rem;
  height: auto;
  align-items: center;
  padding: 1.5rem;
  justify-content: space-between;
  width: 20.3rem;

  border-radius: 1rem;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  @media screen and (min-width: 768px) {
    margin-top: 2rem;
  }
`;

const ImageCOntainer = styled.div`
  width: 17.5rem;
  img {
    width: 100%;
    border-radius: 1rem;
  }
`;
const NameUserContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  h1 {
    margin: 0;
    margin-bottom: 0.5rem;
  }
  p {
    margin: 0;
    margin-bottom: 0.5rem;
    opacity: 0.5;
  }
`;
const RrSsConatiner = styled.div`
  display: flex;
  gap: 1.5rem;
`;
const Buttonconatiner = styled.div`
  width: 100%;
  button {
    border: 0;
    width: 100%;
    height: 2.8rem;
    border-radius: 0.7rem;
    background-color: #323232;
    color: white;
    padding: 0.5rem 0;
    font-size: 1.2rem;
    font-weight: 500;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      background-color: white;
      color: black;
    }
  }
`;

const LinkRRSS = styled(Link)`
  height: 3.2rem;
  width: 3.2rem;
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
    width: 1.5rem;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 0.7rem;
`;

const CardCEO = () => {
  return (
    <>
      <CardContainer>
        <ImageCOntainer>
          <Image
            src="https://my-page-negiupp.s3.amazonaws.com/1688550234499.jpg"
            alt="founder profile image"
            width={300}
            height={300}
          />
        </ImageCOntainer>
        <NameUserContainer>
          <h1>Juan Suarez</h1>
        </NameUserContainer>
        <RrSsConatiner>
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
        </RrSsConatiner>
        <Buttonconatiner>
          <Link href={"/contact"}>
            {" "}
            <button>Contact me</button>
          </Link>
        </Buttonconatiner>
      </CardContainer>
    </>
  );
};

export default CardCEO;
