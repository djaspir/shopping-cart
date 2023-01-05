import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Contact from "../components/pages/Contact";
import Home from "../components/pages/Home";
import Products from "../components/pages/Products";
import { routes } from "./state/constants/routes";

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
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.products} element={<Products />} />
        <Route path={routes.contact} element={<Contact />} />
      </Routes>
    </MainWrapper>
  );
};

export default Main;
