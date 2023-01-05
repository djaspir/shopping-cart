import { Link } from "react-router-dom";
import styled from "styled-components";
import homepageImg from "../../assets/img/homepageImg.png";
import Button from "../elements/Button";

const HomeWrapper = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6rem;
  margin-top: 6rem;
  margin-bottom: 22rem;

  @media (max-width: 1024px) {
    justify-content: center;
    margin-top: 12rem;
  }

  @media (max-width: 768px) {
    margin-top: 18rem;
  }
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;

  animation: fade-in ease 2s;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

const SmallMessage = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-size: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 450px) {
    font-size: 1.4rem;
  }
`;

const BigMessage = styled.div`
  font-size: 6rem;
  font-weight: bold;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    text-align: center;
    margin-bottom: 3rem;
  }

  @media (max-width: 450px) {
    font-size: 5rem;
  }
`;

const Image = styled.img`
  max-width: 75rem;

  animation: fade-in ease 2s;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: -1;
    width: 100%;
    opacity: 0.5;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Message>
        <BigMessage>Not your ordinary cup of coffee</BigMessage>
        <SmallMessage>The Best of the Best Coffee Store</SmallMessage>
        <Link to="/products">
          <Button
            content="Shop Now"
            size="big"
            color="dark"
            animation="scale"
            shape="round"
          />
        </Link>
      </Message>
      <Image src={homepageImg} alt="coffee in a cup" />
    </HomeWrapper>
  );
};

export default Home;
