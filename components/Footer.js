import Link from "next/link";
import React from "react";
import { styled } from "styled-components";
import Center from "./Center";

const BckGro = styled.div`

margin: 0 auto;
  background-color: #0f0f0f;
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: first baseline;
  justify-content: space-around;
  border-top: 1px solid #24242463;
  margin-top: 7rem;
  padding-top: 5rem;
  padding-bottom: 3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const First = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: first baseline;
  justify-content: space-around;
`;
const Second = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;

  color: gray;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const LinkFooter = styled(Link)`
  text-decoration: none;
  color: #525252;
  transition: 0.3s;
  &:hover {
    color: #4d61fc;
  }
`;

const LangLog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;
const LogoLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  width: 10rem;
`;

const Logo = styled.img`
  width: 100%;
`;
const Lang = styled.div`
  display: flex;

  .selelect {
    width: 8.5rem;
    margin: 0 auto;
    border: 0;
    height: 1.5rem;
    border-radius: 0.2rem;
    background-color: #ffff;
    color: #444444;
  }
`;

const Footer = () => {
  return (
  
    <BckGro>
    
      <First>
        <Section>
          <h4>About NeGiUpp</h4>
          <LinkFooter href={"/"}>woh we are?</LinkFooter>
          <LinkFooter href={"/"}>Our values and culture</LinkFooter>
          <LinkFooter href={"/"}>work together</LinkFooter>
          <LinkFooter href={"/"}>Let&apos;s talk</LinkFooter>
        </Section>

        <Section>
          <h4>Learn about</h4>
          <LinkFooter href={"/"}>HTML</LinkFooter>
          <LinkFooter href={"/"}>CSS</LinkFooter>
          <LinkFooter href={"/"}>Artificial Intelligence</LinkFooter>
          <LinkFooter href={"/"}>JavaScript</LinkFooter>
          <LinkFooter href={"/"}>React.js</LinkFooter>
        </Section>
        <Section>
          <LangLog>
            <Lang>
              <select className="selelect">
                <option>Spanish</option>
                <option>English</option>
                <option>French</option>
              </select>
            </Lang>
            <LogoLink href={"/"}>
              <Logo
                src="https://my-page-negiupp.s3.amazonaws.com/1687424109024.png"
                alt="logo-image"
              />
            </LogoLink>
          </LangLog>
        </Section>
      </First>
   
      <Second>
        <h5>© 2023 NeGiUpp | All rigth reserved</h5>
      </Second>
    
     
    </BckGro>
   
  );
};

export default Footer;
