import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";

import './App.css'
import Login from "./components/login/Login";
import { Routes, Route, } from "react-router";
import Home from './components/home/Home';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact'
import Registration from "./components/registration/Registration";
import Error404 from "./components/404error/Error404";
import AddProduct from './components/admin/addproduct/AddProduct'
import { useAuth } from './contexts/AuthContext'
import ProductList from "./components/product/product-list/ProductListing";
import ProductDetails from "./components/product/product-details/ProductDetails";

function App() {
  const { currentUser } = useAuth();


  return (
    <div className="App">
      <header id="page__header" className="pharma__page--header header__fixed sticky top-0">
        <Header></Header>
      </header>
      <main id="page__main" className="pharma__page--main ">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/product" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          {/* {currentUser && <Route path="/add" element={<AddProduct />} />} */}
          {currentUser && <Route path="/admin/add" element={<AddProduct />} />}
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
