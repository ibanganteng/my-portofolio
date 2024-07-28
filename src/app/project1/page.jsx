import Card from "@/components/project1/card";
import Data from "@/components/project1/Data";
import Footer from "@/components/project1/Footer";
import Hero2 from "@/components/project1/Footer";
import Carousel from "@/components/project1/project1Carousel";
import Hero from "@/components/project1/project1Hero";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero />
      <Data />
      <Carousel />
      <Card />
      <Footer />
    </div>
  );
}
