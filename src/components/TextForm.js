import React, { useState } from "react";
// import PropTypes from "prop-types";
// import Alert from "./Alert";
// import { alertService } from '../components/Alert';


export default function TextForm(props) {
  const handleClickUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UPPERCASE","Success")
  };

  const handleClickDown = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To lowercase","Success")
  };

  const handleClickFirst = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
    props.showAlert("First letter CapiTalized","Success")
  };

  const handleClickClear = () => {
    console.log(text);
    let newText = "";
    setText(newText);
    props.showAlert("Cleared","Success")
  };

  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert("Removed Extra Spaced","Success")
  };

  const handleCopy = () => {
    let copyText = document.getElementById("exampleFormControlTextarea1");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Copied To Clipboard","Success")
    // <Alert/>
  };

  const handleOnChange = (event) => {
    console.log("handleOnChange working");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className={`form-control bg-${props.mode} `}
          style={{ color: props.mode === "light" ? "black" : "white" }}
          id="exampleFormControlTextarea1"
          onChange={handleOnChange}
          rows="4"
          value={text}
        ></textarea>
      </div>
      <button
        onClick={handleClickUp}
        className="btn btn-primary  mx-1"
        type="submit"
      >
        Convert to UPPERCASE
      </button>
      <button onClick={handleClickDown} className="btn btn-primary mx-1 ">
        Convert to lowercase
      </button>
      <button onClick={handleClickFirst} className="btn btn-primary mx-1 ">
        First Letter CaPitalizer
      </button>
      <button onClick={handleExtraSpaces} className="btn btn-primary mx-1 ">
        Remove Extra Spaces
      </button>
      <button onClick={handleCopy} className="btn btn-primary mx-1 ">
        Copy
      </button>
      <button onClick={handleClickClear} className="btn btn-primary mx-1 ">
        Clear
      </button>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} words{" "}
        </p>
        <p>{0.08 * text.split(" ").length} Minutes read</p>
      </div>

      <div className="container ">
        <h2>Preview</h2>
        <p className="border rounded border-primary px-3 py-3 ">
          <b>{text}</b>
        </p>
      </div>
    </>
  );
}
