import { css, styled } from "styled-components";
import Center from "./Center";
import Link from "next/link";
import InfiniteScrollAmimation from "./InfiniteScrollAmimation";
import Button from "./Button";
import ArticleCardComp from "./ArticleCardComp";
import { RevealWrapper } from "next-reveal";

const Bg = styled.div`
  background-color: #0f0f0f;
  color: #ffff;
  padding: 50px 0;
  height: 100%;
`;
const OficialContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const PrincipalContent = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  gap: 1.5rem;
`;
//Started First Section
const SectionContainer = styled.section`
  display: flex;
  padding: 1.5rem;
  border-radius: 30px;
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
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ImgContainer = styled.div`
  width: 5000px;
`;
const FirstImageInfo = styled.img`
  width: 100%;
`;

//Finished first section

//started other sections

const SectionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.5rem;
`;

const SecondSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  padding: 1.5rem;
  white-space: nowrap;
  border-radius: 30px;
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
  gap: 1.5rem;
  width: 100%;
`;
const SecondSection1 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  padding: 1.7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  border-radius: 30px;
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
const SecondSection2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1.7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 30px;
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
const SectionNews = styled.div`
  height: 3rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 30px;
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

const SecondSectionLevel2 = styled.section`
  display: flex;
  gap: 1.5rem;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 30px;
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

const AsideArtStart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 30rem;
`;

const Start = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 15rem;
  color: #4d61fc;
  padding: 1.7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 30px;
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

const ProyectTech = styled.div`
  display: flex;
  gap: 1.5rem;
`;
const TitleNews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: #4d61fc;
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const IconServices = styled.div`
  display: flex;
  gap: 3rem;
  div {
    display: flex;
    flex-direction: column;
  }
  svg {
    width: 4rem;
    margin: 0 auto;
    transition: 0.3s;
    &:hover {
      color: #4d61fc;
    }
  }
`;

const StyledLink = styled(Link)`
  ${(props) =>
    props.proyect &&
    css`
      margin: 0;
      font-size: 1.5rem;
      line-height: 40px;
      color: #fff;
      font-weight: 500;
      white-space: normal;
      text-align: center;
    `}
  text-decoration: none;
