import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home from "@/components/Home";
import { mongooseConnect } from "@/lib/mongoose";
import { Article } from "@/models/Article";
import { styled } from "styled-components";

const HomeConatiner = styled.div`
position: absolute;

  @media screen and (min-width: 1100px){
    left: 50%; /* Centra horizontalmente en la mitad del contenedor padre */
  transform: translateX(-50%);
  }

`

const HomePage = ({ latestArticles }) => {
  return (
    <HomeConatiner>
      <Header  />
      <Home latestArticles={latestArticles} />
      <Footer />
    </HomeConatiner>
  );
};

export const getServerSideProps = async () => {
  await mongooseConnect();
  const latestArticles = await Article.find({}, null, {
    sort: { _id: -1 },
    limit: 5,
  });
 

  return {
    props: {
      latestArticles: JSON.parse(JSON.stringify(latestArticles))
     
    },
  };
};

export default HomePage;
