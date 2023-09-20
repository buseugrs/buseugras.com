import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";

//Components
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import ContactLinks from "./components/contact-links/ContactLinks";

function App() {
  return (
    <BrowserRouter>
      <div className="App background-image">
        <div className="overlay"></div>
        <Navbar />
        <ContactLinks />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
