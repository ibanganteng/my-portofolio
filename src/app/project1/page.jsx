import Hero from "@/components/project1/project1Hero";
import Story from "@/components/project1/Story";
import React from "react";
import Guide from "@/components/project1/Guide";
import Card from "@/components/project1/card";

export default function page() {
  return (
    <div className="max-w-full overflow-x-hidden">
      <Hero />
      <Story />
      <Guide />
      <Card />
    </div>
  );
}
