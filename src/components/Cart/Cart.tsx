import styled, { css } from "styled-components";
import Button from "../elements/Button";
import CartItem from "./CartItem";
import exampleProduct from "../../assets/examples/exampleProduct";
import { v4 as uuid4 } from "uuid";
import { closeCart } from "../../state/actions";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../types";

const CartWrapper = styled.div<Props>`
  position: fixed;
  top: 0;
  right: -100%;
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
  background-color: #c4c4c4;
  transition: right 0.85s ease-in-out;

  ${({ isCartOpen }) =>
    isCartOpen.isOpen &&
    css`
      right: 0;
    `}
`;

const Title = styled.div`
  font-size: 4rem;
  margin-bottom: 2rem;
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

interface Props {
  isCartOpen: {
    isOpen: boolean;
  };
}

const Cart = () => {
  const isOpen = useSelector((state: RootState) => state.isCartOpen);
  const dispatch = useDispatch();

  const products = exampleProduct.map((product) => (
    <CartItem
      key={uuid4()}
      name={product.name}
      price={product.price}
      image={product.img}
    />
  ));

  return (
    <>
      <CartWrapper isCartOpen={isOpen}>
        <Title>Your Shopping Cart</Title>
        <Products>{products}</Products>
        <div>Total: $200.00</div>
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