`;

const Home = ({ latestArticles }) => {
  return (
    <Bg>
      <Center>
        <OficialContent>
          <div>
            <SectionContainer>
              <RevealWrapper origin={"left"}>
                <SectionInfo>
                  <Title>
                    Let&apos;s build the future <span>together</span>
                  </Title>
                  <Intro>
                    We create customized and cutting-edge solutions that enhance
                    your online presence. Stand out in the digital world and
                    achieve your goals with us. Let&apos;s build the success of
                    your business in less time than you can imagine!
                  </Intro>

                  <ContainerButtons>
                    <Button href={"/"} outline="true" read="true">
                      Read More
                    </Button>
                    <Button href={"/"} primary="true" size="l">
                      Start
                    </Button>
                  </ContainerButtons>
                </SectionInfo>
              </RevealWrapper>
              <ImgContainer>
                <RevealWrapper>
                  <FirstImageInfo src="https://my-page-negiupp.s3.amazonaws.com/1687442391096.png" />
                </RevealWrapper>
              </ImgContainer>
            </SectionContainer>
          </div>
          <RevealWrapper>
            <PrincipalContent>
              <AsideArtStart>
                <TitleNews>
                  <span> Latest Articles</span>
                </TitleNews>
                <ArticleCardComp latestArticles={latestArticles} />
                <Start>
                  <Title>
                    <span>START</span>
                  </Title>
                </Start>
              </AsideArtStart>

              <SectionsContainer>
                <SecondSectionLevel1>
                  <SecondSection1>
                    <SubTitle>How can we help you?</SubTitle>
                    {/* <Intro>
              At NeGiUpp digital consulting, we have created an exclusive
              membership model to provide you with tailored full stack web
              development services. We are here to drive your online business
              and ensure you achieve the best results. Our team of expert web
              developers will take care of all your digital needs. Whether you
              need a website from scratch, ongoing improvements, or digital
              marketing strategies, we are ready to work with you. By joining
              our membership, you will gain exclusive access to highly
              functional and visually appealing solutions. Additionally, you
              will receive regular updates on the latest digital trends and
              technologies. We focus on your success and are committed to
              providing personalized service and ongoing support. No matter what
              your goals are, we will be by your side to help you achieve them.
              Discover how our full stack web development consultancy can take
              your business to the next level. Contact us today and let us be
              your trusted digital partner. Together, we will achieve the online
              success you desire.
            </Intro>*/}
                  </SecondSection1>

                  <SectionNewsFlex>
                    <TitleNews>
                      <span> News</span>
                    </TitleNews>

                    <SectionNews>
                      <InfiniteScrollAmimation />
                    </SectionNews>

                    <ProyectTech>
                      <SecondSection2>
                        <SubTitle>
                          <StyledLink proyect="true" href={"/proyects"}>
                            Proyects
                          </StyledLink>
                        </SubTitle>
                      </SecondSection2>
                      <SecondSection2>
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
                    {/*  <Intro>
              At NeGiUpp digital consulting, we specialize in accelerating
              transformation through full stack web development. Our mission is
              to help businesses harness the power of digital technology to
              unlock their true potential. In today&apos;s fast-paced and
              ever-changing digital landscape, staying ahead of the curve is
              essential. That&apos;s why we offer tailored solutions that
              empower businesses to embrace digital transformation and drive
              growth. With our expertise in full stack web development, we have
              the tools and knowledge to create innovative and robust
              applications that streamline processes, enhance user experiences,
              and drive tangible results. Whether it&apos;s building scalable
              web platforms, developing interactive mobile applications, or
              integrating cutting-edge technologies, we&apos;re here to guide
              you every step of the way. We understand that transformation is
              not just about technology; it&apos;s about embracing change,
              adapting to new market demands, and staying relevant. That&apos;s
              why we combine our technical prowess with a strategic mindset,
              working closely with you to align your digital initiatives with
              your overall business objectives. By partnering with us, you gain
              a trusted digital ally committed to your success. We don&apos;t
              just deliver projects; we foster long-term relationships built on
              collaboration, transparency, and continuous improvement. It&apos;s
              time to accelerate your transformation. Let us help you navigate
              the digital landscape, drive innovation, and achieve your goals.
              Together, we can unlock the full potential of your business and
              propel you towards a successful digital future. Contact us today
              to embark on your transformative journey.
            </Intro>*/}
                  </SecondSection>

                  <SecondSection>
                    <SubTitle>
                      Next steps to transform your <span>idea</span> into a
                      reality
                    </SubTitle>
                    {/*  <Intro>
              At NeGiUpp digital consulting, we believe in turning ideas into
              reality. With our unique membership model, we offer a
              comprehensive range of services to help you bring your vision to
              life. Our team of experienced professionals is dedicated to
              transforming your idea into a fully functional and visually
              stunning digital solution. Whether you need a dynamic website, a
              powerful web application, or an engaging mobile experience, we
              have the expertise to make it happen. As a member, you&apos;ll
              have exclusive access to our full suite of services, including
              personalized consultations, custom development, continuous
              support, and regular updates on the latest industry trends. Our
              goal is to ensure that your project not only meets but exceeds
              your expectations. We understand that every idea is unique, and
              we&apos;re committed to providing tailored solutions that align
              with your specific goals and requirements. From concept to launch
              and beyond, we&apos;ll be there every step of the way, guiding you
              towards success. Don&apos;t let your idea remain just an idea.
              Take the next steps with us to transform it into a reality. Join
              our membership program today and unlock a world of possibilities
              for your digital venture. Contact us now and let&apos;s embark on
              this transformative journey together. Together, we&apos;ll turn
              your idea into a digital masterpiece that leaves a lasting impact.
            </Intro>
            */}
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
    </Bg>
  );
};

export default Home;

/*
<AsideArticles>
<h2>Latest articles</h2>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
  culpa qui officia deserunt mollit anim id est laborum.
</p>
</AsideArticles>
*/

/* <SecondSection1>
            <SubTitle>latest work and featured</SubTitle>
            {/* <Intro>
              At NeGiUpp digital consulting, we have created an exclusive
              membership model to provide you with tailored full stack web
              development services. We are here to drive your online business
              and ensure you achieve the best results. Our team of expert web
              developers will take care of all your digital needs. Whether you
              need a website from scratch, ongoing improvements, or digital
              marketing strategies, we are ready to work with you. By joining
              our membership, you will gain exclusive access to highly
              functional and visually appealing solutions. Additionally, you
              will receive regular updates on the latest digital trends and
              technologies. We focus on your success and are committed to
              providing personalized service and ongoing support. No matter what
              your goals are, we will be by your side to help you achieve them.
              Discover how our full stack web development consultancy can take
              your business to the next level. Contact us today and let us be
              your trusted digital partner. Together, we will achieve the online
              success you desire.
            </Intro>/}
            </SecondSection1>
            */
