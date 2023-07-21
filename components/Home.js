import { css, styled } from "styled-components";
import Center from "./Center";
import Link from "next/link";
import InfiniteScrollAmimation from "./InfiniteScrollAmimation";
import Button from "./Button";
import { RevealWrapper } from "next-reveal";

const OficialContent = styled.div`
  background-color: #0f0f0f;
  color: #ffff;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const PrincipalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media screen and (min-width: 910px) {
    flex-direction: row-reverse;
  }
`;
//Started First Section
const SectionContainer = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 1.5rem;
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
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const SectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 30px;
  line-height: 40px;
  color: #fff;
  font-weight: 500;
  margin-bottom: 12px;
  span {
    color: #4d61fc;
  }
`;

const Intro = styled.p`
  color: #bcbcbc;
  letter-spacing: 0.3px;
  font-size: 20px;
`;

const ImgContainer = styled.div`
  width: 17em;
  height: auto;
  @media screen and (min-width: 768px) {
    width: 150rem;
  }
`;
const FirstImageInfo = styled.img`
  width: 100%;
`;

//Finished first section

//started other sections

const SectionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const SecondSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  white-space: nowrap;
  border-radius: 1rem;
  cursor: pointer;
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

const SubTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  line-height: 40px;
  color: #fff;
  font-weight: 500;
  white-space: normal;
  text-align: center;
  span {
    color: #4d61fc;
  }
`;

const SecondSectionLevel1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  @media screen and (min-width: 610px) {
    flex-direction: row;
  }
`;
const SecondSection1 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.7rem;
  white-space: nowrap;
  cursor: pointer;
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
const SecondSection2 = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 1.7rem;
  white-space: nowrap;
  border-radius: 1rem;
  cursor: pointer;
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
const SectionNewsFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SecondSectionLevel2 = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`;

const SecundaryContent = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
`;
const SecundaryContentSection1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15rem;
  cursor: pointer;
  padding: 1.7rem;
  white-space: nowrap;
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

const ProyectTech = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1.5rem;
  @media screen and (min-width: 610px) {
    flex-direction: row;
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const IconServices = styled.div`
  display: flex;
  gap: 1.5rem;
 
  @media screen and (min-width: 500px) {
    gap: 3rem;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  svg {
    width: 3em;
    margin: .5rem auto;
    transition: 0.3s;
    @media screen and (min-width: 500px) {
      width: 4em;
    }
    &:hover {
      color: #4d61fc;
    }
  }
`;

const Home = () => {
  return (
    <Center>
      <OficialContent>
        <RevealWrapper origin={"left"}>
          <SectionContainer>
            <SectionInfo>
              <Title>
                Let&apos;s build the future <span>together</span>
              </Title>
              <Intro>
                I create customized and cutting-edge solutions that enhance your
                online presence. Stand out in the digital world and achieve your
                goals with me. Let&apos;s build the success of your business in
                less time than you can imagine!
              </Intro>
              <ContainerButtons>
                <Button href={"/founders"} outline="true" read="true">
                  Read More
                </Button>
                <Button href={"/notfound"} primary="true" size="l">
                  Start
                </Button>
              </ContainerButtons>
            </SectionInfo>

            <ImgContainer>
              <FirstImageInfo src="https://my-page-negiupp.s3.amazonaws.com/1689091977005.png" />
            </ImgContainer>
          </SectionContainer>
        </RevealWrapper>

        <RevealWrapper>
          <PrincipalContent>
            <SectionsContainer>
              <SecondSectionLevel1>
                <SecondSection1>
                  <SubTitle>How can I help you?</SubTitle>
                </SecondSection1>

                <SectionNewsFlex>
                  <InfiniteScrollAmimation />
                  <ProyectTech>
                    <SecondSection2 href={"/proyects"}>
                      <SubTitle>Proyects</SubTitle>
                    </SecondSection2>
                    <SecondSection2 href={"/technologiesStack"}>
                      <SubTitle>Technologies</SubTitle>
                    </SecondSection2>
                  </ProyectTech>
                </SectionNewsFlex>
              </SecondSectionLevel1>
              <SecondSectionLevel2>
                <SecondSection>
                  <SubTitle>
                    Accelerate Transformation: Unlock Your{" "}
                    <span>Digital Potential</span>
                  </SubTitle>
                </SecondSection>

                <SecondSection>
                  <SubTitle>
                    Next steps to transform your <span>idea</span> into a
                    reality
                  </SubTitle>
                </SecondSection>
              </SecondSectionLevel2>
              <SecundaryContent>
                <SecundaryContentSection1>
                  <IconServices>
                    <div>
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
                          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        />
                      </svg>
                      Mobile dev
                    </div>
                    <div>
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
                          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                        />
                      </svg>
                      Web dev
                    </div>
                    <div>
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
                          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                        />
                      </svg>
                      Desktop dev
                    </div>
                  </IconServices>
                  <SubTitle>Services Offering</SubTitle>
                </SecundaryContentSection1>
              </SecundaryContent>
            </SectionsContainer>
          </PrincipalContent>
        </RevealWrapper>
      </OficialContent>
    </Center>
  );
};

export default Home;
