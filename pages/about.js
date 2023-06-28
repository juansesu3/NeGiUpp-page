import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <Center>
        <div>
          <div>
            <img
              src="https://my-page-negiupp.s3.amazonaws.com/1687953985230.png"
              alt="about-image"
            />
          </div>

          <div>
            <div>
              <h2>Whow we are?</h2>
              <p> </p>
            </div>
            <div>
              <h2>Our values</h2>
              <p></p>2
            </div>
          </div>
        </div>
      </Center>
      <Footer />
    </div>
  );
};

export default AboutPage;
