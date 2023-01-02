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

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 2rem;
`;

const AmountChanger = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

interface Props {
  name: string;
  price: string;
  image: string;
}

const CartItem = ({ name, price, image }: Props) => {
  return (
    <CartItemWrapper>
      <Image src={image} alt={name} />
      <Details>
        <div>{name}</div>
        <div>{price}</div>
        <AmountChanger>
          <Button content={<FaPlus />} color="grey" animation="color" />
          <div>1</div>
          <Button content={<FaMinus />} color="grey" animation="color" />
        </AmountChanger>
      </Details>
    </CartItemWrapper>
  );
};

export default CartItem;
