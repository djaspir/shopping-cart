import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "../elements/Button";
import { addToCart, removeFromCart } from "../state/actions";

const CartItemCardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
`;

const Image = styled.img`
  width: auto;
  height: 100%;
`;

const ImageContainer = styled.div`
  height: 13rem;
  width: 20%;
  margin: auto;
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

const Title = styled.div`
  height: 3rem;
  font-weight: bold;
  overflow: hidden;
`;

interface Props {
  id: string;
  title: string;
  price: string;
  image: string;
  quantity: number;
}

const CartItemCard = ({ id, title, price, image, quantity }: Props) => {
  const product = { id, title, price, image, quantity };
  const dispatch = useDispatch();

  const formatTitle = (title: string) => {
    return 14 <= title.length ? `${title.substring(0, 14)}...` : title;
  };

  return (
    <CartItemCardWrapper>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <Details>
        <Title>{formatTitle(title)}</Title>
        <div>${price}</div>
        <AmountChanger>
          <Button
            onClick={() => dispatch(addToCart(product))}
            content={<FaPlus />}
            color="grey"
            animation="color"
          />
          <div>{product.quantity}</div>
          <Button
            onClick={() => dispatch(removeFromCart(product))}
            content={<FaMinus />}
            color="grey"
            animation="color"
          />
        </AmountChanger>
      </Details>
    </CartItemCardWrapper>
  );
};

export default CartItemCard;
