import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Center from "./Center";
import Suggestion from "./Suggestion";
import { styled } from "styled-components";

const ContLayout = styled.div`
position: relative;

`;
const ContSugesstion = styled.div`
position: fixed;
bottom: 4px;
right: 4px;
`


const Layout = ({ children }) => {
  const containerWidth = 80; // Define el ancho del contenedor según tus necesidades
  const containerHeight = 80; // Define la altura del contenedor según tus necesidades
  return (
    <>
    <ContLayout >
      <Header />
      <Center>{children}</Center>

      <ContSugesstion  className="fixed bottom-4 right-4">
          <Suggestion />
        </ContSugesstion >
  
      <Footer />
      </ContLayout>
    </>
  );
};

export default Layout;
