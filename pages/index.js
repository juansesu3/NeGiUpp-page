import Header from "@/components/Header";
import Home from "@/components/Home";
import { mongooseConnect } from "@/lib/mongoose";
import { Article } from "@/models/Articles";
import { styled } from "styled-components";


const HomePage = ({article}) => {

  return ( 
    <div>
      <Header />
      <Home article={article} />
    </div> 
  );
};

export const getServerSideProps = async()=>{
  const feuturedArticle = "64997ffb602af53155296e81";
  await mongooseConnect();
  const article = await Article.findById(feuturedArticle);

  return {
    props: {article: JSON.parse(JSON.stringify(article))},
  }

}

export default HomePage;
