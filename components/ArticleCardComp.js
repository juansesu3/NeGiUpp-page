import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import Button from "./Button";

const SliderContainer = styled.div`
  width: 16.5rem;
  height: 17rem;
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

const SliderTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;
const ArticleCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 1rem;
  height: 17em;
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
  object-fit: cover;
  max-height: 16.5rem;

  margin: 0 auto;
`;
const ArticleImage = styled.img`
  border-radius: 1rem;

  width: 100%;
  height: 12rem;
`;

const ArticleTitle = styled.h2`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* Establece el número máximo de líneas */
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 0.5rem;
  margin-bottom: 0;
`;

const Slider = ({ latestArticles }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % latestArticles.length);
    }, 4000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [latestArticles.length]);

  return (
    <SliderContainer>
      <SliderTrack
        style={{
          width: `${latestArticles.length * 100}%`,
          transform: `translateX(-${
            (currentSlide / latestArticles.length) * 100
          }%)`,
        }}
      >
        {latestArticles.map((article) => (
          <ArticleCard key={article._id}>
            <ArticleImageConatiner>
              <ArticleImage src={article.images[0]} alt="article-image" />
            </ArticleImageConatiner>

            <ArticleTitle>{article.title}</ArticleTitle>
          </ArticleCard>
        ))}
      </SliderTrack>
    </SliderContainer>
  );
};

export default Slider;
