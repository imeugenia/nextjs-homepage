import styled from "styled-components";

const size = {
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
};

const device = {
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
};

const color = {
  coral: "#ff6f56",
  sakura: "",
};

export const Box = styled.div`
  display: flex;
  margin: auto;
  margin-bottom: 10rem;
  max-width: 36rem;

  @media ${device.tablet} {
    max-width: 72rem;
    margin-bottom: 15rem;
  }

  @media ${device.laptop} {
    max-width: 108rem;
  }

  @media ${device.laptopL} {
    max-width: 144rem;
    margin: auto;
    margin-bottom: 20rem;
  }
`;

export const H1 = styled.h1`
  font-weight: 500;
  font-size: 2.6rem;
  padding: 0;
  margin: 0;
  line-height: 3.6rem;

  @media ${device.tablet} {
    font-size: 5rem;
    line-height: 6rem;
  }

  @media ${device.laptop} {
    font-size: 5.5rem;
    line-height: 6.8rem;
  }
`;

export const RedText = styled.span`
  color: ${color.coral};
`;
