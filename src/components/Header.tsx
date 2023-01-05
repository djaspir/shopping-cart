import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "./state/constants/routes";
import Navbar from "./Navbar";

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.dark};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.widths.content};
  margin: 0 auto;
  padding: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

const Logo = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Link to={routes.home}>
          <Logo>FakeCoffeeStore</Logo>
        </Link>
        <Navbar />
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
