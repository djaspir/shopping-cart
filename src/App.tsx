import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Main from "./components/Main";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
      <Cart />
    </div>
  );
};

export default App;
