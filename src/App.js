import React from "react";
import Hero from "./components/Hero";
import Trainers from "./components/Trainers";
import Prices from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./css/style.css";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Trainers />
      <Prices />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
