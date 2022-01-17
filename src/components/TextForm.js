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
    // console.log("handleOnChange working");
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
      
      <div className="container my-3">
        <p>
          {text.split(" ").filter((element)=>{return element.length !== 0 }).length} words and {text.length} characters
        </p>
      </div>

      <button disabled={text.length===0} onClick={handleClickUp} className="btn btn-primary my-2  mx-1" 
      >
        Convert to UPPERCASE
      </button>
      <button disabled={text.length===0} onClick={handleClickDown} className=" btn btn-primary mx-1 my-2 ">
        Convert to lowercase
      </button>
      <button disabled={text.length===0} onClick={handleClickFirst} className=" btn btn-primary mx-1 my-2 ">
        First Letter CaPitalizer
      </button>
      <button disabled={text.length===0} onClick={handleExtraSpaces} className=" btn btn-primary mx-1 my-2 ">
        Remove Extra Spaces
      </button>
      <button disabled={text.length===0} onClick={handleCopy} className=" btn btn-primary mx-1  my-2">
        Copy
      </button>
      <button disabled={text.length===0} onClick={handleClickClear} className=" btn btn-primary mx-1 my-2 ">
        Clear
      </button>

      <div className="container ">
        <h2>Preview</h2>
        <p className="border rounded border-primary px-3 py-3 ">
          <b>{text}</b>
        </p>
      </div>
    </>
  );
}
