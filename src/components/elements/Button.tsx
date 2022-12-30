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
    props.name === "close" &&
    css`
      position: absolute;
      top: 5rem;
      right: 3rem;
      padding: 0;
      color: red;
      font-size: 6rem;
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: rotate(90deg);
      }
    `}

  ${(props) =>
    (props.name === "increment" || props.name === "decrement") &&
    css`
      padding: 1rem;
      border-radius: 0;
      transition: background-color 0.15s ease-in-out;
    `}

  ${(props) =>
    props.name === "increment" &&
    css`
      :hover {
        background-color: #198754;
        color: #fff;
        transform: scale(1.1);
      }
      :active {
        background-color: #a4a4a4;
      }
    `} 

  ${(props) =>
    props.name === "decrement" &&
    css`
      :hover {
        background-color: #dc3545;
        color: #fff;
        transform: scale(1.1);
      }
      :active {
        background-color: #a4a4a4;
      }
    `}


  ${(props) =>
    props.name === "primary" &&
    css`
      width: 80%;
      padding: 1rem;
      transition: background-color 0.15s ease-in-out;

      &:hover {
        background-color: #6f42c1;
        color: #fff;
      }

      &:active {
        background-color: #a4a4a4;
      }
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
