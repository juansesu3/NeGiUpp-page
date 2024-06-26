import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Section3 = styled.div`
  display: flex;
  flex-direction: column;

  color: white;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const InfoPlus = styled.div`
 background:#ffffff;

box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  border-radius: 1rem;
  padding: 1.5rem;
  @media screen and (min-width: 920px) {
    width: 50%;
    flex-direction: row;
  }
`;
const Experinces = styled.div`
    background:#ffffff;

box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
color: #000000;
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  width: 10rem;
  h4 {
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
  }
  p {
    opacity: 0.5;

    text-transform: uppercase;
  }
`;

const Clients = styled.div`
   background:#ffffff;

box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
color: #000000;
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  width: 10rem;
  h4 {
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
  }
  p {
    opacity: 0.5;

    text-transform: uppercase;
  }
`;
const Proj = styled.div`
      background:#ffffff;

box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
color: #000000;
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  width: 10rem;
  h4 {
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
  }
  p {
    opacity: 0.5;
    text-transform: uppercase;
  }
`;

const WorkTogether = styled(Link)`
color: inherit;
text-decoration: none;
background:#ffffff;

box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
color: #000000;
  width: 100%;
  position: relative;
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  @media screen and (min-width: 920px) {
    width: 50%;
  }
  .animation {
    opacity: 0.5;
  }
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out, background 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    background:#f96e04;
    color: #ffffff;
    span{
      color: #ffffff;
    }
    .animation {
      transform: rotate(90deg);
      transition: transform 0.5s ease-in-out;
      opacity: 1;
    }
  }
`;
const WorkTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  margin-top: 1rem;
  span {
   color:  #f96e04;
   &:hover {
    color: #ffffff;
   }
  }
`;
const IconDetailDown = styled.div`
  position: absolute;
  left: 5%;
  top: 10%;
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
const ContScore = styled.div`
  transform: scaleX(-1);
  position: absolute;
  right: 0%;
  top: 10%;
  @media screen and (min-width: 768px) {
    transform: scaleX(1);
    position: relative;
  }
`;

const Score1 = styled.div`
  border: 1px solid green;
  border-radius: 0.5rem;
`;

const Score2 = styled.div`
  border: 1px solid blue;
`;

const Score3 = styled.div`
  border: 1px solid fuchsia;
`;
const IconDetail = styled.div`
  position: absolute;
  right: 8%;
  bottom: 10%;
`;

const Home2Section3 = () => {
  return (
    <Section3>
      <InfoPlus>
        <Experinces>
          <h4>+03</h4>
          <p>
            Years <br />
            Experince
          </p>
        </Experinces>
        <Clients>
          <h4>+10</h4>
          <p>
            Clients <br /> Worldwide
          </p>
        </Clients>
        <Proj>
          <h4>+15</h4>
          <p>
            Total <br />
            Projects
          </p>
        </Proj>
      </InfoPlus>

      <WorkTogether href={"/contact"}>
        <WorkTitle>
          Let&apos;s <br />
          <span>Work</span> together.
        </WorkTitle>
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
      </WorkTogether>
    </Section3>
  );
};

export default Home2Section3;
