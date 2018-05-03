import PropTypes from "prop-types";
import React from "react";
import { withTheme } from "theming";
import { css } from "emotion";
import theme from "../../theme";
import buttonStyle from "./style";
import classNames from "classnames";

const Button = ({ children, onClick, disabled, theme, position }) => {
  let combinedButtonClasses = buttonStyle;

  if (position) {
    const buttonPosition = css`
      position: relative;
      top: ${position.top};
      left: ${position.left};
    `;

    combinedButtonClasses = classNames(buttonStyle, buttonPosition);
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={combinedButtonClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /**
   * onClick Function
   */
  onClick: PropTypes.func,
  /**
   * Children
   */
  children: PropTypes.element,
  /**
   * disabled
   */
  disabled: PropTypes.bool,
  /**
   * Themes
   */
  theme: PropTypes.objectOf(PropTypes.string),
  /**
   * Themes
   */
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string
  })
};

Button.defaultProps = {
  disabled: false,
  children: "",
  onClick: () => {},
  theme
};
export default withTheme(Button);
