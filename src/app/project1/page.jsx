import Card from "@/components/project1/card";
import Hero2 from "@/components/project1/hero2";
import Carousel from "@/components/project1/project1Carousel";
import Hero from "@/components/project1/project1Hero";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero />
      <Carousel />
      <Card />
      <Hero2 />
    </div>
  );
}
