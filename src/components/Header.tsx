import styled from "styled-components";
import Navbar from "./Navbar";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 3rem;
  padding: 2.5rem;
`

const Logo = styled.h1`
  font-size: 4rem;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>FakeCoffeeStore</Logo>
      <Navbar />
    </HeaderWrapper>
  )
}

export default Header
