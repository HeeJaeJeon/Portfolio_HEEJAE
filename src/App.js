import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Works from "./components/Works";
import About from "./components/About";
import Contact from "./components/Contact";
import Thiswebsite from "./components/Thiswebsite";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Works />
      <About />
      <Contact />
      <Thiswebsite />
    </div>
  );
}

export default App;