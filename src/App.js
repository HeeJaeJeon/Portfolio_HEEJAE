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
import Protect from 'react-app-protect'
import 'react-app-protect/dist/index.css'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Protect 
      class="_styles-module__box__37_FJ"
      sha512="C88E220562E8877EE96EF048961E4A4E7875B5637F6840A6BCBB74A5AD78924687878954498189CBABC4CDB87BECB859CE72153CB4890CF62EBDB8DBE4E0F41F"
      boxTitle="This page is password protected. Contact me to get the password. 'juns880526@hotmail.com'"
      inputPlaceholder="Password"
      buttonLabel="Submit"
      blur={true}
      styles={{
        input: { color: 'blue', width:"100%", padding: "0 1em", height: "2.75em", border: "1px solid" , borderRadius: "6px", borderColor: "#e6e6e6", backgroundColor: "hsla(0,0%,56.5%,.075)", fontFamily: "Arial,Helvetica,sans-serif" },
        header: { fontSize: '1rem', width:"100%" },
        button: { fontWeight: "700", height: "2.85em", lineHeight: "2.95em",  maxWidth: "400px", color: "#828282", padding: "0 1.75em",  border: "0", borderRadius: "6px", backgroundColor: "transparent", appearance: "none", transition: "backgroundColor .2s ease-in-out,color .2s ease-in-out", boxShadow: "inset 0 0 0 2px #e6e6e6" }
      }}
    >
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
    </Protect>
  );
}


export default App;