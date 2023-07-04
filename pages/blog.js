import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import BlogArticleCard from "@/components/BlogArticleCard";
import { styled } from "styled-components";
import Link from "next/link";
import { RevealWrapper } from "next-reveal";

const BlogContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const FirstArticles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  a {
    text-decoration: none;
    color: white;
  }
`;
const SecondArticles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  a {
    text-decoration: none;
    color: white;
  }
`;
const ArticleCard = styled.div`
  width: 20rem;

  border-radius: 30px;
  padding: 1rem;
  background: linear-gradient(
    100deg,
    rgb(189 189 189 / 7%),
    rgba(255, 255, 255, 0)
  );
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 15rem;

  img {
    width: 100%;
    height: 100%;

    border-radius: 30px;
    object-fit: cover;
  }
`;
const TitlePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  margin: 0 auto;

  h1 {
    font-size: 2.95rem;
    color: white;
    text-transform: uppercase;
  }
`;

const BlogPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("/api/blog").then((response) => {
      setArticles(response.data);
    });
  }, []);

  const firstArticles = articles.slice(0, 2);
  const secondArticles = articles.slice(2);
  return (
    <>
      <Header />
      <Center>
        <BlogContainer>
          <FirstArticles firstArticles={firstArticles}>
            {articles.length > 0 &&
              firstArticles.map((firstArticle, index) => (
                <RevealWrapper delay={index * 50} key={firstArticle._id}>
                  <Link href={"/article/" + firstArticle._id}>
                    <ArticleCard>
                      <ImageContainer>
                        <img src={firstArticle.images} alt="article image" />
                      </ImageContainer>
                      <div>
                        <h1>{firstArticle.title}</h1>
                      </div>
                    </ArticleCard>
                  </Link>
                </RevealWrapper>
              ))}
          </FirstArticles>

          <div>
            <TitlePage>
              <img src="https://my-page-negiupp.s3.amazonaws.com/1688122773024.png" />
              <h1>All articles</h1>
              <img src="https://my-page-negiupp.s3.amazonaws.com/1688122773024.png" />
            </TitlePage>
            <SecondArticles secondArticles={secondArticles}>
              {articles.length > 0 &&
                secondArticles.map((secondArticle, index) => (
                  <RevealWrapper delay={index * 50} key={secondArticle._id}>
                    <Link href={"/article/" + secondArticle._id}>
                      <ArticleCard>
                        <ImageContainer>
                          <img src={secondArticle.images} alt="article image" />
                        </ImageContainer>
                        <div>
                          <h1>{secondArticle.title}</h1>
                        </div>
                      </ArticleCard>
                    </Link>
                  </RevealWrapper>
                ))}
            </SecondArticles>
          </div>
        </BlogContainer>
      </Center>

      <Footer />
    </>
  );
};

export default BlogPage;
