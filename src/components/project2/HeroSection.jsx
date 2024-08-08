import React from "react";

const HeroSection = () => {
  return (
    <div className="relative text-center p-5 m-10">
      {/* Image above the text */}
      <img
        src="https://media.istockphoto.com/id/1496292974/photo/happy-asian-chinese-young-woman-crossing-road-carrying-skateboard-in-old-town.webp?b=1&s=170667a&w=0&k=20&c=YpiDsqkIAKvH9jTBvDYLoxD02d8wXej2YHgRYKsqQ5E="
        className="absolute inset-0 w-full h-full object-cover opacity-80 -z-10"
        alt="Top Fashion Model"
        style={{ top: "-20%" }}
      />

      {/* Hero text */}
      <div className="relative z-10 bg-white shadow-lg mx-auto p-4 max-w-2xl">
        <h1 className="text-4xl sm:text-8xl">
          WE CREATE LIMITLESS STYLES BY BLENDING OUR PRODUCT RANGE, FROM
          INTERNATIONAL PRODUCTS TO COVETED LOCAL PRODUCTS.
        </h1>
      </div>

      {/* Image below the text */}
      <img
        src="https://images.unsplash.com/photo-1478803431644-b832801eefa7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwc3R5bGV8ZW58MHwwfDB8fHww"
        className="absolute inset-0 w-full h-full object-cover opacity-80 z-20"
        alt="Bottom Fashion Model"
        style={{ bottom: "-20%" }}
      />
    </div>
  );
};

export default HeroSection;
