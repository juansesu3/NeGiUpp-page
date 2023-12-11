import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import BlogArticleCard from "@/components/BlogArticleCard";
import { styled } from "styled-components";
import Link from "next/link";
import { RevealWrapper } from "next-reveal";
import Layout from "@/components/Layout";
import Head from "next/head";
import BlogIntroduction from "@/components/BlogIntroduction";

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const FirstArticles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 0 0.5rem;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: start;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;
const SecondArticles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  padding: 0 0.5rem;
  a {
    text-decoration: none;
    color: white;
  }
`;
const ArticleCard = styled.div`
  position: relative;
  min-width: 20rem;
  min-height: 29rem;
  border-radius: 1rem;
  padding: 1rem;
 background-image: linear-gradient(to bottom right, #000000, #131313);
  border: 1px solid #2b2b2b0f;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  @media screen and (min-width: 450px) {
    width: 20rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 15rem;

  img {
    width: 100%;
    height: 100%;

    border-radius: 1rem;
    object-fit: cover;
  }
`;

const ArticleName = styled.div`
  h1 {
    font-size: 1.5rem;
  }
`;

const InfoDetails = styled.div`
  position: absolute;
  bottom: 2%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  span > svg {
    width: 1.3rem;
  }
`;
const Like = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: start;
  svg {
    color: red;
  }
`;
const Comments = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: start;
  svg {
    color: #4d61fc;
  }
`;
const Share = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: start;
  svg {
    color: green;
  }
`;

const TimeReading = styled.div`
  position: absolute;
  right: 5%;
  bottom: 3%;
  opacity: 0.5;
  font-weight: 200;
  font-size: 0.9rem;
`;

const TitlePage = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  margin: 0 auto;

  h1 {
    font-size: 2.95rem;
    color: white;
    text-transform: uppercase;
  }
`;

const TitlePageMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  margin: 0 auto;

  h1 {
    font-size: 1.6rem;
    color: white;
    text-transform: uppercase;
  }
  svg {
    width: 1rem;
    color: white;
  }
  @media screen and (min-width: 768px) {
    display: none;
    h1 {
      font-size: 2.95rem;
    }
    svg {
      width: 3rem;
    }
  }
`;
const SeconConatiner = styled.div`
  width: 100%;
  justify-content: end;
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
      <Head>
        <title>Blog</title>
        <meta name="description" content="..." />
      </Head>
      <Layout>
        <BlogIntroduction />
        <BlogContainer>
          <TitlePageMobile>
            <img src="https://my-page-negiupp.s3.amazonaws.com/1688122773024.png" />
            <h1>All articles</h1>
            <img src="https://my-page-negiupp.s3.amazonaws.com/1688122773024.png" />
          </TitlePageMobile>
          <FirstArticles firstArticles={firstArticles}>
            {articles.length > 0 &&
              firstArticles.map((firstArticle, index) => (
                <RevealWrapper delay={index * 50} key={firstArticle._id}>
                  <Link href={"/article/" + firstArticle._id}>
                    <ArticleCard>
                      <ImageContainer>
                        <img src={firstArticle.images[0][0]} alt="article image" />
                      </ImageContainer>
                      <ArticleName>
                      {console.log(firstArticle.images[0][0])}
                        <h1>{firstArticle.title}</h1>
                      </ArticleName>
                      <InfoDetails>
                        <Like>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                            >
                              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg>
                          </span>
                          <span>157</span>
                        </Like>
                        <Comments>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25zM8.25 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm2.625 1.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          <span>23</span>
                        </Comments>
                        <Share>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                fillRule="evenodd"
                                d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </Share>
                      </InfoDetails>
                      <TimeReading>5 min read</TimeReading>
                    </ArticleCard>
                  </Link>
                </RevealWrapper>
              ))}
          </FirstArticles>

          <SeconConatiner>
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
                          <img src={secondArticle.images[0][0]} alt="article image" />
                        </ImageContainer> 
                        <ArticleName>
                          <h1>{secondArticle.title}</h1>
                        </ArticleName>
                        <InfoDetails>
                          <Like>
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                              >
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                              </svg>
                            </span>
                            <span>53</span>
                          </Like>
                          <Comments>
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25zM8.25 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm2.625 1.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span>15</span>
                          </Comments>
                          <Share>
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </Share>
                        </InfoDetails>
                        <TimeReading>4 min read</TimeReading>
                      </ArticleCard>
                    </Link>
                  </RevealWrapper>
                ))}
            </SecondArticles>
          </SeconConatiner>
        </BlogContainer>
      </Layout>
    </>
  );
};

export default BlogPage;
