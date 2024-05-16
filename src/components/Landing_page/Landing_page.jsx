import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
 
const Header = styled.header`
  padding: 20px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #9e1c3f;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  max-width: 200px;
`;

const Nav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }

  ul li {
    margin: 0 15px;
  }

  ul li:first-child {
    margin-left: auto;
  }

  ul li:last-child {
    margin-right: 0;
  }

  ul li a {
    color: white;
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }

  ul li a:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const RegisterButton = styled.button`
  background-color: transparent;
  border: 1px solid white;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-right:70px;
`;

const Main = styled.main`
  margin-top: 100px;
  padding: 20px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

const Content = styled.div`
  text-align: center;
  min-height: calc(100vh - 100px);
`;

const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Slide = styled.img`
  width: 100%;
  margin: 20px auto;
  transition: transform 0.5s ease;
`;

const NextButton = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
`;

const PrevButton = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
`;

const Footer = styled.footer`
  color: white;
  padding: 20px 0;
  background-color: #9e1c3f;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterBox = styled.div`
  flex: 0 0 calc(25% - 20px);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex: 0 0 calc(50% - 20px);
  }

  @media (max-width: 576px) {
    flex: 0 0 100%;
  }
`;

const FooterLogo = styled.img`
  max-width: 100%;
`;

const FooterTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 15px;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterListItem = styled.li`
  margin-bottom: 8px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

const FooterSocials = styled.div`
  margin-top: 20px;

  .fa {
    font-size: 24px;
    margin-right: 10px;
  }
`;

function LandingPage() {
  const [slideIndex, setSlideIndex] = useState(0);
  const images = [
    'https://www.sathyabama.ac.in/sites/default/files/inline-images/DJI_0105-New-Low.jpg',
    'https://www.sathyabama.ac.in/sites/default/files/2021-06/LUMI4626.JPG'
  ];

  const plusDivs = (n) => {
    const newIndex = (slideIndex + n + images.length) % images.length;
    setSlideIndex(newIndex);
  };

  return (
    <>
      <Header>
        <Logo src="https://www.sathyabama.ac.in/themes/custom/sathyabama/logo.svg" alt="Logo" />
        <Nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Workshops</a></li>
            <li><a href="#">Seminars</a></li>
            <li><a href="#">Events</a></li>
            <Link to="/login"><li><RegisterButton>Register</RegisterButton></li></Link>
          </ul>
        </Nav>
      </Header>
      <Content>
        <Main>
          <PrevButton className="prev" onClick={() => plusDivs(-1)}>&#10094;</PrevButton>
          <NextButton className="next" onClick={() => plusDivs(1)}>&#10095;</NextButton>
          <h2>EVENTS</h2>
          <ImageContainer>
            <Slide src={images[slideIndex]} alt={`Slide ${slideIndex + 1}`} />
          </ImageContainer>
        </Main>
      </Content>
      <Footer>
        <FooterContent>
          <FooterBox>
            <FooterLogo src="https://www.sathyabama.ac.in/themes/custom/sathyabama/logo.svg" alt="Logo" />
            <p style={{ color: "grey" }}>Copyright 2023 © Sathyabama Institute of Science and Technology <br />All rights reserved</p>
          </FooterBox>
          <FooterBox>
            <FooterTitle>ABOUT US</FooterTitle>
            <FooterList>
              <FooterListItem><FooterLink href="#">Vision and Mission</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Core Values</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Overview</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Founder Chancellor</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Chancellor</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Vice Chancellor's Desk</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Administration</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Evolution</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Governance</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Accreditation and Accolades</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Sustainable Development</FooterLink></FooterListItem>
            </FooterList>
          </FooterBox>
          <FooterBox>
            <FooterTitle>ACADEMICS</FooterTitle>
            <FooterList>
              <FooterListItem><FooterLink href="#">Programmes Offered</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Schools</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Faculty</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Academic Regulations</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Staff Forum</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Events</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Library</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Service Policy</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Stakeholders Feedback</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Honoris-Causa</FooterLink></FooterListItem>
            </FooterList>
          </FooterBox>
          <FooterBox>
            <FooterTitle>Follow us on</FooterTitle>
            <FooterSocials>
              <a href="#" className="fa fa-facebook" aria-label="Facebook"></a>
              <a href="#" className="fa fa-twitter" aria-label="Twitter"></a>
              <a href="#" className="fa fa-instagram" aria-label="Instagram"></a>
              <a href="#" className="fa fa-pinterest" aria-label="Pinterest"></a>
            </FooterSocials>
          </FooterBox>
        </FooterContent>
      </Footer>
    </>
  );
}

export default LandingPage;
