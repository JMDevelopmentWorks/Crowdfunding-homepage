import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";
import classNames from "classnames";

const Button = ({ children, state, className, handleFunction, disabled }) => {
  return (
    <button
      onClick={handleFunction}
      className={classNames(
        {
          "btn-primary": state === "primary",
        },
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  state: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleFunction: PropTypes.func,
};

export default Button;
