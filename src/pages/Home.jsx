import React from "react";
import HeroSection from "../components/HeroSection";
import ProductContainer from "../components/ProductContainer";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <ProductContainer />
    </>
  );
};

export default Home;
