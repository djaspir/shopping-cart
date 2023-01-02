import brownWave from "../../assets/img/brown-wave.png";
import styled from "styled-components";

const BackgroundWaveWrapper = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
`;

const BackgroundWave = () => {
  return <BackgroundWaveWrapper src={brownWave} alt="backgroundImage" />;
};

export default BackgroundWave;
