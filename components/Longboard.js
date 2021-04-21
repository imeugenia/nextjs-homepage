import styled, { keyframes } from "styled-components";

const BoxItem = styled.div`
  margin: 2rem;
  max-width: 32rem;
  width: 100%;
`;

const drive = keyframes`
  100% {
    background-position: 100% 0%;
  }
`;

const LongboardBoxItem = styled(BoxItem)`
  order: 11;
  border: 2px solid #00155c;
  background: url("/images/bg.svg") no-repeat;
  height: 32rem;
  background-size: auto 100%;
  text-align: center;
  position: relative;
  animation: ${drive} 3s linear infinite;
`;

const PartOne = styled.img`
  width: 21.6rem;
  margin-top: 22.9rem;
`;

const Wheel = styled.img`
  position: absolute;
  width: 2rem;
  margin-top: 23.9rem;
  animation: wheelsAnimation 0.9s linear infinite;
`;

const WheelOne = styled(Wheel)`
  left: 7rem;
`;

const WheelTwo = styled(Wheel)`
  right: 7rem;
`;

const Longboard = () => {
  return (
    <LongboardBoxItem>
      <PartOne src="/images/long-part1.svg" />
      <WheelOne src="/images/long-part2.svg" />
      <WheelTwo src="/images/long-part2.svg" />
    </LongboardBoxItem>
  );
};

export default Longboard;
