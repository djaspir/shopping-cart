import { FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";
import Button from "../elements/Button";

const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
`;

const Image = styled.img`
  height: 100%;
  width: auto;
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
  font-weight: bold;
  height: 3rem;
  overflow: hidden;
`;

interface Props {
  title: string;
  price: string;
  image: string;
}

const CartItem = ({ title, price, image }: Props) => {
  const formatTitle = (title: string) => {
    const words = title.split(" ");
    let result = "";
    if (words.length < 3) {
      return title;
    }
    for (let i = 0; i < 3; i++) {
      result += words[i] + " ";
    }
    if (words.length > 3) {
      result += "...";
    }
    return result;
  };

  return (
    <CartItemWrapper>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <Details>
        <Title>{formatTitle(title)}</Title>
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
