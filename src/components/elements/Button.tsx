import styled from "styled-components";

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 50px;
  transition: transform 0.2 ease-in-out;

  &: hover {
    transform: scale(1.1);
  }
`;

interface Props {
  content: React.ReactNode;
}

const Button = ({ content }: Props) => {
  return <ButtonWrapper>{content}</ButtonWrapper>;
};

export default Button;
