import styled from "styled-components";

import {
  FaGithub,
  FaFacebookMessenger,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
  margin-top: 18rem;
  margin-bottom: 34rem;

  @media (max-width: 480px) {
    margin-top: 5rem;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 10rem;
  font-size: 10rem;

  @media (max-width: 768px) {
    gap: 5rem;
    font-size: 8rem;
  }

  @media (max-width: 480px) {
    font-size: 5rem;
  }
`;

const SocialLink = styled.a`
  cursor: pointer;
  transition: transform 0.15s ease-in-out;
  color: #000;

  &:hover {
    transform: scale(1.1);
  }
`;

const ContactInfo = styled.div`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const Contact = () => {
  return (
    <div>
      <ContactWrapper>
        <SocialMedia>
          <SocialLink
            href="https://github.com/djaspir"
            target="_blank"
            rel="noopener"
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://github.com/djaspir"
            target="_blank"
            rel="noopener"
          >
            <FaFacebookMessenger />
          </SocialLink>
          <SocialLink
            href="https://github.com/djaspir"
            target="_blank"
            rel="noopener"
          >
            <FaFacebookF />
          </SocialLink>
          <SocialLink
            href="https://github.com/djaspir"
            target="_blank"
            rel="noopener"
          >
            <FaTwitter />
          </SocialLink>
          <SocialLink
            href="https://github.com/djaspir"
            target="_blank"
            rel="noopener"
          >
            <FaInstagram />
          </SocialLink>
        </SocialMedia>
        <ContactInfo>
          <p>FakeCoffeeStore</p>
          <p>16-14 Sakuragaokacho, Shibuya 150-0031 Tokyo Prefecture</p>
        </ContactInfo>
      </ContactWrapper>
    </div>
  );
};

export default Contact;
