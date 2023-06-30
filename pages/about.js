import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { styled } from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AllImgcontainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageContainer = styled.div`
  width: 30rem;
  margin: 0 auto;

  img {
    width: 100%;
  }
`;

const AboutPage = () => {
  return (
    <div>
      <Header />
      <Center>
        <AboutContainer></AboutContainer>
      </Center>
      <Footer />
    </div>
  );
};

export default AboutPage;
/*
 <ImageContainer>
              <img
                src="https://my-page-negiupp.s3.amazonaws.com/1687962628674.png"
                alt="about-image"
              />
            </ImageContainer> */

/*  <img
                src="https://my-page-negiupp.s3.amazonaws.com/1687953985230.png"
                alt="about-image"
              />
              
                <img
                  src="https://my-page-negiupp.s3.amazonaws.com/1687962653621.png"
                  alt="about-image"
                />
              

                 <img
                src="https://my-page-negiupp.s3.amazonaws.com/1687962641400.png"
                alt="about-image"
              />
              



               <img
                src="https://my-page-negiupp.s3.amazonaws.com/1687962620230.png"
                alt="about-image"
              />
              */
