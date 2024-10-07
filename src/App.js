import React, { useEffect } from "react";
import { useLocation, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/css/common.css";
import "./components/css/responsive.css";
import float from "./components/images/247.webp";
import 'animate.css';
import Header from "./components/Header";
import Index from "./components/index";
import About from "./components/About";
import Footer from "./components/Footer";
import Service from "./components/service";
import Search from "./components/Search";
import Team from "./components/Team";
import Doctor from "./components/doctor";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top when the path changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling effect
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensure ScrollToTop is inside Router */}
      <Header />
      <div className="float">
        <a href="tel:+01823222674">
          <img src={float} alt="24/7 services sandhu hospital" />
        </a>
      </div>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/doctor" element={<Doctor />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
