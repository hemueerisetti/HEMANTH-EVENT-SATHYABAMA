import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const Header = styled.header`
  padding: 15px 0px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #9e1c3f;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  transform: translateY(${props => (props.hidden ? '-100%' : '0')});
`;

const Logo = styled.img`
  padding: 0px 15px;
  max-width: 150px;
`;

const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap; /* Allows wrapping */
  }

  ul li {
    margin: 0 10px;
    
  }

  ul li a {
    color: white;
    font-weight: bold;
    text-decoration: none;
    padding: 6px 15px;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  ul li RegisterButton {
    color: #831238;
    font-weight: bold;
    text-decoration: none;
    padding: 6px 15px;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  

  ul li a:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: #f0f0f0;
  }
`;

const RegisterButton = styled(Link)`
  
  color: #9e1c3f;
  padding: 10px 20px;
  border-radius: 8px;
  
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: #f0f0f0;
    color: #9e1c3f;
  }

  
`;

const Main = styled.main`
  margin-top: 700px;
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
  background: #f8f8f8;
`;

const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Slide = styled.img`
  width: 100%;
  margin: 20px auto;
  transition: transform 0.5s ease;
`;

const NavButton = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.left ? 'left: 10px;' : 'right: 10px;'}
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 40px;
  height: 40px;
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
  &:hover {
    text-decoration: underline;
  }
`;

const FooterSocials = styled.div`
  margin-top: 20px;

  .fa {
    font-size: 24px;
    margin-right: 10px;
    color: white;
    transition: color 0.3s ease;
    &:hover {
      color: #f0f0f0;
    }
  }
`;

function LandingPage() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);
  const [hidden, setHidden] = useState(false);

  const images = [
    'https://www.sathyabama.ac.in/sites/default/files/inline-images/DJI_0105-New-Low.jpg',
    'https://www.sathyabama.ac.in/sites/default/files/2021-06/LUMI4626.JPG'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = scrollPos > currentScrollPos;
      setHidden(!visible);
      setScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPos]);

  const plusDivs = (n) => {
    const newIndex = (slideIndex + n + images.length) % images.length;
    setSlideIndex(newIndex);
  };

  return (
    <>
      <Header hidden={hidden}>
        <Logo src="https://www.sathyabama.ac.in/themes/custom/sathyabama/logo.svg" alt="Logo" />
        <Nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Workshops</a></li>
            <li><a href="#">Seminars</a></li>
            <li><a href="#">Events</a></li>
            <li><RegisterButton to="/login">Register</RegisterButton></li>
          </ul>
        </Nav>
      </Header>
      <Content>
        <Main>
          <ImageContainer>
            <NavButton left onClick={() => plusDivs(-1)}>&#10094;</NavButton>
            <Slide src={images[slideIndex]} alt={`Slide ${slideIndex + 1}`} />
            <NavButton onClick={() => plusDivs(1)}>&#10095;</NavButton>
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
              <FooterListItem><FooterLink href="#">Academic Calendar</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Research</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Library</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">International Collaboration</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">IQAC</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Honoris-Causa</FooterLink></FooterListItem>
            </FooterList>
          </FooterBox>
          <FooterBox>
            <FooterTitle>Follow us on</FooterTitle>
            <FooterSocials>
              <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" aria-label="Pinterest"><FontAwesomeIcon icon={faPinterest} /></a>
            </FooterSocials>
          </FooterBox>
        </FooterContent>
      </Footer>
    </>
  );
}

export default LandingPage;
