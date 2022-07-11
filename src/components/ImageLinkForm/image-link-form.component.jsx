import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onImageSubmit }) => {
  return (
    <div>
      <p className="title">{"Image Face Detection"}</p>
      <div className="center">
        <div className="form center image-link-form">
          <input className="input" type="text" onChange={onInputChange}></input>
          <button className="detect-button" onClick={onImageSubmit}>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
