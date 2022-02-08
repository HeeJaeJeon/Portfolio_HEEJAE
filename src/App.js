import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollSpy from "react-ui-scrollspy";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Works from "./components/Works";
import About from "./components/About";
// import Contact from "./components/Contact";
// import Thiswebsite from "./components/Thiswebsite";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <ScrollSpy scrollThrottle="0">
        <Navbar />
        <Header />
        <Works />
        <About />
        {/* <Contact /> */}
        {/* <Thiswebsite /> */}
        <Footer />
      </ScrollSpy>

    </div>
  );
}

export default App;