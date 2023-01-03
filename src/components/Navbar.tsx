import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./elements/Button";
import { FaShoppingCart } from "react-icons/fa";
import { openCart } from "../state/actions";
import { useDispatch } from "react-redux";
import { routes } from "../state/constants/routes";

const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80rem;
  font-size: 2.4rem;

  @media (max-width: 1100px) {
    gap: 4rem;
  }

  @media (max-width: 650px) {
    width: 60rem;
  }

  @media (max-width: 450px) {
    width: 50rem;
  }
`;

const StyledLink = styled(Link)`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.light};
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <NavbarWrapper>
      <StyledLink to={routes.home}>Home</StyledLink>
      <StyledLink to={routes.products}>Products</StyledLink>
      <StyledLink to={routes.contact}>Contact</StyledLink>
      <Button
        onClick={() => dispatch(openCart())}
        content={<FaShoppingCart />}
        animation="scale"
        shape="round"
      />
    </NavbarWrapper>
  );
};

export default Navbar;
