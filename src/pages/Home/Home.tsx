import styled from "styled-components";
import BackgroundWave from "../../components/elements/BackgroundWave";
import homepageImg from "../../assets/homepageImg.png";
import Button from "../../components/elements/Button";

const HomeWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
  gap: 10rem;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
        <Button content="Shop Now" name="messageBtn" />
      </Message>
      <Image src={homepageImg} alt="coffee in a cup" />
      <BackgroundWave />
    </HomeWrapper>
  );
};

export default Home;
