import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { styled } from "styled-components";

const ConatinerNotFound = styled.div`
  height: 100vh; /* Altura total de la ventana */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0.5rem; /* Ajuste de espaciado */
  p {
    color: white;
    opacity: 0.5;
  }
  h1 {
    color: white;
    text-align: center;
  }
  span {
    color: #4d61fc;
  }
`;
const ContainerButton = styled.div`
  width: 50%;
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

const NotfoundPage = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <>
    <Head>
        <title>Not Found! </title>
        <meta name="description" content="..." />
      </Head>
      <Layout>
        <ConatinerNotFound>
          <p>This area is being developed.</p>
          <h1>
            ¡I&apos;m working on <span>New Feature</span> for you!{" "}
          </h1>
          <ContainerButton>
            <button onClick={handleBack}>Back</button>
          </ContainerButton>
        </ConatinerNotFound>
      </Layout>
    </>
  );
};

export default NotfoundPage;
