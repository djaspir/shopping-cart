import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./elements/Button";
import { FaShoppingCart } from "react-icons/fa";
import { openCart } from "../state/actions";
import { useDispatch } from "react-redux";
import { routes } from "../constants/routes";

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
  color: ${({ theme }) => theme.colors.dark};
  transition: 0.2 ease-in-out;

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
