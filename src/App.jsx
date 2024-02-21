import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import Electronics from "./pages/Electronics";
import Jewelery from "./pages/Jewelery";
import MensClothing from "./pages/MensClothing";
import WomensClothing from "./pages/WomensClothing";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/cart'
          element={<Cart />}
        />
        <Route
          path='/electronics'
          element={<Electronics />}
        />
        <Route
          path='/jewelery'
          element={<Jewelery />}
        />
        <Route
          path='/mensClothing'
          element={<MensClothing />}
        />
        <Route
          path='/womensClothing'
          element={<WomensClothing />}
        />
      </Routes>

      <Footer />
      <ToastContainer />
    </Router>
  );
};

export default App;
