import styled from "styled-components";
import exampleProduct from "../../assets/examples/exampleProduct";
import ProductCard from "./ProductCard";

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;
  margin-top: 8rem;
  margin-bottom: 12rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 4rem;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 36rem);
    justify-content: center;
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
  const fetchProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    let products = await data.json();
    return products;
  };

  const formatProductsData = (products: any[]) => {
    return products.filter(
      (product) =>
        product.category === `men's clothing` ||
        product.category === `women's clothing`
    );
  };

  const checkData = async () => {
    console.log(formatProductsData(await fetchProducts()));
  };

  checkData();

  const productCards = exampleProduct.map((product) => (
    <ProductCard
      key={product.id}
      title={product.title}
      price={product.price}
      image={product.image}
    />
  ));

  return <ProductWrapper>{productCards}</ProductWrapper>;
};

export default Products;
