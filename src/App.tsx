import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navigationbar from "./components/Navigationbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nomatch from "./components/Nomatch";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Navigationbar />
      {/* <Header /> */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<Nomatch />} />
        </Routes>
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
