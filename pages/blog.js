import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import BlogArticleCard from "@/components/BlogArticleCard";
import { styled } from "styled-components";

const BlogContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const ContainerDesign = styled.div`
  h1 {
    color: #ffff;
  }
`;
const ContainerFirst = styled.div`
  display: flex;
  flex-direction: column;
`;

const ConatinerPrincipal = styled.div`
  display: flex;
  gap: 1.5rem;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  gap: 1.5rem;
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
        <ConatinerPrincipal>
          <ContainerFirst>
            <BlogArticleCard articles={articles.slice(0, 2)} />
          </ContainerFirst>

          <BlogContainer>
            <ContainerDesign>
              <Title>
                {" "}
                <span>
                  <img src="https://my-page-negiupp.s3.amazonaws.com/1688122773024.png" />
                </span>
                <h1>Blog</h1>{" "}
                <span>
                  <img src="https://my-page-negiupp.s3.amazonaws.com/1688122773024.png" />
                </span>
              </Title>
              <BlogArticleCard articles={articles.slice(2)} />
            </ContainerDesign>
          </BlogContainer>
        </ConatinerPrincipal>
      </Center>

      <Footer />
    </>
  );
};

export default BlogPage;
