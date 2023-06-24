import { styled } from "styled-components";
import Center from "./Center";

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
`

const PrincipalContent = styled.div`
display: flex;
flex-direction: row-reverse;
align-items: flex-start;
gap: 1.5rem;


`
//Started First Section
const SectionContainer = styled.section`
  display: flex;
  margin-bottom: 100px;
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
  height: 20rem;

  padding: 1.5rem;

  white-space: nowrap;
  border-radius: 30px;
  background: linear-gradient(
    120deg,
    rgba(0, 0, 0, 1),
    rgba(255, 255, 255, 0.05)
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
 

 
const AsideArticles = styled.div`
width: 40rem;
height: 40rem;
padding: 1.5rem;
 border-radius: 30px;
  background: linear-gradient(
    120deg,
    rgba(0, 0, 0, 1),
    rgba(255, 255, 255, 0.05)
  ); 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */


`;

const ArticleCard = styled.div`
  border-radius: 8px;
  width: 40rem;
  height: 40.3rem; 

  overflow: hidden;
  text-overflow: ellipsis;
  
  border-radius: 30px;
  background: linear-gradient(
    120deg,
    rgba(0, 0, 0, 1),
    rgba(255, 255, 255, 0.05)
  ); 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */


`;
const ArticleImageConatiner = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;
const ArticleImage = styled.img`
  border-radius: 8px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 100%;
`;

const ArticleCardContent = styled.div`
  padding: 0.5rem 1.2rem;

`;

const ArticleTitle = styled.h2`
  max-height: 200px; /* Establece la altura máxima del contenedor */
  overflow: hidden;
`;

const ArticleSummary = styled.p`
  
  height: 15rem;
    overflow: hidden;
  text-overflow: ellipsis;
  `


const SecondSectionLevel1 = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.5rem;
  width: 100%;
`;
const SecondSection1 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;

  padding: 1.7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 30px;
  background: linear-gradient(
    120deg,
    rgba(0, 0, 0, 1),
    rgba(255, 255, 255, 0.05)
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
  height: 13rem;
  width: 13rem;
  padding: 1.7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 30px;
  background: linear-gradient(
    120deg,
    rgba(0, 0, 0, 1),
    rgba(255, 255, 255, 0.05)
  );
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
`;
const SectionNewsFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.7rem;
`;
const SectionNews = styled.div`
  height: 3rem;

  border-radius: 30px;
  background: linear-gradient(
    120deg,
    rgba(0, 0, 0, 1),
    rgba(255, 255, 255, 0.05)
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SecondSectionLevel2 = styled.section`
  display: flex;
  gap: 1.5rem;
`;



const SecundaryContent = styled.div`
display: flex;
gap: 1.5rem;


`
const SecundaryContentSection1 = styled.div` display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 15rem;

padding: 1.7rem;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
border-radius: 30px;
background: linear-gradient(
  120deg,
  rgba(0, 0, 0, 1),
  rgba(255, 255, 255, 0.05)
);
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
  /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
  /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
  /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
`;
const SecundaryContentSection2 = styled.div` display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 21rem;
height: 15rem;

padding: 1.7rem;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
border-radius: 30px;
background: linear-gradient(
  120deg,
  rgba(0, 0, 0, 1),
  rgba(255, 255, 255, 0.05)
);
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
  /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
  /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
  /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
`;
const Home = () => {
  return (
    <Bg>
      <Center>
        <OficialContent>

        
        <div>

          <SectionContainer>
            <SectionInfo>
              <Title>
                Let&apos;s build the future <span>together</span>
              </Title>
              <Intro>
                We create customized and cutting-edge solutions that enhance
                your online presence. Stand out in the digital world and achieve
                your goals with us. Let&apos;s build the success of your
                business in less time than you can imagine!
              </Intro>
            </SectionInfo>
            <ImgContainer>
              <FirstImageInfo src="https://my-page-negiupp.s3.amazonaws.com/1687442391096.png" />
            </ImgContainer>
          </SectionContainer>
        </div>

        <PrincipalContent>


      

       
          <ArticleCard>
            <ArticleImageConatiner>
              <ArticleImage
                src="https://my-page-negiupp.s3.amazonaws.com/1686946855136.png"
                alt="article-image"
              />
            </ArticleImageConatiner>
            <ArticleCardContent>
              <h2>Article Title</h2>
              <span>
                <date>01/20/2023</date>
              </span>
              <ArticleSummary>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                ullamco laborisullamco laboris
                ullamco laborisullamco laborisullamco dolore magna aliqua. Ut 
                dolore ut labore ua. Ut
                dolore magna aliqua. Ut
              
              </ArticleSummary>
          
            </ArticleCardContent>
          </ArticleCard>
       

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
              <SectionNews>news</SectionNews>
              <SecondSection2>
                <SubTitle>Proyects</SubTitle>
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
              </SecondSection2>
            </SectionNewsFlex>
          </SecondSectionLevel1>

          <SecondSectionLevel2>
            <SecondSection>
              <SubTitle>
                Accelerate Transformation: Unlock Your Digital Potential
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
                Next steps to transform your idea into a reality
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
        </SectionsContainer>

        </PrincipalContent>
        <SecundaryContent>
        <SecundaryContentSection1>
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
            </SecundaryContentSection1>
            <SecundaryContentSection2>
              <SubTitle> <span>Start</span></SubTitle>
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
            </SecundaryContentSection2>

        </SecundaryContent>
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
