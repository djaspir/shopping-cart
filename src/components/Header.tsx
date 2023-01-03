import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../state/constants/routes";
import Navbar from "./Navbar";
import { darken } from "polished";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4rem 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.dark};

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 5rem;
  }
`;

const Logo = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to={routes.home}>
        <Logo>FakeCoffeeStore</Logo>
      </Link>
      <Navbar />
    </HeaderWrapper>
  );
};

export default Header;
