import { FaGithub } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../constants/routes";
import BackgroundWave from "./elements/BackgroundWave";

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

  &:hover {
    transform: scale(1.3);
  }
`;

const Footer = () => {
  const location = useLocation();

  return (
    <FooterWrapper>
      Copyright © Jasper A. Sanchez 2022
      <GithubLink>
        <FaGithub />
      </GithubLink>
      {location.pathname !== routes.products && <BackgroundWave />}
    </FooterWrapper>
  );
};

export default Footer;
