import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import BlogArticleCard from "@/components/BlogArticleCard";
import { styled } from "styled-components";

const BlogContainer = styled.div`
margin-top: 5rem;
  h1 {
    color: #ffff;
    text-align: center;
  }
`;

const Introduction = styled.p`
  color: #ffff;
  font-size: 1.5rem;
  opacity: 0.5;
`;

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
        <BlogContainer>
          <h1>Blog</h1>
          <Introduction>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Introduction>

          <BlogArticleCard articles={articles} />
        </BlogContainer>
      </Center>

      <Footer />
    </>
  );
};

export default BlogPage;
