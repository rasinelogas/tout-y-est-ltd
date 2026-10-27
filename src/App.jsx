import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import { Home } from "./pages/Home"; // ⬅️ Iri ni ryo hinduka ry'ingenzi rizibura ikosa
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;