import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./elements/Button";
import { FaShoppingCart } from "react-icons/fa";

const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2.15rem;
  width: 80rem;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 5rem;
  }
`;

const StyledLink = styled(Link)`
  color: #000;
  transition: 0.2 ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/products">Products</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
      <Button content={<FaShoppingCart />} />
    </NavbarWrapper>
  );
};

export default Navbar;
