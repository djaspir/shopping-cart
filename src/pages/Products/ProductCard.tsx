import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "../../components/elements/Button";
import { addToCart } from "../../state/actions";

const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.grey.main};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.light};
  font-size: 2rem;
`;

const Image = styled.img`
  height: 100%;
  width: auto;
`;

const ImageContainer = styled.div`
  height: 25rem;
  padding: 3rem;
  margin: 0 auto;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.grey.main};
  gap: 2rem;
  padding: 2rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;
`;

const Title = styled.div`
  font-weight: bold;
`;

interface Props {
  id: string;
  image: string;
  title: string;
  price: string;
}

const ProductCard = ({ id, title, price, image }: Props) => {
  const product = { id, title, price, image, quantity: 0 };
  const dispatch = useDispatch();

  return (
    <ProductCardWrapper>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <Details>
        <Info>
          <Title>{title}</Title>
          <div>${price}</div>
        </Info>
      </Details>
      <Button
        onClick={() => dispatch(addToCart(product))}
        content="Add to Cart"
        size="wide"
        color="dark"
        animation="color"
      />
    </ProductCardWrapper>
  );
};

export default ProductCard;
