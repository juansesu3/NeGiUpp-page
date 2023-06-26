import Header from "@/components/Header";
import Home from "@/components/Home";
import { mongooseConnect } from "@/lib/mongoose";
import { Article } from "@/models/Article";



const HomePage = ({articles}) => {
  console.log(articles)

  return ( 
    <div>
      <Header />
      <Home articles={articles} />
    </div> 
  );
};

export const getServerSideProps = async()=>{
  
  await mongooseConnect();
  const articles = await Article.find();

  return {
    props: {articles: JSON.parse(JSON.stringify(articles))},
  }

}

export default HomePage;
