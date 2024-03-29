import React from "react";
import "./custom.styles.scss";
const CustomButton = ({ children,isGoogleSignIn,inverted, ...other }) => {
  return (
    <button className={`${inverted ? 'inverted': ''} ${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...other}>
      {children}
    </button>
  );
};
export default CustomButton;
