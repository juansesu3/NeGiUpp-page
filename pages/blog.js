import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import BlogArticleCard from "@/components/BlogArticleCard";

const BlogPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("/api/blog").then((response) => {
      setArticles(response.data);
    });
  }, []);
  return (
    <>
      <Header />
      <Center>
        <h1>Blog</h1>
        <BlogArticleCard articles={articles} />
      </Center>

      <Footer />
    </>
  );
};

export default BlogPage;
