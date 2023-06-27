import { styled } from "styled-components";
import Button from "./Button";

const ContainerArticles = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 1.5rem;
  margin-top: 5rem;
`;

const ArticleCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20rem;
  height: 39rem;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 30px;
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
const ArticleImageConatiner = styled.div`
  width: 20rem;
  min-height: 15rem;
  margin: 0 auto;
`;
const ArticleImage = styled.img`
  border-radius: 8px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 100%;
  height: 15rem;
`;

const ArticleCardContent = styled.div`
  padding: 0.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  time {
    color: #ffff;
    opacity: 0.2;
  }
`;

const ArticleTitle = styled.h2`
  height: 3.5rem;
  text-transform: uppercase;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* Establece el número máximo de líneas */
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 0;
  text-align: start;
  color: #ffff;
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
            <ArticleCard key={article._id}>
              <ArticleImageConatiner>
                <ArticleImage src={article.images[0]} alt="article-image" />
              </ArticleImageConatiner>
              <ArticleCardContent>
                <ArticleTitle>{article.title}</ArticleTitle>
                <time>
                  {new Date(article.updatedAt).toLocaleString("sv-SE")}
                </time>
                <ContainerSummary>
                  <ArticleSummary>{article.summary}</ArticleSummary>
                </ContainerSummary>
                <Button
                  href={"/articles/" + article._id}
                  read="true"
                  artbutton="true"
                >
                  Read more
                </Button>
              </ArticleCardContent>
            </ArticleCard>
          ))}
      </ContainerArticles>
    </>
  );
};

export default BlogArticleCard;
