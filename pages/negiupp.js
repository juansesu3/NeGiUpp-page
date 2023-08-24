import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { styled } from "styled-components";

const ConatinerNotFound = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0.5rem 1rem;
  @media screen and (min-width: 768px) {
    padding: 3rem 0;
  }
  p {
    color: white;
    opacity: 0.5;
    text-align: center;
  }
  h2 {
    color: white;
    text-align: center;
  }
  h3 {
    color: white;
    text-align: center;
  }

  span {
    color: #4d61fc;
  }
  svg {
    width: 5rem;
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0;
    color: #4d61fc;
  }
  p {
    margin: 0;
  }
  svg {
    color: white;
  }
`;

const NegiuppPage = () => {
  return (
    <>
      <Head>
        <title>Self Branding</title>
        <meta name="description" content="..." />
      </Head>
      <Layout>
        <ConatinerNotFound>
          <Title>
            <p>SelfBranding</p>
            <h1>NeGiupp</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </Title>
          <h2>
            ¡If you can imagine it, you can program it. Just never stop trying,
            and under no circumstances, give up.!
          </h2>
          <p>
            NeGiupp is far more than a mere personal brand; it&apos;s a profound
            and unwavering commitment to growth and overcoming challenges. It
            embodies the &apos;Never Give Up&apos; philosophy that has been the
            driving force behind every trial and achievement in my personal and
            professional journey.
          </p>
          <p>
            Throughout my life, I&apos;ve encountered a series of challenges
            that have propelled me to discover new strengths and consistently
            strive for the best version of myself. Each obstacle has transformed
            into an opportunity for personal evolution and the development of
            greater resilience
          </p>
          <p>
            NeGiupp encapsulates the attitude of never giving up, of persisting
            even when circumstances are daunting. It reflects my unwavering
            determination to surmount barriers and achieve goals that once
            appeared unattainable. Through this approach, I&apos;ve been able to
            learn, grow, and evolve across all facets of my life.
          </p>
          <p>
            In my professional trajectory and personal development, NeGiupp has
            become a guiding beacon towards continuous achievement and
            self-improvement. It serves as a constant reminder that difficulties
            are disguised opportunities and that resilience is the key to
            turning them into triumphs.
          </p>
          <p>
            NeGiupp is a living testament to my belief that perseverance and the
            &apos;never give up&apos; mindset pave the way for ongoing progress.
            Through this philosophy, I&apos;ve unearthed the inner strength to
            confront any challenge and turn it into a stepping stone towards
            advancement on my journey towards growth and success.
          </p>

          <h3>¡Never Give Up!</h3>
        </ConatinerNotFound>
      </Layout>
    </>
  );
};

export default NegiuppPage;
