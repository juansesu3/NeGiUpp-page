import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import ReactQuill from "react-quill";

const Title = styled.h1`
  color: #ffff;
  opacity: 0.9;
  font-size: 3.5rem;
  font-weight: bold;
`;
const SectionOne = styled.div`
  display: flex;
  gap: 1.5rem;
  img {
    width: 40rem;
  }
`;
const Summary = styled.p`
  color: #ffff;
  opacity: 0.7;
  font-size: 1.2rem;
  letter-spacing: 0.5px;
`;

const AuthorContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  img {
    width: 3rem;
    border-radius: 1.5rem;
  }
  h2 {
    color: #ffff;
    font-weight: 400;
    font-size: 1.2rem;
  }
`;

const Content = styled.div`
  color: #ffff;
  opacity: 0.7;
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  pre {
    background-color: #2b2b2b;
    color: white;
    border-radius: 0.5rem;
    padding: 1rem;
    font-size: 1.2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
      /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
      /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
      /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  }
`;

const ArticlePage = () => {
  const [article, setArticle] = useState([]);
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

  const ArticleContent = ({ htmlContent }) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };

  return (
    <>
      <Header />
      <Center>
        {article && (
          <div>
            <SectionOne>
              <div>
                <Title>{article.title}</Title>
                <Summary>{article.summary}</Summary>
              </div>
              <div>
                <img src={article?.images} alt="article-image" />
              </div>
            </SectionOne>
            <hr />

            <AuthorContainer>
              <div>
                <img src={article?.imgAuthor} alt="author-image" />
              </div>
              <div>
                <h2>{article.author}</h2>
              </div>
            </AuthorContainer>

            <div>
              <Content>
                <ArticleContent htmlContent={article.content} />
              </Content>
            </div>
          </div>
        )}
      </Center>
      <Footer />
    </>
  );
};

export default ArticlePage;
