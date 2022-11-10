import React from "react";
import '../css/Input.css';

import ClosedEye from '../icons/closed-eye.png';
import OpenEye from '../icons/open-eye.png';

function Input(props) {

  const crearOjitoCerrado = () => {
    return(
      <img src="" alt="" />
    );
  };

  const crearOjitoAbierto = () => {
    return(
      <img src="" alt="" />
    );
  };

  return(
    <div className="div-inputs">
      <input 
        className={props.clase}
        type={props.type}
        id={props.id}
        name={props.id}
        placeholder={props.placeholder}
      />

    </div>
  );
}

export default Input;

