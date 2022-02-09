import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollSpy from "react-ui-scrollspy";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Works from "./components/Works";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
        <Navbar />
        <ScrollSpy scrollThrottle="0" offsetTop="50">
        <Header />
        <Works />
        <About />
        <Footer />
      </ScrollSpy>
    </div>
  );
}

export default App;