import React from "react";
import "../css/CheckBox.css";

function CheckBox(props) {
  return (
    <div className="contenedor-checkbox">
      <input
        className="checkbox"
        type="checkbox"
        name="acceptPrivacy"
        id="acceptPrivacy"
      />
      <label className="label" htmlFor="acceptPrivacy">
        I Agree with
        <span className="important-text"> Privacy </span>
        and
        <span className="important-text"> policy </span>
      </label>
    </div>
  );
}

export default CheckBox;
