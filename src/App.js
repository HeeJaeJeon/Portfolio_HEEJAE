import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Works from "./components/Works";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Works />
    </div>
  );
}

export default App;