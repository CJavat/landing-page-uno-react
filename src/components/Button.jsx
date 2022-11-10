import React from "react";
import "../css/Button.css";

function Button(props) {
  return (
    <>
      <a className="enlace" href="https://www.google.com/">
        <button className="boton">Sign Up</button>
      </a>
    </>
  );
}

export default Button;
