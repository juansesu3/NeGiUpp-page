import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import Button from "./Button";

const SliderContainer = styled.div`
  width: 15rem;
  overflow: hidden;
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

const SliderTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;
const ArticleCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 41.8rem;
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
  max-width: 100%;
  min-height: 15rem;
  margin: 0 auto;
`;
const ArticleImage = styled.img`
  border-radius: 8px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 100%;
  height: 100%;
`;

const ArticleCardContent = styled.div`
  padding: 0.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
`;

const ArticleSummary = styled.p`
  height: 200px;
  letter-spacing: 0.3px;
  font-size: 1rem;
  color: #bcbcbc;
  opacity: 0.5;

  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  margin-bottom: 1.5rem;
  text-align: start;
`;

const Slider = ({ articles }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % articles.length);
    }, 4000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [articles.length]);

  return (
    <SliderContainer>
      <SliderTrack
        style={{
          width: `${articles.length * 100}%`,
          transform: `translateX(-${(currentSlide / articles.length) * 100}%)`,
        }}
      >
        {articles.map((article) => (
          <ArticleCard key={article._id}>
            <ArticleImageConatiner>
              <ArticleImage src={article.images[0]} alt="article-image" />
            </ArticleImageConatiner>
            <ArticleCardContent>
              <ArticleTitle>{article.title}</ArticleTitle>
              <time>{new Date(article.updatedAt).toLocaleString("sv-SE")}</time>
              <ArticleSummary>{article.summary}</ArticleSummary>
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
      </SliderTrack>
    </SliderContainer>
  );
};

export default Slider;
