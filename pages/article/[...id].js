import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const ArticlePage = () => {
  const [article, setArticle] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/blog?id=" + id).then((response) => {
      setArticle(response.data);
    });
  }, [id]);

  const Title = styled.h1`
    color: #ffff;
  `;
  const Summary = styled.p`
    color: #ffff;
  `;
  const Content = styled.p`
    color: #ffff;
  `;

  return (
    <>
      <Header />
      <Center>
        {article && (
          <div>
            <Title>{article.title}</Title>
            <div>
              <img src={article?.images} alt="article-image" />
            </div>
            <div>
              <Summary>{article.summary}</Summary>
            </div>

            <div>
              <div>
                <h2>{article.author}</h2>
              </div>
              <div>
                <img src={article?.imgAuthor} alt="author-image" />
              </div>
            </div>

            <div>
              <Content>{article.content}</Content>
            </div>
          </div>
        )}
      </Center>
      <Footer />
    </>
  );
};

export default ArticlePage;

/*
 {article.length > 0 &&
          article[0].map((art) => (
          <div key={art._id}>
            {art.title}</div>)
          )} */
