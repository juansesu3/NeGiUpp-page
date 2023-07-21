import { styled } from "styled-components";
import Button from "./Button";
import Link from "next/link";

const ContainerArticles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  a {
    text-decoration: none;
  }
`;

const ArticleCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 19rem;
  overflow: hidden;

  border-radius: 1rem;
  background: linear-gradient(
    100deg,
    rgb(189 189 189 / 7%),
    rgba(20, 20, 20, 100%)
  );
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
`;
const ArticleImageConatiner = styled.div`
  width: 19rem;
  height: 23rem;
  margin: 0 auto;
  padding: 1.5rem;
`;
const ArticleImage = styled.img`
  border-radius: 1rem;
  object-fit: none;

  width: 100%;
  height: 12rem;
`;

const ArticleCardContent = styled.div`
  time {
    color: #ffff;
    opacity: 0.2;
  }
`;

const ArticleTitle = styled.div`
  display: flex;
  margin-bottom: 0;
  color: #ffff;
  svg {
    width: 1.5rem;
  }
`;
const ContainerSummary = styled.div`
  height: 180px; /* Establece la altura máxima del contenedor */
  overflow: hidden;
`;
const ArticleSummary = styled.p`
  letter-spacing: 0.3px;
  font-size: 1rem;
  color: #bcbcbc;
  opacity: 0.5;
  display: -webkit-box;
  -webkit-line-clamp: 7; /* Establece el número máximo de líneas que deseas mostrar */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BlogArticleCard = ({ articles }) => {
  return (
    <>
      <ContainerArticles>
        {articles.length > 0 &&
          articles.map((article) => (
            <Link key={article._id} href={"/article/" + article._id}>
              <ArticleCard>
                <ArticleImageConatiner>
                  <ArticleImage src={article.images[0]} alt="article-image" />
                  <ArticleCardContent>
                    <ArticleTitle>
                      <h1>{article.title}</h1>
                    </ArticleTitle>
                  </ArticleCardContent>
                </ArticleImageConatiner>
              </ArticleCard>
            </Link>
          ))}
      </ContainerArticles>
    </>
  );
};

export default BlogArticleCard;
