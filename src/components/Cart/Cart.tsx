import styled from "styled-components";
import Button from "../elements/Button";
import CartItem from "./CartItem";
import exampleProduct from "../../assets/exampleProduct";
import { v4 as uuid4 } from "uuid";

const CartWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
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
`;

const Title = styled.div`
  font-size: 4rem;
  margin-bottom: 2rem;
`;

const Products = styled.div`
  width: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100%;
  background-color: black;
  opacity: 0.5;
`;

const Cart = () => {
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
      <CartWrapper>
        <Title>Your Shopping Cart</Title>
        <Products>{products}</Products>
        <div>Total: $200.00</div>
        <Button content="Checkout" name="primary" />
        <Button content="Close" name="close" />
      </CartWrapper>
      <Overlay />
    </>
  );
};

export default Cart;
