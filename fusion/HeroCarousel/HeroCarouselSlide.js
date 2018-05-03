import React from "react";
import styled from "react-emotion";
import PropTypes from "prop-types";
import Button from "../Button";

const SlideDiv = styled("div")`
  background-image: url(${props => props.url});
  background-position: center;
  background-size: cover;
  height: 100vh;
`;

const HeroCarouselSlide = ({ index, url, buttons }) => (
  <SlideDiv key={index} url={url}>
    {buttons.map(({ position, text }) => (
      <Button position={position}>
        <span>{text}</span>
      </Button>
    ))}
  </SlideDiv>
);

HeroCarouselSlide.propTypes = {
  index: PropTypes.number,
  url: PropTypes.string
};

export default HeroCarouselSlide;
