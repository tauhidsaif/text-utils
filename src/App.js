import "./App.css";
import About from "./components/About";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Use HashRouter

function App() {
  const [mode, setmode] = useState("light");
  const [text, settext] = useState("ENABLE DARK MODE");

  const toggleBtn = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
      settext("DISABLE DARK MODE");
      showAlert("Dark mode has been Enabled", "Success");
    } else {
      setmode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      settext("ENABLE DARK MODE");
      showAlert("Light mode has been Enabled", "Success");
    }
  };

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  return (
    <Router basename="/text-utils"> {/* Add basename */}
      <Navbar mode={mode} toggleBtn={toggleBtn} title="TextUtils" text={text} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter the text below to Analyze" />} />
          <Route exact path="/about" element={<About mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
