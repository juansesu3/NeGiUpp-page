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

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;
  color: #ffff;
  padding: 2rem;
  p {
    opacity: 0.5;
    letter-spacing: 0.5px;
    font-size: 1.5rem;
  }
`;

const AboutPage = () => {
  return (
    <div>
      <Header />
      <Center>
        <AboutContainer>
          <AllImgcontainer>
            <ImageContainer>
              <img
                src="https://my-page-negiupp.s3.amazonaws.com/1687953985230.png"
                alt="about-image"
              />
            </ImageContainer>
          </AllImgcontainer>

          <InfoContainer>
            <div>
              <h1>Whow we are?</h1>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?{" "}
              </p>
            </div>
          </InfoContainer>
          <div>
            <AllImgcontainer>
              <ImageContainer>
                <img
                  src="https://my-page-negiupp.s3.amazonaws.com/1687962653621.png"
                  alt="about-image"
                />
              </ImageContainer>
            </AllImgcontainer>
            <InfoContainer>
              <div>
                <h1>Working with us</h1>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?{" "}
                </p>
              </div>
            </InfoContainer>
            <ImageContainer>
              <img
                src="https://my-page-negiupp.s3.amazonaws.com/1687962641400.png"
                alt="about-image"
              />
            </ImageContainer>

            <ImageContainer>
              <img
                src="https://my-page-negiupp.s3.amazonaws.com/1687962620230.png"
                alt="about-image"
              />
            </ImageContainer>
          </div>
        </AboutContainer>
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
