import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { setProducts } from "../../state/actions/product";
import { RootState } from "../../state/store";
import ProductCard from "./ProductCard";
import { v4 as uuidv4 } from "uuid";

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;
  margin-top: 8rem;
  margin-bottom: 12rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 110rem;
    padding: 0 4rem;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 80rem;
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 40rem;
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
