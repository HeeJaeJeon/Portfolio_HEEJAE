import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
// import ScrollSpy from "react-ui-scrollspy";
import favicon from "./images/favicon.ico"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Works from "./components/Works";
import About from "./components/About";
import Footer from "./components/Footer";
import GSCaltex from "./components/GSCaltex";
import HangwhaTechwin from "./components/HanwhaTechwin";
import OneThirdFitness from "./components/OneThirdFitness";
import ScrollToTop from "./components/ScrollToTop";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>HEEJAE JEON</title>
        <link rel="icon" href={favicon} />
        <meta name="description" content="This HEEJAE's Portfolio. Enjoy!" data-react-helmet="true"/>
      </Helmet>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/GSCaltex" element={<GSCaltex />} />
          <Route path="/hanwhatechwin" element={<HangwhaTechwin />} />
          <Route path="/onethirdfitness" element={<OneThirdFitness />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;