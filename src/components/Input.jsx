import React, { useState } from "react";
import "../css/Input.css";

import ClosedEye from "../icons/closed-eye.png";
import OpenEye from "../icons/open-eye.png";

function Input(props) {
  const [estadoOjo, setEstadoOjo] = useState(true);
  const [srcOjo, setSrcOjo] = useState(ClosedEye);
  const [altOjo, setAltOjo] = useState("Closed Eye Icon");
  const [inputType, setInputType] = useState("password");

  const crearOjito = () => {
    return (
      <img
        className="eye-icon"
        src={srcOjo}
        alt={altOjo}
        onClick={abrirCerrarOjo}
      />
    );
  };

  const abrirCerrarOjo = () => {
    setEstadoOjo(!estadoOjo);
    if (estadoOjo === true) {
      setSrcOjo(OpenEye);
      setAltOjo("Open Eye Icon");
      setInputType("text");
    } else {
      setSrcOjo(ClosedEye);
      setAltOjo("Closed Eye Icon");
      setInputType("password");
    }
  };

  return (
    <div className="div-inputs">
      <input
        className={props.clase}
        type={props.type === "password" ? inputType : "text"}
        id={props.id}
        name={props.id}
        placeholder={props.placeholder}
      />
      {props.type === "password" ? crearOjito() : ""}
    </div>
  );
}

export default Input;
