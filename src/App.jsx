import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] h-14">
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/VS_E-Commerce/" element={<Home />} />
        <Route path="/VS_E-Commerce/collection" element={<Collection />} />
        <Route path="/VS_E-Commerce/about" element={<About />} />
        <Route path="/VS_E-Commerce/contact" element={<Contact />} />
        <Route path="/VS_E-Commerce/product/:productId" element={<Product />} />
        <Route path="/VS_E-Commerce/cart" element={<Cart />} />
        <Route path="/VS_E-Commerce/login" element={<Login />} />
        <Route path="/VS_E-Commerce/place-order" element={<PlaceOrder />} />
        <Route path="/VS_E-Commerce/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
