import React from "react";
import PropTypes from "prop-types";
import Identity from "lodash/identity";
export default function ButtonComponent({ title, buttonClicked }) {
  const buttonStyle = {
    backgroundColor: "silver",
    margin: " 0 20px",
    padding: "2px",
    width: "80px",
  };

  return (
    <>
      <button style={buttonStyle} onClick={() => buttonClicked(title)}>
        {title}
      </button>
    </>
  );
}

ButtonComponent.defaultProps = {
  buttonClicked: Identity,
  title: "Button",
};

ButtonComponent.propTypes = {
  buttonClicked: PropTypes.func,
  title: PropTypes.string,
};
