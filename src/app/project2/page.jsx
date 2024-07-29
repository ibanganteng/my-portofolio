"use client";

import Content from "@/components/project2/Content";
import HeroP2 from "@/components/project2/HeroP2";
import HeroSection from "@/components/project2/HeroSection";
import NavBar from "@/components/project2/NavBar";
import Store from "@/components/project2/Store";
import Story from "@/components/project2/Story";
import React from "react";

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
    </div>
  );
}
