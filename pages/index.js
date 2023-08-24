import Home from "@/components/Home";
import Layout from "@/components/Layout";

import { mongooseConnect } from "@/lib/mongoose";
import { Article } from "@/models/Article";
import Head from "next/head";

const HomePage = ({ latestArticles }) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="..." />
      </Head>
      <Layout>
        <Home latestArticles={latestArticles} />
      </Layout>
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
