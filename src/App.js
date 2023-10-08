import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Card from "./components/Card";
import Transaction from "./components/Transaction";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <Navbar />
    <Hero />
    <Section />
    <Card />
    <Transaction />
    <Footer />
    </div>
  );
}

export default App;
