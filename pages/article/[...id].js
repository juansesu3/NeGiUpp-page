import Layout from "@/components/Layout";
import ReviewArticles from "@/components/ReviewArticles";
import DontMissIt from "@/components/DontMissIt";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { format } from "date-fns";
import Head from "next/head";

const ArticleContainer = styled.div`
  margin-top: 3.5rem;
  padding: 0 0.5rem;
`;

const Title = styled.h1`
color:  #000;
  margin: 0;
`;

const SectionOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }
`;
const Summary = styled.p`
  color: #000;
  opacity: 0.7;
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  p {
    margin: 0;
  }
`;
const DateCreated = styled.div`
color: #000;
opacity: 0.5;

`;


const AuthorContainerDesktop = styled.div`
  display: none;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-direction: column;
  img {
    width: 3rem;
    border-radius: 1.5rem;
  }
  h2 {
    color: #000;
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

  flex-direction: column;

  
  h2 {
    color: #ffff;
    font-weight: 400;
    font-size: 1.2rem;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const ProfileAutor = styled.div`
display: flex;
gap: 1rem;
align-items: center;
img {
    width: 3rem;
    height: 3rem;
   border-radius: 100%;
  }
`;
const InfoAuthor = styled.div`
color: white ;
display: flex;
flex-direction: column;
gap: 0.2rem;
p{
  color: #000;
  margin: 0;
  opacity: 0.5;
  font-size: 0.8rem;
}
h2{
  margin: 0;
 color:  #f96e04;;
  font-weight: 600;
}
`;

const Content = styled.div`
  color: #000;
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
  h2 {
color:  #f96e04;;
  }
  h3 {
    margin: 0;
  }
  p {
    opacity: 0.7;
    font-weight: 300;
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

const ReTweet = styled.div`
  color: #000000;
   margin: 0.5rem;
  span{
  color:  #f96e04;
  font-weight: 600;
  cursor: pointer;
 
&:hover{
  text-decoration: underline;
}
}
`;

const ArticlePage = () => {
  const [article, setArticle] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const { data: session, status } = useSession();
  console.log("Data session after sign >>>>", session)

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/blog?id=" + id).then((response) => {
      setArticle(response.data);
    });
  }, [id]);


  const FormatDate = (date) => {
    const fechaFormateada = format(new Date(date), 'MMMM d, yyyy');
    return fechaFormateada

  }

  const ArticleContent = ({ htmlContent }) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };

  return (
    <Layout>
      {article && (
        <>
        <Head>
            <title>{article.title}</title>
            <meta name="description" content={article.summary} />
            <meta property="og:title" content={article.title} />
            <meta property="og:description" content={article.summary} />
            {article?.images && (
                    <meta property="og:image" content={article?.images[0][0]} />
                )}
            <meta property="og:type" content="article" />
            <meta name="twitter:card" content="summary_large_image" />
            {/* Otros meta tags de SEO según tus necesidades */}
          </Head>
          <ArticleContainer>
            <SectionOne>
              <DeskDes>
                <div>
                  <Title>{article.title}</Title>
                </div>
                <AuthorContainerDesktop>
                  <DateCreated>
                    {
                    article.createdAt && 
                    FormatDate(article.createdAt)}
                  </DateCreated>
                  <ProfileAutor>
                  <div>
                    <img src={article?.imgAuthor} alt="author-image" />
                  </div>
                  <InfoAuthor>
                    <h2>{article.author}</h2>
                    <p>FullStack Developer Expert</p>
                  </InfoAuthor>
                  </ProfileAutor>
                </AuthorContainerDesktop>
                <DesktopDesign>
                  <Summary>{article.summary}</Summary>
                </DesktopDesign>
               
              </DeskDes>
              <ImgArticleContainer>
                {article?.images && (
                  <img src={article?.images[0][0]} alt="article-image" />
                )}
              </ImgArticleContainer>
              <div>
                <AuthorContainerMobile>
                <DateCreated>
                    {
                    article.createdAt && 
                    FormatDate(article.createdAt)}
                  </DateCreated>
                  <ProfileAutor>
                  <div>
                    <img src={article?.imgAuthor} alt="author-image" />
                  </div>
                  <InfoAuthor>
                    <h2>{article.author}</h2>
                    <p>FullStack Developer Expert</p>
                  </InfoAuthor>
                  </ProfileAutor>
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

          </ArticleContainer>
          <ReTweet>
            <p>
              ❤️️ Did you like this article? <span>Retweet it! </span>🙏
            </p>
          </ReTweet>
          <DontMissIt />

        </>
      )}
    </Layout>
  );
};

export default ArticlePage;
