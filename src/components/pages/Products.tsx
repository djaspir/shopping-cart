import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { setProducts } from "../state/actions";
import { RootState } from "../state/store";
import ProductCard from "./Products/ProductCard";
import { v4 as uuidv4 } from "uuid";

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  margin-top: 4rem;
  animation: fade-in ease 2s;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, min-max(28rem, 36rem));
    justify-content: center;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 36rem);
  }
`;

const Products = () => {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    return data;
  };

  const filterProducts = (products: any[]) => {
    return products.filter(
      (product) =>
        product.category === `men's clothing` ||
        product.category === `women's clothing`
    );
  };

  useEffect(() => {
    const loadProducts = async () => {
      dispatch(setProducts(filterProducts(await fetchProducts())));
    };
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const productCards = products.map((product) => (
    <ProductCard
      key={uuidv4()}
      id={product.id}
      title={product.title}
      price={product.price}
      image={product.image}
    />
  ));

  return <ProductWrapper>{productCards}</ProductWrapper>;
};

export default Products;
