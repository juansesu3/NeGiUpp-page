//import Home from "@/components/Home";
import Home2 from "@/components/Home2";
import Layout from "@/components/Layout";
import { mongooseConnect } from "@/lib/mongoose";
import { Article } from "@/models/Article";
import Head from "next/head";

const HomePage = ({ latestArticles }) => {
  return (
    <>
      <Head>
        <title>
          Negiupp - Digital Solutions | Juan Sebastian Suarez Ramirez
        </title>
        <meta
          name="description"
          content="Juan Sebastian Suarez Ramirez's official website. Welcome to Negiupp, your gateway to innovation in digital solutions, articles, and more."
        />
        <meta
          property="og:title"
          content="Juan Sebastian Suarez Ramirez | Negiupp - Digital Solutions"
        />
        <meta
          property="og:description"
          content="Juan Sebastian Suarez Ramirez's official website. Welcome to Negiupp, your gateway to innovation in digital solutions, articles, and more."
        />
        <meta
          property="og:image"
          content="https://my-page-negiupp.s3.amazonaws.com/1697750024209.png"
        />
        <meta property="og:url" content="https://negiupp.com/" />
        <meta property="og:type" content="website" />
      </Head>
      <Layout>
        <Home2
         latestArticles={latestArticles} />
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
