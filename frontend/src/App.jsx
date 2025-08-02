import HomePage from "./landing_page/home/HomePage.jsx";
import React from "react";
import AboutPage from "./landing_page/about/AboutPage.jsx";
import PricingPage from "./landing_page/pricing/PricingPage.jsx";
import SignupPage from "./landing_page/signup/SignupPage.jsx";
import SupportPage from "./landing_page/support/SupportPage.jsx";
import ProductsPage from "./landing_page/products/ProductsPage.jsx";
import Footer from "./landing_page/Footer.jsx";
import NavbarPage from "./landing_page/NavbarPage.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./landing_page/PageNotFound.jsx";
import "./App.css";
import "./index.css";
function App() {
  return (
    <>
      <NavbarPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
