import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../constants/routes";
import Navbar from "./Navbar";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: ${({ theme }) => theme.widths.content}
  gap: 30rem;
  padding: 4rem 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 5rem;
  }
`;

const Logo = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.dark};
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
