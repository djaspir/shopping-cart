import styled from "styled-components";
import homepageImg from "../../assets/img/homepageImg.png";
import Button from "../elements/Button";

const HomeWrapper = styled.main`
  display: flex;
  align-items: center;
  gap: 6rem;
  margin-top: 6rem;
  margin-bottom: 12rem;

  animation: fade-in ease 2s;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 1100px) {
    align-items: center
    justify-content: center;
  }
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1100px) {
    align-items: center;
    width: 50rem;
  }
`;

const SmallMessage = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const BigMessage = styled.div`
  font-size: 6rem;
  font-weight: bold;
  margin-bottom: 3rem;

  @media (max-width: 1100px) {
    text-align: center;
    margin-bottom: 3rem;
  }

  @media (max-width: 450px) {
    font-size: 5rem;
  }
`;

const Image = styled.img`
  max-width: 80rem;

  @media (max-width: 1100px) {
    position: absolute;
    z-index: -1;
    opacity: 0.3;
  }

  @media (max-width: 650px) {
    max-width: 60rem;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Message>
        <BigMessage>Not your ordinary cup of coffee</BigMessage>
        <SmallMessage>The Best of the Best Coffee Store</SmallMessage>
        <Button
          content="Shop Now"
          size="big"
          color="dark"
          animation="color"
          shape="round"
        />
      </Message>
      <Image src={homepageImg} alt="coffee in a cup" />
    </HomeWrapper>
  );
};

export default Home;
