import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { styled } from "styled-components";

const CaontainerHowCanIHelYou = styled.div`
  height: 100%; /* Altura total de la ventana */
  padding-top: 3rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    color: #4d61fc;
  }
  span {
    color: #4d61fc;
  }
  h3 {
    text-align: center;
    color: #4d61fc;
  }
`;
const ImgContainer = styled.div`
  width: 20rem;

  img {
    width: 100%;
  }
`;
const Title = styled.div`
  h1 {
    color: white;
    text-align: center;
  }
`;

const Conent = styled.div`
  p {
    color: white;
    opacity: 0.5;
    text-align: center;
  }
`;

const HowcanihelpyouPage = () => {
  return (
    <>
    <Head>
        <title>How can I help you?</title>
        <meta name="description" content="..." />
      </Head>
      <Layout>
        <CaontainerHowCanIHelYou>
          <Title>
            <h1>
              How can <span>I help you</span> ?
            </h1>
          </Title>
          <ImgContainer>
            <Image width={300} height={300} alt="help you" src="https://my-page-negiupp.s3.amazonaws.com/1692039346694.png" />
          </ImgContainer>
          <Conent>
            <p>
              Thank you for visiting my portfolio! As a seasoned full-stack
              developer with over two years of experience, my main goal is to
              provide you with exceptional digital solutions that meet your
              unique needs. I am here to guide you through the entire
              development process, from understanding your vision and
              requirements to delivering a polished and functional product.
            </p>
            <p>
              Whether you have a specific project in mind or need assistance in
              conceptualizing your idea, I am ready to collaborate and bring
              your vision to life. My expertise spans both front-end and
              back-end development, ensuring a seamless user experience and
              robust functionality behind the scenes.
            </p>
            <p>
              Feel free to share your ideas, goals, and challenges with me. I am
              committed to crafting innovative solutions that align with your
              objectives and deliver tangible results. My focus is not only on
              creating a product but also on building a lasting relationship
              with you as a client.
            </p>
            <p>
              Your success is my priority. Let&apos;s work together to turn your
              ideas into reality. Please don&apos;t hesitate to reach out, and I
              look forward to the opportunity to contribute to your digital
              journey!
            </p>
          </Conent>
          <h3>
            <i>
              &quot;The man who moves mountains begins by moving small
              stones.&quot;
            </i>
          </h3>
        </CaontainerHowCanIHelYou>
      </Layout>
    </>
  );
};

export default HowcanihelpyouPage;
