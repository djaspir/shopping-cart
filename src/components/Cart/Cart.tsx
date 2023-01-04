import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { closeCart } from "../../state/actions";
import { RootState } from "../../state/store";
import Button from "../elements/Button";
import CartItem from "./CartItem";

const CartWrapper = styled.div<Props>`
  position: fixed;
  top: 0;
  right: -110%;
  height: 100%;
  width: 60rem;
  padding: 6rem;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
  font-size: 3rem;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.light};
  overflow: auto;
  transition: right 0.85s ease-in-out;

  ${({ isCartOpen }) =>
    isCartOpen.isOpen &&
    css`
      right: 0;
    `}

  @media (max-width: 450px) {
    width: 100%;
  }
`;

const Title = styled.div`
  margin-bottom: 2rem;
  font-size: 4rem;
  font-weight: bold;
`;

const Products = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: 45;
  width: 100%;
`;

const Overlay = styled.div<Props>`
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.6;
  transition: left 0.85s ease-in-out;
  z-index: 2;

  ${({ isCartOpen }) =>
    isCartOpen.isOpen &&
    css`
      left: 0;
    `}
`;

const Total = styled.div`
  font-weight: bold;
`;

interface Props {
  isCartOpen: {
    isOpen: boolean;
  };
}

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const isOpen = useSelector((state: RootState) => state.isCartOpen);
  const dispatch = useDispatch();

  const sumTotal = () => {
    return cart
      .reduce(
        (total, cartItem) =>
          total + parseInt(cartItem.price) * cartItem.quantity,
        0
      )
      .toFixed(2);
  };

  const cartItems = cart.map((cartItem) => (
    <CartItem
      key={uuidv4()}
      id={cartItem.id}
      title={cartItem.title}
      price={cartItem.price}
      image={cartItem.image}
      quantity={cartItem.quantity}
    />
  ));

  return (
    <>
      <CartWrapper isCartOpen={isOpen}>
        <Title>Your Shopping Cart</Title>
        <Products>{cartItems}</Products>
        <Total>Total: ${sumTotal()}</Total>
        <Button
          content="Checkout"
          color="primary"
          size="wide"
          animation="color"
        />
        <Button
          onClick={() => dispatch(closeCart())}
          content="Close"
          color="red"
          size="wide"
          animation="color"
        />
      </CartWrapper>
      <Overlay onClick={() => dispatch(closeCart())} isCartOpen={isOpen} />
    </>
  );
};

export default Cart;
