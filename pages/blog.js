
import { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";
import Link from "next/link";
import { RevealWrapper } from "next-reveal";
import Layout from "@/components/Layout";
import Head from "next/head";
import BlogIntroduction from "@/components/BlogIntroduction";
import StartSolid from "@/components/icons/StarsSolid";
import Swal from 'sweetalert2';

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
  gap: 1rem;
  justify-content: center;
  padding: 0 0.5rem;
  a {
    text-decoration: none;
    color: white;
  }
`;

const ArticleCard = styled.div`
  position: relative;
  min-width: 21.2rem;
  min-height: 29rem;
  border-radius: 1rem;
  border: 2px solid transparent;
  padding: 1rem;
  background:#ffffff;
color: #000000;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 450px) {
    width: 20rem;
  }
    transition: 0.3s;
    position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, border 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
 
  
  }
  &::before {
    content: 'Read'; // Texto que se mostrará
    position: absolute;
    top: 35%; // Cambiado a 100%
    left: 50%;
    transform: translateX(-50%) translateY(-50%) rotateX(180deg); // Añadido rotateX
    font-size: 1rem; // Tamaño del texto
    font-weight: bold; // Puedes ajustar según tu preferencia
    color:#fff;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease; // Añadida la transición de transform

    border-radius: 0.75rem;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    padding: 0.5rem 1rem;
    background-color: #f96e04;
      &:hover {
    background-color: #f96e04;
cursor: pointer;
  }
  }
  &:hover::before {
    opacity: 1;
    transform: translateX(-50%) translateY(-100%) rotateX(0deg); // Restaurar la posición original
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
    color: #000;
    
    font-size: 1.5rem;
    font-weight: 400;
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
  align-items: center;
 
  svg {
    color: gold;
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
    color: #f96e04;
  }
`;

const TimeReading = styled.div`
  position: absolute;
  right: 5%;
  bottom: 3%;
  
  font-weight: 400;
  font-size: 0.9rem;
  color: #f96e04;
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
    font-size: 2.5rem;
    color: #000000;
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
    color: #000000;
    text-transform: uppercase;
  }
  svg {
    width: 2rem;
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
  const [shareUrl, setShareUrl] = useState("")

  useEffect(() => {
    axios.get("/api/blog").then((response) => {
      setArticles(response.data);
    });
  }, []);

  const firstArticles = articles.slice(0, 2);
  const secondArticles = articles.slice(2);
  //'facebook', 'https://www.facebook.com/sharer/sharer.php?u=' +
  const shareOnSocialMedia = (shareUrl) => {
    Swal.fire({
      title: 'Share Our Article',
      html: `
      <!-- Aquí puedes colocar tu formulario de suscripción -->

      <button type="button" class="swal2-confirm swal2-styled" id="google-sign-in-btn">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      ></path>
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      ></path>
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      ></path>
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      ></path>
    </svg>
   Google
      </button>

      <button type="button" class="swal2-confirm swal2-styled" id="github-sign-in-btn">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
      <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
  </svg>
  GitHub
      </button>
   
     

    `,
      showCancelButton: true,



    });

  };

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
            <span>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="34" height="26" viewBox="0 0 24 24">
                        <path d="M0 0 C0.66 0 1.32 0 2 0 C2.66 4.62 3.32 9.24 4 14 C6.64 10.37 9.28 6.74 12 3 C12.66 3.33 13.32 3.66 14 4 C12.02 8.29 10.04 12.58 8 17 C12.29 15.02 16.58 13.04 21 11 C21 11.99 21 12.98 21 14 C17.85162825 16.62551716 14.42318195 18.73214196 11 21 C15.62 21.66 20.24 22.32 25 23 C25 23.66 25 24.32 25 25 C20.38 25.66 15.76 26.32 11 27 C14.63 29.64 18.26 32.28 22 35 C21.505 35.99 21.505 35.99 21 37 C16.71 35.02 12.42 33.04 8 31 C9.98 35.29 11.96 39.58 14 44 C13.01 44 12.02 44 11 44 C8.37448284 40.85162825 6.26785804 37.42318195 4 34 C3.34 38.62 2.68 43.24 2 48 C1.34 48 0.68 48 0 48 C-0.66 43.38 -1.32 38.76 -2 34 C-4.64 37.63 -7.28 41.26 -10 45 C-10.66 44.67 -11.32 44.34 -12 44 C-10.02 39.71 -8.04 35.42 -6 31 C-10.29 32.98 -14.58 34.96 -19 37 C-19 36.01 -19 35.02 -19 34 C-15.85162825 31.37448284 -12.42318195 29.26785804 -9 27 C-13.62 26.34 -18.24 25.68 -23 25 C-23 24.34 -23 23.68 -23 23 C-16.07 22.01 -16.07 22.01 -9 21 C-12.63 18.36 -16.26 15.72 -20 13 C-19.67 12.34 -19.34 11.68 -19 11 C-12.565 13.97 -12.565 13.97 -6 17 C-7.98 12.71 -9.96 8.42 -12 4 C-11.01 4 -10.02 4 -9 4 C-6.37448284 7.14837175 -4.26785804 10.57681805 -2 14 C-1.34 9.38 -0.68 4.76 0 0 Z" fill="#6cdb00" transform="translate(12,12) scale(0.6)" />
                      </svg>
            </span>

            <h1>All articles</h1>
            <span>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="34" height="26" viewBox="0 0 24 24">
                        <path d="M0 0 C0.66 0 1.32 0 2 0 C2.66 4.62 3.32 9.24 4 14 C6.64 10.37 9.28 6.74 12 3 C12.66 3.33 13.32 3.66 14 4 C12.02 8.29 10.04 12.58 8 17 C12.29 15.02 16.58 13.04 21 11 C21 11.99 21 12.98 21 14 C17.85162825 16.62551716 14.42318195 18.73214196 11 21 C15.62 21.66 20.24 22.32 25 23 C25 23.66 25 24.32 25 25 C20.38 25.66 15.76 26.32 11 27 C14.63 29.64 18.26 32.28 22 35 C21.505 35.99 21.505 35.99 21 37 C16.71 35.02 12.42 33.04 8 31 C9.98 35.29 11.96 39.58 14 44 C13.01 44 12.02 44 11 44 C8.37448284 40.85162825 6.26785804 37.42318195 4 34 C3.34 38.62 2.68 43.24 2 48 C1.34 48 0.68 48 0 48 C-0.66 43.38 -1.32 38.76 -2 34 C-4.64 37.63 -7.28 41.26 -10 45 C-10.66 44.67 -11.32 44.34 -12 44 C-10.02 39.71 -8.04 35.42 -6 31 C-10.29 32.98 -14.58 34.96 -19 37 C-19 36.01 -19 35.02 -19 34 C-15.85162825 31.37448284 -12.42318195 29.26785804 -9 27 C-13.62 26.34 -18.24 25.68 -23 25 C-23 24.34 -23 23.68 -23 23 C-16.07 22.01 -16.07 22.01 -9 21 C-12.63 18.36 -16.26 15.72 -20 13 C-19.67 12.34 -19.34 11.68 -19 11 C-12.565 13.97 -12.565 13.97 -6 17 C-7.98 12.71 -9.96 8.42 -12 4 C-11.01 4 -10.02 4 -9 4 C-6.37448284 7.14837175 -4.26785804 10.57681805 -2 14 C-1.34 9.38 -0.68 4.76 0 0 Z" fill="#6cdb00" transform="translate(12,12) scale(0.6)" />
                      </svg>
            </span>

          </TitlePageMobile>

          <SeconConatiner>
            <TitlePage>
            <span>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="34" height="26" viewBox="0 0 24 24">
                        <path d="M0 0 C0.66 0 1.32 0 2 0 C2.66 4.62 3.32 9.24 4 14 C6.64 10.37 9.28 6.74 12 3 C12.66 3.33 13.32 3.66 14 4 C12.02 8.29 10.04 12.58 8 17 C12.29 15.02 16.58 13.04 21 11 C21 11.99 21 12.98 21 14 C17.85162825 16.62551716 14.42318195 18.73214196 11 21 C15.62 21.66 20.24 22.32 25 23 C25 23.66 25 24.32 25 25 C20.38 25.66 15.76 26.32 11 27 C14.63 29.64 18.26 32.28 22 35 C21.505 35.99 21.505 35.99 21 37 C16.71 35.02 12.42 33.04 8 31 C9.98 35.29 11.96 39.58 14 44 C13.01 44 12.02 44 11 44 C8.37448284 40.85162825 6.26785804 37.42318195 4 34 C3.34 38.62 2.68 43.24 2 48 C1.34 48 0.68 48 0 48 C-0.66 43.38 -1.32 38.76 -2 34 C-4.64 37.63 -7.28 41.26 -10 45 C-10.66 44.67 -11.32 44.34 -12 44 C-10.02 39.71 -8.04 35.42 -6 31 C-10.29 32.98 -14.58 34.96 -19 37 C-19 36.01 -19 35.02 -19 34 C-15.85162825 31.37448284 -12.42318195 29.26785804 -9 27 C-13.62 26.34 -18.24 25.68 -23 25 C-23 24.34 -23 23.68 -23 23 C-16.07 22.01 -16.07 22.01 -9 21 C-12.63 18.36 -16.26 15.72 -20 13 C-19.67 12.34 -19.34 11.68 -19 11 C-12.565 13.97 -12.565 13.97 -6 17 C-7.98 12.71 -9.96 8.42 -12 4 C-11.01 4 -10.02 4 -9 4 C-6.37448284 7.14837175 -4.26785804 10.57681805 -2 14 C-1.34 9.38 -0.68 4.76 0 0 Z" fill="#6cdb00" transform="translate(12,12) scale(0.6)" />
                      </svg>
            </span>
              <h1>All articles</h1>
              <span>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="34" height="26" viewBox="0 0 24 24">
                        <path d="M0 0 C0.66 0 1.32 0 2 0 C2.66 4.62 3.32 9.24 4 14 C6.64 10.37 9.28 6.74 12 3 C12.66 3.33 13.32 3.66 14 4 C12.02 8.29 10.04 12.58 8 17 C12.29 15.02 16.58 13.04 21 11 C21 11.99 21 12.98 21 14 C17.85162825 16.62551716 14.42318195 18.73214196 11 21 C15.62 21.66 20.24 22.32 25 23 C25 23.66 25 24.32 25 25 C20.38 25.66 15.76 26.32 11 27 C14.63 29.64 18.26 32.28 22 35 C21.505 35.99 21.505 35.99 21 37 C16.71 35.02 12.42 33.04 8 31 C9.98 35.29 11.96 39.58 14 44 C13.01 44 12.02 44 11 44 C8.37448284 40.85162825 6.26785804 37.42318195 4 34 C3.34 38.62 2.68 43.24 2 48 C1.34 48 0.68 48 0 48 C-0.66 43.38 -1.32 38.76 -2 34 C-4.64 37.63 -7.28 41.26 -10 45 C-10.66 44.67 -11.32 44.34 -12 44 C-10.02 39.71 -8.04 35.42 -6 31 C-10.29 32.98 -14.58 34.96 -19 37 C-19 36.01 -19 35.02 -19 34 C-15.85162825 31.37448284 -12.42318195 29.26785804 -9 27 C-13.62 26.34 -18.24 25.68 -23 25 C-23 24.34 -23 23.68 -23 23 C-16.07 22.01 -16.07 22.01 -9 21 C-12.63 18.36 -16.26 15.72 -20 13 C-19.67 12.34 -19.34 11.68 -19 11 C-12.565 13.97 -12.565 13.97 -6 17 C-7.98 12.71 -9.96 8.42 -12 4 C-11.01 4 -10.02 4 -9 4 C-6.37448284 7.14837175 -4.26785804 10.57681805 -2 14 C-1.34 9.38 -0.68 4.76 0 0 Z" fill="#6cdb00" transform="translate(12,12) scale(0.6)" />
                      </svg>
            </span>
            </TitlePage>
            <SecondArticles secondArticles={secondArticles}>
              {articles.length > 0 &&
                articles.map((secondArticle, index) => (
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
                              <StartSolid />
                            </span>
                            <span>5.0</span>
                          </Like>
                          {/*
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
                          </Comments> */}
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
