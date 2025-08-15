import "./App.css";
import About from "./components/About";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // light or dark
  const [text, setText] = useState("ENABLE DARK MODE");
  const [alert, setAlert] = useState(null);

  // Show alert
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // Toggle dark/light mode
  const toggleBtn = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
      setText("DISABLE DARK MODE");
      showAlert("Dark mode has been Enabled", "Success");
    } else {
      setMode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      setText("ENABLE DARK MODE");
      showAlert("Light mode has been Enabled", "Success");
    }
  };

  // Footer component
  const Footer = () => {
    return (
      <footer className="bg-dark text-light text-center py-3 mt-5">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} TextUtils. All rights reserved.
        </p>
      </footer>
    );
  };

  return (
    <>
      <Navbar mode={mode} toggleBtn={toggleBtn} title="TextUtils" text={text} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                mode={mode}
                heading="Enter the text below to Analyze"
              />
            }
          />
          <Route
            path="/about"
            element={<About mode={mode} showAlert={showAlert} />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
