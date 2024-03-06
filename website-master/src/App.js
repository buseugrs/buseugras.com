import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";

//Components
import Home from "./components/home/Home";
import About from "./components/about/About";
import ContactLinks from "./components/contact-links/ContactLinks";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <BrowserRouter>
      <div className="App background-image">
        <div className="overlay"></div>
        <ContactLinks />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
