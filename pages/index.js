import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home from "@/components/Home";
import { mongooseConnect } from "@/lib/mongoose";
import { Article } from "@/models/Article";

const HomePage = ({ latestArticles }) => {
  return (
    <>
    <Header />
      <Center>
        <Home latestArticles={latestArticles} />
        <Footer />
      </Center>
    </>
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
      latestArticles: JSON.parse(JSON.stringify(latestArticles)),
    },
  };
};

export default HomePage;
