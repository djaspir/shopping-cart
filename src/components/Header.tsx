import styled from "styled-components";
import Navbar from "./Navbar";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30rem;
  padding: 2.5rem 0;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 5rem;
  }
`;

const Logo = styled.h1`
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
