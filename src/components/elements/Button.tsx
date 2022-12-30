import styled, { css } from "styled-components";

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

  ${(props) =>
    props.name === "primary" &&
    css`
      width: 100%;
      padding: 1rem;
    `}

  ${(props) =>
    props.name === "big" &&
    css`
      width: 40rem;
      font-size: 4rem;
      font-weight: bold;
    `}
`;

interface Props {
  content: React.ReactNode;
  name?: string;
}

const Button = ({ content, name }: Props) => {
  return <ButtonWrapper name={name}>{content}</ButtonWrapper>;
};

export default Button;
