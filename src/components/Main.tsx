import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../constants/routes";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Products from "../pages/Products";

const MainWrapper = styled.main`
  max-width: ${({ theme }) => theme.widths.content};
  margin: 0 auto;
  padding: 12rem;

  @media (max-width: 1000px) {
    padding: 8rem 0;
  }
`;

const Main = () => {
  return (
    <MainWrapper>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.products} element={<Products />} />
        <Route path={routes.contact} element={<Contact />} />
      </Routes>
    </MainWrapper>
  );
};

export default Main;
