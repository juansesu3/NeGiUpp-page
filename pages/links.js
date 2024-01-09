import Points from '@/components/icons/Points';
import { useTrailTexture } from '@react-three/drei';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const ContainerLinks = styled.div`
    background-color: #000000;
    height: 200vh;
`;

const Header = styled.div`
position: sticky;
top: 1rem;
width: 95%;
display: flex;
justify-content: ${(props) => (props.isVisible ? 'end  ' : 'space-between')};
background: ${(props) => (props.isVisible ? 'transparent  ' : 'rgba(255, 255, 255, 0.8)')};
align-items: center;
padding: 0.5rem 0.7rem ;
margin: 0 auto;
border-radius: 10rem;
border: ${(props) => (props.isVisible ? 'none' : '1px solid #fff')}; 
  transition: background 0.3s ease-in-out,  justify-content 0.3s ease-in-out; /* Agregar transiciones para opacidad y altura */
  overflow: hidden; 
`;
const ImageUser = styled.div`
  display: ${(props) => (props.isVisible ? 'none' : 'flex')};
width: 3rem;
height: 3rem;
transition: display 0.3s ease-in-out;
img{
    width: 100%;
    border-radius: 100%;
    transition: display 0.3s ease-in-out;
    display: ${(props) => (props.isVisible ? 'none ' : 'flex')};
}

`;
const IconPoints = styled.div`
  transition: background 0.3s ease-in-out;
padding: 0.7rem;
background: ${(props) => (props.isVisible ? '#ffffff ' : '#000000')};
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;

svg{
    width: 1.3rem;
    height: 1.3rem;
    transition: color 0.3s ease-in-out;
    color: ${(props) => (props.isVisible ? ' #000000' : ' #ffffff')};
}
`;

const User = styled.div`
color: #000000;
display: ${(props) => (props.isVisible ? 'none' : 'flex')};
`;

const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 2.5rem;
`;

const ImagePrincipal = styled.div`
    width: 6rem;
    border-radius: 5rem;
img{
    width: 100%;
    border-radius: 5rem;
}
`;

const InfoSummry = styled.div`
    color: #ffffff;
    text-align: center;
    width: 70%;
    h1{
        
    }
    p{
        opacity: 0.7;
        line-height: 1.5;
    }

`;

const ContainerBoxLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 95%;
    

`;

const BoxLink = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #282828;
    width: 100%;
    color: #ffffff;
    border-radius: 0.5rem;
    padding: 0.5rem;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);}
`;

const ImageLink = styled.div`
    width: 3rem;
    height: 3rem;
    img{
        width: 100%;
    }
`;

const TitleBoxLink = styled.h2`
    font-weight: 400;
    margin: 0;
    font-size: 1rem;
`;
const IconBoxLink = styled.div`
    color: #ffffff;
svg{
    width: 2rem;
}
`;


const LinksPage = () => {
    const [scrollDirection, setScrollDirection] = useState("up");

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > prevScrollY.current) {
                setScrollDirection("down");
            } else {
                setScrollDirection("up");
            }

            prevScrollY.current = currentScrollY;
        };

        let prevScrollY = { current: window.scrollY };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <ContainerLinks>
            <Header isVisible={scrollDirection === "up"}>
                <ImageUser isVisible={scrollDirection === "up"}>
                    <Image src={'https://my-page-negiupp.s3.amazonaws.com/1704731920864.jpeg'} alt='image profile' width={100} height={100} />
                </ImageUser>
                <User isVisible={scrollDirection === "up"}>
                    @tianking_
                </User>
                <IconPoints isVisible={scrollDirection === "up"} >
                    <Points />
                </IconPoints>
            </Header>
            <Body>

                <ImagePrincipal>
                    <Image src={'https://my-page-negiupp.s3.amazonaws.com/1704731920864.jpeg'} alt='image profile' width={100} height={100} />
                </ImagePrincipal>
                <InfoSummry>
                    <h1>@tianking_</h1>
                    <p>Full Stack Developer, AI & eCommerce Expert. Founder & CEO negiupp.com <br /> 💻 🛒 🤖</p>
                </InfoSummry>
                <ContainerBoxLinks>
                    <BoxLink>
                        <ImageLink>
                            <Image src={'https://my-page-negiupp.s3.amazonaws.com/1704832048593.png'} alt='image profile' width={100} height={100} />
                        </ImageLink>
                        <TitleBoxLink>Portfolio - SelfBrand</TitleBoxLink>
                        <IconBoxLink>
                            <Points />
                        </IconBoxLink>
                    </BoxLink>
                    <BoxLink>
                        <ImageLink>
                            <Image src={'https://my-page-negiupp.s3.amazonaws.com/1704833278800.png'} alt='image profile' width={100} height={100} />
                        </ImageLink>
                        <TitleBoxLink>negiupp - store</TitleBoxLink>
                        <IconBoxLink>
                            <Points />
                        </IconBoxLink>
                    </BoxLink>
                    <BoxLink>
                        <ImageLink>
                            <Image src={'https://my-page-negiupp.s3.amazonaws.com/1704832925918.png'} alt='image profile' width={100} height={100} />
                        </ImageLink>
                        <TitleBoxLink>LinkedIn</TitleBoxLink>
                        <IconBoxLink>
                            <Points />
                        </IconBoxLink>
                    </BoxLink>
                    <BoxLink>
                        <ImageLink>
                            <Image src={'https://my-page-negiupp.s3.amazonaws.com/1704832866699.png'} alt='image profile' width={100} height={100} />
                        </ImageLink>
                        <TitleBoxLink>GitHub</TitleBoxLink>
                        <IconBoxLink>
                            <Points />
                        </IconBoxLink>
                    </BoxLink>
                </ContainerBoxLinks>

                <div></div>
            </Body>
        </ContainerLinks>
    )
}

export default LinksPage;
