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
  margin: 15rem 0;
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 10rem;
  font-size: 10rem;

  @media (max-width: 1000px) {
    gap: 8rem;
    font-size: 8rem;
  }

  @media (max-width: 600px) {
    gap: 5rem;
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

  @media (max-width: 600px) {
    font-size: 2.4rem;
  }
`;

const Contact = () => {
  return (
    <div>
      <ContactWrapper>
        <SocialMedia>
          <SocialLink href="https://github.com/djaspir" target="_blank">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://github.com/djaspir" target="_blank">
            <FaFacebookMessenger />
          </SocialLink>
          <SocialLink href="https://github.com/djaspir" target="_blank">
            <FaFacebookF />
          </SocialLink>
          <SocialLink href="https://github.com/djaspir" target="_blank">
            <FaTwitter />
          </SocialLink>
          <SocialLink href="https://github.com/djaspir" target="_blank">
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
