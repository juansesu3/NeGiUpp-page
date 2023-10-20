import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { RevealWrapper } from "next-reveal";

const ConatinerNotFound = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.5rem 0.5rem 1rem;
  @media screen and (min-width: 768px) {
    padding: 3.5rem 0;
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
    color: #4d61fc;
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
const LogoContainer = styled.div`
  width: 5rem;
  margin-top: 1rem;
  img {
    width: 100%;
  }
`;

const NegiuppPage = () => {
  return (
    <>
      <Head>
        <title>About NeGiupp - The Philosophy of Never Giving Up</title>
        <meta
          name="description"
          content="Discover the NeGiupp philosophy, a commitment to growth, resilience, and the never-give-up mindset that drives personal and professional success."
        />
      </Head>

      <Layout>
        <RevealWrapper>
          <ConatinerNotFound>
            <Title>
              <p>SelfBranding</p>

              <LogoContainer>
                <Image
                  src="/assets/logofinalpulido-white-3.png"
                  alt="NeGiupp Logo - Philosophy of Never Giving Up"
                  width={400}
                  height={200}
                />
              </LogoContainer>
              <h1>NeGiupp</h1>
            </Title>
            <h2>
              If you can imagine it, you can program it. Just never stop trying
              and, under no circumstances, give up!
            </h2>
            <p>
              NeGiupp is far more than a mere personal brand; it&apos;s a
              profound and unwavering commitment to growth and overcoming
              challenges. It embodies the &apos;Never Give Up&apos; philosophy
              that has been the driving force behind every trial and achievement
              in my personal and professional journey.
            </p>
            <p>
              Throughout my life, I&apos;ve encountered a series of challenges
              that have propelled me to discover new strengths and consistently
              strive for the best version of myself. Each obstacle has
              transformed into an opportunity for personal evolution and the
              development of greater resilience
            </p>
            <p>
              NeGiupp encapsulates the attitude of never giving up, of
              persisting even when circumstances are daunting. It reflects my
              unwavering determination to surmount barriers and achieve goals
              that once appeared unattainable. Through this approach, I&apos;ve
              been able to learn, grow, and evolve across all facets of my life.
            </p>
            <p>
              In my professional trajectory and personal development, NeGiupp
              has become a guiding beacon towards continuous achievement and
              self-improvement. It serves as a constant reminder that
              difficulties are disguised opportunities and that resilience is
              the key to turning them into triumphs.
            </p>
            <p>
              NeGiupp is a living testament to my belief that perseverance and
              the &apos;never give up&apos; mindset pave the way for ongoing
              progress. Through this philosophy, I&apos;ve unearthed the inner
              strength to confront any challenge and turn it into a stepping
              stone towards advancement on my journey towards growth and
              success.
            </p>

            <h3>¡Never Give Up!</h3>
          </ConatinerNotFound>
        </RevealWrapper>
      </Layout>
    </>
  );
};

export default NegiuppPage;
