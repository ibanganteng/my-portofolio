import Hero from "@/components/project1/project1Hero";
import Story from "@/components/project1/Story";
import React from "react";
import Guide from "@/components/project1/Guide";
import Card from "@/components/project1/card";
import Wishper from "@/components/project2/Wishper";
import Card2 from "@/components/project1/Card2";
import Middle from "@/components/project1/Middle";
import BigCard from "@/components/project1/BigCard";
import Footer2 from "@/components/project2/Footer2";

export default function page() {
  return (
    <div className="max-w-full overflow-x-hidden">
      <Hero />
      <Story />
      <Guide />
      <Card />
      <Wishper />
      <Card2 />
      <Middle />
      <BigCard />
      <Footer2 />
    </div>
  );
}
