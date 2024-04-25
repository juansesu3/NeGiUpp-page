//import Home from "@/components/Home";
import Home2 from "@/components/Home2";
import Layout from "@/components/Layout";
import Head from "next/head";

const HomePage = () => {
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
          property="og:image"s
          content="https://my-page-negiupp.s3.amazonaws.com/1707996017070.png"
        />
        <meta property="og:url" content="https://negiupp.com/" />
        <meta property="og:type" content="website" />
      </Head>
      <Layout>
        
          <Home2
           />
      </Layout>
    </>
  );
};

export default HomePage;
