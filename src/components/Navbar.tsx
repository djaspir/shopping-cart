import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 12rem;
`;

const StyledLink = styled(Link)`
  font-size: 2rem;
  color: #000;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/products">Products</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </NavbarWrapper>
  );
};

export default Navbar;
