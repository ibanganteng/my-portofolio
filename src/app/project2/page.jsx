"use client";

import Content from "@/components/project2/Content";
import Fashion from "@/components/project2/Fashion";
import HeroP2 from "@/components/project2/HeroP2";
import HeroSection from "@/components/project2/HeroSection";
import LastHero from "@/components/project2/LastHero";
import NavBar from "@/components/project2/NavBar";
import Store from "@/components/project2/Store";
import Story from "@/components/project2/Story";
import React from "react";
import Footer2 from "@/components/project2/Footer2";

export default function page() {
  return (
    <div>
      <NavBar />
      <hr className="border-0 h-1 bg-gray-800 my-4" />
      <Story />
      <HeroP2 />
      <Content />
      <HeroSection />
      <Store />
      <Fashion />
      <LastHero />
      <Footer2 />
    </div>
  );
}
