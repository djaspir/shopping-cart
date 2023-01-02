import styled, { css } from "styled-components";
import { darken } from "polished";

const ButtonWrapper = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-weight: bold;

  ${({ round }) =>
    round &&
    css`
      padding: 2rem;
      border-radius: 50px;
    `}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  ${({ size }) =>
    size === "big" &&
    css`
      width: 40rem;
      font-size: 4rem;
    `}

  /* Colors */

  ${({ color }) =>
    color === "primary" &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.dark};
    `}
  
  ${({ color }) =>
    color === "red" &&
    css`
      background-color: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.dark};
    `}

  ${({ color }) =>
    color === "grey" &&
    css`
      background-color: ${({ theme }) => theme.colors.grey.main};
      color: ${({ theme }) => theme.colors.dark};
    `}

  ${({ color }) =>
    color === "dark" &&
    css`
      background-color: ${({ theme }) => theme.colors.dark};
      color: ${({ theme }) => theme.colors.light};
    `} 

  /* Hover Effects */
  ${({ hoverEffect }) =>
    hoverEffect === "scale" &&
    css`
      transition: transform 0.15s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }

      &:active {
        transform: scale(1.02);
      }
    `}

  ${({ hoverEffect }) =>
    hoverEffect === "color" &&
    css`
      transition: background-color 0.15s ease-in-out;
      ${({ color }: Props) =>
        color === "primary" &&
        css`
          &:hover {
            background-color: ${({ theme }) =>
              darken(0.2, theme.colors.primary)};
          }
          &:active {
            background-color: ${({ theme }) =>
              darken(0.3, theme.colors.primary)};
            transition: background-color 0.05s ease-in-out;
          }
        `}

      ${({ color }: Props) =>
        color === "red" &&
        css`
          &:hover {
            background-color: ${({ theme }) => darken(0.2, theme.colors.red)};
          }
          &:active {
            background-color: ${({ theme }) => darken(0.3, theme.colors.red)};
            transition: background-color 0.05s ease-in-out;
          }
        `}

      ${({ color }: Props) =>
        color === "grey" &&
        css`
          &:hover {
            background-color: ${({ theme }) =>
              darken(0.2, theme.colors.grey.main)};
          }
          &:active {
            background-color: ${({ theme }) =>
              darken(0.3, theme.colors.grey.main)};
            transition: background-color 0.05s ease-in-out;
          }
        `}
    `}
`;

interface Props {
  content?: React.ReactNode | string;
  size?: string;
  color?: string;
  hoverEffect?: string;
  fullWidth?: true;
  round?: true;
}

const Button = ({
  content,
  size,
  round,
  fullWidth,
  color,
  hoverEffect,
}: Props) => {
  return (
    <ButtonWrapper
      fullWidth={fullWidth}
      color={color}
      hoverEffect={hoverEffect}
      size={size}
      round={round}
    >
      {content}
    </ButtonWrapper>
  );
};

export default Button;
