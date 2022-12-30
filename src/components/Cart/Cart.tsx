import styled from "styled-components";
import Button from "../elements/Button";
import CartItem from "./CartItem";
import exampleProduct from "../../assets/exampleProduct";
import { FaTimesCircle } from "react-icons/fa";
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
  background-color: #c4c4c4;
`;

const Products = styled.div`
  width: 100%;
`;

const TotalCost = styled.div`
  font-weight: bold;
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
    <CartItem name={product.name} price={product.price} image={product.img} />
  ));
  return (
    <>
      <CartWrapper>
        <Button content={<FaTimesCircle />} name="close" />
        Your Shopping Cart
        <Products>{products}</Products>
        <TotalCost>Total: $200.00</TotalCost>
        <Button content="Checkout" name="primary" />
      </CartWrapper>
      <Overlay />
    </>
  );
};

export default Cart;
