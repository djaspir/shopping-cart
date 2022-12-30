import styled from "styled-components";

const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
`;

const Image = styled.img`
  width: 12rem;
`;

const Info = styled.div``;

interface Props {
  name: string;
  price: string;
  image: string;
}

const CartItem = ({ name, price, image }: Props) => {
  return (
    <CartItemWrapper>
      <Image src={image} alt={name} />
      <Info>
        <p>{name}</p>
        <p>{price}</p>
      </Info>
    </CartItemWrapper>
  );
};

export default CartItem;
