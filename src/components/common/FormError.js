import PropTypes from "prop-types";
import { Component } from "react";

export default function FormError({ children }) {
  return <div className="form-error">{children} </div>;
}

FormError.propTypes = {
  children: PropTypes.node.isRequired,
};
