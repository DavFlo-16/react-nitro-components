import React from "react";
import styled from "react-emotion";

const ControlButton = styled("button")`
  border: none;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  padding: 10;
  outline: 0;
  opacity: ${props => (props.disabled ? 0.3 : 1)};
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
`;

export class PreviousControl extends React.Component {
  constructor() {
    super(...arguments);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
    this.props.previousSlide();
  }
  render() {
    const disabled =
      (this.props.currentSlide === 0 && !this.props.wrapAround) ||
      this.props.slideCount === 0;
    return (
      <ControlButton disabled={disabled} onClick={this.handleClick}>
        PREV
      </ControlButton>
    );
  }
}

export class NextControl extends React.Component {
  constructor() {
    super(...arguments);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
    this.props.nextSlide();
  }
  render() {
    const disabled =
      this.props.currentSlide + this.props.slidesToScroll >=
        this.props.slideCount && !this.props.wrapAround;
    return (
      <ControlButton disabled={disabled} onClick={this.handleClick}>
        NEXT
      </ControlButton>
    );
  }
}
