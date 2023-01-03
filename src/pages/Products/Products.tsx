import styled from "styled-components";
import ProductCard from "./ProductCard";
import exampleProduct from "../../assets/examples/exampleProduct";
import { v4 as uuid4 } from "uuid";

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 40rem);
    justify-content: center;
    gap: 8rem;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 40rem);
  }

  animation: fade-in ease 2s;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Products = () => {
  const productCards = exampleProduct.map((product) => (
    <ProductCard
      key={uuid4()}
      name={product.name}
      price={product.price}
      image={product.img}
    />
  ));

  return <ProductWrapper>{productCards}</ProductWrapper>;
};

export default Products;
