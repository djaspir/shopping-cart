import styled from "styled-components";
import homepageImg from "../../assets/img/homepageImg.png";
import Button from "../../components/elements/Button";

const HomeWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  margin-bottom: 7rem;

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

const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50rem;
  min-width: 50rem;
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

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

const Image = styled.img`
  max-width: 80rem;
  z-index: 1;

  @media (max-width: 1000px) {
    position: absolute;
    opacity: 0.3;
  }

  @media (max-width: 600px) {
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
          color="primary"
          animation="color"
          shape="round"
        />
      </Message>
      <Image src={homepageImg} alt="coffee in a cup" />
    </HomeWrapper>
  );
};

export default Home;
