import { Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import DespreNoi from "../src/pages/DespreNoi/DespreNoi";
import Evenimente from "./pages/Evenimente/Evenimente";
import Blog from "./pages/Blog/Blog";
import Echipa from "./pages/Echipa/Echipa";
import Contact from "./pages/Contact/Contact";
import LaserCursor from "../src/components/Cursor/LaserCursor";
import DeleteEffect from "../src/components/DeleteEffect/DeleteEffect";

function App() {
  return (
    <BrowserRouter>
      <LaserCursor />
      <DeleteEffect />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desprenoi" element={<DespreNoi />} />
        <Route path="/evenimente" element={<Evenimente />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/echipa" element={<Echipa />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
