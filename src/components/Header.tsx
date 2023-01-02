import styled from "styled-components";
import Navbar from "./Navbar";
import { darken } from "polished";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30rem;
  padding: 2.5rem 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 5rem;
  }
`;

const Logo = styled.h1`
  color: ${({ theme }) => darken(0.4, theme.colors.secondary)};
  font-size: 4rem;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>FakeCoffeeStore</Logo>
      <Navbar />
    </HeaderWrapper>
  );
};

export default Header;
