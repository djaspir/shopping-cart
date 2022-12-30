import styled from "styled-components";
import Button from "../elements/Button";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
`;

const Image = styled.img`
  width: 14rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const AmountChanger = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const Amount = styled.div``;

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
        <AmountChanger>
          <Button content={<FaPlus />} name="increment" />
          <Amount>1</Amount>
          <Button content={<FaMinus />} name="decrement" />
        </AmountChanger>
      </Info>
    </CartItemWrapper>
  );
};

export default CartItem;
