import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./elements/Button";
import { FaShoppingCart } from "react-icons/fa";
import { openCart } from "./state/actions";
import { useDispatch } from "react-redux";
import { routes } from "./state/constants/routes";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";

const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7rem;
  font-size: 2.4rem;

  @media (max-width: 480px) {
    gap: 0;
    width: 100;
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.02);
  }
`;

const Quantity = styled.div`
  position: absolute;
  top: 4rem;
  right: 4rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.red};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
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
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const sumQuantity = () => {
    return cart.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0);
  };

  return (
    <NavbarWrapper>
      <StyledLink to={routes.home}>Home</StyledLink>
      <StyledLink to={routes.products}>Products</StyledLink>
      <StyledLink to={routes.contact}>Contact</StyledLink>
      <ButtonContainer>
        <Button
          onClick={() => dispatch(openCart())}
          content={<FaShoppingCart />}
          animation="scale"
          shape="round"
        />
        {sumQuantity() > 0 ? <Quantity>{sumQuantity()}</Quantity> : ""}
      </ButtonContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
