import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";

import './App.css'
import Login from "./components/login/Login";
import { Routes, Route, } from "react-router";
import Home from './components/home/Home';
import About from './components/about/About';
import Product from './components/product-list/ProductList';
import Contact from './components/contact/Contact'
import Registration from "./components/registration/Registration";
import Error404 from "./components/404error/Error404";
import AddProduct from "./components/addproduct/AddProduct";
import { useAuth } from './contexts/AuthContext'

function App() {
  const { currentUser } = useAuth();
  return (
    <div className="App">
      <header id="page__header" className="pharma__page--header">
        <Header></Header>
      </header>
      <main id="page__main" className="pharma__page--main ">

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/product-list" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          {currentUser && <Route path="/add" element={<AddProduct />} />}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <footer id="page__footer" className="pharma__page--footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
