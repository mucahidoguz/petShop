import "./App.css";
import Home from "./Pages/00-Home/Home";
import AbautUS from "./Pages/Navbar/01-Abaut-us/abautUs";
import Brands from "./Pages/Navbar/02-Brands/brands";
import Contact from "./Pages/Navbar/03-Contact/contact";
import Sss from "./Pages/FootBand/04-SSS/sss";
import Dog from "./Pages/FootBand/05-Dog/dog";
import Cat from "./Pages/FootBand/06-Cat/cat";
import Fish from "./Pages/FootBand/07-Fish/fish";
import Bird from "./Pages/FootBand/08-Bird/bird";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkımızda" element={<AbautUS />} />
        <Route path="/markalar" element={<Brands />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/sss" element={<Sss />} />
        <Route path="/dog" element={<Dog />} />
        <Route path="/cat" element={<Cat />} />
        <Route path="/fish" element={<Fish />} />
        <Route path="/bird" element={<Bird />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
