import { FaGithub } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import brownWave from "../assets/img/brownWave.png";

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
  font-size: 2rem;
`;

const GithubLink = styled.a`
  margin-left: 1rem;
  display: flex;
  font-size: 2rem;
  transition: transform 0.2 ease-in-out;
  color: #000;

  &:hover {
    transform: scale(1.3);
  }
`;

const BackgroundWave = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -10;
`;

const Footer = () => {
  const location = useLocation();

  return (
    <FooterWrapper>
      Copyright © Jasper A. Sanchez 2022
      <GithubLink>
        <FaGithub />
      </GithubLink>
      {location.pathname !== "/shopping-cart/products" && (
        <BackgroundWave src={brownWave} alt="Background Image" />
      )}
    </FooterWrapper>
  );
};

export default Footer;
