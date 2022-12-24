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
  type: "button" | "submit" | "reset";
}

const Button = ({ content, type }: Props) => {
  return <ButtonWrapper type={type}>{content}</ButtonWrapper>;
};

export default Button;
