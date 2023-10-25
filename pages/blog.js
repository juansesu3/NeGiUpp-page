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

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 3.5rem;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const FirstArticles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 0 .5rem;
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
  background-image: linear-gradient(to bottom right, #212121, #131313);
  border: 1px solid #212121;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
@media screen and (min-width: 450px) {
   width: 20rem
   
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
gap: .3rem;
align-items: start;
`;
const Comments = styled.div`
display: flex;
gap: .3rem;
align-items: start;
`;
const Share = styled.div`
display: flex;
gap: .3rem;
align-items: start;
`;

const TimeReading = styled.div`
  position: absolute;
  right: 5%;
  bottom: 2.5%;
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
                        <img src={firstArticle.images} alt="article image" />
                      </ImageContainer>
                      <ArticleName>
                        <h1>{firstArticle.title}</h1>
                      </ArticleName>
                      <InfoDetails>
                        <Like>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                              />
                            </svg>
                          </span>
                          <span>13</span>
                        </Like>
                        <Comments>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                              />
                            </svg>
                          </span>
                          <span>13</span>
                        </Comments>
                        <Share>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
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
                          <img src={secondArticle.images} alt="article image" />
                        </ImageContainer>
                        <ArticleName>
                          <h1>{secondArticle.title}</h1>
                        </ArticleName>
                        <InfoDetails>
                        <Like>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                              />
                            </svg>
                          </span>
                          <span>13</span>
                        </Like>
                        <Comments>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                              />
                            </svg>
                          </span>
                          <span>13</span>
                        </Comments>
                        <Share>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
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
            </SecondArticles>
          </SeconConatiner>
        </BlogContainer>
      </Layout>
    </>
  );
};

export default BlogPage;
