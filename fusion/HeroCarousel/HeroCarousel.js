import React from "react";
import Carousel from "nuka-carousel";
import BackgroundImage from "../BackgroundImage";
import HeroCarouselSlide from "./HeroCarouselSlide";
import { PreviousControl, NextControl } from "./HeroCarouselDecorators";

const testHeroCarouselSlides = [
  {
    index: 1,
    url:
      "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?cs=srgb&dl=ball-field-football-47730.jpg&fm=jpg",
    buttons: [
      { position: { top: "40px", left: "200px" }, text: "Test Button 1" }
    ]
  },
  {
    index: 2,
    url:
      "https://images.pexels.com/photos/17598/pexels-photo.jpg?cs=srgb&dl=cheering-crowd-event-17598.jpg&fm=jpg",
    buttons: [
      { position: { top: "400px", left: "600px" }, text: "Test Button 2" }
    ]
  }
];

export default class HeroCarousel extends React.Component {
  constructor(props) {
    super(...arguments);
    this.state = {
      slides: testHeroCarouselSlides,
      slideIndex: 0
    };
  }

  render() {
    return (
      <div style={{ width: "100vw", height: "100vh", margin: "auto" }}>
        <Carousel
          wrapAround={true}
          slideIndex={this.state.slideIndex}
          afterSlide={slideIndex => this.setState({ slideIndex })}
          renderCenterLeftControls={props => <PreviousControl {...props} />}
          renderCenterRightControls={props => <NextControl {...props} />}
        >
          {this.state.slides.map(({ index, url, buttons }) => {
            return (
              <HeroCarouselSlide index={index} url={url} buttons={buttons} />
            );
          })}
        </Carousel>
      </div>
    );
  }
}
