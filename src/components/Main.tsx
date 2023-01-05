import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Contact from "../components/pages/Contact";
import Home from "../components/pages/Home";
import Products from "../components/pages/Products";

const MainWrapper = styled.main`
  max-width: ${({ theme }) => theme.widths.content};
  margin: 0 auto;

  @media (max-width: 650px) {
    padding: 8rem 0;
  }
`;

const Main = () => {
  return (
    <MainWrapper>
      <Routes>
        <Route path="/shopping-cart" element={<Home />} />
        <Route path="/shopping-cart/products" element={<Products />} />
        <Route path="/shopping-cart/contact" element={<Contact />} />
      </Routes>
    </MainWrapper>
  );
};

export default Main;
