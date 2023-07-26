import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const Title = styled.h1`
  color: #ffff;
  opacity: 0.9;
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0;
`;
const SectionOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media screen and (min-width:768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0rem;
  }
`;
const Summary = styled.p`
  color: #ffff;
  opacity: 0.7;
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  p {
    margin: 0;
  }
`;

const AuthorContainerDesktop = styled.div`
  display: none;
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
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
const AuthorContainerMobile = styled.div`
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
  @media screen and (min-width: 768px) {
    display: none;
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
const Mobile = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const DesktopDesign = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
const DeskDes = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 50%;
    
  }
`;
const ImgArticleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 500px;
    justify-content: flex-end;
   
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
    <Center>
      <Header />
      {article && (
        <div>
          <SectionOne>
            <DeskDes>
              <div>
                <Title>{article.title}</Title>
              </div>
              <DesktopDesign>
                <Summary>{article.summary}</Summary>
              </DesktopDesign>
              <AuthorContainerDesktop>
                <div>
                  <img src={article?.imgAuthor} alt="author-image" />
                </div>
                <div>
                  <h2>{article.author}</h2>
                </div>
              </AuthorContainerDesktop>
            </DeskDes>

            <ImgArticleContainer>
              <img src={article?.images} alt="article-image" />
            </ImgArticleContainer>
            <div>
            <AuthorContainerMobile>
              <div>
                <img src={article?.imgAuthor} alt="author-image" />
              </div>
              <div>
                <h2>{article.author}</h2>
              </div>
            </AuthorContainerMobile>
            <Mobile>
              <Summary>{article.summary}</Summary>
            </Mobile>
            </div>
          </SectionOne>

          <div>
            <Content>
              <ArticleContent htmlContent={article.content} />
            </Content>
          </div>
        </div>
      )}
      
      <Footer />
    </Center>
  );
};

export default ArticlePage;
