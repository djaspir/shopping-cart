import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
